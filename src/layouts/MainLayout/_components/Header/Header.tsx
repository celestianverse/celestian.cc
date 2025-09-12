import { Section } from "@/components/uikit/Section/Section";
import { Row } from "@/components/uikit/Row/Row";
import { Title } from "@/components/uikit/Title/Title";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <Section
      as="header"
      paddingY="none"
      justify="center"
      className={styles.header}
    >
      <Row justify="space-between">
        <Title>C.</Title>
      </Row>
    </Section>
  );
};
