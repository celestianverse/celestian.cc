import React from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { Props, Element } from "./Section.types";
import styles from "./Section.module.scss";

const DEFAULT_ELEMENT = "div";

export const Section = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>({
  as,
  color,
  paddingY = "m",
  gap = "m",
  align,
  justify,
  radius,
  radiusTop,
  radiusBottom,
  className,
  children,
  ...rest
}: Polymorphic<E, Props>) => {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.section,
        styles[`color-${color}`],
        styles[`padding-y-${paddingY}`],
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        styles[`radius-${radius}`],
        styles[`radius-top-${radiusTop}`],
        styles[`radius-bottom-${radiusBottom}`],
        className,
      )}
      {...rest}
    >
      <div
        className={classNames(
          styles.container,
          styles[`gap-${gap}`],
          styles[`align-${align}`],
          styles[`justify-${justify}`],
        )}
      >
        {children}
      </div>
    </Component>
  );
};
