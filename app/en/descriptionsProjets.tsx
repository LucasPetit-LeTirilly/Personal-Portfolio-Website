export const descriptionsProjets = [
  {
    title: "Developping the Glasswork Mastering website",
    images: [
      "/glasswork-mastering-capture1.png",
      "/glasswork-mastering-capture2.png",
      "/glasswork-mastering-capture3.png",
    ],
    imagesMobile: [
      "/glasswork-mastering-capture1Mobile.png",
      "/glasswork-mastering-capture2.png",
      "/glasswork-mastering-capture3.png",
    ],
    date: "November 2023 - January 2024",
    lienGithub: "",
    lien: "https://www.glassworkmastering.com",
    description:
      "Site created for the music mastering studio Glasswork Mastering. Built and designed following the specifications of the sound engineer in charge of the studio. Multilanguage website both presenting the studio and an e-commerce interface where the customers can order. After which they can transmit in great detail their wishes and expectations for the mastering of their music through specials forms.",
    competences:
      "Developed with Next.js (React framework) both for frontend and backend (thanks to the Next.js API feature) and Typescript. With Stripe as the payment API, Tailwind CSS for the styling and designed on Figma.",
    problemes:
      "The most demanding feature was the form system allowing the customers to transmit information. Because they are interdependents, some are about Projects, other about Titles and some for paid options. Finding the right balance between user experience and robustness required special attention.",
  },
  {
    title: "Debugging and maintenance of the Hesra Studio website ",
    images: ["/hesra-studio-capture1.png", "/hesra-studio-capture2.png"],
    imagesMobile: [],
    date: "January 2024",
    lienGithub: "",
    lien: "https://hesrastudio.com",
    description:
      "Debugging and maintenance intervention on the Hesra Studio wordpress site. I had to correct the UI through Elementor, reconfigure the plugin in charge of the e-commerce aspect of the site (WooCommerce), restore the mail sending feature, and update other plugins and the backend server. Identifying the source of the different problems was the challenging aspect of this work.",
    competences:
      "Development on Wordpress, experience on UI/Frontend plugins (Elementor, WooCommerce) and on backend maintenance.",
    problemes:
      "Track the source of the bugs. Configure and resolve conflict between plugins. Checkup of the site features.",
  },
  {
    title: "Node.js/Express.js project of the OpenClassrooms training program",
    images: [
      "/projet-backend-capture1.png",
      "/projet-backend-capture2.png",
      "/projet-backend-capture3.png",
    ],
    imagesMobile: [],
    date: "August 2023",
    lienGithub:
      "https://github.com/LucasPetit-LeTirilly/Projet-Backend-Node.js-OpenClassrooms",
    lien: "",
    description:
      "Development of the backend side of an book rating app. Built with Node.js and Express.js as the framework. The app allow the user to sign up, sign in and then post, rate, delete and update infos about the book they have read. The user can also rate books posted by other users. The backend handles all the CRUD functionalities and is secrued, it manages also the reading and writing of a MongoDatabase.",
    competences:
      "Node.js, Express.js and MongoDB. As well as how to create and use middlewares about authentication, images upload and compression, input validation. I also used, among others, cryptographic and header securing packages.",
    problemes:
      "Building a CRUB backend with a Restfull API, secured through tokens, who are initialy delivered then requested from the user at each request.",
  },
];
