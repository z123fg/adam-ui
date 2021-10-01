import "./Button.css";
type ButtonProps = {
  variant: string;
  children: string;
};

const Button = (props: ButtonProps) => {
  const { variant = "primary", children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
