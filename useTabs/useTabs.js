import { useState } from "react";
import PropTypes from "prop-types";

export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    chageItem: setCurrentIndex
  };
};

useTabs.propTypes = {
  initialTab: PropTypes.number.isRequired,
  allTabs: PropTypes.array.isRequired
};
