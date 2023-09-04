import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
var Negotiator = require("negotiator");

let locales = ["en", "fr"];

function getLocale(request: any) {
  let languages = new Negotiator({ request });
  let defaultLocale = "fr";
  return match(languages, locales, defaultLocale);
}

export function middleware(request: any) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    );
  }
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
