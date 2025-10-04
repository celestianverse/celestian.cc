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
      tag: {
        title: routes.uikit.typography.tag.name,
        path: routes.uikit.typography.tag.path,
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
  meta: {
    title: "Meta",
    pages: {
      colors: {
        title: routes.uikit.meta.colors.name,
        path: routes.uikit.meta.colors.path,
      },
    },
  },
};
