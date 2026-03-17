/**
 * Eventy pro GA4 / Google Ads konverze.
 * Snadné napojení na Google Ads jako konverze (event name = conversion label).
 */

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export function trackClickCall() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click_call", { send_to: "default" });
  }
}

export function trackClickWhatsApp() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click_whatsapp", { send_to: "default" });
  }
}

export function trackSubmitOrder() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "submit_order", { send_to: "default" });
  }
}
