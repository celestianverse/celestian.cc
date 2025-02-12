import React from "react";
import classNames from "classnames";
import type { Element, Props } from "./_types/types";
import styles from "./Label.module.scss";
import { Polymorphic } from "@/types/Polymorphic";

const DEFAULT_ELEMENT = "p";

export const Label = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  color = "main",
  weight = "regular",
  size = "m",
  isUppercase = false,
  isNowrap = false,
  isEllipsis = false,
  className,
  children,
  ...rest
}: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.label,
        styles[color],
        styles[size],
        styles[weight],
        {
          [styles.uppercase]: isUppercase,
          [styles.nowrap]: isNowrap,
          [styles.ellipsis]: isEllipsis,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
