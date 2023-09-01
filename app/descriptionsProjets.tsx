export const descriptionsProjets = [
  {
    title: "Projet React de la formation OpenClassrooms",
    images: ["/projet-react-capture1.png", "/projet-react-capture2.png"],
    date: "Juillet 2023",
    lienGithub:
      "https://github.com/LucasPetit-LeTirilly/Projet-React-OpenClassrooms",
    description:
      "Cette réalisation frontend entiérement responsive est une simulation d'un site de location de biens immobiliers. Elle est composée d'une page d'accueil où se trouve un apperçu des différents biens sous formes de cartes. En cliquant sur l'une des cartes on est dirigé vers la page correspondant au bien correspondant et sont affiché toutes ces informationc correspondantes. Le site est également composé d'une page \"À propos\" et d'une page de redirection en cas d'url incorrecte.",
    competences:
      "Développé de zero en partant de la maquette graphique, ce projet m'a permit d'acquérir les compétences en React (composant , routing, hooks, context, etc) ainsi qu'en SCSS/SASS que j'ai utilisé pour l'intégration graphique.",
    problemes:
      "Les principaux challenges de ce projet étaient de gérer dynamiquement les routes ainsi que de récupérer et passer les données aux composants les nécessitants.",
  },
  {
    title: "Projet Node.js/Express.js de la formation OpenClassrooms",
    images: [
      "/projet-backend-capture1.png",
      "/projet-backend-capture2.png",
      "/projet-backend-capture3.png",
    ],
    date: "Août 2023",
    lienGithub:
      "https://github.com/LucasPetit-LeTirilly/Projet-Backend-Node.js-OpenClassrooms",
    description:
      "Implémentation du backend d'un site de notations de livre. Je l'ai développé avec le runtime Node.js et Express.js comme framework. Le site permet à l'utilisateur de s'inscrire, se connecter, puis poster, supprimer, modifier la pages de présentation de ces livres. L'utilisateur peut également noter les livres postés par les autres utilisateur de l'application. Le backend gère toutes les opérations CRUD et est sécurisé, il prend également en charge la lecture/écriture sur une base de donnée MongoDB. ",
    competences:
      "Utilisation de Node.js, Express.js et MongoDB. Ainsi que la création et l'utilisation de middlewares d'authentification, de gestion et de compression d'images, de validation d'inputs. J'ai également été amené a utiliser des packages, notamment de cryptographie et de sécurisation des headers.",
    problemes:
      "Le défi était de faire un backend CRUD avec une API Restfull qui était sécurisé via un système de token délivré à la connection puis demandé à l'utilisateur à chaque action.",
  },
  {
    title: "Projet d'optimisation/SEO de la formation OpenClassrooms",
    images: [
      "/projet-optimisation-capture1.png",
      "/projet-optimisation-capture2.png",
    ],
    date: "Juin 2023",
    lienGithub:
      "https://github.com/LucasPetit-LeTirilly/Projet-Optimisation-OpenClassrooms",
    description:
      "Optimisation technique et amélioration du SEO et de l'accessibilité d'un site vitrine simulant celui d'une photographe professionnelle.L'enjeu était d'auditer le site et de faire le nécessaire pour améliorer ses performances techniques (temps de chargement, etc)et son potentiel de référencement.",
    competences:
      "Ce projet m'a permit de me sensibiliser aux problématiques d'optimisations techniques: compressions et distribution judicieuse des images en fonction des tailles d'écrans des utilisateurs, minification des fichiers servis, gestion de l'ordre de l'importation et de l'éxecution des scripts. Et j'ai aussi pu me pencher sur les enjeux de référencement, de metadonnées et d'accessibilité du site.",
    problemes:
      "Déterminer quelles axes d'améliorations étaient judicieux pour atteinder une optimisation maximale et enrichir le site le plus possible avec les metadonnées appropriées.",
  },
];
