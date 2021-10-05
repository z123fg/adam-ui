export const container = (padding: string) => {
  return {
    width: "fit-content",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: padding,
  };
};

export const cardPosition = (width: string, height: string) => {
  return {
    position: "relative",
    width: width,
    height: height,
    backgroundColor: "black",
    margin: "auto",
    marginTop: "20px",
    borderRadius: "20px",
  };
};
