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
    variant = "flat",
    color = "primary",
    tone = "base",
    size = "m",
    radius = 8,
    borderStyle,
    borderWidth,
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
        styles[`tone-${tone}`],
        styles[`size-${size}`],
        {
          [`border-radius-${radius}`]: radius != null,
          [`border-style-${borderStyle}`]: borderStyle,
          [styles["icon-only"]]: iconOnly,
        },
        className,
      )}
      style={{ borderWidth: borderWidth }}
      {...rest}
    >
      {Content}
    </Component>
  );
};
