import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // 1. Validate the incoming data
        if (!name || !phone) {
            return NextResponse.json(
                { error: "Name and Phone are required fields." },
                { status: 400 }
            );
        }

        // 2. Ensure environment variables are loaded
        const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
        if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
            console.error("Missing email environment variables");
            return NextResponse.json(
                { error: "Server configuration error." },
                { status: 500 }
            );
        }

        // 3. Configure the Nodemailer transporter for Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
        });

        // 4. Set up the email data
        const mailOptions = {
            from: `"More Money Realty" <${EMAIL_USER}>`, // The authenticated Gmail account
            to: EMAIL_TO,                                // Your Bizee info@ inbox
            replyTo: email || undefined,                 // Allows you to hit "Reply" and email the lead directly
            subject: `🔥 New Lead: ${name}`,
            text: `
You have a new lead from the website!

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

What they need:
${message || "No message provided."}
      `,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E4EADF; border-radius: 8px;">
          <h2 style="color: #18A06A; margin-top: 0;">🔥 New Website Lead</h2>
          <p style="font-size: 16px; color: #16241C;">You have a new lead from More Money Realty.</p>
          <hr style="border: none; border-top: 1px solid #ECEFE8; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Email:</strong> ${email ? `<a href="mailto:${email}">${email}</a>` : "Not provided"}</p>
          <h3 style="margin-top: 24px; color: #556357;">What they need:</h3>
          <div style="background: #ECEFE8; padding: 16px; border-radius: 8px; color: #16241C; white-space: pre-wrap;">
            ${message || "<i>No message provided.</i>"}
          </div>
        </div>
      `,
        };

        // 5. Send the email
        await transporter.sendMail(mailOptions);

        // 6. Return success to the frontend
        return NextResponse.json(
            { success: true, message: "Lead submitted successfully." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Form submission error:", error);
        return NextResponse.json(
            { error: "An error occurred while submitting the form." },
            { status: 500 }
        );
    }
}
