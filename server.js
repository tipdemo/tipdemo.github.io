// server.js
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const securityMiddleware = require('./middleware/security'); // Importeer de beveiligingsmiddleware
const apiRoutes = require('./routes/api'); // Zorg ervoor dat je een routes/api.js hebt

const app = express();

// Beveiligingsmiddleware
app.use(securityMiddleware);

// Rate Limiting Configuratie
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuten
  max: 100, // maximaal 100 verzoeken per IP per windowMs
  message: 'Te veel verzoeken van deze IP, probeer het later opnieuw.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

// Forceren van HTTPS
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

// CORS Configuratie
const corsOptions = {
  origin: 'https://tipdemo.nl', // vervang door jouw domein
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Serve static files vanuit de root directory
app.use(express.static(path.join(__dirname)));

// API routes
app.use('/api', apiRoutes);

// Voorbeeld API-endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Endpoint voor CSP-rapportage (optioneel)
app.post('/csp-violation-report-endpoint', express.json(), (req, res) => {
  console.log('CSP Violation: ', req.body);
  res.status(204).end();
});

// Foutafhandeling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start de server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
