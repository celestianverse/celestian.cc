import React from "react";
import classNames from "classnames";
import { useIcon } from "@/hooks/useIcon";
import type { Polymorphic } from "@/types/Polymorphic";
import type { ButtonProps, ButtonElement } from "./Button.types";
import styles from "./Button.module.scss";
import { BUTTON_DEFAULT_ELEMENT } from "./Button.constants";

export const Button = <E extends React.ElementType<any, ButtonElement> = typeof BUTTON_DEFAULT_ELEMENT>(
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
    square,
    active,
    loading,
    disabled,
    iconStart = "none",
    iconEnd = "none",
    iconOnly = "none",
    className,
    children,
    ...rest
  }: Polymorphic<E, ButtonProps>) => {
  const Component = as || BUTTON_DEFAULT_ELEMENT;

  const Content = useIcon({
    iconStart, iconEnd, iconOnly, styles, children,
  });

  return (
    <Component
      rel={as === "a" ? "noopener noreferrer" : undefined}
      role="button"
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
      aria-disabled={disabled}
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
          [styles.square]: square,
          [styles.active]: active,
          [styles.loading]: loading,
          ["disabled"]: disabled,
          [styles["icon-only"]]: iconOnly !== "none",
        },
        className,
      )}
      style={{ borderWidth: borderWidth }}
      {...rest}
    >
      <span
        className={classNames(
          styles.content,
          {
            [`justify-content-${justify}`]: justify,
            [`border-radius-${radius}`]: radius != null,
          },
        )}
      >
        {Content}
      </span>
    </Component>
  );
};
