import { NextResponse } from "next/server";
import { sendEmailNotification } from "@/utils/emailService";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let googleScriptUrl =
      process.env.GOOGLE_SCRIPT_URL_DEPLOYMENT_WEB_URL ||
      process.env.GOOGLE_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl && process.env.GOOGLE_SCRIPT_DEPLOYMENT_ID) {
      googleScriptUrl = `https://script.google.com/macros/s/${process.env.GOOGLE_SCRIPT_DEPLOYMENT_ID}/exec`;
    }

    // Log the incoming submission for debugging
    console.log("Form submission received:", body.formType, body);

    // 1. Send SMTP Email Notification to sales@devinsol.com
    try {
      await sendEmailNotification(body);
    } catch (emailErr) {
      console.error("Error triggering SMTP email notification:", emailErr);
    }

    // 2. Forward data to Google Apps Script Web App
    if (googleScriptUrl) {
      try {
        const payload = {
          ...body,
          notificationEmail: process.env.EMAIL_FROM || "sales@devinsol.com",
        };

        const response = await fetch(googleScriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          // Google Apps Script follows 302 redirects
          redirect: "follow",
        });

        const responseData = await response.text();
        console.log("Google Apps Script response:", responseData);
      } catch (err) {
        console.error("Error sending to Google Apps Script:", err);
      }
    } else {
      console.warn("GOOGLE_SCRIPT_URL is not defined in environment variables. Form data was logged locally.");
    }

    return NextResponse.json({
      success: true,
      message: "Submission received successfully",
    });
  } catch (error) {
    console.error("API submit handler error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process submission" },
      { status: 500 }
    );
  }
}
