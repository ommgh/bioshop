"use server";
import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWaitListEmail = async (email: string) => {
  await resend.emails.send({
    from: "om@superdocs.xyz",
    to: email,
    subject: "Welcome to BioShop",
    react: EmailTemplate(),
  });
};
