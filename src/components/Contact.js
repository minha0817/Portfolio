import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import "../styles/contact.css";
import { IconContext } from "react-icons";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h1 className="contact__title">Let's talk</h1>
      <h2 className="contact__email">minhakk24@gmail.com</h2>
      <div className="contact__links">
        <IconContext.Provider value={{ className: "contact__icons" }}>
          <a
            href="https://github.com/minha0817"
            className="contact__icon"
            target="_blank"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/minhakim24/"
            className="contact__icon"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="mailto:minhakk24@gmail.com" className="contact__icon">
            <AiFillMail />
          </a>
          <a
            href="https://docs.google.com/document/d/1WAUMjDtaMMa-snXnXRmsjrN1uYe30r_p/edit"
            className="contact__icon"
            target="_blank"
            position="relative"
          >
            <HiOutlineDocumentText />
          </a>
        </IconContext.Provider>
      </div>
    </section>
  );
}
