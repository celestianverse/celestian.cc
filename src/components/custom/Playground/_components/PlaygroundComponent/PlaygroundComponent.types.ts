import type { ReactElement } from "react";

export type Props = {
  name: string;
  title?: string;
  component: ReactElement;
  componentLight?: ReactElement;
  componentDark?: ReactElement;
  props: object;
  setProps: (prev: object) => void;
  settings: object;
  defaultChosenProps: object;
};