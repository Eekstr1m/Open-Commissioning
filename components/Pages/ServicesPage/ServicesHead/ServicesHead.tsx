"use client";
import styled from "styled-components";
import s from "./ServicesHead.module.scss";

export default function ServicesHead() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}></div>
      <div className={s.title}>
        <h1>Services</h1>
      </div>
    </div>
  );
}
