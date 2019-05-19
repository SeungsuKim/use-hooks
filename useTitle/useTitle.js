import { useState, useEffect } from "react";

export const useTitle = initialTitle => {
  if (typeof initialTitle !== "string") {
    return;
  }
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
