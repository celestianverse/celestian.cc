import Image from "next/image";
import { Column } from "@/components/uikit/Column/Column";
import { Title } from "@/components/uikit/Title/Title";
import { Row } from "@/components/uikit/Row/Row";
import { Box } from "@/components/uikit/Box/Box";
import type { Props } from "./Stack.types";
import styles from "./Stack.module.scss";

export const Stack = ({ data }: Props) => {
  return (
    <Box
      as="article"
      color="primary"
      variant="outline"
      tone="soft"
      borderStyle="dashed"
      borderWidth={2}
      justify="space-between"
      gap={8}
      mobilePadding={24}
      className={styles.stack}
    >
      <Column gap={8}>
        {data.titles.map((title) => (
          <Title
            key={title}
            as="h4"
            size="xs"
          >
            {title}
          </Title>
        ))}
      </Column>
      <Row justify="flex-end">
        <Image
          width={72}
          height={72}
          src={data.image}
          alt={data.name}
          quality={100}
          className={styles.image}
        />
      </Row>
    </Box>
  );
};