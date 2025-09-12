import React from "react";
import classNames from "classnames";
import { Props } from "./Container.types";
import styles from "./Container.module.scss";

export const Container = ({
  gap = "l",
  className,
  children,
  ...rest
}: Props) => {
  return (
    <div
      className={classNames(
        styles.container,
        styles[`gap-${gap}`],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
