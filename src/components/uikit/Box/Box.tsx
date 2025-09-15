import React from "react";
import classNames from "classnames";
import { Flex } from "@/components/uikit/Flex/Flex";
import type { Props } from "./Box.types";
import styles from "./Box.module.scss";

export const Box = (
  {
    variant = "fill",
    color = "neutral",
    padding = "m",
    paddingY,
    paddingX,
    radius = "m",
    hoverable,
    className,
    ...rest
  }: Props) => {
  return (
    <Flex
      className={classNames(
        styles.box,
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        styles[`padding-${padding}`],
        styles[`padding-y-${paddingY}`],
        styles[`padding-x-${paddingX}`],
        styles[`radius-${radius}`],
        {
          [styles.hoverable]: hoverable,
        },
        className,
      )}
      {...rest}
    />
  );
};
