import React from "react";
import type { Props } from "./Hidden.types";
import styles from "./Hidden.module.scss";

export const Hidden = ({ on, children }: Props) => {
  return (
    <div className={styles[`hidden-${on}`]}>
      {children}
    </div>
  );
};
