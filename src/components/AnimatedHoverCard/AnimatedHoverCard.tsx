import React, { FC, useEffect } from "react";
import "./AnimatedHoverCard.css";
import img1 from "./img/img1.png";
import genClassName from "../../util/genClassName";
import { container, cardPosition } from "./style";

export enum CardType {
  Pure = "pure",
  Text = "text",
}

export enum CardStyle {
  Style1 = "card-style-1",
  Style2 = "card-style-2",
}

interface IStyle {
  /**This changes pattern 1 color */
  PatternColor1?: string;

  /**This changes pattern 2 color */
  PatternColor2?: string;

  /**Accept image height value*/
  ImageHeight?: string;

  /**Change background width*/
  CardWidth?: string;

  /**Change background height*/
  CardHeight?: string;

  /**Change container padding*/
  cardContainerPadding?: string;
}

interface IClassName {
  /**You can give any className to div that contains the img*/
  ImgContainerClassName?: Object;

  /**Accept className for title*/
  titleClassName?: Object;

  /**Accept className for description*/
  descriptionClassName?: Object;
}

interface IText {}

interface IAnimatedCardProps extends IStyle, IClassName, IText {
  /**2 card types*/
  cardType: CardType;
  /**For now, only 2 styles available: card-style-{number} */
  cardStyle: string;
  /**Title for text card type*/
  title?: string;
  /**Description for text card type*/
  description?: string;
  /**insert your img source path*/
  imgSrc?: string;
}

const AnimatedHoverCard: FC<IAnimatedCardProps> = ({
  cardType = CardType.Text,
  ImgContainerClassName = {},
  title = "Title",
  description = "Description",
  imgSrc = img1,
  cardStyle = CardStyle.Style1,
  PatternColor1 = "#2da2ff",
  PatternColor2 = "#444",
  titleClassName = {},
  descriptionClassName = {},
  cardContainerPadding = "1rem",
  ImageHeight = "80%",
  CardWidth = "300px",
  CardHeight = "400px",
}) => {
  useEffect(() => {
    const getContainer = document.getElementsByClassName("card-container")[0];
    const setContainer = (getContainer as unknown) as HTMLElement;

    // setContainer.style.setProperty("--background-color-1", bgColor1);
    // setContainer.style.setProperty("--background-color-2", bgColor2);

    // setContainer.style.setProperty("--img-height", imgHeight);
    // setContainer.style.setProperty("--card-bg-width", cardBGWidth);
    // setContainer.style.setProperty("--card-bg-height", cardBGHight);
  }, [
    cardStyle,
    PatternColor1,
    PatternColor2,
    cardContainerPadding,
    ImageHeight,
    CardHeight,
    CardWidth,
  ]);

  if (cardType === CardType.Text) {
    return (
      //for text
      <div
        id="TextCard"
        className="card-container"
        style={container(cardContainerPadding)}
      >
        <div className="card">
          <section className="card-text">
            <h3 className="card-text__title" style={titleClassName}>
              {title}
            </h3>
            <p
              aria-label="description"
              className="card-text__description"
              style={descriptionClassName}
            >
              {description}
            </p>
          </section>
          <div id="textDiv" className={cardStyle}>
            <img src={imgSrc} alt="img" />
          </div>
        </div>
      </div>
    );
  } else {
    //for pure
    return (
      <div
        id="PureCard"
        className="card-container"
        style={container(cardContainerPadding)}
      >
        <div aria-label="this is actual card" className="card">
          <div aria-label="Image Div" style={ImgContainerClassName}>
            <img aria-label="Image" src={imgSrc} alt="img" />
          </div>
        </div>
      </div>
    );
  }
};

export default AnimatedHoverCard;
