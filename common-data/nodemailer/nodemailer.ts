import { Locale } from "@/i18n.config";

const emailUK = process.env.EMAIL_UK;
const passUK = process.env.EMAIL_PASS_UK;
const emailUA = process.env.EMAIL_UA;
const passUA = process.env.EMAIL_PASS_UA;

const emailENV = {
  en: {
    email: emailUK,
    pass: passUK,
  },
  ua: {
    email: emailUA,
    pass: passUA,
  },
};

export const emailData = {
  emailDataGenerator(lang: Locale) {
    let data = emailENV[lang];
    console.log(data);

    return (this.data = data);
  },
  data: {
    email: "",
    pass: "",
  },
  getMailOptions() {
    return { from: this.data.email, to: this.data.email };
  },
  getAuthData() {
    return { user: this.data.email, pass: this.data.pass };
  },
};
