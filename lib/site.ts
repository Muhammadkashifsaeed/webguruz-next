import type { IconType } from "react-icons";
import {
  FaBuilding,
  FaRocket,
  FaSyncAlt,
  FaCommentDots,
  FaCogs,
  FaTrophy,
  FaUsers,
  FaLayerGroup,
  FaLeaf,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaShoppingCart,
  FaTag,
  FaStore,
  FaMicrophone,
  FaGlobe,
  FaLightbulb,
  FaBoxOpen,
  FaPenNib,
  FaGoogle,
  FaShoppingBag,
  FaUndo,
  FaAmazon,
  FaMapPin,
  FaCertificate,
  FaYoutube,
  FaFacebook,
  FaQuestion,
  FaRobot,
  FaPuzzlePiece,
  FaCompass,
  FaMagic,
  FaBriefcase,
  FaGraduationCap,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaBlog,
  FaChartPie,
  FaMedal,
  FaWrench,
} from "react-icons/fa";

export type AboutItem = {
  name: string;
  slug: string;
  icon: IconType;
  image: string;
  description?: string;
};

export type ServiceItem = {
  name: string;
  slug: string;
  icon: IconType;
  description?: string;
};

export type ServiceGroup = {
  title: string;
  items: ServiceItem[];
};

export const aboutPages: AboutItem[] = [
  {
    name: "Our Company",
    slug: "our-company",
    icon: FaBuilding,
    image: "/images/leader-1.webp",
  },
  {
    name: "Startup and MVP",
    slug: "startup-and-mvp",
    icon: FaRocket,
    image: "/images/leader-2.webp",
  },
  {
    name: "Agile Software Development",
    slug: "agile-software-development",
    icon: FaSyncAlt,
    image: "/images/leader-3.webp",
  },
  {
    name: "Client Testimonials",
    slug: "client-testimonials",
    icon: FaCommentDots,
    image: "/images/leader-4.webp",
  },
  {
    name: "How We Work",
    slug: "how-we-work",
    icon: FaCogs,
    image: "/images/leader-5.webp",
  },
  {
    name: "Awards & Recognition",
    slug: "awards-recognition",
    icon: FaTrophy,
    image: "/images/leader-6.webp",
  },
  {
    name: "Leadership Team",
    slug: "leadership-team",
    icon: FaUsers,
    image: "/images/leader-7.webp",
  },
  {
    name: "Full Cycle Product Development",
    slug: "full-cycle-product-development",
    icon: FaLayerGroup,
    image: "/images/leader-8.webp",
  },
];

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Search Engine Optimization",
    items: [
      { name: "Organic SEO", slug: "organic-seo", icon: FaLeaf },
      { name: "Local SEO", slug: "local-seo", icon: FaMapMarkerAlt },
      { name: "Technical SEO", slug: "technical-seo", icon: FaCogs },
      { name: "Mobile SEO", slug: "mobile-seo", icon: FaMobileAlt },
      { name: "E-commerce SEO", slug: "ecommerce-seo", icon: FaShoppingCart },
      { name: "White Label SEO", slug: "white-label-seo", icon: FaTag },
      { name: "Small Business SEO", slug: "small-business-seo", icon: FaStore },
      { name: "Voice Search Optimization", slug: "voice-search-optimization", icon: FaMicrophone },
      { name: "International SEO", slug: "international-seo", icon: FaGlobe },
      { name: "SEO Consulting & Strategy", slug: "seo-consulting-strategy", icon: FaLightbulb },
      { name: "SEO Packages", slug: "seo-packages", icon: FaBoxOpen },
      { name: "Content Writing Services", slug: "content-writing-services", icon: FaPenNib },
      { name: "Bing SEO", slug: "bing-seo", icon: FaCompass },
    ],
  },
  {
    title: "Pay Per Click Management",
    items: [
      { name: "Google Ads Optimization", slug: "google-ads-optimization", icon: FaGoogle },
      { name: "E-commerce PPC Management", slug: "ecommerce-ppc-management", icon: FaShoppingBag },
      { name: "Remarketing Ads", slug: "remarketing-ads", icon: FaUndo },
      { name: "Amazon PPC Management", slug: "amazon-ppc-management", icon: FaAmazon },
      { name: "Local PPC Management", slug: "local-ppc-management", icon: FaMapPin },
      { name: "White Label PPC Management", slug: "white-label-ppc-management", icon: FaCertificate },
      { name: "Youtube Ads", slug: "youtube-ads", icon: FaYoutube },
      { name: "Meta Ads", slug: "meta-ads", icon: FaFacebook },
    ],
  },
  {
    title: "AI Search Services",
    items: [
      { name: "Answer Engine Optimization Services", slug: "answer-engine-optimization-services", icon: FaQuestion },
      { name: "AI SEO Services", slug: "ai-seo-services", icon: FaRobot },
      { name: "ChatGPT SEO", slug: "chatgpt-seo", icon: FaCommentDots },
      { name: "AI Integration Services", slug: "ai-integration-services", icon: FaPuzzlePiece },
      { name: "Perplexity AI SEO", slug: "perplexity-ai-seo", icon: FaCompass },
      { name: "Search Everywhere Optimization Services", slug: "search-everywhere-optimization-services", icon: FaGlobe },
      { name: "Generative Engine Optimization", slug: "generative-engine-optimization", icon: FaMagic },
      { name: "Google AI SEO", slug: "google-ai-seo", icon: FaGoogle },
    ],
  },
];

export const allServices: ServiceItem[] = serviceGroups.flatMap((g) => g.items);

export type ResourceItem = {
  name: string;
  slug: string;
  icon: IconType;
  image: string;
  description?: string;
};

export const resourcePages: ResourceItem[] = [
  {
    name: "Blogs",
    slug: "blogs",
    icon: FaBlog,
    image: "/images/resourse-1.webp",
  },
  {
    name: "Infographics",
    slug: "infographics",
    icon: FaChartPie,
    image: "/images/resourses-2.webp",
  },
  {
    name: "HubSpot Platinum Partner",
    slug: "hubspot-platinum-partner",
    icon: FaMedal,
    image: "/images/resourses-3.webp",
  },
  {
    name: "Tools",
    slug: "tools",
    icon: FaWrench,
    image: "/images/resourses-3.webp",
  },
];

export type JoinUsItem = {
  name: string;
  slug: string;
  icon: IconType;
  description?: string;
};

export const joinUsPages: JoinUsItem[] = [
  { name: "Careers", slug: "careers", icon: FaBriefcase },
  { name: "Internship Program", slug: "internship-program", icon: FaGraduationCap },
  { name: "Life@WebGuruz", slug: "life-webguruz", icon: FaHeart },
];
