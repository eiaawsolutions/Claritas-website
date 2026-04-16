import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiter (per IP, 5 submissions per 15 minutes)
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

// Validation helpers
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim();
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { email, name, phone, subject, message } = body;

    // Server-side validation
    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and Full Name are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (name.length > 100 || (phone && phone.length > 20) || (subject && subject.length > 200) || (message && message.length > 5000)) {
      return NextResponse.json(
        { error: "One or more fields exceed the maximum allowed length." },
        { status: 400 },
      );
    }

    // Sanitize all fields
    const safeEmail = sanitize(email);
    const safeName = sanitize(name);
    const safePhone = sanitize(phone || "");
    const safeSubject = sanitize(subject || "General Enquiry");
    const safeMessage = sanitize(message || "");

    // Build the email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #e8655a; padding: 20px 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #fff; margin: 0; font-size: 20px;">New Enquiry from Claritas Website</h2>
        </div>
        <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 140px; vertical-align: top;"><strong>Name:</strong></td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; vertical-align: top;"><strong>Email:</strong></td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #e8655a;">${safeEmail}</a></td>
            </tr>
            ${safePhone ? `
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; vertical-align: top;"><strong>Phone:</strong></td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px;">${safePhone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; vertical-align: top;"><strong>Subject:</strong></td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px;">${safeSubject}</td>
            </tr>
            ${safeMessage ? `
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; vertical-align: top;"><strong>Message:</strong></td>
              <td style="padding: 10px 0; color: #111827; font-size: 14px; white-space: pre-line;">${safeMessage}</td>
            </tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="font-size: 12px; color: #9ca3af; margin: 0;">This enquiry was submitted from the Claritas CRM website contact form.</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Claritas Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "sales@claritascrm.com",
      cc: "admin@claritas.asia",
      replyTo: safeEmail,
      subject: `[Website Enquiry] ${safeSubject}`,
      html: htmlBody,
      text: `New Enquiry from Claritas Website\n\nName: ${safeName}\nEmail: ${safeEmail}\nPhone: ${safePhone}\nSubject: ${safeSubject}\nMessage:\n${safeMessage}`,
    });

    return NextResponse.json({ success: true, message: "Your enquiry has been sent. Our sales team will contact you shortly!" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact us directly at sales@claritascrm.com" },
      { status: 500 },
    );
  }
}
