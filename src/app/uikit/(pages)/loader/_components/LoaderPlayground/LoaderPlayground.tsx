"use client";
import { useState } from "react";
import { COLOR } from "@/constants/color";
import { uikit } from "@/data/uikit";
import { buildComponentCode } from "@/helpers/buildComponentCode";
import { Playground } from "@/components/custom/Playground/Playground";
import { DEFAULT_CHOSEN_PROPS, DEFAULT_PROPS, NAME } from "./LoaderPlayground.constants";
import type { LoaderProps } from "@/components/uikit/Loader/Loader.types";
import { Loader } from "@/components/uikit/Loader/Loader";
import { LOADER_SIZE } from "@/components/uikit/Loader/Loader.constants";

export const LoaderPlayground = () => {
  const [props, setProps] = useState<LoaderProps>(DEFAULT_CHOSEN_PROPS);

  const LoaderComponent = (
    <Loader {...props} />
  );

  const settings = {
    color: COLOR,
    size: LOADER_SIZE,
  };

  const code = buildComponentCode<LoaderProps>({
    name: NAME,
    props,
    defaults: DEFAULT_PROPS,
  });

  return (
    <Playground.Root title={uikit.utilities.loader.longTitle}>
      <Playground.Component
        name={NAME}
        title={uikit.utilities.loader.longTitle}
        component={LoaderComponent}
        props={props}
        setProps={setProps}
        settings={settings}
        defaultChosenProps={DEFAULT_CHOSEN_PROPS}
      />
      <Playground.Code code={code} />
    </Playground.Root>
  );
};