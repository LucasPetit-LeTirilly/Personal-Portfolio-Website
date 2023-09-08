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

let mailOptions = {
  from: "lucaspetitletirilly.formsend@gmail.com",
  to: "lucaspetitletirilly.formsend@gmail.com",
  subject: "Test envoi mail avec le formulaire",
  text: "Hello",
};

export async function POST(request: Request) {
  // transporter.sendMail(mailOptions, function (err, data) {
  //   if (err) {
  //     console.log("Error " + err);
  //   } else {
  //     console.log("Email sent successfully");
  //   }
  // });
  const res = await request.json();
  console.log(res.surname);
  return NextResponse.json({ res });
}
