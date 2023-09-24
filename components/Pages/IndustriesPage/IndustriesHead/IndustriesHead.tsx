"use client";
import styled from "styled-components";
import s from "./IndustriesHead.module.scss";

export default function IndustriesHead() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}></div>
      <div className={s.title}>
        <h1>Industries</h1>
      </div>
    </div>
  );
}
