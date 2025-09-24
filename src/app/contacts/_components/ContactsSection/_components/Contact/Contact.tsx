import Image from "next/image";
import classNames from "classnames";
import { Box } from "@/components/uikit/Box/Box";
import { Column } from "@/components/uikit/Column/Column";
import { Title } from "@/components/uikit/Title/Title";
import { Button } from "@/components/uikit/Button/Button";
import { Text } from "@/components/uikit/Text/Text";
import { Row } from "@/components/uikit/Row/Row";
import { Empty } from "@/components/uikit/Empty/Empty";
import type { Props } from "./Contact.types";
import styles from "./Contact.module.scss";

export const Contact = ({ data, className, ...rest }: Props) => {
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
      className={classNames(styles.box, className)}
      {...rest}
    >
      <Column gap={8}>
        <Title
          as="h4"
          size="xs"
        >
          {data.title}
        </Title>
        <Text>{data.subtitle}</Text>
      </Column>
      <Row
        align="flex-end"
        justify="space-between"
      >
        {data.link && (
          <Button
            as="a"
            href={data.link.url}
            target="_blank"
            variant="flat"
            color="info"
            iconStart="arrowUpRight"
            className={styles.button}
          >
            {data.link.label}
          </Button>
        )}
        <Empty />
        {data.image && (
          <Image
            width={72}
            height={72}
            src={data.image}
            alt={data.title}
            quality={100}
            className={styles.image}
          />
        )}
      </Row>
    </Box>
  );
};
