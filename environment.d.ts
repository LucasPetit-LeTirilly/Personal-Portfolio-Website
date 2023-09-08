declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_WEBSITE_URL: string;
      NEXT_PUBLIC_WEBSITE_ENGLISH_URL: string;
      NEXT_PUBLIC_WEBSITE_FRENCH_URL: string;
      NEXT_PUBLIC_GITHUB_URL: string;
      NEXT_PUBLIC_LINKEDIN_URL: string;
      NEXT_PUBLIC_MAIL_USERNAME: string;
      NEXT_PUBLIC_MAIL_PASSWORD: string;
      NEXT_PUBLIC_OAUTH_CLIENTID: string;
      NEXT_PUBLIC_OAUTH_CLIENT_SECRET: string;
      NEXT_PUBLIC_OAUTH_REFRESH_TOKEN: string;
    }
  }
}

export {};
