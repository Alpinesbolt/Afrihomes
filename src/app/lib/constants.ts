import { LucideIcon, Mail, MapPin, PhoneCall } from "lucide-react";

interface NavbarItems {
  title: string;
  ref: string;
}

interface Contact {
  Icon: LucideIcon;
  content: string;
}

interface OperationalTime{
  days: string; time:string
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

export const footerItems: NavbarItems[] = [
  {
    title: "about us",
    ref: "/about",
  }, {
    title: "blog",
    ref: "/blog",
  },
  {
    title: "properties",
    ref: "/properties",
  },
  {
    title: "see realtors",
    ref: "/realtors",
  },
  {
    title: "FAQs",
    ref: "/faq",
  },
 
];



export const contact:Contact[] = [
  {Icon: PhoneCall, content: "+2347011541583"},
  {Icon: MapPin, content: "Last floor, God of mercy plaza, opposite Geogold hotel, beside Nwoke Udi palm wine bar, Abakaliki street, Awka Anambra state Nigeria."},
  {Icon: Mail, content: "afrihomes@gmail.com"}
]

export const operationalTime:OperationalTime[] = [
  {
  days: "monday-friday", time: "8am-5pm"
},
  {
  days: "Saturday", time: "11am -5pm"
},
  {
  days: "sunday", time: "closed"
},
]
export const searchTabs: string[] = ["buy", "realtors"];
