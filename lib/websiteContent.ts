// Interface for website_content.json structure
export interface WebsiteContent {
  homepage: {
    headline: string;
    subheadline: string;
    intro: string;
    signature_safaris: string[];
    why_travel_with_us: string[];
    featured_itineraries: string[];
    sustainability_highlight: string;
    cta: string;
  };
  about_us: {
    headline: string;
    story: string;
    philosophy: string;
    differentiators: string[];
    promise: string;
    cta: string;
  };
  wildlife_safaris: {
    headline: string;
    intro: string;
    why_choose: string[];
    sustainability: string[];
    experiences: string[];
    cta: string;
  };
  women_only_safaris: {
    headline: string;
    intro: string;
    why_choose: string[];
    sustainability: string[];
    experiences: string[];
    cta: string;
  };
  family_safaris: {
    headline: string;
    intro: string;
    why_choose: string[];
    sustainability: string[];
    experiences: string[];
    cta: string;
  };
  connection_safaris: {
    headline: string;
    intro: string;
    why_choose: string[];
    sustainability: string[];
    experiences: string[];
    cta: string;
  };
  marathon_safaris: {
    headline: string;
    intro: string;
    why_choose: string[];
    sustainability: string[];
    experiences: string[];
    cta: string;
  };
  sustainability_impact: {
    headline: string;
    pillars: string[];
    cta: string;
  };
  travel_information: {
    includes: string[];
    cta: string;
  };
  destinations: {
    countries: string[];
    cta: string;
  };
  blog: {
    sections: string[];
    cta: string;
  };
  contact: {
    details: string[];
    cta: string;
  };
}

// Import the content directly for client-side usage
import websiteContentData from "@/docs/website_content.json";

// Get the website content from website_content.json
export function getWebsiteContent(): WebsiteContent {
  return websiteContentData as WebsiteContent;
}
