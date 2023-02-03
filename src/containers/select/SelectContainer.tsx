import React, { useEffect, useState } from "react";
import styles from "./SelectContainer.module.css";
import Select, { OptionItem } from "../../components/select/Select";
import { items } from "../../data";
import { useSearchNewsParams } from "../../store/store";

const SelectContainer = () => {
  const query = useSearchNewsParams((state) => state.query);
  const setQuery = useSearchNewsParams((state) => state.setQuery);
  const [value, setValue] = useState<OptionItem | undefined>(undefined);

  /**
   * Update the query value when selection change
   * @param item
   */
  const handleSelectionChange = (item: OptionItem) => {
    setQuery(item.value);
  };

  useEffect(() => {
    setValue(items.find((it) => it.value === query));
  }, [query]);

  return (
    <div className={styles["select-container"]}>
      <Select
        value={value}
        items={items}
        placeholder="Select your news"
        onSelectionChange={handleSelectionChange}
      />
    </div>
  );
};

export default SelectContainer;
