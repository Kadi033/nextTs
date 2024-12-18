import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["en", "ka"];
let defaultLocale = "en";

function getLocale(request) {
  let negotiator = new Negotiator({ headers: request.headers });
  let languages = negotiator.languages();

  console.log("Detected languages:", languages);

  if (!languages || languages.length === 0 || languages[0] === "*") {
    console.warn("No valid languages found, defaulting to", defaultLocale);
    return defaultLocale;
  }

  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore API routes and paths that already have a locale
  if (pathname.startsWith("/api/")) return;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Ignore Stripe's success and cancel URLs
  if (
    pathname.startsWith("/donate-with-checkout/result") || 
    pathname.startsWith("/donate-with-embedded-checkout/result")
  ) {
    return;
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next|api|donate-with-checkout/result|donate-with-embedded-checkout/result).*)",
  ],
};
