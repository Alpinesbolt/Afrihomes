interface NavbarItems {
  title: string;
  ref: string;
}

export const navbarItems: NavbarItems[] = [
  { title: "home", ref: "/" },
  {
    title: "about us",
    ref: "/about",
  },
  {
    title: "contact us",
    ref: "/contact",
  },
  {
    title: "properties",
    ref: "/properties",
  },
  {
    title: "blog",
    ref: "/blog",
  },
];

export const searchTabs: string[] = ["buy", "realtors"];
