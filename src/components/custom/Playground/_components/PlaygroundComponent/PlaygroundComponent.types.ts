import type { ReactElement } from "react";

export type Props = {
  name: string;
  title?: string;
  component: ReactElement;
  props: object;
  setProps: (prev: object) => void;
  settings: object;
  defaultChosenProps: object;
};