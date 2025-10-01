import { routes } from "@/configs/routes";

export const uikitNavigation = {
  general: {
    title: "General",
    pages: {
      colors: {
        title: routes.uikit.general.colors.title,
        path: routes.uikit.general.colors.path,
      },
    },
  },
  controls: {
    title: "Controls",
    pages: {
      anchor: {
        title: routes.uikit.controls.anchor.title,
        path: routes.uikit.controls.anchor.path,
      },
      button: {
        title: routes.uikit.controls.button.title,
        path: routes.uikit.controls.button.path,
      },
      switch: {
        title: routes.uikit.controls.switch.title,
        path: routes.uikit.controls.switch.path,
      },
    },
  },
};
