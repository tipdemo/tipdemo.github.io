// routes/api.js
const express = require('express');
const router = express.Router();

// Voorbeeld data
const dataStore = {
  "12345": {
    type: "mandate",
    requester: "Test Organisatie",
    reason: "Toegang tot dienst X",
    mandate: [
      { issuedBy: "Dienstverlener Y", name: "ID-kaart", dienst: "Authenticatie" }
    ],
    LEID: "12345"
  }
};

// GET endpoint
router.get('/data/:id', (req, res) => {
  const id = req.params.id;
  if (dataStore[id]) {
    res.json(dataStore[id]);
  } else {
    res.status(404).json({ error: 'Data not found' });
  }
});

module.exports = router;
