import { NextResponse } from "next/server";
import { Resend } from "resend";
import { serverEnv } from "@/utils/serverEnv";
import {
  validateContactForm,
  hasErrors,
  type ContactFormData,
} from "@/utils/validateContactForm";

interface ContactRequestBody extends ContactFormData {
  website?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    if (body.website?.trim()) {
      return NextResponse.json({ success: true });
    }

    const formData: ContactFormData = {
      name: body.name ?? "",
      email: body.email ?? "",
      subject: body.subject ?? "",
      message: body.message ?? "",
    };

    const errors = validateContactForm(formData);
    if (hasErrors(errors)) {
      return NextResponse.json(
        { error: "Validation failed", errors },
        { status: 400 },
      );
    }

    if (!serverEnv.resendApiKey) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    const resend = new Resend(serverEnv.resendApiKey);
    const emailSubject = `[Portfolio] ${subject}`;
    const textBody = `Hi Vikash,\n\n${message}\n\n— ${name} (${email})`;
    const htmlBody = `
      <p>Hi Vikash,</p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      <p>— ${escapeHtml(name)} (<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>)</p>
    `;

    const { error } = await resend.emails.send({
      from: serverEnv.contactFromEmail,
      to: serverEnv.contactToEmail,
      replyTo: email,
      subject: emailSubject,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
