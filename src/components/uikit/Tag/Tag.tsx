import type { ElementType } from "react";
import classNames from "classnames";
import { useIcon } from "@/hooks/useIcon";
import type { Polymorphic } from "@/types/Polymorphic";
import type { TagProps, TagElement } from "./Tag.types";
import { TAG_DEFAULT_ELEMENT } from "@/components/uikit/Tag/Tag.constants";
import styles from "./Tag.module.scss";

export const Tag = <E extends ElementType<any, TagElement> = typeof TAG_DEFAULT_ELEMENT>(
  {
    as,
    variant = "flat",
    color = "primary",
    tone = "base",
    size = "m",
    radius = 8,
    borderStyle,
    borderWidth,
    iconStart = "none",
    iconEnd = "none",
    iconOnly = "none",
    className,
    children,
    ...rest
  }: Polymorphic<E, TagProps>) => {
  const Component = as || TAG_DEFAULT_ELEMENT;

  const Content = useIcon({
    iconStart, iconEnd, iconOnly, styles, children,
  });

  return (
    <Component
      className={classNames(
        styles.tag,
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        styles[`tone-${tone}`],
        styles[`size-${size}`],
        {
          [`border-radius-${radius}`]: radius != null,
          [`border-style-${borderStyle}`]: borderStyle,
          [styles["icon-only"]]: iconOnly !== "none",
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
