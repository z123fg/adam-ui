import "./Input.css";
import "./Input.css";
type InputProps = {
  size: string;
  type: string;
  placeholder: string;
};

const Input = (props: InputProps) => {
  const { size = "medium", ...rest } = props;
  return <input className={`input ${size}`} {...rest} />;
};

export default Input;
