import React from "react";
import { Container, Intro } from "./IntroStyle";

const Myintro = () => {
  return (
    <Intro>
      <Container>
        <div className="intro-desc">
          <h1 className="intro-title">ŞAMİL MEMUR</h1>
          <h3 className="sub-title">Frontend-Developer</h3>
        </div>
      </Container>
    </Intro>
  );
};

export default Myintro;
