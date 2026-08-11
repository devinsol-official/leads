import nodemailer from "nodemailer";

interface ClaimSubmissionData {
  formType: "claim";
  siteTitle?: string;
  siteSlug?: string;
  startupName?: string;
  founderName?: string;
  phone?: string;
  email?: string;
  notes?: string;
  submittedAt?: string;
}

interface RequestSubmissionData {
  formType: "request";
  businessName?: string;
  googleMapsUrl?: string;
  contactName?: string;
  industry?: string;
  email?: string;
  phone?: string;
  notes?: string;
  submittedAt?: string;
}

type SubmissionData = ClaimSubmissionData | RequestSubmissionData;

export async function sendEmailNotification(data: SubmissionData) {
  const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const emailUser = process.env.EMAIL_USERNAME;
  const emailPass = process.env.EMAIL_PASSWORD;
  const emailFrom = process.env.EMAIL_FROM || emailUser || "sales@devinsol.com";
  const notificationEmail = process.env.EMAIL_FROM || emailUser || "sales@devinsol.com";

  if (!emailUser || !emailPass) {
    console.warn("SMTP credentials (EMAIL_USERNAME/EMAIL_PASSWORD) missing. Skipping SMTP email notification.");
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for 587
    auth: {
      user: emailUser,
      pass: emailPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let subject = "";
  let htmlContent = "";

  if (data.formType === "claim") {
    const businessName = data.startupName || "New Lead";
    subject = `🔥 NEW WEBSITE CLAIM: ${businessName}`;
    htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #2563eb; margin-top: 0;">🎉 New Website Claim Received!</h2>
        <p style="color: #475569; font-size: 14px;">A business owner has claimed a promotional webpage on Devinsol.</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        <table style="width: 100%; font-size: 14px; border-collapse: collapse; color: #1e293b;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 40%; color: #64748b;">Target Webpage:</td><td>${data.siteTitle || 'N/A'} (${data.siteSlug || ''})</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Business Name:</td><td><strong>${data.startupName || 'N/A'}</strong></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Founder / Owner:</td><td>${data.founderName || 'N/A'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone Number:</td><td><a href="tel:${data.phone}" style="color: #2563eb;">${data.phone || 'N/A'}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Work Email:</td><td><a href="mailto:${data.email}" style="color: #2563eb;">${data.email || 'N/A'}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Notes / Requests:</td><td>${data.notes || 'None'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Submitted At:</td><td>${data.submittedAt || new Date().toLocaleString()}</td></tr>
        </table>
      </div>
    `;
  } else {
    const businessName = data.businessName || "New Lead";
    subject = `🚀 NEW WEBSITE REQUEST: ${businessName}`;
    htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #059669; margin-top: 0;">🚀 New Custom Website Request!</h2>
        <p style="color: #475569; font-size: 14px;">A potential client requested a custom website turnaround.</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        <table style="width: 100%; font-size: 14px; border-collapse: collapse; color: #1e293b;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 40%; color: #64748b;">Business Name:</td><td><strong>${data.businessName || 'N/A'}</strong></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Google Maps Link:</td><td><a href="${data.googleMapsUrl}" target="_blank" style="color: #2563eb;">${data.googleMapsUrl || 'N/A'}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Contact Name:</td><td>${data.contactName || 'N/A'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Industry:</td><td>${data.industry || 'N/A'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Work Email:</td><td><a href="mailto:${data.email}" style="color: #2563eb;">${data.email || 'N/A'}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone Number:</td><td><a href="tel:${data.phone}" style="color: #2563eb;">${data.phone || 'N/A'}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Notes / Special Features:</td><td>${data.notes || 'None'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #64748b;">Submitted At:</td><td>${data.submittedAt || new Date().toLocaleString()}</td></tr>
        </table>
      </div>
    `;
  }

  try {
    const info = await transporter.sendMail({
      from: `"Devinsol Leads" <${emailFrom}>`,
      to: notificationEmail,
      subject: subject,
      html: htmlContent,
    });
    console.log("Email notification sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Failed to send SMTP email notification:", error);
    return false;
  }
}
