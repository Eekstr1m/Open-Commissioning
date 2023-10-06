import { mailOptions } from "./../../../common-data/nodemailer/nodemailer";
import { transporter } from "@/common-data/nodemailer/nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.fullName,
      text: "Test string",
      html: "<h1>Test title</h1>",
    });
    Response.json("Success");
  } catch (error) {
    console.log(error);
    Response.error();
  }

  return Response.json("Hello");
}
