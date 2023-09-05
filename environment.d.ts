declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_WEBSITE_URL: string;
      NEXT_PUBLIC_WEBSITE_ENGLISH_URL: string;
      NEXT_PUBLIC_WEBSITE_FRENCH_URL: string;
      NEXT_PUBLIC_GITHUB_URL: string;
      NEXT_PUBLIC_LINKEDIN_URL: string;
    }
  }
}

export {};
