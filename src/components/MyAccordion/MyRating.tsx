import React, { FC, MouseEvent, ReactNode } from "react";

export enum RatingType {
  Controlled = "default",
  Read_Only = "read-only",
  Disabled = "disabled",
  No_Value = "no-value",
  Hover_Feedback = "hover-feedback",
}

export enum RatingSize {
  Small = "size-sm",
  Medium = "size-medium",
  Large = "size-large",
}

export enum RatingPrecision {
  Default = 1,
  Half = 0.5,
}

interface IMyRatingProps {
  ratingType?: RatingType;
  ratingSize?: RatingSize;
  ratingPrecision?: RatingPrecision;
}

type ExtendedMyRating = IMyRatingProps &
(
  | React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  | React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
);

const MyRating: FC<ExtendedMyRating> = ({
  ratingType = RatingType.Controlled,
  ratingSize = RatingSize.Medium,
  ratingPrecision = RatingPrecision.Half,
}) => {
  return (<Rating
    name= {ratingType}
    value={0}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  />)
}

export default MyRating;