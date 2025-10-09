import React from "react";
import classNames from "classnames";
import { ICONS } from "./Icon.constants";
import type { IconProps } from "./Icon.types";
import styles from "./Icon.module.scss";

export const Icon = (
  {
    name = "none",
    color = "inherit",
    size = "m",
    className,
  }: IconProps) => {
  const Component = ICONS[name];

  return (
    <span
      aria-hidden="true"
      className={classNames(
        styles.icon,
        styles[`color-${color}`],
        styles[`size-${size}`],
        className,
      )}
    >
      <Component/>
    </span>
  );
};
