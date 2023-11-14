import nodemailer from "nodemailer";

// const email = process.env.EMAIL;
const email = "oc.uk@opnc.ltd";
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  host: "send.one.com",
  port: 587,
  secure: false, // Change it to false if you wanted another port than 465
  auth: {
    user: "oc.uk@opnc.ltd", // Your email address
    pass: "masloramA45uk", // Your password
  },
});

// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: email,
//     pass,
//   },
// });

export const mailOptions = {
  from: "Open Commissioning <oc.uk@opnc.ltd>",
  to: "oc.ua@opnc.ltd",
};
