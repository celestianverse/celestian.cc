import React from "react";
import classNames from "classnames";
import { useIcon } from "@/hooks/useIcon";
import type { Polymorphic } from "@/types/Polymorphic";
import type { ButtonProps, Element } from "./Button.types";
import styles from "./Button.module.scss";

const DEFAULT_ELEMENT = "button";

export const Button = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>(
  {
    as,
    variant = "flat",
    color = "primary",
    tone = "base",
    size = "m",
    justify = "center",
    radius,
    borderStyle,
    borderWidth,
    fullwidth,
    active,
    loading,
    disabled,
    iconStart,
    iconEnd,
    iconOnly,
    className,
    children,
    ...rest
  }: Polymorphic<E, ButtonProps>) => {
  const Component = as || DEFAULT_ELEMENT;

  const Content = useIcon({
    iconStart, iconEnd, iconOnly, styles, children,
  });

  return (
    <Component
      rel={as === "a" ? "noopener noreferrer" : undefined}
      className={classNames(
        styles.button,
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        styles[`tone-${tone}`],
        styles[`size-${size}`],
        {
          [`justify-content-${justify}`]: justify,
          [`border-radius-${radius}`]: radius != null,
          [`border-style-${borderStyle}`]: borderStyle,
          ["fullwidth"]: fullwidth,
          [styles.active]: active,
          [styles.loading]: loading,
          ["disabled"]: disabled,
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
