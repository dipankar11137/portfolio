// import React from "react";
import MovingText from "react-moving-text";
import MovingComponent from "react-moving-text";
import React, { useState } from "react";
// import MovingText from 'react-moving-text'

const AnimationsForChaining = [
  "letters",
  // "flipSlowDown",
  // "fadeOutToBottom",
  // "jelly",
];

const Projects = () => {
  var dataText1 = ["Sushi", "Pizza", "Brötchen", "Salat"];
  const Letters = ["letter", "hmmmmmmmmmmmm", "alu", "potol", "kachu"];

  return (
    <div className="text-white flex">
      <MovingComponent
        type="flip"
        duration="5000ms"
        delay="100ms"
        direction="normal"
        timing="ease"
        iteration="infinite"
        fillMode="none"
      >
        <p className="text-4xl">ACD</p>
      </MovingComponent>
      <MovingComponent
        type="flip"
        duration="4000ms"
        delay="100ms"
        direction="normal"
        timing="ease"
        iteration="infinite"
        fillMode="none"
      >
        {dataText1}
      </MovingComponent>
      <MovingComponent
        presences="multiline"
        type="typewrite"
        duration="1000ms"
        delay="100ms"
        direction="normal"
        timing="ease"
        iteration="infinite"
        fillMode="none"
      >
        <p className="text-4xl">ACD</p>
      </MovingComponent>
      {/*  */}
      {Letters.map((letter, index) => (
        <MovingComponent
          type="popIn"
          duration="2000ms"
          delay="index * 100ms"
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="none"
        >
          {letter}
        </MovingComponent>
      ))}
      {Letters.map((letter, index) => (
        <MovingComponent
          type="effect3D"
          duration="2000ms"
          delay="index * 1100ms"
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="none"
        >
          {letter}
        </MovingComponent>
      ))}
      {/*  */}
      <h1 className="text-3xl">
        {" "}
        <MovingComponent
          type="typewriter"
          dataText={["Sushi", "Pizza", "Brötchen", "Salat"]}
        />
      </h1>
    </div>
  );
};

export default Projects;
