import type { ElementType } from "react";
import classNames from "classnames";
import type { DividerProps, DividerElement } from "./Divider.types";
import styles from "./Divider.module.scss";
import type { Polymorphic } from "@/types/Polymorphic";

const DEFAULT_ELEMENT = "div";

export const Divider = <E extends ElementType<any, DividerElement> = typeof DEFAULT_ELEMENT>
({
   as,
   color = "primary",
   tone = "soft",
   borderStyle = "solid",
   borderWidth,
   className,
   ...rest
 }: Polymorphic<E, DividerProps>) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.divider,
        styles[`color-${color}`],
        styles[`tone-${tone}`],
        styles[`border-style-${borderStyle}`],
        className,
      )}
      style={{ borderWidth: borderWidth }}
      {...rest}
    />
  );
};
