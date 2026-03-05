import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { name, email, phone, level } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `Guidedio Waitlist <${process.env.NODEMAILER_EMAIL}>`,
      to: process.env.NODEMAILER_RECEIVER || "hello.guidedio@gmail.com",
      replyTo: email,
      subject: "🚀 New Waitlist Signup - Guidedio",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #111;">
          <h2>🎉 New Waitlist User</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Level:</strong> ${level}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">Sent from Guidedio Early Access Form</p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `Guidedio <${process.env.NODEMAILER_EMAIL}>`,
      to: email,
      subject: `✅ Welcome to Guidedio Waitlist, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; line-height: 1.6;">
          <h2>Hello ${name},</h2>

          <p>Thank you for joining the <strong>Guidedio</strong> waitlist! 🎉</p>

          <p>You're now on the list for early access to the future of academic guidance. We'll notify you before our <strong>June launch</strong>.</p>

          <p>In the meantime, stay connected with us:</p>

          <p>
            🔗 LinkedIn: <a href="https://www.linkedin.com/company/guidedio" target="_blank">Guidedio</a><br />
            🐦 Twitter: <a href="https://x.com/guidedio?s=11" target="_blank">@Guidedio</a><br />
            📸 Instagram: <a href="https://instagram.com/guidedio" target="_blank">@Guidedio</a>
          </p>

          <p>We can't wait to revolutionize academic guidance together!</p>

          <br />

          <p>Warm regards,</p>
          <p><strong>The Guidedio Team</strong> 📚</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Waitlist email sent!" }, { status: 200 });
  } catch (error) {
    console.error("Waitlist API Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Failed to send waitlist email.", error: errorMessage },
      { status: 500 }
    );
  }
}
