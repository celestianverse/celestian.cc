import React from "react";
import type { HiddenProps } from "./Hidden.types";
import styles from "./Hidden.module.scss";

export const Hidden = ({ on, children }: HiddenProps) => {
  return (
    <div className={styles[`hidden-${on}`]}>
      {children}
    </div>
  );
};
