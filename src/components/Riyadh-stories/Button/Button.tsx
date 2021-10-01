import "./Button.css";
type ButtonProps = {
  variant: string;
  children: string;
  size: string;
};

const Button = (props: ButtonProps) => {
  const { size = "medium", variant = "primary", children, ...rest } = props;
  return (
    <button className={`button ${variant} ${size} `} {...rest}>
      {children}
    </button>
  );
};

export default Button;
