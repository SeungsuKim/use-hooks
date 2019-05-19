import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

useTitle.propTypes = {
  initialTitle: PropTypes.string.isRequired
};
