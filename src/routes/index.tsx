import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { JourneySection } from "@/components/sections/JourneySection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { EmotionalSection } from "@/components/sections/EmotionalSection";
import { EventDetailsSection } from "@/components/sections/EventDetailsSection";
import { RegistrationSection } from "@/components/sections/RegistrationSection";
import { UrgencySection } from "@/components/sections/UrgencySection";
import { FaqSection, FAQ_ITEMS } from "@/components/sections/FaqSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { StickyMobileCta } from "@/components/sections/StickyMobileCta";
import { eventConfig } from "@/config/eventConfig";
import { trackPageView, trackScrollDepth } from "@/lib/analytics";

const PAGE_TITLE = "Seminário João Miyao em Blumenau | 22 de Outubro";
const PAGE_DESCRIPTION =
  "Participe do seminário presencial de João Miyao em Blumenau no dia 22 de outubro. Aprenda Jiu-Jitsu diretamente com um dos grandes nomes da modalidade.";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: eventConfig.eventName,
  description: PAGE_DESCRIPTION,
  startDate: eventConfig.eventDateISO,
  endDate: eventConfig.eventEndISO,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: eventConfig.venue,
    address: {
      "@type": "PostalAddress",
      addressLocality: eventConfig.city,
      addressRegion: eventConfig.state,
      addressCountry: eventConfig.country,
    },
  },
  performer: { "@type": "Person", name: "João Miyao" },
  organizer: { "@type": "Organization", name: eventConfig.eventName },
  url: "/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: "Seminário João Miyao em Blumenau" },
      {
        property: "og:description",
        content:
          "Dia 22 de outubro, João Miyao estará em Blumenau para um seminário presencial de Jiu-Jitsu. Garanta sua vaga.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(eventJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
});

/** Tracks page_view once and scroll depth milestones. */
function useLandingAnalytics() {
  useEffect(() => {
    trackPageView();

    const reached = new Set<number>();
    const onScroll = () => {
      const scrolled =
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      for (const depth of [50, 90] as const) {
        if (scrolled * 100 >= depth && !reached.has(depth)) {
          reached.add(depth);
          trackScrollDepth(depth);
        }
      }
      if (reached.size === 2) window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

function LandingPage() {
  useLandingAnalytics();

  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <StorySection />
        <JourneySection />
        <AchievementsSection />
        <ExperienceSection />
        <AudienceSection />
        <EmotionalSection />
        <EventDetailsSection />
        <RegistrationSection />
        <UrgencySection />
        <FaqSection />
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </div>
  );
}
