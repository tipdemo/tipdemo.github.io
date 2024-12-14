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
      scriptSrc: [
        "'self'",
        "https://unpkg.com",
        "https://cdnjs.cloudflare.com",
      ],
      styleSrc: [
        "'self'",
        "https://cdnjs.cloudflare.com",
        "'unsafe-inline'" 
      ],
      imgSrc: [
        "'self'",
        "data:",
        "https://cdnjs.cloudflare.com",
      ],
      connectSrc: ["'self'"],
      fontSrc: [
        "'self'",
        "https://cdnjs.cloudflare.com",
      ],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
    // reportOnly: true, // Alleen rapporteren zonder CSP te handhaven (voor testen)
    reportUri: '/csp-violation-report-endpoint', // (Optioneel)
  }),

  // Referrer-Policy instellen
  helmet.referrerPolicy({
    policy: 'no-referrer'
  })
];

module.exports = securityMiddleware;
