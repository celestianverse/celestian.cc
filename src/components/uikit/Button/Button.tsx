import React from "react";
import classNames from "classnames";
import { useIcon } from "@/hooks/useIcon";
import type { Polymorphic } from "@/types/Polymorphic";
import type { Props, Element } from "./Button.types";
import styles from "./Button.module.scss";

const DEFAULT_ELEMENT = "button";

export const Button = <E extends React.ElementType<any, Element> = typeof DEFAULT_ELEMENT>(
  {
    as,
    color = "primary",
    variant = "fill",
    size = "m",
    radius,
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
  }: Polymorphic<E, Props>) => {
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
        styles[`size-${size}`],
        styles[`radius-${radius}`],
        {
          [styles.fullwidth]: fullwidth,
          [styles.active]: active,
          [styles.loading]: loading,
          [styles.disabled]: disabled,
          [styles["icon-only"]]: iconOnly,
        },
        className,
      )}
      {...rest}
    >
      {Content}
    </Component>
  );
};
