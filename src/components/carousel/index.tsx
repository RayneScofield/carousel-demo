import React, { FC } from "react";
import Slider from "../slider";
import "./style.scss";

interface Infos {
  title: string;
  sTitle?: string;
  name?: string;
}

const contents: Infos[] = [
  {
    name: "first",
    title: "xPhone",
    sTitle: "Lots to love. Less to spend.\nStarting at $399.",
  },
  {
    name: "second",
    title: "Tablet",
    sTitle: "Just the right amount of everything.",
  },
  {
    name: "third",
    title: "I'm Jayce",
    sTitle: "Nice to meet you, The following Avatar has nothing to do with me",
  },
];

const SliderItem: FC<Infos> = ({ title, sTitle, name }) => {
  return (
    <div className={`info ${name}`}>
      <h1>{title}</h1>
      <p>{sTitle}</p>
    </div>
  );
};

const Carousel = () => {
  return (
    <Slider
      items={contents.map((content) => {
        return <SliderItem {...content} />;
      })}
    />
  );
};

export default Carousel;
