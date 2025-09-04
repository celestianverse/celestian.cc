import React from "react";
import classNames from "classnames";
import { Props } from "./_types/types";
import styles from "./Container.module.scss";

export const Container = ({
  className,
  children,
  ...rest
}: Props) => {
  return (
    <div
      className={classNames(
        styles.container,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
