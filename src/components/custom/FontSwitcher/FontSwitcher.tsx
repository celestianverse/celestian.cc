"use client";
import Cookies from "js-cookie";
import { useShallow } from "zustand/react/shallow";
import { useUserContext } from "@/contexts/UserContext/UserContext";
import { Button } from "@/components/uikit/Button/Button";
import { Segments } from "@/components/uikit/Segments/Segments";
import { FONT } from "@/constants/font";
import type { Props } from "./FontSwitcher.types";

export const FontSwitcher = ({color = "primary"}: Props) => {
  const {font, setFont} = useUserContext(useShallow((state) => ({
    font: state.font,
    setFont: state.setFont,
  })));

  const handleChooseFont = async (font) => {
    setFont(font);
    Cookies.set("font", font);

    document.documentElement.setAttribute("data-font", font);
  };

  return (
    <Segments color={color}>
      <Button
        variant="ghost"
        color={color}
        size="s"
        active={font === FONT.m}
        square
        onClick={() => handleChooseFont(FONT.m)}
      >
        a
      </Button>
      <Button
        variant="ghost"
        color={color}
        size="s"
        active={font === FONT.l}
        square
        onClick={() => handleChooseFont(FONT.l)}
      >
        A
      </Button>
    </Segments>
  );
};
