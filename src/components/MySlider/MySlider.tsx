import React from "react";

export enum SliderSize {
  Large = "lg",
  Small = "sm",
}
export interface ISliderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sliderSize?: SliderSize;
  photos: number;
  imageData: { src: string }[];
}

const MySlider: React.FC<ISliderProps> = ({
  sliderSize = SliderSize.Small,
  photos,
  imageData,
}) => {
  let classNameList: string[] = ["slider"];
  if (sliderSize === SliderSize.Large) {
    classNameList.push("slider-lg");
  }
  if (sliderSize === SliderSize.Small) {
    classNameList.push("slider-sm");
  }

  const classNames = classNameList.join(" ");

  return (
    <div className={classNames}>
      <div className="slider-container ">
        <div className="slider-inner" style={{ width: photos * 100 + "%" }}>
          {imageData.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt="..."
              style={{ width: (1 / photos) * 100 + "%" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySlider;
