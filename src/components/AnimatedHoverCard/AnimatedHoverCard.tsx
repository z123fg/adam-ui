import React, { FC, useEffect } from "react";
import "./AnimatedHoverCard.css";
import img1 from "./img/img1.png";
import genClassName from "../../util/genClassName";

declare function myGetComputedStyle(
  elt: Element | null,
  pseudoElt?: string | null
): CSSStyleDeclaration;

export enum CardType {
  Pure = "pure",
  Text = "text",
}

export enum CardStyle {
  Style1 = "card-style-1",
  Style2 = "card-style-2",
}

interface IAnimatedCardProps {
  cardType: CardType;
  cardStyle: string;
  className?: string;
  title?: string;
  description?: string;
  imgSrc?: string;
  bgColor1?: string;
  bgColor2?: string;
}

const AnimatedHoverCard: FC<IAnimatedCardProps> = ({
  cardType = CardType.Text,
  className = "",
  title = "Title",
  description = "Description",
  imgSrc = img1,
  cardStyle = CardStyle.Style1,
  bgColor1 = "#2da2ff",
  bgColor2 = "#444",
}) => {
  let classNameStr = genClassName(cardStyle, className).join(" ");

  useEffect(() => {
    let color = document.getElementsByClassName(cardStyle)[0];
    let newColor = (color as unknown) as HTMLElement;

    newColor.style.setProperty("--background-color-1", bgColor1);
    newColor.style.setProperty("--background-color-2", bgColor2);
  }, [cardStyle, bgColor1, bgColor2]);

  if (cardType === CardType.Text) {
    return (
      //for text
      <div aria-label="Text Card Div" className="card-container">
        <div aria-label="this is actual card" className="card">
          <section
            aria-label="this section contains text"
            className="card-text"
          >
            <h3 aria-label="title" className="card-text__title">
              {title}
            </h3>
            <p aria-label="description" className="card-text__description">
              {description}
            </p>
          </section>
          <div aria-label="Image Div" id="textDiv" className={classNameStr}>
            <img aria-label="Image" src={imgSrc} alt="img" />
          </div>
        </div>
      </div>
    );
  } else {
    //for pure
    return (
      <div aria-label="Pure Card Div" className="card-container">
        <div aria-label="this is actual card" className="card">
          <div aria-label="Image Div" className={classNameStr}>
            <img aria-label="Image" src={imgSrc} alt="img" />
          </div>
        </div>
      </div>
    );
  }
};

export default AnimatedHoverCard;
