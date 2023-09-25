"use strict";
import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 465,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  const res = await request.json();
  let mailOptions = {
    from: "lucaspetitletirilly.formsend@gmail.com",
    to: "lucaspetitletirilly.formsend@gmail.com",
    subject: res.subject,
    text: `Nom: ${res.surname}, Prenom: ${res.name}, Message:${res.message} Email:${res.email}`,
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
