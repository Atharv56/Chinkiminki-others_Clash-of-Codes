import React from "react";
import "./Hero.css";
import Slider from "./Slider";


const Hero = ({ imageSrc }) => {
  return (
    <>
    <div className="hero">
      <img src={imageSrc} alt="Travel" className="hero__image" />
      <h1 className="hero__title">Travel made simple.</h1>
    </div>
    <Slider
        imageSrc={""}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={""}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
    </>
  );
};

export default Hero;
