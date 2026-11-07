# Slybows · Desk

Terminal de trading crypto et macro dans le navigateur, au style « terminal Bloomberg » : sessions et annonces de la journée, signaux, carte des liquidations, screener, carnet d'ordres agrégé, news traduites en français et agent IA qui lit le marché toutes les 30 min.

Version personnelle d'après le **[Desk de Captain Trading](https://github.com/captaincryptotrading21/desk)** (licence : usage personnel, revente interdite, mention de Captain Trading conservée).

## Comment ça marche

- Le site est publié par GitHub Pages à partir de ce dépôt.
- Le **robot** (`.github/workflows/desk.yml` + `robot.mjs`) tourne toutes les 10 minutes : il récupère l'agenda économique, les news crypto et FinancialJuice, les traduit et les publie dans `data/` à côté du site.
- Les prix, liquidations, carnets d'ordres et dérivés sont lus directement depuis le navigateur sur les API publiques (OKX, Binance, Bybit, Bitget, Hyperliquid, Deribit, Coinbase, TradingView…). Aucune clé, aucun compte d'échange.
- L'agent IA et les news Telegram passent pour l'instant par le relais Cloudflare de Captain Trading (`TG_URL` dans `core.js`). Pour avoir le vôtre, voir la section « Avoir ton propre agent » de `CLAUDE.md`.

## Modifier le Desk

On modifie les fichiers sources (`page.html`, les `.js`, les `.css`, `config.js`), puis on reconstruit `index.html` :

```
node build.mjs
```

Le style Slybows (fond noir, ambre, IBM Plex, angles droits) se trouve à la fin de `worlds.css`, dans le bloc « SLYBOWS ».

---

⚠️ Outil d'information, pas un conseil en investissement. Les données viennent de sources publiques et peuvent être incomplètes ou en retard.
