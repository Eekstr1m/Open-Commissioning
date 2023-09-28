"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.scss";
import styled from "styled-components";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      messageText: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      messageText: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <Input
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fullName}
        placeholder="Name*"
      />
      {/* {formik.touched.fullName && formik.errors.fullName ? (
        <div>{formik.errors.fullName}</div>
      ) : null} */}

      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="Email*"
      />
      {/* {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null} */}

      <TextArea
        id="messageText"
        name="messageText"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.messageText}
        placeholder="Your Message*"
      />
      {/* {formik.touched.messageText && formik.errors.messageText ? (
        <div>{formik.errors.messageText}</div>
      ) : null} */}

      <Button type="submit">Submit</Button>
    </form>
  );
}

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px ${({ theme }) => theme.primary} solid;

  padding: 15px;

  outline: 0;
  transition: border 0.2s linear;

  font-family: inherit;
  font-size: 14px;

  &:focus {
    border: 1px ${({ theme }) => theme.hover} solid;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 60px;
  min-height: 60px;
  border-radius: 5px;
  border: 1px ${({ theme }) => theme.primary} solid;

  padding: 15px;

  outline: 0;
  transition: border 0.2s linear;

  font-family: inherit;
  font-size: 14px;

  resize: vertical;

  &:focus {
    border: 1px ${({ theme }) => theme.darken_primary} solid;
  }
`;

const Button = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.orange};
  padding: 15px 40px;

  font-weight: 800;
  border-radius: 7px;
  border: none;

  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    color: ${({ theme }) => theme.main};
    background-color: ${({ theme }) => theme.hover};
  }
`;
