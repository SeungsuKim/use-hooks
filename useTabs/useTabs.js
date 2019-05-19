import { useState } from "react";

export const useTabs = (initialTab, allTabs) => {
  if (typeof initialTab !== "Int") {
    return;
  }
  if (typeof initialTab !== "Array") {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    chageItem: setCurrentIndex
  };
};
