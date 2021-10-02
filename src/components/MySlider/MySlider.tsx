import React, { ReactNode, cloneElement } from "react";
import genClassName from "../../util/genClassName";
// import imageData from "../../data/imageData";

// export enum SliderType {
//   Default = "default",
// }

export enum SliderSize {
  Large = "lg",
  Small = "sm",
}
export interface ISliderProps {
  children: ReactNode;
  sliderSize?: SliderSize;
  photos: number;
  imageData: { id: number; src: string }[];
  //   sliderType: SliderType;
}

const MySlider: React.FC<ISliderProps> = (props) => {
  const { children, sliderSize, photos, imageData } = props;
  // console.log(children);
  let classNameList: string[] = ["slider"];
  if (sliderSize === SliderSize.Large) {
    classNameList.push("slider-lg");
  }
  if (sliderSize === SliderSize.Small) {
    classNameList.push("slider-sm");
  }

  const classNames = classNameList.join(" ");

  // const childrenWithProps =
  //   React.cloneElement(children, {
  //     width: (photos * 100) / photos + "%",
  //   })

  return (
    <div className={classNames}>
      <div className="slider-container ">
        <div className="slider-inner" style={{ width: photos * 100 + "%" }}>
          {imageData.map((image) => (
            <img key={image.id} src={image.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySlider;
