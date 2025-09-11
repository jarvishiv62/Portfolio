import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  from,
  to,
  subject,
  text,
  html,
}: {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${from}>`,
      to: [to],
      subject,
      text,
      html,
    });

    if (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error in sendEmail:', error);
    return { success: false, error };
  }
}

export async function sendContactFormEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = formData;
  
  const emailContent = `
    <div>
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
  `;

  return sendEmail({
    from: process.env.CONTACT_EMAIL || 'noreply@yourdomain.com',
    to: process.env.YOUR_EMAIL || 'your.email@example.com',
    subject: `New message from ${name} - Portfolio Contact Form`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: emailContent,
  });
}
