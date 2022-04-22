import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export default async function async(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let transporter: Transporter = nodemailer.createTransport({
      service: 'yahoo',
      logger: true,
      debug: true,
      host: 'smtp.mail.yahoo.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let options = {
      from: `${req.body.email}`,
      to: process.env.EMAIL_USER,
      subject: `${req.body.subject}`,
      text: `${req.body.message}`,
    };


    let result: SMTPTransport.SentMessageInfo = await transporter.sendMail(
      options
    );

    console.log(result)
    res.status(200);
  } catch (error) {
    res.status(400);
  }
}
