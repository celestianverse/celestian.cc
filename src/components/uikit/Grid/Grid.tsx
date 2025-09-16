import React from "react";
import classNames from "classnames";
import type { Props } from "./Grid.types";
import styles from "./Grid.module.scss";

export const Grid = ({
  columns = 3,
  gap = "s",
  align = "start",
  children,
  className,
  ...rest
}: Props) => {
  return (
    <div
      className={classNames(
        styles.grid,
        styles[`columns-${columns}`],
        styles[`gap-${gap}`],
        styles[`align-${align}`],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
