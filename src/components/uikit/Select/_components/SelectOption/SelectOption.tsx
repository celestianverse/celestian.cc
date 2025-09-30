import classNames from "classnames";
import type { Props } from "./SelectOption.types";
import styles from "./SelectOption.module.scss";
import { SelectContext } from "@/contexts/SelectContext/SelectContext";
import { useContext } from "react";
import { useListItem } from "@floating-ui/react";

export const SelectOption = ({ label }: Props) => {
  const {
    activeIndex,
    selectedIndex,
    getItemProps,
    handleSelect
  } = useContext(SelectContext);

  const { ref, index } = useListItem({ label });

  const isActive = activeIndex === index;
  const isSelected = selectedIndex === index;

  return (
    <button
      ref={ref}
      role="option"
      aria-selected={isSelected}
      tabIndex={isActive ? 0 : -1}
      className={classNames(
        styles.option,
        {
          [styles.active]: isActive,
          [styles.selected]: isSelected,
        },
      )}
      {...getItemProps({
        onClick: () => handleSelect(index)
      })}
    >
      {label}
    </button>
  );
};