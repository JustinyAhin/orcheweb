import { sdk } from "./client";
import { renderRichText } from "@storyblok/astro";

export type Feature = {
  icon: {
    filename: string;
    alt: string;
  };
  title: string;
  description: string;
};

// Site settings
const {
  data: {
    SettingsItem: { content: settings },
  },
} = await sdk.SiteSettings();

// Homepage
const {
  data: {
    HomepageItem: { content: homepage },
  },
} = await sdk.HomePage();

homepage.features.forEach((feature: Feature) => {
  feature.description = renderRichText(feature.description);
});

// Case studies
const {
  data: {
    CasestudyItems: { items: caseStudies },
  },
} = await sdk.CaseStudies();

caseStudies.forEach((caseStudy) => {
  caseStudy.content.description = renderRichText(caseStudy.content.description);
});

// FAQ
const {
  data: {
    FaqItems: { items: faq },
  },
} = await sdk.Faqs();

faq.forEach((faqItem) => {
  faqItem.content.answer = renderRichText(faqItem.content.answer);
});

export { settings, homepage, caseStudies, faq };
