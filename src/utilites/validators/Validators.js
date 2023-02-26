export const Required = (value) => {
  if (value) return undefined;
  return "Field is required";
};
export const maxLengthTC = (Length) => (value) => {
  if (value && value.length > Length) return `Max length is ${Length} symbols`;
  return undefined;
};
