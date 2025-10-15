import { cloneElement, useId } from "react";
import classNames from "classnames";
import type { FieldProps } from "./Field.types";
import styles from "./Field.module.scss";
import { Text } from "@/components/uikit/Text/Text";
import { Flex } from "@/components/uikit/Flex/Flex";

export const Field = (
  {
    label,
    labelPosition = "top",
    labelWidth,
    className,
    children,
  }: FieldProps) => {
  const id = useId();

  const getDirection = () => {
    if (labelPosition === "top") return "column";

    if (labelPosition === "left") return "row";

    if (labelPosition === "right") return "row-reverse";
  };

  return (
    <Flex
      direction={getDirection()}
      align={labelPosition === "top" ? "flex-start" : "center"}
      gap={labelPosition === "top" ? 4 : 8}
      className={classNames(
        styles.field,
        className,
      )}
    >
      <Text
        as="label"
        size="s"
        htmlFor={id}
        className={styles.label}
        style={{width: labelWidth}}
      >
        {label}
      </Text>
      {cloneElement(children, { id })}
    </Flex>
  );
};