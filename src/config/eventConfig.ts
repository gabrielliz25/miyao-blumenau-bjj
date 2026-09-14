/**
 * Central event configuration.
 * All event data and external URLs must be read from here — never hardcoded in components.
 */
export const eventConfig = {
  eventName: "Seminário João Miyao",
  eventDate: "22 de outubro",
  eventDateISO: "2026-10-22T19:00:00-03:00",
  eventEndISO: "2026-10-22T22:00:00-03:00",
  eventTime: "19h",
  venue: "SESI Blumenau",
  city: "Blumenau",
  state: "SC",
  stateName: "Santa Catarina",
  country: "BR",
  pixPaymentUrl: "", // [ADD PIX PAYMENT LINK]
  cardPaymentUrl: "", // [ADD CREDIT CARD PAYMENT LINK]
  instagramUrl: "",
  whatsappUrl: "",
  mapsEmbedUrl: "", // Google Maps embed URL (optional, added later)
} as const;

export const REGISTRATION_SECTION_ID = "inscricao";
