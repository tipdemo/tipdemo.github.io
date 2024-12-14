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
      styleSrc: [
        "'self'",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        "'unsafe-inline'" // Toestaan van inline styles
      ],
      scriptSrc: [
        "'self'",
        "https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",
        "'unsafe-inline'" // Toestaan van inline scripts
      ],
      imgSrc: ["'self'", "data:"],
      fontSrc: [
        "'self'",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-solid-900.woff2"
      ],
      connectSrc: ["'self'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
    reportUri: '/csp-violation-report-endpoint', // (Optioneel)
  }),

  // Referrer-Policy instellen
  helmet.referrerPolicy({
    policy: 'no-referrer'
  })
];

module.exports = securityMiddleware;
