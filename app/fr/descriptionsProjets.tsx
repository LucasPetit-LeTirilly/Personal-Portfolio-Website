export const descriptionsProjets = [
  {
    title: "Réalisation du site de Glasswork Mastering",
    images: [
      "/glasswork-mastering-capture1.png",
      "/glasswork-mastering-capture3.png",
    ],
    imagesMobile: [
      "/glasswork-mastering-capture1Mobile.png",
      "/glasswork-mastering-capture3.png",
    ],
    date: "Novembre 2023 - Janvier 2024",
    lienGithub: "",
    lien: "https://www.glassworkmastering.com",
    description:
      "Réalisation du site du studio de mastering de musique Glasswork Mastering. Conçu et designé en accord avec le cahier des charges fourni par l'ingénieur du son responsable du studio. Site multilingue à la fois vitrine et interface e-commerce pour que les clients puissent passer commande. Suite à l'achat les clients peuvent de transmettre en détail leurs attentes et souhaits pour le mastering de leur musique grâce à des formulaires spéciaux.",
    competences:
      "Développé avec Next.js(framwork React) en frontend et backend (grace à la fonctionnalité API de Next.js) et Typescript. Avec Stripe comme API de paiement, Tailwind CSS pour le styling et designé avec Figma.",
    problemes:
      "Le point nécessitant le plus de travail a été la conception des formulaires d'envoi des données. Car ils sont interdépendants, certain concernent les Projets, d'autres spécifiquement des Titres, et enfin certain des suppléments payants. Trouver l'équilibre entre l'intuitivité d'utilisation et la robustesse a demandé une attention particulière.",
  },
  {
    title: "Debugging et maintenance du site d'Hesra Studio",
    images: ["/hesra-studio-capture1.png", "/hesra-studio-capture2.png"],
    imagesMobile: [],
    date: "Janvier 2024",
    lienGithub: "",
    lien: "https://hesrastudio.com",
    description:
      "Intervention de debugging et de maintenance sur le site Wordpress d'Hesra Studio. J'ai eu à corriger l'UI via le plugin Elementor, reconfigurer le plugin en charge de la partie e-commerce du site (WooCommerce), rétablir la fonctionnalité d'envoi des emails et mettre à jour d'autres plugins ainsi que le serveur backend. Le principal challenge dans cette intervention était d'identifier la source des différents problèmes.",
    competences:
      "Développement Wordpress, utilisation de plugin d' UI/Frontend (Elementor, WooCommerce) et de maintenance backend",
    problemes:
      "Identifier la sources des bugs. Configurer et résoudre les conflits entre les plugins. Auditer les fonctionnalités du site.",
  },
  {
    title: "Projet Node.js/Express.js de la formation OpenClassrooms",
    images: [
      "/projet-backend-capture1.png",
      "/projet-backend-capture2.png",
      "/projet-backend-capture3.png",
    ],
    imagesMobile: [],
    date: "Août 2023",
    lienGithub:
      "https://github.com/LucasPetit-LeTirilly/Projet-Backend-Node.js-OpenClassrooms",
    lien: "",
    description:
      "Implémentation du backend d'un site de notations de livre. Je l'ai développé avec le runtime Node.js et Express.js comme framework. Le site permet à l'utilisateur de s'inscrire, se connecter, puis poster, supprimer, modifier la page de présentation de ces livres et enfin d'attribuer une note à ce dernier. L'utilisateur peut également noter les livres postés par les autres utilisateur de l'application. Le backend gère toutes les opérations CRUD et est sécurisé, il prend également en charge la lecture/écriture sur une base de donnée MongoDB. ",
    competences:
      "Utilisation de Node.js, Express.js et MongoDB. Ainsi que la création et l'utilisation de middlewares d'authentification, de gestion et de compression d'images, de validation d'inputs. J'ai également été amené a utiliser des packages, notamment de cryptographie et de sécurisation des headers.",
    problemes:
      "Le défi était de faire un backend CRUD avec une API Restfull qui était sécurisé via un système de token délivré à la connection puis demandé à l'utilisateur à chaque action.",
  },
];
