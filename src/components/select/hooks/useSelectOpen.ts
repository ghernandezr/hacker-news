import { useState } from "react";

export const useSelectOpen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return {
    isOpen,
    setIsOpen,
    toggling,
  };
};
