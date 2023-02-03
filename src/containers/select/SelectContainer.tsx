import React from "react";
import styles from "./SelectContainer.module.css";
import Select from "../../components/select/Select";
import { items } from "../../data";

const SelectContainer = () => {
  return (
    <div className={styles["select-container"]}>
      <Select items={items} placeholder="Select your news" />
    </div>
  );
};

export default SelectContainer;
