// middleware/security.js
const helmet = require('helmet');

const securityMiddleware = [
  // Gebruik Helmet voor algemene beveiliging
  helmet(),

  // Configuratie van X-Frame-Options
  helmet.frameguard({
    action: 'sameorigin' // of 'deny' afhankelijk van je behoefte
  }),

  // Configuratie van X-Content-Type-Options
  helmet.noSniff(),

  // Configuratie van Content-Security-Policy (CSP)
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"], // Voeg je vertrouwde scripts toe indien nodig
      styleSrc: ["'self'"], // Voeg je vertrouwde styles toe indien nodig
      imgSrc: ["'self'", "data:"], // Voeg je vertrouwde afbeeldingen toe indien nodig
      connectSrc: ["'self'"],
      fontSrc: ["'self'"], // Voeg je vertrouwde fonts toe indien nodig
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
    reportUri: '/csp-violation-report-endpoint', // (Optioneel) Endpoint voor CSP-rapportage
  }),

  // Referrer-Policy instellen
  helmet.referrerPolicy({
    policy: 'no-referrer'
  })
];

module.exports = securityMiddleware;