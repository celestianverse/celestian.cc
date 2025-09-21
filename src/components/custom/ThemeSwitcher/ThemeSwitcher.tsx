"use client";
import Cookies from "js-cookie";
import { useShallow } from "zustand/react/shallow";
import { useUserContext } from "@/contexts/UserContext/UserContext";
import { Button } from "@/components/uikit/Button/Button";
import { Segmented } from "@/components/uikit/Segmented/Segmented";
import { THEME } from "@/constants/theme";
import type { Props } from "./ThemeSwitcher.types";

export const ThemeSwitcher = ({ color = "primary" }: Props) => {
  const { theme, setTheme } = useUserContext(useShallow((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
  })));

  const handleChooseTheme = async (theme) => {
    setTheme(theme);
    Cookies.set("theme", theme);

    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <Segmented color={color}>
      <Button
        variant="ghost"
        color={color}
        size="s"
        iconOnly="sun"
        active={theme === THEME.light}
        onClick={() => handleChooseTheme(THEME.light)}
      />
      <Button
        variant="ghost"
        color={color}
        size="s"
        iconOnly="moon"
        active={theme === THEME.dark}
        onClick={() => handleChooseTheme(THEME.dark)}
      />
    </Segmented>
  );
};
