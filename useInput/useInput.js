import { useState } from "react";
import PropTypes from "prop-types";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target: { value } }) => {
    const willUpdate = validator ? validator(value) : true;
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

useInput.propTypes = {
  initialValue: PropTypes.string.isRequired,
  validator: PropTypes.func
};
