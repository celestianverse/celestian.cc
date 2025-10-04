import type { ElementType } from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { TitleElement, TitleProps } from "./Title.types";
import { TITLE_DEFAULT_ELEMENT } from "@/components/uikit/Title/Title.constants";
import styles from "./Title.module.scss";

export const Title = <E extends ElementType<any, TitleElement> = typeof TITLE_DEFAULT_ELEMENT>
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
 }: Polymorphic<E, TitleProps>) => {
  const Component = as || TITLE_DEFAULT_ELEMENT;

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
