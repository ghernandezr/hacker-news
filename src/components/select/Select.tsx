import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";

import styles from "./Select.module.css";

import ArrowIcon from "./components/ArrowIcon";
import SelectOptionItem from "./components/SelectOptionItem";
import SelectOptionData from "./components/SelectOptionData";
import { useSelectOpen } from "./hooks/useSelectOpen";

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

  const { isOpen, setIsOpen, toggling } = useSelectOpen();

  const [selectedOption, setSelectedOption] =
    useState<OptionItem | undefined>(value);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

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
        <small
          data-testid="no-items"
          className={styles["select__option-no-item"]}
        >
          No items to show
        </small>
      );
    }

    return items.map((item, index) => {
      return (
        <SelectOptionItem
          key={index}
          data-testid="option-item"
          item={item}
          onClick={() => onOptionClicked(item)}
        />
      );
    });
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.select}>
        <div
          data-testid="selected-value"
          className={styles["select__option-selected"]}
          onClick={toggling}
        >
          <div className={styles["select__option-selected-value"]}>
            {selectedOption ? (
              <SelectOptionData item={selectedOption} />
            ) : (
              <div data-testid="placeholder">{placeholder}</div>
            )}
          </div>
          <ArrowIcon className={styles["select__option-selected-icon"]} />
        </div>
        {isOpen && (
          <div className={styles["select__option-container"]}>
            <ul
              data-testid="option-container"
              className={styles["select__option-list"]}
            >
              {generateItems()}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
