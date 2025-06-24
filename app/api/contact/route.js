import nodemailer from "nodemailer";

export async function POST(req) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_TO,
        subject: `New Contact Form Submission from ${name}`,
        text: `${message} 
        from email address ${email}`,

    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ success: false }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
