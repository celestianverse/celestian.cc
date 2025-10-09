import { routes } from "@/configs/routes";

export const uikitNavigation = {
  dataDisplay: {
    title: "Data display",
    pages: {
      title: {
        title: routes.uikit.dataDisplay.title.name,
        path: routes.uikit.dataDisplay.title.path,
      },
      text: {
        title: routes.uikit.dataDisplay.text.name,
        path: routes.uikit.dataDisplay.text.path,
      },
      tag: {
        title: routes.uikit.dataDisplay.tag.name,
        path: routes.uikit.dataDisplay.tag.path,
      },
      icon: {
        title: routes.uikit.dataDisplay.icon.name,
        path: routes.uikit.dataDisplay.icon.path,
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
      segments: {
        title: routes.uikit.controls.segments.name,
        path: routes.uikit.controls.segments.path,
      },
      select: {
        title: routes.uikit.controls.select.name,
        path: routes.uikit.controls.select.path,
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
