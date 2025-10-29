import transporter from './config/mailer.js';

export async function sendEmail(mailOptions) {
  if (!transporter) throw new Error('Mailer not configured. Check environment variables.');

  const info = await transporter.sendMail({
    from: `"${process.env.APP_NAME || 'My App'}" <${process.env.SMTP_USER}>`,
    to: mailOptions.to,
    subject: mailOptions.subject,
    text: mailOptions.text,
    html: mailOptions.html,
  });

  console.log('📧 Email sent successfully:', info.messageId);
  return info;
}

export default sendEmail;