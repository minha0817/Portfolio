import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";

export default function Contact() {
  return (
    <section id="contact">
      <h1 className="contact__title">Let's talk</h1>
      <div className="contact__links">
        <a href="https://github.com/minha0817" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/minhakim24/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="mailto:minhakk24@gmail.com">
          <AiFillMail />
        </a>
        <a href="https://docs.google.com/document/d/1WAUMjDtaMMa-snXnXRmsjrN1uYe30r_p/edit" target="_blank">
          <GrDocumentText />
        </a>
      </div>
    </section>
  );
}
