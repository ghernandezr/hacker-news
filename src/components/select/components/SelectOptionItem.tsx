import React from "react";
import { OptionItem } from "../Select";
import styles from "./SelectOptionItem.module.css";

interface OptionItemProps extends React.ComponentPropsWithoutRef<"li"> {
  item: OptionItem;
}

const SelectOptionItem = (props: OptionItemProps) => {
  const { item, ...rest } = props;
  return (
    <li
      data-testid="option-item"
      className={styles["select__option-item"]}
      {...rest}
    >
      <img src={item.image} alt={item.label} />
      <div>{item.label}</div>
    </li>
  );
};

export default SelectOptionItem;
