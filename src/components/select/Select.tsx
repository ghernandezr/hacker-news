import React, { ReactNode, useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";

import styles from "./Select.module.css";

import ArrowIcon from "./components/ArrowIcon";

export interface OptionItem {
  label: string;
  value: string;
  image?: string;
}

interface SelectProps extends React.ComponentPropsWithoutRef<"div"> {
  placeholder?: string;
  items?: OptionItem[];
  value?: OptionItem;
  onSelectionChange?: (value: OptionItem) => void;
}

const Select = (props: SelectProps) => {
  const {
    placeholder = "Select item",
    items = [],
    onSelectionChange,
    value,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] =
    useState<OptionItem | undefined>(value);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: OptionItem) => {
    setSelectedOption(value);
    setIsOpen(false);
    if (onSelectionChange) {
      onSelectionChange(value);
    }
  };

  const handleClickAway = () => {
    setIsOpen(false);
  };

  const generateItems = () => {
    if (items.length === 0) {
      return (
        <small className={styles["select__option-no-item"]}>
          No items to show
        </small>
      );
    }

    return items.map((item, index) => {
      return (
        <li
          key={index}
          className={styles["select__option-item"]}
          onClick={() => onOptionClicked(item)}
        >
          <img src={item.image} alt={item.label} />
          <div>{item.label}</div>
        </li>
      );
    });
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.select}>
        <div className={styles["select__option-selected"]} onClick={toggling}>
          <div className={styles["select__option-selected-value"]}>
            {selectedOption && (
              <div className={styles["select__option-selected-data"]}>
                {selectedOption.image && (
                  <img src={selectedOption.image} alt={selectedOption.label} />
                )}
                {selectedOption.image && <div>{selectedOption.label}</div>}
              </div>
            )}
            {!selectedOption && <div>{placeholder}</div>}
          </div>
          <ArrowIcon className={styles["select__option-selected-icon"]} />
        </div>
        {isOpen && (
          <div className={styles["select__option-container"]}>
            <ul className={styles["select__option-list"]}>{generateItems()}</ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
