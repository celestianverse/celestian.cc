"use client";
import { useState } from "react";
import classNames from "classnames";
import type { Props } from "./Playground.types";
import { Box } from "@/components/uikit/Box/Box";
import { Column } from "@/components/uikit/Column/Column";
import { Title } from "@/components/uikit/Title/Title";
import { uikit } from "@/data/uikit";
import { Button } from "@/components/uikit/Button/Button";
import type { ButtonProps } from "@/components/uikit/Button/Button.types";
import styles from "./Playground.module.scss";

export const Playground = ({className, children}: Props) => {
  const [props, setProps] = useState<ButtonProps>({
    variant: "flat",
    color: "primary",
    tone: "base",
    size: "m",
  });

  return (
    <Column
      gap={24}
      fullwidth
    >
      <Box
        variant="outline"
        borderWidth={2}
        borderStyle="dashed"
        direction="row"
        fullwidth
      >
        <Column fullwidth>
          <Title size="s">
            {uikit.pages.controls.button.title}
          </Title>
          <Box
            color="transparent"
            padding={64}
            fullwidth
            align="center"
            justify="center"
          >
            <Button
              variant={props.variant}
              color={props.color}
              tone={props.tone}
              size={props.size}
            >
              Button
            </Button>
          </Box>
        </Column>
        <Column>
          <select name="color" id="color">
            <option value="primary">primary</option>
            <option value="secondary">secondary</option>
            <option value="brand">brand</option>
            <option value="accent">accent</option>
            <option value="utility">utility</option>
            <option value="contrast">contrast</option>
            <option value="phantom">phantom</option>
            <option value="info">info</option>
            <option value="success">success</option>
            <option value="warning">warning</option>
            <option value="danger">danger</option>
          </select>
        </Column>
      </Box>
    </Column>
  );
};