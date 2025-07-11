"use server";

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendContactMessage(formData: { name: string; email: string; message: string; }) {
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  const { name, email, message } = parsed.data;

  // In a real application, you would use a service like Resend, SendGrid, or Nodemailer to send an email.
  // For this example, we'll just log the data and simulate a successful response.
  console.log("New contact message received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // You can add error handling for your email service here.
  // For example, if (error) return { success: false, message: "Failed to send message." };

  return { success: true, message: "Message sent successfully!" };
}
