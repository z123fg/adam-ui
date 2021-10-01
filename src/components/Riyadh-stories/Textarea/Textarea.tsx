import "./Textarea.css";
type TexxtareaProps = {
  size: string;
  type: string;
  placeholder: string;
};

const Input = (props: TexxtareaProps) => {
  const { size = "medium", ...rest } = props;
  return <textarea className={`textarea ${size}`} {...rest} />;
};

export default Input;
