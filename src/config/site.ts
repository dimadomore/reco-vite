export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + NextUI",
  description: "Reco task",
  navItems: [
    {
      label: "Apps",
      href: "/apps",
    },
    {
      label: "Data",
      href: "/apps",
    },
    {
      label: "Indentities",
      href: "/apps",
    },
    {
      label: "Alerts",
      href: "/apps",
    },
    {
      label: "Investigation Center",
      href: "/apps",
    },
    {
      label: "configurations",
      href: "/apps",
    },
  ],
  navMenuItems: [
    {
      label: "Settings",
      href: "/settings",
    },

    {
      label: "Logout",
      href: "/logout",
    },
  ],
};
