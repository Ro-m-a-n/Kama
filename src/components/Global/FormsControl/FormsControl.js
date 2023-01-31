import "./FormsControl.css";

const FormsControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={"formsControl" + " " + (hasError ? "error" : " ")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
   const { input, meta, children, ...restProps } = props
  return (
    <FormsControl {...props}><textarea {...input} {...restProps}></textarea></FormsControl>
  );
};export const Input = (props) => {
    const { input, meta, children, ...restProps } = props
   return (
     <FormsControl {...props}><input {...input} {...restProps}></input> </FormsControl>
   );
 };
