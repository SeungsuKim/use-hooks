export const useConfirm = (message, callback, rejection) => {
  if (typeof message !== "string") {
    return;
  }
  if (typeof callback !== "function") {
    return;
  }
  if (typeof rejection !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};
