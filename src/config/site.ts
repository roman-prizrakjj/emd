export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mainNav: NavItem[];
  links: {
    twitter?: string;
    github?: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "EMD.education",
  description: "Корпоративное обучение нейрокодингу и принципам внедрения AI инструментов в компании России.",
  url: "https://emd.education.example.com", // Replace with actual URL
  ogImage: "https://emd.education.example.com/og.jpg", // Replace with actual OG image
  mainNav: [
    {
      title: "Главная",
      href: "/#hero",
    },
    {
      title: "Услуги",
      href: "/#services",
    },
    {
      title: "О Нас",
      href: "/#about",
    },
    {
      title: "Персонализация",
      href: "/#personalized-learning",
    },
    {
      title: "Контакты",
      href: "/#contact",
    },
  ],
  links: {
    // Add social links if any
  },
};

