import { Column } from "@/components/uikit/Column/Column";
import { Title } from "@/components/uikit/Title/Title";
import { Box } from "@/components/uikit/Box/Box";
import type { Props } from "./PlaygroundComponent.types";
import { Select } from "@/components/uikit/Select/Select";
import { SelectOption } from "@/components/uikit/Select/_components/SelectOption/SelectOption";
import { Field } from "@/components/uikit/Field/Field";
import { getType } from "@/helpers/getType";
import { Switch } from "@/components/uikit/Switch/Switch";
import { Button } from "@/components/uikit/Button/Button";
import { INPUT_WIDTH, LABEL_WIDTH } from "./PlaygroundComponent.constants";
import { Hidden } from "@/components/uikit/Hidden/Hidden";

export const PlaygroundComponent = (
  {
    name,
    title,
    component,
    componentLight,
    componentDark,
    props,
    setProps,
    settings,
    defaultChosenProps,
  }: Props) => {
  return (
    <Box
      variant="outline"
      color="primary"
      tone="soft"
      borderWidth={2}
      borderStyle="dashed"
      direction="row"
      fullwidth
      mobileDirection="column"
      mobileGap={64}
    >
      <Column
        gap={16}
        fullwidth
      >
        {title && (
          <Hidden on="tablet-max">
            <Title size="s">
              {title}
            </Title>
          </Hidden>
        )}
        <Column
          gap={16}
          grow={1}
          fullwidth
          mobileGap={0}
        >
          <Box
            color="transparent"
            direction="row"
            padding={32}
            fullwidth
            align="center"
            justify="center"
            grow={1}
          >
            {componentLight ? componentLight : component}
          </Box>
          <Box
            color="primary"
            tone="base"
            direction="row"
            padding={32}
            fullwidth
            align="center"
            justify="center"
            grow={1}
          >
            {componentDark ? componentDark : component}
          </Box>
        </Column>
      </Column>
      <Column
        align="stretch"
        gap={16}
      >
        {Object.keys(settings).map((key) => {
          if (getType(settings[key]) === "array") {
            const setProp = (value) => {
              const isVariant = key === "variant";
              const isControlSize = (name === "Button" || name === "Select") && key === "size";
              const isPadding = key === "padding";
              const isPaddingY = key === "paddingY";
              const isPaddingX = key === "paddingX";

              if (isVariant) {
                const isOutline = value === "outline";

                setProps(prev => ({
                  ...prev,
                  variant: value,
                  borderStyle: isOutline ? "solid" : "none",
                  borderWidth: isOutline ? 1 : 0,
                }));
              } else if (isControlSize) {
                const getRadius = () => {
                  if (value === "s") return 8;
                  if (value === "m") return 12;
                  if (value === "l") return 16;
                };

                setProps(prev => ({
                  ...prev,
                  size: value,
                  radius: getRadius(),
                }));
              } else if (isPadding) {
                setProps(prev => ({
                  ...prev,
                  padding: Number(value),
                  paddingY: null,
                  paddingX: null,
                }));
              } else if (isPaddingY) {
                setProps(prev => ({
                  ...prev,
                  padding: null,
                  paddingY: Number(value),
                }));
              } else if (isPaddingX) {
                setProps(prev => ({
                  ...prev,
                  padding: null,
                  paddingX: Number(value),
                }));
              } else {
                setProps(prev => ({
                  ...prev,
                  [key]: value,
                }));
              }
            };

            return (
              <Field
                key={key}
                label={key}
                labelPosition="left"
                labelWidth={LABEL_WIDTH}
              >
                <Select
                  value={props[key] ? props[key] : 0}
                  size="s"
                  width={INPUT_WIDTH}
                  onChange={setProp}
                >
                  {settings[key].map(variant => (
                    <SelectOption
                      key={variant}
                      label={variant}
                    />
                  ))}
                </Select>
              </Field>
            );
          }

          if (getType(settings[key]) === "boolean") {
            return (
              <Field
                key={key}
                label={key}
                labelPosition="left"
                labelWidth={LABEL_WIDTH}
              >
                <Switch
                  size="s"
                  checked={settings[key]}
                  onChange={(value) => setProps(prev => ({...prev, [key]: value}))}
                />
              </Field>
            );
          }
        })}
        <Button
          tone="soft"
          size="s"
          iconStart="reload"
          fullwidth
          onClick={() => setProps((prev) => ({...prev, ...defaultChosenProps}))}
        >
          Reset
        </Button>
      </Column>
    </Box>
  );
};