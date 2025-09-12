import React from "react";
import styles from "./Document.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Document = ({ children }: Props) => {
  return (
    <div className={styles.document}>
      {children}
    </div>
  );
};
