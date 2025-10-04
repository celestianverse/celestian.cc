import React from "react";
import classNames from "classnames";
import { Flex } from "@/components/uikit/Flex/Flex";
import type { Props } from "./Box.types";
import styles from "./Box.module.scss";

export const Box = (
  {
    variant = "flat",
    color = "transparent",
    tone,
    padding = 32,
    laptopPadding,
    tabletPadding,
    mobilePadding,
    paddingY,
    laptopPaddingY,
    tabletPaddingY,
    mobilePaddingY,
    paddingX,
    laptopPaddingX,
    tabletPaddingX,
    mobilePaddingX,
    radius = 24,
    laptopRadius,
    tabletRadius,
    mobileRadius,
    borderStyle,
    borderWidth,
    hoverable,
    className,
    ...rest
  }: Props) => {
  return (
    <Flex
      direction={rest.direction ? rest.direction : "column"}
      className={classNames(
        styles.box,
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        styles[`tone-${tone}`],
        {
          [`padding-${padding}`]: padding != null && !paddingY && !paddingX,
          [`laptop-padding-${laptopPadding}`]: laptopPadding != null,
          [`tablet-padding-${tabletPadding}`]: tabletPadding != null,
          [`mobile-padding-${mobilePadding}`]: mobilePadding != null,
          [`padding-y-${paddingY}`]: paddingY != null,
          [`laptop-padding-y-${laptopPaddingY}`]: laptopPaddingY != null,
          [`tablet-padding-y-${tabletPaddingY}`]: tabletPaddingY != null,
          [`mobile-padding-y-${mobilePaddingY}`]: mobilePaddingY != null,
          [`padding-x-${paddingX}`]: paddingX != null,
          [`laptop-padding-x-${laptopPaddingX}`]: laptopPaddingX != null,
          [`tablet-padding-x-${tabletPaddingX}`]: tabletPaddingX != null,
          [`mobile-padding-x-${mobilePaddingX}`]: mobilePaddingX != null,
          [`border-radius-${radius}`]: radius != null,
          [`laptop-border-radius-${laptopRadius}`]: laptopRadius != null,
          [`tablet-border-radius-${tabletRadius}`]: tabletRadius != null,
          [`mobile-border-radius-${mobileRadius}`]: mobileRadius != null,
          [`border-style-${borderStyle}`]: borderStyle,
          [styles.hoverable]: hoverable,
        },
        className,
      )}
      style={{ borderWidth: borderWidth }}
      {...rest}
    />
  );
};
