import React from "react";
import classNames from "classnames";
import type { Props } from "./Page.types";
import styles from "./Page.module.scss";

export const Page = ({
  gap,
  align,
  justify,
  children,
  className,
  ...rest
}: Props) => {
  return (
    <div
      className={classNames(
        styles.page,
        styles[`gap-${gap}`],
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
