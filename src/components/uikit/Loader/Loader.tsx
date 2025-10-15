import classNames from "classnames";
import type { LoaderProps } from "./Loader.types";
import styles from "./Loader.module.scss";

export const Loader = (
  {
    color = "primary",
    size = "m",
    className,
  }: LoaderProps) => {
  return (
    <div
      className={classNames(
        styles.loader,
        styles[`color-${color}`],
        styles[`size-${size}`],
        className,
      )}
    >
      <svg viewBox="22 22 44 44">
        <circle
          cx={44}
          cy={44}
          r={20.2}
          fill="none"
          strokeWidth={2.8}
          className={classNames(styles.item)}
        />
      </svg>

    </div>
  );
};
