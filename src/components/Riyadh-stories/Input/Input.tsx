import "./Input.css";
import "./Input.css";
type InputProps = {
  size: string;
  type: string;
  placeholder: string;
  color: string;
};

const Input = (props: InputProps) => {
  const { color = "black", size = "medium", ...rest } = props;
  return <input className={`input ${size} ${color}`} {...rest} />;
};

export default Input;
