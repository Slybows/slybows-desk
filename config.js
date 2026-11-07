/* ================================================================
   CONFIG DU DESK
   Réglages de départ. Le plus simple : bouton « Studio » dans le Desk.
   Tu peux aussi les modifier ici à la main (garde les guillemets et virgules).
   ================================================================ */
window.COCKPIT_CONFIG = {
  id: "captain",                 // identifiant interne (sauvegardes du navigateur) — ne pas changer : garde les réglages déjà enregistrés
  name: "captain",            // « captain » = afficher le logo de la marque (logo Slybows)
  tagline: "Trading · Desk",   // sous-titre sous le nom
  accent: "#FFA028",             // couleur d'accent (toute l'interface suit)
  theme: "dark",                 // affichage au premier lancement : "dark" ou "light"
  beginner: false,               // true = boutons « ? » qui expliquent chaque module
  watchlist: ["BTC", "ETH", "SOL"], // cryptos suivies dans la barre du haut
  modules: {                     // false = module masqué
    day: true, map: true, events: true, deriv: true, liq: true, movers: true, screener: true, news: true,
    levels: true, opts: true, book: true, corr: true, net: true, veille: true
  },
  layout: null,                  // disposition des blocs (réglée avec le bouton « Disposition »)
  moversMarket: "spot",          // top mouvements par défaut : "spot" ou "perp"
  moversMinVolume: 2000000,      // volume 24h minimum (en $) pour apparaître dans les tops
  liqMin: 25000,                 // liquidations affichées à partir de ce montant (en $)
  screenerPreset: "compression", // préréglage du screener au lancement
  screenerMax: 150,              // nombre de coins analysés (les plus liquides d'OKX)
  newsLang: "fr",                // "fr" = headlines traduites, "vo" = version originale
  data: (function(){            // adresse du robot (agenda, news crypto, FinancialJuice)
    var h=location.hostname, d=location.pathname.split("/")[1];
    if(/\.github\.io$/.test(h) && d) return location.origin+"/"+d;   // en ligne sur GitHub : son propre robot
    return "https://captaincryptotrading21.github.io/desk";           // fichier ouvert en local : robot de Captain Trading
  })()
};
