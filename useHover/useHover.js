import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const useHover = onHover => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};

useHover.propTypes = {
  onHover: PropTypes.func.isRequired
};
