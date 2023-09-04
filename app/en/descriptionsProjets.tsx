export const descriptionsProjets = [
  {
    title: "React project of the OpenClassrooms training program",
    images: ["/projet-react-capture1.png", "/projet-react-capture2.png"],
    date: "July 2023",
    lienGithub:
      "https://github.com/LucasPetit-LeTirilly/Projet-React-OpenClassrooms",
    description:
      'This entirely responsive frontend app is a recreation of an appartment renting website. It is made of a landing page where the products are displayed as cards. Clicking on a card directs the user to the appartment\'s page where all of the informations are present. The app also contains an "About" section and an error page to redirect the user if an incorrect url is entered.',
    competences:
      " Made from scratch following the interface design, this project allowed me to develop skills in React (component, routing, hooks, context etc) as well as SCSS/SASS. ",
    problemes:
      "The dynamic handling of the routes and the fetching and distribution of adequate data to each component.",
  },
  {
    title: "Node.js/Express.js project of the OpenClassrooms training program",
    images: [
      "/projet-backend-capture1.png",
      "/projet-backend-capture2.png",
      "/projet-backend-capture3.png",
    ],
    date: "August 2023",
    lienGithub:
      "https://github.com/LucasPetit-LeTirilly/Projet-Backend-Node.js-OpenClassrooms",
    description:
      "Development of the backend side of an book rating app. Built with Node.js and Express.js as the framework. The app allow the user to sign up, sign in and then post, rate, delete and update infos about the book they have read. The user can also rate books posted by other users. The backend handles all the CRUD functionalities and is secrued, it manages also the reading and writing of a MongoDatabase.",
    competences:
      "Utilisation de Node.js, Express.js et MongoDB. Ainsi que la création et l'utilisation de middlewares d'authentification, de gestion et de compression d'images, de validation d'inputs. J'ai également été amené a utiliser des packages, notamment de cryptographie et de sécurisation des headers. Node.js, Express.js and MongoDB. As well as how to create and use middlewares about authentication, images upload and compression, input validation. I also used, among others, cryptographic and header securing packages.",
    problemes:
      "Le défi était de faire un backend CRUD avec une API Restfull qui était sécurisé via un système de token délivré à la connection puis demandé à l'utilisateur à chaque action. Building a CRUB backend with a Restfull API, secured through tokens, who are initialy delivered then requested from the user at each request.",
  },
  {
    title: "Optimization/SEO project of the OpenClassrooms training program",
    images: [
      "/projet-optimisation-capture1.png",
      "/projet-optimisation-capture2.png",
    ],
    date: "June 2023",
    lienGithub:
      "https://github.com/LucasPetit-LeTirilly/Projet-Optimisation-OpenClassrooms",
    description:
      "Technical optimization and improvement of the SEO and accessibility of a presentation website for a fictionnal professional photographer. The aim was to audit the website and do the necessary in order to improve the performances (loading time etc) and the SEO potential.",
    competences:
      "This project made me aware of the importance of performances, and how to maximize them through image compression and serving depending on the user's width device, minifying of files and order management of script execution. I had also the opportunity to learn about SEO's importance, metadata usage and web accessibility.",
    problemes:
      "Find which features it is most important to improve in order to reach maximum optimization and how  to enrich the website with corresponding metadatas.",
  },
];
