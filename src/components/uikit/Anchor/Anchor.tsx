import React from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { AnchorProps, AnchorElement } from "./Anchor.types";
import styles from "./Anchor.module.scss";
import { useIcon } from "@/hooks/useIcon";

export const DEFAULT_ELEMENT = "a";

export const Anchor = <E extends React.ElementType<any, AnchorElement> = typeof DEFAULT_ELEMENT>(
  {
    as,
    variant = "base",
    color = "primary",
    size = "m",
    padding,
    fullwidth,
    borderStyle,
    borderWidth,
    active,
    disabled,
    iconStart = "none",
    iconEnd = "none",
    iconOnly = "none",
    className,
    children,
    ...rest
  }: Polymorphic<E, AnchorProps>) => {
  const Component = as || DEFAULT_ELEMENT;

  const Content = useIcon({
    iconStart, iconEnd, iconOnly, styles, children,
  });

  return (
    <Component
      className={classNames(
        styles.anchor,
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        styles[`size-${size}`],
        styles[`padding-${padding}`],
        {
          ["fullwidth"]: fullwidth,
          [styles.active]: active,
          ["disabled"]: disabled,
        },
        className,
      )}
      {...rest}
    >
      <span
        className={classNames(
          styles.content,
          {
            [`border-bottom-style-${borderStyle}`]: borderStyle,
          },
          className,
        )}
        style={{ borderBottomWidth: borderWidth }}
      >
        {Content}
      </span>
    </Component>
  );
};
