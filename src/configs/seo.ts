import { app } from "@/configs/app";

export const seo = {
  home: {
    title: `Design & Frontend for your project — ${app.name}`,
  },
  projects: {
    title: `Latest projects — ${app.name}`,
  },
  uikit: {
    title: `UI kit library — ${app.name}`,
    typography: {
      title: {
        title: `Title component for UI kit library — ${app.name}`,
      },
      text: {
        title: `Text component for UI kit library — ${app.name}`,
      },
      tag: {
        title: `Tag component for UI kit library — ${app.name}`,
      },
    },
    controls: {
      anchor: {
        title: `Anchor component for UI kit library — ${app.name}`,
      },
      button: {
        title: `Button component for UI kit library — ${app.name}`,
      },
      switch: {
        title: `Switch component for UI kit library — ${app.name}`,
      },
      select: {
        title: `Select component for UI kit library — ${app.name}`,
      },
    },
    meta: {
      colors: {
        title: `Colors for UI kit library — ${app.name}`,
      },
    },
  },
  contacts: {
    title: `Contacts — ${app.name}`,
  },
};
