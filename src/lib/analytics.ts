/**
 * Lightweight analytics helper.
 * Safe no-op when GA4 / GTM / Meta Pixel scripts are absent or fail to load.
 * Never blocks navigation.
 */

type Params = Record<string, unknown>;

type WindowWithTrackers = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

function getWindow(): WindowWithTrackers | null {
  return typeof window === "undefined" ? null : (window as WindowWithTrackers);
}

/** Send a generic event to GA4 and GTM dataLayer. */
export function trackEvent(name: string, params: Params = {}): void {
  const w = getWindow();
  if (!w) return;
  try {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: name, ...params });
    w.gtag?.("event", name, params);
  } catch {
    /* analytics must never break the page */
  }
}

/** Send a Meta Pixel standard event. */
export function trackPixel(name: string, params: Params = {}): void {
  const w = getWindow();
  if (!w) return;
  try {
    w.fbq?.("track", name, params);
  } catch {
    /* noop */
  }
}

export function trackPageView(): void {
  trackEvent("page_view", { page_path: getWindow()?.location.pathname });
  trackPixel("PageView");
}

export function trackViewRegistration(): void {
  trackEvent("view_registration");
  trackPixel("ViewContent", { content_name: "registration_section" });
}

export function trackScrollDepth(depth: 50 | 90): void {
  trackEvent(`scroll_${depth}`);
}

export type PaymentMethod = "pix" | "card";

/** Track a payment intent, then open the payment link (analytics never blocks it). */
export function trackPaymentClick(method: PaymentMethod): void {
  trackEvent(method === "pix" ? "click_pix_payment" : "click_card_payment", {
    payment_method: method,
  });
  trackPixel("InitiateCheckout", { payment_method: method });
}

export function trackWhatsappClick(): void {
  trackEvent("click_whatsapp");
}

/** Opens an external URL safely in a new tab. */
export function openExternal(url: string): void {
  if (!url) return;
  const w = getWindow();
  w?.open(url, "_blank", "noopener,noreferrer");
}
