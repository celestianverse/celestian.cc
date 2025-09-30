import { forwardRef } from "react";
import classNames from "classnames";
import type { Props } from "./Switch.types";
import styles from "./Switch.module.scss";

export const Switch = forwardRef<HTMLInputElement, Props>((
  {
    id,
    checked,
    disabled,
    onCheckedChange,
    className,
  }, ref) => {
  return (
    <label
      className={classNames(
        styles.switch,
        className,
      )}
    >
      <input
        ref={ref}
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        className={styles.input}
      />
      <span className={styles.control}>
        <span className={styles.handle} />
      </span>
    </label>
  );
});

Switch.displayName = "Switch";