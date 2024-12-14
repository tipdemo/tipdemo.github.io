const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');

// Data store met voorbeelddata
const dataStore = {
  "12345": {
    type: "mandate",
    requester: "Jansen & Jansen belastingadvies",
    LEID: "HRN 30217488",
    reason: "Gegevens VIA 2024 ophalen",
    geldigheidsduur: "30 dagen",
    intrekbaar: "Niet intrekbaar",
    mandate: [
      {
        issuedBy: "BD",
        dienst: "Inkomstenbelasting",
        name: "VIA 2024"
      }
    ]
  }
};

// GET endpoint om specifieke data op te halen
router.get('/data/:id', (req, res) => {
  const id = req.params.id;
  if (dataStore[id]) {
    res.json(dataStore[id]);
  } else {
    res.status(404).json({ error: 'Data not found' });
  }
});

// GET endpoint voor QR-code genereren
router.get('/qrcode/:id', async (req, res) => {
    const id = req.params.id;
    if (!dataStore[id]) {
      return res.status(404).send('Data not found for QR code');
    }
  
    // Maak een API-URL die verwijst naar het data endpoint
    const apiUrl = `${req.protocol}://${req.get('host')}/api/data/${id}`;
  
    try {
      res.setHeader('Content-Type', 'image/png'); // Content-Type voor PNG instellen
      await QRCode.toFileStream(res, apiUrl); // Stream de QR-code direct als PNG
    } catch (err) {
      res.status(500).send('Error generating QR code');
    }
  });
  

module.exports = router;
