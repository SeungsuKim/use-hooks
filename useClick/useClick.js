import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

useClick.propTypes = {
  onClick: PropTypes.func.isRequired
};
