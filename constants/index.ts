import { MouseEventHandler } from "react";
// NAVIGATION
export const NAV_LINKS = [
  { href: "#get-in-touch", key: "home", label: "Home" },
  { href: "#fallOn", key: "services", label: "Services" },
  { href: "/", key: "pricing ", label: "Pricing" },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Book appointments effortlessly",
    icon: "/map.svg",
    variant: "green",
    description:
      "Effortlessly schedule appointments with our intuitive chatbot, optimizing convenience for seamless booking experiences. Elevate your appointment-setting process with our user-friendly and efficient solution.",
  },
  {
    title: "24x7 Support for maintenance.",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Our 24x7 Maintenance Support ensures uninterrupted operations. With constant assistance, keeping your business running smoothly. Rely on our dedicated team for prompt and reliable maintenance support anytime, anywhere.",
  },
  {
    title: "Automate Lead Capture, vetting & more...",
    icon: "/tech.svg",
    variant: "green",
    description:
      "At AI-Ware-Lab, we craft sophisticated automations to streamline your business workflows, enhancing sales, reducing costs, and boosting productivity.",
  },
  {
    title: "Chatbot will be trained on your business FAQs",
    icon: "/location.svg",
    variant: "orange",
    description:
      "We develop AI powered chatbot trained on your data relevant to your business. Answer queries with intelligent FAQ support.",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      // "Press Releases",
      // "Environment",
      // "Jobs",
      // "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "webseoul@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};
