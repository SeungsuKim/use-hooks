import { useState } from "react";

export const useInput = (initialValue, validator) => {
  if (typeof initialValue !== "string") {
    return;
  }
  if (typeof validator !== "function") {
    return;
  }
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target: { value } }) => {
    const willUpdate = validator ? validator(value) : true;
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
