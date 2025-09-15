import type { Props } from "./Document.types";
import styles from "./Document.module.scss";

export const Document = ({ children }: Props) => {
  return (
    <div className={styles.document}>
      {children}
    </div>
  );
};
