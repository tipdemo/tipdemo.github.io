// middleware/security.js
const helmet = require('helmet');

const securityMiddleware = [
  // Algemene beveiliging met Helmet, disable crossOriginEmbedderPolicy
  helmet({
    crossOriginEmbedderPolicy: false
  }),

  // X-Frame-Options
  helmet.frameguard({
    action: 'sameorigin' 
  }),

  // X-Content-Type-Options
  helmet.noSniff(),

  // Content Security Policy (CSP)
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: [
        "'self'",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        "'unsafe-inline'" // Toestaan van inline styles indien nodig
      ],
      scriptSrc: [
        "'self'",
        "https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js",
        "'unsafe-inline'" // Toestaan van inline scripts indien nodig
      ],
      imgSrc: [
        "'self'",
        "data:",
        // Voeg jouw specifieke afbeeldings-CDN toe indien nodig, bijvoorbeeld:
        // "https://your-image-cdn.com"
      ],
      fontSrc: [
        "'self'",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-solid-900.woff2",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-brands-400.woff2",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-brands-400.ttf"
      ],
      connectSrc: ["'self'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
    reportUri: '/csp-violation-report-endpoint', // Optioneel
  }),

  // Referrer-Policy
  helmet.referrerPolicy({
    policy: 'no-referrer'
  })
];

module.exports = securityMiddleware;
