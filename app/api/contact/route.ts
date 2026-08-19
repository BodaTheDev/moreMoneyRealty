import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Basic server-side validation
        if (!name || !phone) {
            return NextResponse.json(
                { error: "Name and Phone are required fields." },
                { status: 400 }
            );
        }

        // TODO: Connect to an email service (Resend, SendGrid, etc.) or CRM here.
        // Example:
        // await resend.emails.send({
        //   from: 'leads@yourdomain.com',
        //   to: 'hello@moremoneyrealty.com',
        //   subject: `New Lead: ${name}`,
        //   text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
        // });

        console.log("Server received lead:", { name, email, phone, message });

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
