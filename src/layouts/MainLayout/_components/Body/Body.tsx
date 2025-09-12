import React from "react";
import styles from "./Body.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Body = ({ children }: Props) => {
  return (
    <main className={styles.body}>
      {children}
    </main>
  );
};
