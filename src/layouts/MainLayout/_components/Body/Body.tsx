import type { Props } from "./Body.types";
import styles from "./Body.module.scss";

export const Body = ({ children }: Props) => {
  return (
    <main className={styles.body}>
      {children}
    </main>
  );
};
