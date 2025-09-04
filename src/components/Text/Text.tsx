import React from "react";
import classNames from "classnames";
import { Polymorphic } from "@/types/Polymorphic";
import type { Element, Props } from "./_types/types";
import styles from "./Text.module.scss";

const DEFAULT_ELEMENT = "p";

export const Text = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  color = "inherit",
  weight = "regular",
  size = "m",
  paragraph = false,
  uppercase = false,
  nowrap = false,
  ellipsis = false,
  className,
  children,
  ...rest
}: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.text,
        styles[color],
        styles[size],
        styles[weight],
        {
          [styles.paragraph]: paragraph,
          [styles.uppercase]: uppercase,
          [styles.nowrap]: nowrap,
          [styles.ellipsis]: ellipsis,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
