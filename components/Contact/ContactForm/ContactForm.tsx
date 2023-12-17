"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.scss";
import { useEffect, useState } from "react";
import { Locale } from "@/i18n.config";

export const sendContactForm = async (data: any, errMsg: string) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error(errMsg);
    return res.json();
  });

export type FormValuesType = {
  fullName: string;
  email: string;
  messageText: string;
  lang: Locale;
};

type ContactText = {
  labels: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    button: string;
  };
  valid: {
    requiredError: string;
    invalidEmailError: string;
    sendMessageError: string;
    successMessage: string;
  };
};

export default function ContactForm({
  contactText,
  lang,
}: {
  contactText: ContactText;
  lang: Locale;
}) {
  const [errorForm, setErrorForm] = useState("");
  const [successForm, setSuccessForm] = useState("");

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      messageText: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required(contactText.valid.requiredError),
      email: Yup.string()
        .email(contactText.valid.invalidEmailError)
        .required(contactText.valid.requiredError),
      messageText: Yup.string().required(contactText.valid.requiredError),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await sendContactForm(
          { ...values, lang },
          contactText.valid.sendMessageError
        );
        setSuccessForm(contactText.valid.successMessage);
        resetForm();
      } catch (error: any) {
        setErrorForm(error.message);
      }
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorForm("");
      setSuccessForm("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [errorForm, successForm]);

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      {errorForm && <div className={s.err_msg}>{errorForm}</div>}
      {successForm && <div className={s.success_msg}>{successForm}</div>}

      <input
        className={s.input}
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fullName}
        placeholder={contactText.labels.nameLabel}
      />
      {formik.touched.fullName && formik.errors.fullName ? (
        <div className={s.err_msg}>{formik.errors.fullName}</div>
      ) : null}

      <input
        className={s.input}
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder={contactText.labels.emailLabel}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className={s.err_msg}>{formik.errors.email}</div>
      ) : null}

      <textarea
        className={s.textarea}
        id="messageText"
        name="messageText"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.messageText}
        placeholder={contactText.labels.messageLabel}
      />
      {formik.touched.messageText && formik.errors.messageText ? (
        <div className={s.err_msg}>{formik.errors.messageText}</div>
      ) : null}

      <button className={s.button} type="submit">
        {contactText.labels.button}
      </button>
    </form>
  );
}
