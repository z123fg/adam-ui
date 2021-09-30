import React, { FC, ReactNode } from "react";
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
  cardType?: CardType;
  className?: string;
  description?: string;
  imgSrc?: string;
  cardStyle: string;
}

const AnimatedHoverCard: FC<IAnimatedCardProps> = ({
  cardType = CardType.Text,
  className = "",
  description = "",
  imgSrc = img1,
  cardStyle = CardStyle.Style1,
}) => {
  let classNameStr = genClassName(cardStyle, className).join(" ");
  console.log(classNameStr);

  if (cardType === CardType.Text) {
    return (
      //for text
      <div className="card-container">
        <section className="card-text">
          <h3>Test</h3>
          <p>Paragraph</p>
        </section>
        <div className={classNameStr}>
          <img src={imgSrc} alt="img" />
        </div>
      </div>
    );
  } else {
    //for pure
    return (
      <div className="card-container">
        <div className="card-style-1">
          <img src={imgSrc} alt="img" />
        </div>
      </div>
    );
  }
};

export default AnimatedHoverCard;
