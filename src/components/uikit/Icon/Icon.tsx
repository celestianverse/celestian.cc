import React from "react";
import classNames from "classnames";
import { ICONS } from "./Icon.constants";
import type { Props } from "./Icon.types";
import styles from "./Icon.module.scss";

export const Icon = ({
  name,
  className,
  color = "primary",
  size = "m",
}: Props) => {
  const Component = ICONS[name];

  return (
    <span
      aria-hidden="true"
      className={classNames(
        styles.icon,
        className,
        styles[size],
        styles[color],
      )}
    >
      <Component />
    </span>
  );
};
