import type { ElementType } from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { TextElement, TextProps } from "./Text.types";
import styles from "./Text.module.scss";

const DEFAULT_ELEMENT = "p";

export const Text = <E extends ElementType<any, TextElement> = typeof DEFAULT_ELEMENT>
({
   as,
   color = "inherit",
   size = "m",
   weight = "regular",
   lineHeight = "m",
   uppercase = false,
   lowercase = false,
   ellipsis = false,
   whiteSpace,
   className,
   children,
   ...rest
 }: Polymorphic<E, TextProps>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.text,
        styles[`color-${color}`],
        styles[`size-${size}`],
        styles[`weight-${weight}`],
        styles[`line-height-${lineHeight}`],
        {
          ["uppercase"]: uppercase,
          ["lowercase"]: lowercase,
          ["ellipsis"]: ellipsis,
          [`white-space-${whiteSpace}`]: whiteSpace,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
