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

  if (pathname.startsWith("/api/")) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
