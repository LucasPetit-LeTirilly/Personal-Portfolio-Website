"use strict";
import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

export async function POST(request: Request) {
  const res = await request.json();
  let mailOptions = {
    from: res.email,
    to: "lucaspetitletirilly.formsend@gmail.com",
    subject: res.subject,
    text: `Nom: ${res.surname}, Prenom: ${res.name}, Message:${res.message}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.toString() }, { status: 500 });
  }
}
