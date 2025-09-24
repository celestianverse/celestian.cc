import type { ElementType } from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { Element, Props } from "./Title.types";
import styles from "./Title.module.scss";

const DEFAULT_ELEMENT = "h3";

export const Title = <E extends ElementType<any, Element> = typeof DEFAULT_ELEMENT>
({
   as,
   color = "inherit",
   weight = "bold",
   size = "m",
   lineHeight = "m",
   uppercase = false,
   lowercase = false,
   ellipsis = false,
   whiteSpace,
   className,
   children,
   ...rest
 }: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.title,
        styles[`color-${color}`],
        styles[`size-${size}`],
        styles[`weight-${weight}`],
        styles[`line-height-${lineHeight}`],
        styles[`white-space-${whiteSpace}`],
        {
          [styles.uppercase]: uppercase,
          [styles.lowercase]: lowercase,
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
