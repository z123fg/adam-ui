import React, { FC, useEffect } from "react";
import "./AnimatedHoverCard.css";
import img1 from "./img/img1.png";
import genClassName from "../../util/genClassName";

export enum CardType {
  Pure = "pure",
  Text = "text",
}

export enum CardStyle {
  Style1 = "card-style-1",
  Style2 = "card-style-2",
}

interface IAnimatedCardProps {
  /**2 card types*/
  cardType: CardType;
  /**For now, only 2 styles available: card-style-{number} */
  cardStyle: string;
  /**You can give any className to div that contains the img*/
  className?: string;
  /**Title for text card type*/
  title?: string;
  /**Description for text card type*/
  description?: string;
  /**insert your img source path*/
  imgSrc?: string;
  /**This changes animated background color 1*/
  bgColor1?: string;
  /**This changes animated background color 2*/
  bgColor2?: string;
  /**Accept className for title*/
  titleClassName?: string;
  /**Accept className for description*/
  descriptionClassName?: string;
  /**Accept padding for card container*/
  cardContainerPadding?: string;
  /**Accept image height value*/
  imgHeight?: string;
  /**Change background width*/
  cardBGWidth?: string;
  /**Change background height*/
  cardBGHight?: string;
}

// --card-container-padding: 1rem;
// --img-height: 80%;
// --card-bg-width: 17rem;
// --card-bg-height: 400px;

const AnimatedHoverCard: FC<IAnimatedCardProps> = ({
  cardType = CardType.Text,
  className = "",
  title = "Title",
  description = "Description",
  imgSrc = img1,
  cardStyle = CardStyle.Style1,
  bgColor1 = "#2da2ff",
  bgColor2 = "#444",
  titleClassName = "",
  descriptionClassName = "",
  cardContainerPadding = "1rem",
  imgHeight = "80%",
  cardBGWidth = "300px",
  cardBGHight = "400px",
}) => {
  let classNameStr = genClassName(cardStyle, className).join(" ");
  let titleClass = genClassName(" card-text__title", titleClassName).join("");
  let descriptionClass = genClassName(
    " card-text__description",
    descriptionClassName
  ).join("");

  useEffect(() => {
    const getContainer = document.getElementsByClassName("card-container")[0];
    const setContainer = (getContainer as unknown) as HTMLElement;

    setContainer.style.setProperty("--background-color-1", bgColor1);
    setContainer.style.setProperty("--background-color-2", bgColor2);
    setContainer.style.setProperty(
      "--card-container-padding",
      cardContainerPadding
    );
    setContainer.style.setProperty("--img-height", imgHeight);
    setContainer.style.setProperty("--card-bg-width", cardBGWidth);
    setContainer.style.setProperty("--card-bg-height", cardBGHight);
  }, [
    cardStyle,
    bgColor1,
    bgColor2,
    cardContainerPadding,
    imgHeight,
    cardBGWidth,
    cardBGHight,
  ]);

  if (cardType === CardType.Text) {
    return (
      //for text
      <div aria-label="Text Card Div" className="card-container">
        <div aria-label="this is actual card" className="card">
          <section
            aria-label="this section contains text"
            className="card-text"
          >
            <h3 aria-label="title" className={titleClass}>
              {title}
            </h3>
            <p aria-label="description" className={descriptionClass}>
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
