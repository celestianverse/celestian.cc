import type { ElementType } from "react";
import classNames from "classnames";
import type { Polymorphic } from "@/types/Polymorphic";
import type { AnchorProps, AnchorElement } from "./Anchor.types";
import { useIcon } from "@/hooks/useIcon";
import { ANCHOR_DEFAULT_ELEMENT } from "@/components/uikit/Anchor/Anchor.constants";
import styles from "./Anchor.module.scss";

export const Anchor = <E extends ElementType<any, AnchorElement> = typeof ANCHOR_DEFAULT_ELEMENT>(
  {
    as,
    variant = "base",
    color = "primary",
    size = "m",
    padding,
    paddingY,
    paddingX,
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
  const Component = as || ANCHOR_DEFAULT_ELEMENT;

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
        {
          [`padding-${padding}`]: padding != null,
          [`padding-y-${paddingY}`]: paddingY != null,
          [`padding-x-${paddingX}`]: paddingX != null,
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
