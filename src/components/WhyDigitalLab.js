import React from "react";
import "../styles/whydigitallab.css";

export default function WhyDigitalLab() {
  return (
    <div id="whydigitallab">
      <h1 className="whydigitallab__title">What I love about Digital Lab</h1>
      <p>Here are some facts that why I love Digital lab...</p>
      <div className="whydigitallab__reasons">
        <div className="whydigitallab__reason">
          <h2>1. Digital Lab helps children and families</h2>
          <p>
            One of the reasons I am drawn to your organization is your
            commitment to helping children and families. I have a personal
            connection to the work that Digital Lab does as I have dedicated
            myself to supporting healthy child development in my former career
            as an Early Childhood Educator. It is incredibly rewarding that my
            work could contribute to your cause.
          </p>
        </div>
        <div className="whydigitallab__reason">
          <h2>2. Strong team, passionate people</h2>
          <p>
            I personally know two employees at Digital Lab and they have told me
            how supportive and eager to learn everyone is. I believe that a
            strong company culture not only leads to better outcomes, but can
            also help you feel more fulfilled and engaged in your work. I would
            love to be surrounded by like-minded people who are dedicated to
            their craft and excited to tackle challenges together.
          </p>
        </div>
        <div className="whydigitallab__reason">
          <h2>3. Care for design and user experience </h2>
          <p>
            I have researched Digital Lab’s portfolio and am impressed with
            their approach to solving complex problems with creativity, logic
            and human-centered design. I can see that a lot of research goes
            into every decision to make a simple and intuitive design for
            children.
          </p>
        </div>
      </div>
    </div>
  );
}
