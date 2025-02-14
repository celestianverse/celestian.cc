import React from "react";
import classNames from "classnames";
import { Polymorphic } from "@/types/Polymorphic";
import type { Element, Props } from "./_types/types";
import styles from "./Note.module.scss";

const DEFAULT_ELEMENT = "small";

export const Note = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  color = "main",
  weight = "regular",
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
        styles.note,
        styles[color],
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
