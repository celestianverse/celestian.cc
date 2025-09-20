import React from "react";
import classNames from "classnames";
import { useIcon } from "@/hooks/useIcon";
import type { Polymorphic } from "@/types/Polymorphic";
import type { Props, Element } from "./Tag.types";
import styles from "./Tag.module.scss";

const DEFAULT_ELEMENT = "span";

export const Tag = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>(
  {
    as,
    color = "primary",
    variant = "fill-soft",
    size = "m",
    radius = "m",
    iconStart,
    iconEnd,
    iconOnly,
    className,
    children,
    ...rest
  }: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  const Content = useIcon({
    iconStart, iconEnd, iconOnly, styles, children,
  });

  return (
    <Component
      className={classNames(
        styles.button,
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        styles[`size-${size}`],
        styles[`radius-${radius}`],
        className,
      )}
      {...rest}
    >
      {Content}
    </Component>
  );
};
