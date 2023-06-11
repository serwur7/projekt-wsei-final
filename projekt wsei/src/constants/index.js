//plik na static text, loga itd
import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "A star",
    content:
      "Nunc sed dolor volutpat, scelerisque risus sit amet,tincidunt libero. ",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "A shield",
    content:
      "Nam pulvinar urna elit, nec congue arcu egestas et. Sed nunc libero, ornare vitae lacus in,",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Send Icon",
    content:
      "accumsan maximus urna. In hac habitasse platea dictumst",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "We do things",
    name: "Martina B.",
    title: "Programmer",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "We make money",
    name: "John",
    title: "Banker",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "We do other things",
    name: "Mark",
    title: "Administrator",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Skill 1",
    value: "100%",
  },
  {
    id: "stats-2",
    title: "Skill 2",
    value: "100%",
  },
  {
    id: "stats-3",
    title: "Skill 3  & Skill 4",
    value: "50%",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.google.pl/",
      },
      {
        name: "How it Works",
        link: "https://www.google.pl/",
      },
      {
        name: "Create",
        link: "https://www.google.pl/",
      },
      {
        name: "Explore",
        link: "https://www.google.pl/",
      },
      {
        name: "Terms & Services",
        link: "https://www.google.pl/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.google.pl/",
      },
      {
        name: "Partners",
        link: "https://www.google.pl/",
      },
      {
        name: "Suggestions",
        link: "https://www.google.pl/",
      },
      {
        name: "Blog",
        link: "https://www.google.pl/",
      },
      {
        name: "Newsletters",
        link: "https://www.google.pl/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.google.pl/",
      },
      {
        name: "Become a Partner",
        link: "https://www.google.pl/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];