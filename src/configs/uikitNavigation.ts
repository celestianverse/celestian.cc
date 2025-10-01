import { routes } from "@/configs/routes";

export const uikitNavigation = {
  typography: {
    title: "Typography",
    pages: {
      title: {
        title: routes.uikit.typography.title.name,
        path: routes.uikit.typography.title.path,
      },
      text: {
        title: routes.uikit.typography.text.name,
        path: routes.uikit.typography.text.path,
      },
    },
  },
  controls: {
    title: "Controls",
    pages: {
      anchor: {
        title: routes.uikit.controls.anchor.name,
        path: routes.uikit.controls.anchor.path,
      },
      button: {
        title: routes.uikit.controls.button.name,
        path: routes.uikit.controls.button.path,
      },
      switch: {
        title: routes.uikit.controls.switch.name,
        path: routes.uikit.controls.switch.path,
      },
    },
  },
  general: {
    title: "General",
    pages: {
      colors: {
        title: routes.uikit.general.colors.name,
        path: routes.uikit.general.colors.path,
      },
    },
  },
};
