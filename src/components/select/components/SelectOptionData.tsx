import React from "react";
import { OptionItem } from "../Select";
import styles from "./SelectOptionData.module.css";

interface SelectOptionDataProps extends React.ComponentPropsWithoutRef<"div"> {
  item: OptionItem;
}

const SelectOptionData = (props: SelectOptionDataProps) => {
  const { item, ...rest } = props;
  return (
    <div className={styles["select__option-selected-data"]} {...rest}>
      {item.image && <img src={item.image} alt={item.label} />}
      {item.image && <div>{item.label}</div>}
    </div>
  );
};

export default SelectOptionData;
