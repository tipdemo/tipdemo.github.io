// *** QR Code Scanner Elementen ***
const scanButton = document.getElementById('scan-button');
const closeScanButton = document.getElementById('close-scan-button');
const readerDiv = document.getElementById('reader');
const floatingQrButton = document.getElementById('qr-scan-button');
const addCardScreen = document.getElementById('add-card-screen');

// *** Wallet Elementen ***
const walletGrid = document.getElementById('wallet-grid');
const detailsView = document.getElementById('details');
const detailsTitle = document.getElementById('details-title');
const detailsContent = document.getElementById('details-content');
const closeDetailsBtn = document.getElementById('close-details');
const deleteDetailsBtn = document.getElementById('delete-details');
const walletScreen = document.getElementById('wallet-screen');

// *** Menu Elementen ***
const menuScreen = document.getElementById('menu-screen');
const menuButton = document.querySelector('.menu-button');
const backMenuBtn = document.getElementById('back-menu-btn');
const activitiesNavbarItem = document.getElementById('activities-navbar-item');
const overviewNavbarItem = document.getElementById('overview-navbar-item');
const bottomNav = document.querySelector('.bottom-nav');
const machtigingNavbarItem = document.getElementById('machtigingen-navbar-item'); 
const machtigingSection = document.getElementById('machtiging-section');

// *** Activiteiten Elementen ***
const activitiesOption = document.getElementById('activities-option');
const activitiesSection = document.getElementById('activities-section');
const activitiesList = document.getElementById('activities-list');
const backActivitiesBtn = document.getElementById('back-activities-btn');
const activityScreen = document.getElementById('activities-section');

// *** Pincode Bevestiging Elementen verifier ***
const pinConfirmationScreenVerifier = document.getElementById('pin-confirmation-screen-verifier');
const confirmPinBtnVerifier = document.getElementById('confirm-pin-verifier');

// *** Successcherm Elementen ***
const successScreen = document.getElementById('verifier-success-screen');
const successMessage = document.getElementById('success-message');
const verifierNameElement = document.getElementById('verifier-name');
const seeActivityBtn = document.getElementById('see-activity-btn');
const closeSuccessBtn = document.getElementById('close-success-btn');

// *** Issuer Elementen ***
const issuerQuestionModal = document.getElementById('issuer-question-modal');
const saveButton = document.getElementById('save-button'); // Opslaan-knop
const stopButtonIssuer = document.getElementById('stop-button-issuer'); // Stop-knop voor issuer
const issuerSuccessScreen = document.getElementById('issuer-success-screen');
const closeIssuerSuccessBtn = document.getElementById('close-issuer-success-btn'); // Sluitknop voor successcherm

// Issuer elementen meerdere kaarten 
const rdfciMultipleModal = document.getElementById('rdfci-multiple-modal');
const rdfciMultipleAcceptButton = document.getElementById('rdfci-multiple-accept-button');
const rdfciMultipleStopButton = document.getElementById('rdfci-multiple-stop-button');
const closeRdfciMultipleModal = document.getElementById('close-rdfci-multiple-modal');
const closeIssuerMultipleSuccessBtn = document.getElementById('close-issuer-multiple-success-button');

// *** Verifier elementen ***
const shareQuestionModal = document.getElementById('share-question-modal');
const shareQuestionText = document.getElementById('share-question-text');
const shareDetails = document.getElementById('share-details');
const yesShareBtn = document.getElementById('yes-share-btn');
const stopShareBtn = document.getElementById('stop-share-btn');


// *** RDFCI Modal Elementen ***
const rdfciModal = document.getElementById('rdfci-modal');
const rdfciAgreement = document.getElementById('rdfci-agreement');
const rdfciData = document.getElementById('rdfci-data');
const rdfciAcceptButton = document.getElementById('rdfci-accept-button');
const rdfciStopButton = document.getElementById('rdfci-stop-button');
const confirmPinIssuerBtn = document.getElementById('confirm-pin-issuer');
const pinConfirmationScreenIssuer = document.getElementById('pin-confirmation-screen-issuer');

// *** RDFCV Modal Elementen ***
const rdfcvModal = document.getElementById('rdfcv-modal');
const rdfcvReason = document.getElementById('rdfcv-reason');
const rdfcvDetailsContainer = document.getElementById('rdfcv-details-container');
const rdfcvAgreement = document.getElementById('rdfcv-agreement');
const rdfcvAcceptButton = document.getElementById('rdfcv-accept-button');
const rdfcvStopButton = document.getElementById('rdfcv-stop-button');

// *** CSAS Elementen ***
const csasModal = document.getElementById('csas-modal');
const csasRequester = document.getElementById('csas-requester');
const csasDetailsContainer = document.getElementById('csas-details-container');
const csasAgreement = document.getElementById('csas-agreement');
const csasAcceptButton = document.getElementById('csas-accept-button');
const csasStopButton = document.getElementById('csas-stop-button');
const csasPinConfirmationScreen = document.getElementById('csas-pin-confirmation-screen');

const csasSuccessScreen = document.getElementById('csas-success-screen');
const csasSuccessRequester = document.getElementById('csas-success-requester');
const csasSuccessCardContainer = document.getElementById('csas-success-card-container');
const closeCsasSuccessBtn = document.getElementById('close-csas-success-btn');


// *** Mandate Elementen ***
const mandateModal = document.getElementById('mandate-modal');
const mandateRequester = document.getElementById('mandate-requester');
const mandateReason = document.getElementById('mandate-reason');
const mandateDataContainer = document.getElementById('mandate-data-container');
const mandateAgreement = document.getElementById('mandate-agreement');
const mandateRequesterAgreement = document.getElementById('mandate-requester-agreement');
const mandateStopButton = document.getElementById('mandate-stop-button');
const mandateAcceptButton = document.getElementById('mandate-accept-button');

const mandatePinConfirmationScreen = document.getElementById('mandate-pin-confirmation-screen');
const confirmPinMandateBtn = document.getElementById('confirm-pin-mandate');

const mandateSuccessScreen = document.getElementById('mandate-success-screen');
const mandateSuccessRequester = document.getElementById('mandate-success-requester');
const viewMandateButton = document.getElementById('view-mandate-button');
const closeMandateSuccessButton = document.getElementById('close-mandate-success-button');

// *** Signdoc Elementen ***
const signdocModal = document.getElementById('signdoc-modal');
const signdocDocumentElement = document.getElementById('signdoc-document');
const signdocIssuedByElement = document.getElementById('signdoc-issuedBy');
const signdocStopButton = document.getElementById('signdoc-stop-button');
const signdocAcceptButton = document.getElementById('signdoc-accept-button');

// *** Signdoc Pincode Confirmation ***
const pinConfirmationScreenSigndoc = document.getElementById('pin-confirmation-screen-signdoc');
const confirmPinSigndocBtn = document.getElementById('confirm-pin-signdoc');

// *** Signdoc Success Screen ***
const signdocSuccessScreen = document.getElementById('signdoc-success-screen');
const closeSigndocSuccessBtn = document.getElementById('close-signdoc-success-btn');


// *** RDFCF Modal Elements ***
const rdfcfModal = document.getElementById('rdfcf-modal');
const rdfcfDetailsContainer = document.getElementById('rdfcf-details-container');
const rdfcfAcceptButton = document.getElementById('rdfcf-accept-button');
const rdfcfStopButton = document.getElementById('rdfcf-stop-button');

// RDFCF PIN Confirmation Elements
const pinConfirmationScreenRdfcf = document.getElementById('pin-confirmation-screen-rdfcf');
const confirmPinRdfcfBtn = document.getElementById('confirm-pin-rdfcf');

// RDFCF Success Screen Elements
const rdfcfSuccessScreen = document.getElementById('rdfcf-success-screen');
const closeRdfcfSuccessBtn = document.getElementById('close-rdfcf-success-btn');


// *** PPOP Elements ***
const ppopModal = document.getElementById('ppop-modal');
const ppopAmountElement = document.getElementById('ppop-amount');
const ppopRequesterElement = document.getElementById('ppop-requester');
const ppopDetailsContainer = document.getElementById('ppop-details-container');
const ppopStopButton = document.getElementById('ppop-stop-button');
const ppopAcceptButton = document.getElementById('ppop-accept-button');

// PPOP PIN Confirmation Elements
const ppopPinConfirmationScreen = document.getElementById('ppop-pin-confirmation-screen');
const confirmPinPpopBtn = document.getElementById('confirm-pin-ppop');

// PPOP Success Screen Elements
const ppopSuccessScreen = document.getElementById('ppop-success-screen');
const ppopSuccessRequester = document.getElementById('ppop-success-requester');
const ppopInvoiceLink = document.getElementById('ppop-invoice-link');
const ppopDownloadButton = document.getElementById('ppop-download-button');
const ppopCloseSuccessButton = document.getElementById('ppop-close-success-button');


// *** SignFromStorage Elementen ***
const signFromStorageButton = document.getElementById('sign-button');

// Bestandenverkenner Modal SignFromStorage
const signFromStorageFileExplorerModal = document.getElementById('signfromstorage-file-explorer-modal');
const signFromStorageFileInput = document.getElementById('signfromstorage-file-input');
const signFromStorageFileExplorerCloseButton = document.getElementById('signfromstorage-file-explorer-close-button');

// Bevestigings Modal SignFromStorage
const signFromStorageConfirmSignModal = document.getElementById('signfromstorage-confirm-sign-modal');
const signFromStorageConfirmDocumentText = document.getElementById('signfromstorage-confirm-document-text');
const signFromStorageConfirmSignStopButton = document.getElementById('signfromstorage-confirm-sign-stop-button');
const signFromStorageConfirmSignAcceptButton = document.getElementById('signfromstorage-confirm-sign-accept-button');

// Pincode Confirmatie Modal SignFromStorage
const signFromStoragePinConfirmationModal = document.getElementById('signfromstorage-pin-confirmation-modal');
const signFromStorageConfirmPinBtn = document.getElementById('signfromstorage-confirm-pin');

// Successcherm Modal SignFromStorage
const signFromStorageSuccessScreen = document.getElementById('signfromstorage-success-screen');
const signFromStorageCloseSuccessBtn = document.getElementById('signfromstorage-close-success-btn');


// *** Trusted Contacts Elementen ***
const contactsNavbarItem = document.getElementById('contacts-navbar-item');
const trustedContactsSection = document.getElementById('trusted-contacts-section');
const messagesGrid = document.getElementById('messages-grid');
const backTrustedContactsBtn = document.getElementById('back-trusted-contacts');

// Elementen voor het bericht details scherm
const messageDetailsScreen = document.getElementById('message-details-screen');
const closeMessageDetailsBtn = document.getElementById('close-message-details');
const contactNameElement = document.getElementById('contact-name');
const messageDatetimeElement = document.getElementById('message-datetime');
const messageTextElement = document.getElementById('message-text');

// Elementen voor het notificatiebolletje
const notificationBadge = document.getElementById('notification-badge');

// Elementen voor het instellingen knop en scherm
const settingsButton = document.getElementById('settings-button');
const instellingenSection = document.getElementById('instellingen-section');
const closeSettingsBtn = document.getElementById('close-settings');


// *** Elementen card catalogue ***
const openCardCatalogueBtn = document.getElementById('open-card-catalogue');
const cardCatalogue = document.getElementById('card-catalogue');
const closeCardCatalogueBtn = document.getElementById('close-card-catalogue');


// Elementen current cards
const openCurrentCardsBtn = document.getElementById('open-current-cards');
const currentCardsSection = document.getElementById('current-cards');
const closeCurrentCardsBtn = document.getElementById('close-current-cards');


const fieldMapping = {
  gn: 'Voornaam',
  vl: 'Voorletter(s)',
  sn: 'Achternaam',
  bd: 'Geboortedatum',
  bsn: 'Burgerservicenummer (BSN)',
  omv: 'Organisatiemachtiging VOG',
  vog: 'Verklaring Omtrent Gedrag (VOG)',
  VOG: 'Verklaring Omtrent Gedrag (VOG)',
  nat: 'Nationaliteit',
  val: 'Geldigheid paspoort',
  UWV: 'Uitvoeringsinstituut Werknemersverzekeringen (UWV)',
  BKR: 'Bureau Krediet Registratie (BKR)',
  BD: 'Belastingdienst',
  SVB: 'Sociale Verzekeringsbank (SVB)',
  ln: 'Lengte',          
  ph: 'Foto',   
  issuedBy: 'Uitgegeven door',
  LEID: 'Organisatie nummer',
  Issued_Date: 'Uitgiftedatum',
  ID: 'Uitgiftedatum',
  Issued_to_subject: 'Uitgegeven aan',
  ITS: 'Uitgegeven aan',
  Algemeen_profiel: 'Algemeen profiel',
  Specifiek_profiel: 'Specifiek profiel',
  Attestation_Trust_Type: 'Type attestatie',
  IBAN: 'IBAN',
IADR: 'Factuur-adres',
  ATT: 'Type attestatie',
  dipvk: 'Diploma Verpleegkunde',
  a: {
    '12t': 'Opslag: 12 maanden, gedeeld met derden: nee',
    '60t': 'Opslag: 60 maanden, gedeeld met derden: nee',
    'w': 'Bewaarplicht en datadeling met derden volgens wettelijke richtlijnen',
    'b' : 'Volgens bedrijfsrichtlijnen'
  }
};


let html5QrCode = null; // We zullen de QR-code scanner hier initialiseren
let credentials = [];
let currentVerifierName = ""; // Variabele om de naam van de verifier op te slaan
let isSharingActionInProgress = false; // Houd de status van de deelactie bij

// Logica voor het wisselen van schermen
document.getElementById('next-welcome').addEventListener('click', function() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('pin-inlog-screen').style.display = 'flex';
});

// Zorg ervoor dat de submit-pin knop altijd klikbaar is
document.getElementById('submit-pin').disabled = false;

// Event listener voor het inloggen met de pincode
document.getElementById('submit-pin').addEventListener('click', function() {
  document.getElementById('pin-inlog-screen').style.display = 'none';
  document.getElementById('wallet-screen').style.display = 'block';
});


// Toon de navbar na succesvol inloggen
document.getElementById('submit-pin').addEventListener('click', function() {
  document.getElementById('pin-inlog-screen').style.display = 'none';
  document.getElementById('wallet-screen').style.display = 'block';
  
  // Toon de navbar nu de gebruiker is ingelogd
  bottomNav.style.display = 'flex';
});


// Voeg de event listener toe voor het klikken op de overzicht-knop in de navbar
overviewNavbarItem.addEventListener('click', () => {
  // Verberg het activiteiten-scherm, machtiging-sectie en instellingen-sectie
  activitiesSection.style.display = 'none';
  document.getElementById('machtiging-section').style.display = 'none';
  instellingenSection.style.display = 'none'; // Verberg instellingen-sectie

  // Toon het wallet-overzichtsscherm
  document.getElementById('wallet-screen').style.display = 'block';

  // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Zet het overzicht-item actief in de navbar
  overviewNavbarItem.classList.add('active');
});

// Voeg de event listener toe voor het klikken op de activiteiten-knop in de navbar
activitiesNavbarItem.addEventListener('click', () => {
  // Verberg alle andere secties
  document.getElementById('wallet-screen').style.display = 'none';
  document.getElementById('machtiging-section').style.display = 'none'; // Verberg machtigingen-sectie
  instellingenSection.style.display = 'none'; // Verberg instellingen-sectie

  // Toon het activiteiten-scherm
  activitiesSection.style.display = 'flex';

  // Haal de activiteiten op en toon ze
  showActivities();

  // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Zet het activiteiten-item actief in de navbar
  activitiesNavbarItem.classList.add('active');
});


// Voeg de event listener toe voor het klikken op de machtingen-knop in de navbar
machtigingNavbarItem.addEventListener('click', () => {
  // Verberg alle andere secties, zoals de wallet-sectie, activiteiten-sectie en instellingen-sectie
  document.getElementById('wallet-screen').style.display = 'none';
  activitiesSection.style.display = 'none'; // Verberg activiteiten-sectie
  instellingenSection.style.display = 'none'; // Verberg instellingen-sectie

  // Toon het machtigingen-scherm
  document.getElementById('machtiging-section').style.display = 'flex';

  // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Zet het machtigingen-item actief in de navbar
  machtigingNavbarItem.classList.add('active');
  console.log("Machtiging-section getoond");
   // Roep de functie aan om de machtigingen weer te geven
   displayMachtigingen();

   
});

function convertToStandardDate(dateString) {
  // Converteer 'DD-MM-YYYY, HH:mm:ss' naar 'YYYY-MM-DDTHH:mm:ss' met twee cijfers voor dag en maand
  let [datePart, timePart] = dateString.split(', ');
  let [day, month, year] = datePart.split('-').map(part => part.padStart(2, '0')); // Pad dag en maand met nullen
  return `${year}-${month}-${day}T${timePart}`;
}


function showActivities() {
  activitiesList.innerHTML = ''; // Maak de lijst leeg

  // Filter credentials voor activiteiten
  const filteredActivities = credentials.filter(cred => {
    if (!cred.actionTimestamp) return false;

    // Neem share actions, activiteiten en specifieke types op
    if (cred.isShareAction || cred.isActivity) return true;

    if (cred.type === 'signdoc' || cred.type === 'signfromstorage' || cred.type === 'rdfcf' || cred.type === 'ppop') return true;

    // Issuer acties
    if (cred.issuedBy && cred.type !== 'mandate') return true;

    return false;
  });

  // Sorteer activiteiten op datum en tijd (meest recent eerst)
  filteredActivities.sort((a, b) => {
    let dateA = Date.parse(convertToStandardDate(a.actionTimestamp));
    let dateB = Date.parse(convertToStandardDate(b.actionTimestamp));
    return dateB - dateA;
  });

  // Voeg activiteiten toe aan de lijst
  filteredActivities.forEach((cred) => {
    let activityItem = document.createElement('li');

    if (cred.type === 'rdfcf') {
      // Formulier actie
      activityItem.innerHTML = `
        <strong style="color: #152A62;">Formulier ingevuld: ${cred.formName}</strong><br>
        <span style="color: #152A62;">Gegevens gedeeld</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    } else if (cred.isShareAction) {
      // Verifier actie
      activityItem.innerHTML = `
        <strong style="color: #152A62;">${cred.name}</strong><br>
        <span style="color: #152A62;">Gegevens gedeeld</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    } else if (cred.isActivity) {
      // Machtiging actie
      activityItem.innerHTML = `
        <strong style="color: #152A62;">Machtiging aan ${cred.requester}</strong><br>
        <span style="color: #152A62;">Reden: ${cred.reason}</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    } else if (cred.type === 'signdoc') {
      // Signdoc actie
      activityItem.innerHTML = `
        <strong style="color: #152A62;">Document ondertekend aangeboden door ${cred.issuedBy}</strong><br>
        <span style="color: #152A62;">${cred.data.documentName}</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    } else if (cred.type === 'signfromstorage') {
      // SignFromStorage actie
      activityItem.innerHTML = `
        <strong style="color: #152A62;">Document ondertekend uit storage</strong><br>
        <span style="color: #152A62;">${cred.data.documentName}</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    } else if (cred.type === 'ppop') {
      // PPOP actie
      activityItem.innerHTML = `
        <strong style="color: #152A62;">Betaling uitgevoerd aan ${cred.issuedBy}</strong><br>
        <span style="color: #152A62;">Bedrag: ${cred.currency} ${cred.amount}</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    } else if (cred.issuedBy && cred.type !== 'mandate') {
      // Issuer actie
      const issuerInfo = cred.issuedBy ? cred.issuedBy : "Onbekende uitgever";
      activityItem.innerHTML = `
        <strong style="color: #152A62;">${issuerInfo}</strong><br>
        <span style="color: #152A62;">${cred.name} opgehaald</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    }

    // Voeg een scheidingslijn toe
    const divider = document.createElement('div');
    divider.className = 'activity-divider';

    activitiesList.appendChild(activityItem);
    activitiesList.appendChild(divider);
  });
}



// Mapping van kaartnamen naar stijlen
const cardStyles = {
  'persoonlijke data': {
   /*  iconClass: 'fas fa-id-card',
    iconColor: '#D6E6F2', */
    imagePath: 'bdlogo.svg',
    iconColor: null,
    textColor: '#4A6C85'
  },
  'woonadres': {
   /*  iconClass: 'fas fa-home',
    iconColor: '#DAEEDC', */
    imagePath: 'bdlogo.svg',
    iconColor: null,
    textColor: '#4A6C85'
  },
  'foto': {
/*     iconClass: 'fas fa-camera', // Gebruik het gewenste FontAwesome icoon
    iconColor: '#FFD700', // Gouden kleur voor het icoon */
    imagePath: 'bdlogo.svg',
    iconColor: null,
    textColor: '#4A6C85' // Tekstkleur
  },
  'factuur-adres': {
    iconClass: 'fas fa-briefcase', // Gebruik het gewenste FontAwesome icoon
    iconColor: '#00588E', // Gouden kleur voor het icoon */
   /*  imagePath: 'fas fa-briefcase', */
   
    textColor: '#00588E' // Tekstkleur
  },
  'iban': {
    iconClass: 'fas fa-landmark', 
    iconColor: '#00588E', 
        /* imagePath: 'fas fa-landmark', */
       /*  iconColor: '#FBC4AB', */
    textColor: '#00588E' // Tekstkleur
      },
  'organisatiemachtiging vog': {
    iconClass: 'fas fa-file-signature',
    iconColor: '#D4A5D7',
    textColor: '#7A3E9D'
  },
  'inkomensverklaring': {
    imagePath: 'bdlogo.svg',
    iconColor: null,
    textColor: '#2681cc' // Nieuwe kleur passend bij het logo
  },
  'kredietregistratie': {
    imagePath: 'bkrlogo.svg',
    iconColor: null,
    textColor: '#FDC830' // Kleur aangepast op basis van het logo
  },
  'aow-status': {
    imagePath: 'svblogo.svg',
    iconColor: null,
    textColor: '#57C4E5' // Kleur aangepast op basis van het logo
  },
  'verzekeringsgegevens': {
    imagePath: 'uwvlogo.svg',
    iconColor: null,
    textColor: '#00588E' // Kleur aangepast op basis van het logo
  },
  'werkgever': {
    iconClass: 'fas fa-briefcase',
    iconColor: '#FBC4AB',
    textColor: '#D35400'
  },
  'verklaring omtrent gedrag (vog)': {
    imagePath: 'justislogo.svg',
    iconColor: null,
    textColor: '#00588E'
  },

  'rijbewijs': {
    imagePath: 'bdlogo.svg',
    iconColor: null,
     textColor: '#4A6C85'
  },

  'diploma verpleegkunde': {
  imagePath: 'duologo.svg',  // Path naar je diploma-afbeelding
  iconColor: null,
   textColor: '#4A6C85'
  },

  'toegangspas': {
    iconClass: 'fas fa-file-signature',
 iconColor: '#58AE65',
    textColor: '#58AE65'
    },

    'machtiging diensten': {
    iconClass: '  fas fa-key',
 iconColor: '#00588E', 
    textColor: '#00588E'
    },

  // Voeg meer kaartstijlen toe indien nodig
};


function displayCredentials() {
  walletGrid.innerHTML = ''; // Maak de wallet leeg

  credentials.forEach((cred, index) => {
    // Sla share actions, activiteiten en mandates over in de wallet-weergave
    if (
      cred.isShareAction ||
      cred.isActivity ||
      cred.type === 'mandate' ||
      cred.type === 'signdoc' ||
      cred.type === 'signfromstorage' ||
      cred.type === 'rdfcf' ||
      cred.type === 'ppop'
    ) {
      console.log(`Credential at index ${index} has type:`, cred.type);
      return;
    }

    // Controleer of cred.name bestaat en is een string
    if (typeof cred.name !== 'string') {
    //  console.warn(`Credential at index ${index} ontbreekt 'name' property:`, cred);
      return; // Sla deze credential over
    }

    const card = document.createElement('div');
    card.className = 'card';

    // Haal stijlen op basis van kaartnaam
    const nameLower = cred.name.toLowerCase();
    const styles = cardStyles[nameLower] || {
      iconClass: 'far fa-id-badge',
      iconColor: '#333',
      textColor: '#333'
    };

    // Definieer grootte en marges
    const iconSize = '30px';
    const textSize = '18px';
    const issuerTextSize = '14px'; // Kleiner lettertype voor de issuer
    const iconMarginBottom = '10px';

    // Controleer of er een afbeeldingspad is opgegeven in plaats van een icoon
    let iconHtml = '';
    if (styles.imagePath) {
      iconHtml = `<img src="${styles.imagePath}" alt="${cred.name} logo" style="width: ${iconSize}; height: ${iconSize}; margin-bottom: ${iconMarginBottom};">`;
    } else {
      iconHtml = `<i class="${styles.iconClass}" style="color: ${styles.iconColor}; font-size: ${iconSize}; margin-bottom: ${iconMarginBottom};"></i>`;
    }

    // Voeg de HTML voor het kaartje toe
    card.innerHTML = `
      ${iconHtml}
      <div class="card-text" style="font-size: ${textSize};">
        <h3 style="color: ${styles.textColor}; margin: 0;">${cred.name}</h3>
        ${cred.issuedBy ? `<p style="font-size: ${issuerTextSize}; color: #555; margin: 5px 0 0 0;">${cred.issuedBy}</p>` : ''}
      </div>
    `;

    // Voeg event listener toe voor het bekijken van kaartdetails
    card.addEventListener('click', () => showDetails(cred, index));

    // Voeg de kaart toe aan het wallet-grid
    walletGrid.appendChild(card);
  });
}


// Functie om standaard kaartjes toe te voegen
function loadDefaultCredentials() {
  const defaultCards = [
    {
      name: 'Persoonlijke data',
      issuedBy: 'Nederlandse overheid',
      isShareAction: false,
      data: {
        'Voornaam': 'Willeke Liselotte',
        'Voorletter(s)': 'W. L.',
        'Achternaam': 'De Bruijn',
        'Geboortedatum': '10-03-1980',
        'Geboorteplaats': 'Delft',
        'Geboorteland': 'Nederland',
        'Geslacht': 'Vrouw',
        'Burgerservicenummer (BSN)': '999999990',
        'Nationaliteit': 'Nederlands',
        'Geldigheid paspoort': '17 juli 2034',
        'Ouder dan 18': 'Ja'
      }
    },
    {
      name: 'Woonadres',
      issuedBy: 'Nederlandse overheid',
      isShareAction: false,
      data: {
        'Straat': 'Wilhelmina van Pruisenweg',
        'Huisnummer': '52',
        'Postcode': '2595 AN',
        'Woonplaats': 'Den Haag'
      }
    },
      // Nieuw kaartje "Foto" toevoegen
      {
        name: 'Foto',
        issuedBy: 'Nederlandse overheid',
        isShareAction: false,
        data: {
          'Foto': 'pasfoto.png', // Zorg dat deze afbeelding beschikbaar is in je projectmap
          'Lengte': '1,70 m'
        }
      },
      {
        name: 'Factuur-adres',
        issuedBy: 'KVK',
        isShareAction: false,
        data: {
          'Voornaam': 'Willeke Liselotte',
          'Achternaam': 'De Bruijn',
          'Organisatie-nummer': 'NL_KVK_0000000000',
          'Straat': 'Wilhelmina van Pruisenweg',
          'Huisnummer': '52',
          'Postcode': '2595 AN',
          'Woonplaats': 'Den Haag'
        }
      },
      {
        name: 'IBAN',
        issuedBy: 'Bank',
        isShareAction: false,
        data: {
          'Bank': 'TEST',
          'LEID': 'NL_KVK_0000000000',
          'IBAN-account number': 'NL00TEST0123456789',
        }
      }
  ];

  defaultCards.forEach(defaultCard => {
    const index = credentials.findIndex(cred => cred.name === defaultCard.name);
    if (index !== -1) {
      // Update het bestaande kaartje
      credentials[index] = defaultCard;
    } else {
      credentials.push(defaultCard);
    }
  });
}



// Functie om opgeslagen kaartjes te laden
function loadCredentials() {
  const storedCredentials = localStorage.getItem('credentials');
  if (storedCredentials) {
    credentials = JSON.parse(storedCredentials);
  }
}


// Functie om opgeslagen kaartjes te bewaren
function saveCredentials() {
  localStorage.setItem('credentials', JSON.stringify(credentials));
}


function showDetails(credential, index) {
  // Verberg het wallet-scherm
  document.getElementById('wallet-screen').style.display = 'none';
  currentCardsSection.style.display = 'none';  
  bottomNav.style.display = 'none';

  // Toon de detailsweergave
  const detailsView = document.getElementById('details');
  detailsView.style.display = 'block';

  // Vul de titel met de naam van het kaartje
  detailsTitle.textContent = credential.name;

  // Leeg de inhoud en vul deze met de gegevens van het kaartje
  detailsContent.innerHTML = '';

   // Als het kaartje "Foto" is, toon de afbeelding
   if (credential.name === 'Foto') {
    detailsContent.innerHTML += `<img src="${credential.data['Foto']}" alt="Pasfoto" style="width: 100%; max-width: 300px; height: auto; margin-bottom: 20px;">`;
    detailsContent.innerHTML += `<div class="details-row">
                                  <div class="details-label">Lengte:</div>
                                  <div class="details-value">${credential.data['Lengte']}</div>
                                </div>`;
  } else if (credential.data) {
    // Voor elk sleutel-waarde paar maak een nieuwe rij in de details sectie
    for (const key in credential.data) {
      if (credential.data.hasOwnProperty(key)) {
        detailsContent.innerHTML += `
          <div class="details-row">
            <div class="details-label">${key}:</div>
            <div class="details-value">${credential.data[key]}</div>
          </div>`;
      }
    }
  } else {
    detailsContent.innerHTML = '<p>Geen details beschikbaar.</p>';
  }


  // Sluit details weergave (Terug-knop)
  closeDetailsBtn.onclick = () => {
    detailsView.style.display = 'none';
    currentCardsSection.style.display = 'flex';  // Toon 'Mijn digitale bewijzen' sectie
    
  };

  // Verwijderknop tonen of verbergen op basis van het type kaartje
  if (credential.name !== 'Persoonlijke data' && credential.name !== 'Woonadres'  && credential.name !== 'Foto' && credential.name !== 'Factuur-adres' && credential.name !== 'IBAN') {
    deleteDetailsBtn.style.display = 'block';
    deleteDetailsBtn.onclick = () => {
      credentials.splice(index, 1);
      saveCredentials();
      displayCredentials();
      detailsView.style.display = 'none';
      currentCardsSection.style.display = 'flex';  // Toon 'Mijn digitale bewijzen' sectie
      
    };
  } else {
    deleteDetailsBtn.style.display = 'none';
  }
}


// Bij het laden van de pagina
loadCredentials();
loadDefaultCredentials();
saveCredentials(); // Sla de bijgewerkte credentials op
displayCredentials();
displayMachtigingen();


// Functie om de QR-code scanner te starten
function startQrScan() {
  document.querySelector('.scan-container').style.display = 'none'; // Verberg scan-knop en tekst
  closeScanButton.style.display = 'block'; // Toon de sluit-knop
  readerDiv.style.display = 'block'; // Toon de camera

  // Check of html5QrCode al bestaat, zo niet, initialiseer het
  if (!html5QrCode) {
      html5QrCode = new Html5Qrcode("reader");
  }

  console.log("Starting QR scanner...");

  html5QrCode.start(
      { facingMode: "environment" },
      { fps: 10, 
        qrbox: 250 },
      (decodedText) => {
          console.log("QR code scanned: ", decodedText);
          try {
              const data = JSON.parse(decodedText);
              const timestamp = new Date().toLocaleString();


            // Stap 1: Controleer het type QR-code
            if (data.type === "mandate") {
              console.log("Mandate QR-code herkend.");
              handleMandateQR(data, timestamp);
          }

              // Stap 1: Controleer of het een verifier QR-code is (csas)
             else if (data.type === "verifier" && data.csas) {
                console.log("CSAS QR-code herkend.");
            
                // Sla de CSAS data op voor later gebruik
                window.currentCsasData = data;
            
                // Vul de modal met de gegevens van het CSAS-verzoek
                populateCsasModal(data);
            
                // Toon de CSAS modal
                csasModal.style.display = 'flex';     
            
              }
              // ** Stap 2 codeblok voor RDFCV**
              else if (data.type === "verifier" && data.rdfcv) {
                    console.log("RDFCV QR-code herkend.");

                    // Sla de RDFCV data op voor later gebruik
                    window.currentRdfcvData = data;

                    // Vul de modal met de gegevens van het RDFCV-verzoek
                    populateRdfcvModal(data);

                    // Toon de RDFCV modal
                    rdfcvModal.style.display = 'flex';
                  }
              // ** Nieuwe stap voor Signdoc **
              else if (data.type === "signdoc") {
                        console.log("Signdoc QR-code herkend.");
                        populateModalSignDoc(data);
                    } 

              else if (data.type === "form" && data.rdfcf) {
                      console.log("RDFCF QR-code detected.");
                      window.currentRdfcfData = data;
            
                      // Populate the RDFCF modal
                      populateRdfcfModal(data);
                    } 

                    else if (data.type === "PPOP") {
                      console.log("PPOP QR-code herkend.");
                      // Sla de PPOP data op voor later gebruik
                      window.currentPpopData = data;
                      // Vul de modal met de gegevens van het PPOP-verzoek
                      populatePpopModal(data);
                      // Toon de PPOP modal
                      ppopModal.style.display = 'flex';
                  }     

              // Stap 3: Controleer of het een issuer QR-code is (rdfci)
               else if (data.issuedBy && data.name) {
                  console.log("Issuer QR-code herkend.");

                        if (data.rdfci) {
                            console.log("Issuer QR-code met rdfci herkend.");

                            // Check for multiple cards to issue
                            if (Array.isArray(data.cardsToIssue) && data.cardsToIssue.length > 0) {
                            console.log("Meerdere kaarten gevonden in rdfci flow.");

                            // Vul de modal met de kaarten die uitgegeven moeten worden
                            populateMultipleRdfciModal(data);

                            // Toon de multiple RDFCI modal
                            rdfciMultipleModal.style.display = 'flex';
                            } else {

                            // Vul de modal met de nieuwe functie
                            populateRdfciModal(data);

                            // Toon het extra vraagscherm
                            rdfciModal.style.display = 'flex';

                            rdfciAcceptButton.onclick = () => {
                              const timestamp = new Date().toLocaleString();
                            
                              // Maak een nieuw object voor de gemapte data
                              const mappedData = {};
                            
                              // Itereer over de keys in 'data' en map de veldnamen
                              for (let key in data) {
                                if (
                                  data.hasOwnProperty(key) &&
                                  key !== 'rdfci' &&
                                  
                                  key !== 'a' &&
                                  key !== 't' &&
                                  key !== 'name' &&
                                  key !== 'reason' &&
                                  key !== 'verifier' &&
                                  key !== 'issuer' &&
                                  key !== 'type' &&
                                  key !== 'requester'
                                ) {
                                  const fieldName = fieldMapping[key] || key;
                                  mappedData[fieldName] = data[key];
                                }
                              }
                            
                              // Sla het kaartje op met de gemapte data
                              credentials.push({
                                name: data.name || 'Onbekend kaartje',
                                issuedBy: data.issuedBy || 'Onbekende uitgever',
                                actionTimestamp: timestamp,
                                isShareAction: false,
                                data: mappedData // Gebruik de gemapte data
                              });
                            
                              saveCredentials();
                            
                                // Toon het issuer success-scherm
                                goToIssuerSuccessScreen(data.name, data.issuedBy);

                                // Sluit het extra vraagscherm
                                rdfciModal.style.display = 'none';
                            };

                            rdfciStopButton.onclick = () => {
                                rdfciModal.style.display = 'none';
                                addCardScreen.style.display = 'none';
                                walletScreen.style.display = 'block';
                                bottomNav.style.display = 'flex';
                                resetQrScanner();
                            };
                          }

                        } else {
                            // Toon de bestaande issuer modal
                            issuerQuestionModal.style.display = 'flex';
                            console.log("Issuer modal geopend.");

                            const issuerName = data.issuedBy || 'Onbekende uitgever';
                            const cardName = data.name || 'Onbekend kaartje';
                            document.getElementById('issuer-data').innerText = cardName;
                            document.getElementById('issuer-issuedBy').innerText = issuerName;

                            saveButton.onclick = () => {
                                console.log("Opslaan-knop ingedrukt voor issuer.");
                                credentials.push({
                                    name: cardName,
                                    issuedBy: issuerName,
                                    actionTimestamp: timestamp,
                                    isShareAction: false,
                                    data: {
                                      kaartDetails: data,  // Sla alle kaartdetails op
                                      gevraagdeGegevens: data.rdfci.map(field => fieldMapping[field] || field)  // Gebruik fieldmapping om de gevraagde gegevens op te slaan
                                  }
                                });
                                saveCredentials();
                                console.log("Issuer gegevens opgeslagen in de wallet.");

                                goToIssuerSuccessScreen(cardName, issuerName);
                                console.log("Issuer success-scherm weergegeven.");

                                issuerQuestionModal.style.display = 'none';
                            };

                            stopButtonIssuer.onclick = () => {
                                console.log("Stop-knop ingedrukt. Issuer actie geannuleerd.");
                                issuerQuestionModal.style.display = 'none';
                                resetQrScanner();
                            };
                        }
                }

         
               else {
                  console.log("Onbekende QR-code structuur.");
              }

              // Sluit camera na succesvolle scan
              html5QrCode.stop().then(() => {
                  console.log("QR scanner stopped.");
                  readerDiv.style.display = 'none';
                  closeScanButton.style.display = 'none';
                  document.querySelector('.scan-container').style.display = 'flex';
              }).catch(err => {
                  console.error("Failed to stop scanning: ", err);
              });
          } catch (error) {
              console.error("QR-code parse error: ", error);
          }
      },
      (errorMessage) => {
          console.error(`QR scan failed: ${errorMessage}`);
      }
  );
}



/* // Sluit de scanner handmatig wanneer op "Scannen afsluiten" wordt geklikt
closeScanButton.addEventListener('click', () => {
  if (html5QrCode) {
    console.log("Stopping QR scanner...");
    html5QrCode.stop().then(() => {
      console.log("QR scanner stopped manually.");
      readerDiv.style.display = 'none';
      closeScanButton.style.display = 'none';
      document.querySelector('.scan-container').style.display = 'flex'; // Toon scan-knop en tekst
    }).catch(err => {
      console.error("Failed to stop scanning: ", err);
    });
  } else {
    console.error("Cannot stop scanner as it is not running.");
  }
}); */

// Event listener voor de bestaande scan-knop, vervangt deze door de nieuwe functie
scanButton.addEventListener('click', () => {
  startQrScan();
});




// Voeg pincode-invoerfunctionaliteit toe
const pinInputs = document.querySelectorAll('.pin-box');
pinInputs.forEach((box, index) => {
    box.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < pinInputs.length - 1) {
            pinInputs[index + 1].focus();
        }
    });
});



// Reset pincode-scherm na gebruik
function resetPinInputs() {
  pinInputs.forEach((input) => {
      input.value = '';
  });
  // Verwijder deze regel, zodat de bevestigingsknop niet wordt uitgeschakeld
  // confirmPinBtn.disabled = true;
}


function goToIssuerSuccessScreen(cardName, issuedBy) {
  issuerSuccessScreen.style.display = 'flex';

  // Vul de nieuwe tekstvelden in het successcherm
  document.getElementById('issuer-success-data').innerText = cardName;
  document.getElementById('issuer-success-issuedBy').innerText = issuedBy;

  // Toon een kaartje met de gegevens
  const successCard = document.getElementById('issuer-success-card');

  // Haal stijlen op basis van kaartnaam
  const nameLower = cardName.toLowerCase();
  const styles = cardStyles[nameLower] || {
    iconClass: 'far fa-id-badge',
    iconColor: '#333',
    textColor: '#333'
  };

  // Definieer grootte en marges
  const iconSize = '30px';
  const textSize = '18px';
  const iconMarginBottom = '10px';

  // Voeg FA-icoon en tekst toe aan de kaart met dynamische kleur en inline styles
  successCard.innerHTML = `
    <i class="${styles.iconClass}" 
        style="color: ${styles.iconColor}; font-size: ${iconSize}; margin-bottom: ${iconMarginBottom};">
    </i>
    <div class="card-text" style="font-size: ${textSize};">
      <h3 style="color: ${styles.textColor};">${cardName}</h3>
    </div>
  `;
  successCard.classList.add('card'); // Voeg de kaartstijl toe
}

// Sluitknop voor het issuer success-scherm
closeIssuerSuccessBtn.addEventListener('click', () => {
  issuerSuccessScreen.style.display = 'none';
  displayCredentials(); // Zorg dat het nieuwe kaartje wordt weergegeven

  // Verberg het add-card scherm
  addCardScreen.style.display = 'none';

  // Toon het wallet-screen opnieuw
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex'; // Toon de navbar onderaan opnieuw
});

// Functie om een waarde op te halen uit het "Personal data" kaartje of local storage
function getFieldValue(field) {
  // Mapping van veldnamen naar specifieke waarden in de HTML van het "Personal data" kaartje
  const fieldMappings = {
      gn: "Voornaam",
      sn: "Achternaam",
      bd: "Geboortedatum",
      bsn: "Burgerservicenummer (BSN)"
  };

  // Haal de waarde uit het "Personal data" kaartje (HTML)
  if (['gn', 'sn', 'bd', 'bsn'].includes(field)) {
      const fieldName = fieldMappings[field];
      const elements = document.querySelectorAll('#personal-data-details p');
      for (let element of elements) {
          if (element.innerText.startsWith(fieldName)) {
              return element.innerText.split(': ')[1];
          }
      }
      return 'Niet gevonden';
  }

  // Haal de waarde uit de opgeslagen gegevens in de local storage voor 'omv'
  if (field === 'omv') {
      for (let credential of credentials) {
          if (credential.name === 'Organisatiemachtiging VOG' && credential.data) {
              // Bouw de uiteindelijke string op met alle sleutel-waarde-paren in het opgeslagen kaartje
              let details = [];
              for (let key in credential.data) {
                  if (credential.data.hasOwnProperty(key)) {
                      details.push(`${key}: ${credential.data[key]}`);
                  }
              }
              return details.join(', ');
          }
      }
  }

  return 'Niet gevonden';
}


function populateRdfciModal(data) {
 // Voeg console.log toe om de inhoud van 'data' te controleren
 console.log("Data in populateRdfciModal:", data);

   // Verwijder het 'Issuer' veld
   delete data.Issuer;

  // Vul de vaste delen in
  document.getElementById('rdfci-issuedBy').innerText = data.issuedBy || 'Onbekende uitgever';

  // "Wilt u de volgende gegevens delen met" moet dikgedrukt zijn en de naam van de uitgever bevatten
 /*  document.getElementById('rdfci-share-with').innerHTML = `<strong>Wilt u de volgende gegevens delen met ${data.issuedBy}:</strong>`; */

  // Verwijder de oude inhoud van 'rdfci-name' en voeg de nieuw uit te geven kaart toe
  const rdfciNameElement = document.getElementById('rdfci-name');
  rdfciNameElement.innerHTML = ''; // Leeg de inhoud
 

    // **Nieuw uit te geven kaart tonen op de plaats van 'rdfci-name'**
    // Maak een container voor de nieuwe kaart
    const newCardContainer = document.createElement('div');
    newCardContainer.className = 'card-container';

    // Maak een header met de kaartnaam in een gekleurde balk
    const newCardHeader = document.createElement('div');
    newCardHeader.className = 'card-header';
    newCardHeader.style.backgroundColor = '#B5DEF4'; // Kleur voor de header
    newCardHeader.style.color = '#152A62'; // Tekstkleur in de header
    newCardHeader.style.fontWeight = 'bold'; // Vetgedrukte tekst
    newCardHeader.style.padding = '10px'; // Padding voor ruimte rond de tekst
    newCardHeader.style.textAlign = 'center'; // Centreer de tekst
    newCardHeader.textContent = data.name || 'Onbekend kaartje'; // Kaartnaam in de header

    // Voeg de header toe aan de kaartcontainer
    newCardContainer.appendChild(newCardHeader);

    // Maak de kaartcontent aan
    const newCardContent = document.createElement('div');
    newCardContent.className = 'card-content';

    // Voeg kaartdetails toe
    const newCardDetails = document.createElement('div');
    newCardDetails.className = 'card-details';


  for (let key in data) {
    if (
      data.hasOwnProperty(key) &&
      key !== 'rdfci' &&
      key !== 'a' &&
      key !== 't' &&
/*       key !== 'issuedBy' && */
      key !== 'name' &&
      key !== 'reason' &&
      key !== 'verifier' &&
  /*     key !== 'issuer' && */
      key !== 'type' &&
      key !== 'requester'
    ) {
      const fieldName = fieldMapping[key] || key;
      const value = data[key];

      const detailRow = document.createElement('div');
      detailRow.className = 'detail-row';

      const labelDiv = document.createElement('div');
      labelDiv.className = 'label';
      labelDiv.textContent = `${fieldName}:`;

      const valueDiv = document.createElement('div');
      valueDiv.className = 'value';
      if (fieldName === 'Foto') {
        // Als het veld 'Foto' is, voeg dan de afbeelding toe
        const img = document.createElement('img');
        img.src = value;
        img.alt = 'Foto';
        img.style.width = '100%'; // Pas de grootte naar wens aan
        valueDiv.appendChild(img);
      } else {
        // Voor andere velden, toon de tekstwaarde
        valueDiv.textContent = value || 'Niet beschikbaar';
      }

      detailRow.appendChild(labelDiv);
      detailRow.appendChild(valueDiv);

      newCardDetails.appendChild(detailRow);
    }
  }

  newCardContent.appendChild(newCardDetails);
  newCardContainer.appendChild(newCardContent);

  // Voeg de nieuw uit te geven kaart toe aan 'rdfci-name' element
  rdfciNameElement.appendChild(newCardContainer);

  // Verwerk de gevraagde rdfci data (gegevens om te delen)
  const detailsContainer = document.getElementById('rdfci-details-container');
  detailsContainer.innerHTML = ''; // Leeg de container

  // Groepeer velden per kaart
  let fieldsByCard = {};

  data.rdfci.forEach((field) => {
    const fieldName = fieldMapping[field] || field; // Map naar leesbare naam

    // Zoek het bijbehorende kaartje in 'credentials'
    const matchingCard = credentials.find(cred => {
      return cred.data && cred.data.hasOwnProperty(fieldName);
    });

    if (matchingCard) {
      if (!fieldsByCard[matchingCard.name]) {
        fieldsByCard[matchingCard.name] = { data: matchingCard.data, fields: [] };
      }
      fieldsByCard[matchingCard.name].fields.push(fieldName);
    } else {
      console.warn(`Veld '${fieldName}' niet gevonden in de credentials.`);
    }
  });
  

  // Itereer over elk kaartje en maak de kaart elementen aan
  Object.keys(fieldsByCard).forEach((cardName) => {
    const cardInfo = fieldsByCard[cardName];

    // Maak kaart container aan
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    // Maak kaart header aan
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    // Stel de achtergrondkleur in op basis van de kaartnaam indien gewenst
    switch (cardName) {
      case 'Persoonlijke data':
        cardHeader.style.backgroundColor = '#B5DEF4';   
        break;
      case 'Woonadres':
        cardHeader.style.backgroundColor = '#445580'; 
        break;
      default:
        cardHeader.style.backgroundColor = '#445580'; // Default kleur
    }

    // Voeg de header toe aan de kaartcontainer
    cardContainer.appendChild(cardHeader);

    // Maak kaart content aan
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    // Voeg kaart titel toe
    const cardTitleElement = document.createElement('div');
    cardTitleElement.className = 'card-title';
    cardTitleElement.textContent = cardName;
    cardContent.appendChild(cardTitleElement);

    // Voeg de gevraagde velden toe
    const cardDetails = document.createElement('div');
    cardDetails.className = 'card-details';

    cardInfo.fields.forEach(fieldName => {
      const value = cardInfo.data[fieldName];

      const detailRow = document.createElement('div');
      detailRow.className = 'detail-row';

      const labelDiv = document.createElement('div');
      labelDiv.className = 'label';
      labelDiv.textContent = `${fieldName}:`;

      const valueDiv = document.createElement('div');
      valueDiv.className = 'value';
      if (fieldName === 'Foto') {
        // Als het veld 'Foto' is, voeg dan de afbeelding toe
        const img = document.createElement('img');
        img.src = value;
        img.alt = 'Foto';
        img.style.width = '100%'; // Pas de grootte naar wens aan
        valueDiv.appendChild(img);
      } else {
        // Voor andere velden, toon de tekstwaarde
        valueDiv.textContent = value || 'Niet beschikbaar';
      }

      detailRow.appendChild(labelDiv);
      detailRow.appendChild(valueDiv);

      cardDetails.appendChild(detailRow);
    });

    cardContent.appendChild(cardDetails);
    cardContainer.appendChild(cardContent);

    // Voeg de kaart toe aan de detailsContainer
    detailsContainer.appendChild(cardContainer);
  });

  

  // Verwerk de overeenkomst informatie
  if (data.a) {
    const agreementFields = fieldMapping.a[data.a] || data.a;
    document.getElementById('rdfci-agreement').innerText = agreementFields;
  } else {
    document.getElementById('rdfci-agreement').innerText = 'Geen overeenkomst gevonden.';
  }
  console.log("Fields by card after grouping:", fieldsByCard);

}

// rdfci pinconfirmation
confirmPinIssuerBtn.onclick = () => {
  const data = window.currentRdfciData;
  const timestamp = new Date().toLocaleString();
  console.log("Data in confirmPinIssuerBtn.onclick:", data);
  // Maak een nieuw object voor de gemapte data
  const mappedData = {};

  // Itereer over de keys in 'data' en map de veldnamen
  for (let key in data) {
    if (
      data.hasOwnProperty(key) &&
      key !== 'rdfci' &&
      key !== 'a' &&
      key !== 't' &&
      key !== 'name' &&
      key !== 'issuedBy' &&
      key !== 'reason' &&
      key !== 'verifier' &&
      key !== 'issuer' &&
      key !== 'type' &&
      key !== 'requester'
    ) {
      const fieldName = fieldMapping[key] || key;
      mappedData[fieldName] = data[key];
    }
  }
  console.log("Mapped data for credential:", mappedData);
  // Sla het kaartje op met de gemapte data
  credentials.push({
    name: data.name || 'Onbekend kaartje',
    issuedBy: data.issuedBy || 'Onbekende uitgever',
    actionTimestamp: timestamp,
    isShareAction: false,
    data: mappedData // Gebruik de gemapte data
  });

  saveCredentials();
  console.log("Credentials after adding new card:", credentials);
  // Toon het issuer success-scherm
  goToIssuerSuccessScreen(data.name, data.issuedBy);

  // Sluit het pincode bevestigingsscherm
  pinConfirmationScreenIssuer.style.display = 'none';

  // Reset de QR scanner als deze actief is
  resetQrScanner();
};

    // Issuing meerdere kaarten
    function populateMultipleRdfciModal(data) {
      console.log("populateMultipleRdfciModal aangeroepen met data:", data);
      
      // Sla de data op voor de accept-knop
      window.currentRdfciData = data;

      // Vul de overeenkomst informatie
      const agreementElement = document.getElementById('rdfci-multiple-agreement');
      if (data.a && fieldMapping.a && fieldMapping.a[data.a]) {
          agreementElement.innerText = fieldMapping.a[data.a];
      } else {
          agreementElement.innerText = 'Bewaarplicht en datadeling met derden volgens wettelijke richtlijnen';
      }

      // Leeg de details-container
      const detailsContainer = document.getElementById('rdfci-multiple-details-container');
      detailsContainer.innerHTML = '';

      // Definieer de sleutels die je wilt uitsluiten
      const excludedKeys = ['rdfci', 'a', 't', 'type', 'issuer', 'verifier', 'requester', 'name'];

      // Itereer over elke kaart en voeg deze toe aan de modal
      data.cardsToIssue.forEach((cardData, index) => {
          const cardContainer = document.createElement('div');
          cardContainer.className = 'card-container';

          // Voeg kaart header toe
          const cardHeader = document.createElement('div');
          cardHeader.className = 'card-header';
          cardHeader.textContent = cardData.name;
          cardContainer.appendChild(cardHeader);

          // Maak een div voor de kaartinhoud
          const cardContent = document.createElement('div');
          cardContent.className = 'card-content';

          // Itereer over de kaartdata en voeg key-value paren toe, exclusief bepaalde sleutels
          for (let key in cardData) {
              if (cardData.hasOwnProperty(key)) {
                  if (excludedKeys.includes(key)) {
                      continue; // Sla deze sleutels over
                  }

                  // Haal de leesbare veldnaam op via fieldMapping, anders gebruik de originele sleutel
                  const fieldName = fieldMapping[key] || key;

                  // Maak een div voor de detailrij
                  const detailRow = document.createElement('div');
                  detailRow.className = 'detail-row';

                  // Maak een div voor het label
                  const labelDiv = document.createElement('div');
                  labelDiv.className = 'label';
                  labelDiv.textContent = `${fieldName}:`;

                  // Maak een div voor de waarde
                  const valueDiv = document.createElement('div');
                  valueDiv.className = 'value';

                  // Speciaal geval voor afbeeldingen (indien aanwezig)
                  if (fieldName.toLowerCase() === 'foto') {
                      const img = document.createElement('img');
                      img.src = cardData[key];
                      img.alt = 'Foto';
                      img.style.width = '100%'; // Pas de grootte naar wens aan
                      valueDiv.appendChild(img);
                  } else {
                      // Voor andere velden, toon de tekstwaarde
                      valueDiv.textContent = cardData[key] || 'Niet beschikbaar';
                  }

                  // Voeg label en waarde toe aan de detailrij
                  detailRow.appendChild(labelDiv);
                  detailRow.appendChild(valueDiv);

                  // Voeg de detailrij toe aan de kaartinhoud
                  cardContent.appendChild(detailRow);
              }
          }

          // Voeg de kaartinhoud toe aan de kaartcontainer
          cardContainer.appendChild(cardContent);

          // Voeg de kaartcontainer toe aan de details container
          detailsContainer.appendChild(cardContainer);
      });

      // Toon de multiple RDFCI modal
      rdfciMultipleModal.style.display = 'flex';
  }

  // Accepteren van meerdere kaarten
  rdfciMultipleAcceptButton.onclick = () => {
      const data = window.currentRdfciData;
      if (!data) {
          console.error("Data is niet beschikbaar.");
          return;
      }
      const timestamp = new Date().toLocaleString();

      // Itereer over elke kaart en sla deze op als een aparte credential
      data.cardsToIssue.forEach(card => {
          const mappedData = {};

          // Gebruik fieldMapping om de veldnamen te mappen indien nodig
          for (let key in card) {
              if (card.hasOwnProperty(key)) {
                  const fieldName = fieldMapping[key] || key;
                  mappedData[fieldName] = card[key];
              }
          }

          // Voeg het nieuwe credential toe
          credentials.push({
              name: card.name || 'Onbekend kaartje',
              issuedBy: card.issuedBy || 'Onbekende uitgever',
              actionTimestamp: timestamp,
              isShareAction: false,
              data: mappedData
          });
      });

      saveCredentials();
      console.log("Credentials na toevoegen multiple RDFCI:", credentials);

      // Toon het issuer success-scherm
      goToMultipleIssuerSuccessScreen(data.cardsToIssue.map(card => card.name), data.issuedBy);

      // Sluit de multiple RDFCI modal
      rdfciMultipleModal.style.display = 'none';
  };

  // Event listener voor het stoppen van meerdere kaarten
  rdfciMultipleStopButton.onclick = () => {
      rdfciMultipleModal.style.display = 'none';
      addCardScreen.style.display = 'none';
      walletScreen.style.display = 'block';
      bottomNav.style.display = 'flex';
      resetQrScanner();
  };





function goToMultipleIssuerSuccessScreen(cardNames, issuerName) {
  

  const issuerMultipleSuccessScreen = document.getElementById('issuer-multiple-success-screen');
  issuerMultipleSuccessScreen.style.display = 'flex';


  // Vul de nieuwe tekstvelden in het successcherm
  const cardNamesHTML = cardNames.map(name => `<li>${name}</li>`).join('');
  document.getElementById('issuer-success-data').innerHTML = `<ul>${cardNamesHTML}</ul>`;
  document.getElementById('issuer-success-issuedBy').innerText = issuerName;

    // Sla op en werk de UI bij
    saveCredentials();
    displayCredentials();
    console.log("Multiple RDFCI kaarten opgeslagen:", credentials);


  // Sluitknop logica voor het sluiten van het successcherm
  closeIssuerMultipleSuccessBtn.onclick = () => {
    issuerMultipleSuccessScreen.style.display = 'none';
      addCardScreen.style.display = 'none';
      walletScreen.style.display = 'block';
      bottomNav.style.display = 'flex'; // Toon de navigatiebalk onderaan opnieuw
  };
}




// RDFCV vraagscherm vullen
function populateRdfcvModal(data) {
  // Vul de reden
  document.getElementById('rdfcv-reason').innerText = data.reason || 'Geen reden opgegeven.';

  // Voeg de naam van de verifier toe aan de vraag
  document.getElementById('rdfcv-question-text').innerText = `Wilt u onderstaande gegevens delen met ${data.requester}?`;

  // Verwerk de gevraagde gegevens
  const detailsContainer = document.getElementById('rdfcv-details-container');
  detailsContainer.innerHTML = ''; // Leeg de container

  // Groepeer de velden en toon ze in kaartjes
  let fieldsByCard = {};

  data.rdfcv.forEach((field) => {
    const fieldName = fieldMapping[field] || field; // Gebruik field mapping

    console.log(`Mapping field '${field}' to '${fieldName}'`);

    // Zoek of het veld hoort bij een kaartje in credentials
    let matchingCard = credentials.find(cred => {
      // Zoek in cred.data of het veld bestaat
      return cred.data && cred.data.hasOwnProperty(fieldName);
    });

    if (!matchingCard) {
      console.warn(`Veld of kaartje '${fieldName}' niet gevonden in the credentials.`);
      // Als niet gevonden, controleer of er een kaartje is waarvan de naam overeenkomt met fieldName
      matchingCard = credentials.find(cred => cred.name === fieldName);
    }

    if (matchingCard) {
      console.log(`Found matching card for '${fieldName}':`, matchingCard); 
      const cardName = matchingCard.name;

      if (!fieldsByCard[cardName]) {
        fieldsByCard[cardName] = { data: matchingCard.data, fields: [], showAllFields: false };
      }

      if (matchingCard.name === fieldName) {
        // Als het veld overeenkomt met de kaartnaam, tonen we alle details
        fieldsByCard[cardName].showAllFields = true;
      } else {
        // Voeg het specifieke veld toe
        fieldsByCard[cardName].fields.push(fieldName);
      }
    } else {
      console.warn(`Veld of kaartje '${fieldName}' niet gevonden in de credentials.`);
    }
  });

  // Itereer over elk kaartje en maak de kaart elementen aan
  Object.keys(fieldsByCard).forEach((cardName) => {
    const cardInfo = fieldsByCard[cardName];

    // Maak kaart container aan
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    // Maak kaart header aan
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    // Stel de achtergrondkleur in op basis van de kaartnaam
    switch (cardName) {
      case 'Persoonlijke data':
        cardHeader.style.backgroundColor = '#B9E4E2';
        break;
      case 'Woonadres':
        cardHeader.style.backgroundColor = '#b9e4e2';
        break;
      case 'Verklaring Omtrent Gedrag (VOG)':
        cardHeader.style.backgroundColor = '#b9e4e2';
        break;
        case 'Diploma Verpleegkunde':
        cardHeader.style.backgroundColor = '#0061A6';
        break;
      default:
        cardHeader.style.backgroundColor = '#445580'; // Default kleur
    }

    // Maak kaart content container aan
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    // Voeg de header en content toe aan de kaartcontainer
    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardContent);

    // Maak kaart titel aan
    const cardTitleElement = document.createElement('div');
    cardTitleElement.className = 'card-title';
    cardTitleElement.textContent = cardName;
    cardContent.appendChild(cardTitleElement);

    // Maak kaart details aan
    const cardDetails = document.createElement('div');
    cardDetails.className = 'card-details';

    if (cardInfo.showAllFields) {
      // Voeg alle details van het kaartje toe uit cred.data
      for (let key in cardInfo.data) {
        if (cardInfo.data.hasOwnProperty(key)) {
          const detailRow = document.createElement('div');
          detailRow.className = 'detail-row'; // Class for styling

          const labelDiv = document.createElement('div');
          labelDiv.className = 'label';
          labelDiv.textContent = `${key}:`;

          const valueDiv = document.createElement('div');
          valueDiv.className = 'value';

          const value = cardInfo.data[key]; // Definieer 'value' hier

          if (key === 'Foto') {
            // Als het veld 'Foto' is, voeg dan de afbeelding toe
            const img = document.createElement('img');
            img.src = value;
            img.alt = 'Foto';
            img.style.width = '100%'; // Pas de grootte naar wens aan
            valueDiv.appendChild(img);
          } else {
            // Voor andere velden, toon de tekstwaarde
            valueDiv.textContent = value || 'Niet beschikbaar';
          }

          // Voeg label en waarde toe aan de rij
          detailRow.appendChild(labelDiv);
          detailRow.appendChild(valueDiv);

          // Voeg de rij toe aan de kaartdetails
          cardDetails.appendChild(detailRow);
        }
      }
    } else {
      // Voeg alleen de specifieke gevraagde velden toe
      cardInfo.fields.forEach(fieldName => {
        const value = cardInfo.data[fieldName];

        const detailRow = document.createElement('div');
        detailRow.className = 'detail-row';

        const labelDiv = document.createElement('div');
        labelDiv.className = 'label';
        labelDiv.textContent = `${fieldName}:`;

        const valueDiv = document.createElement('div');
        valueDiv.className = 'value';
        if (fieldName === 'Foto') {
          // Als het veld 'Foto' is, voeg dan de afbeelding toe
          const img = document.createElement('img');
          img.src = value;
          img.alt = 'Foto';
          img.style.width = '100%'; // Pas de grootte naar wens aan
          valueDiv.appendChild(img);
        } else {
          // Voor andere velden, toon de tekstwaarde
          valueDiv.textContent = value || 'Niet beschikbaar';
        }

        // Voeg label en waarde toe aan de rij
        detailRow.appendChild(labelDiv);
        detailRow.appendChild(valueDiv);

        // Voeg de rij toe aan de kaartdetails
        cardDetails.appendChild(detailRow);
      });
    }

    // Voeg de kaart details toe aan de kaart content
    cardContent.appendChild(cardDetails);

    // Voeg de kaart toe aan de container
    detailsContainer.appendChild(cardContainer);
  });

  // Agreement verwerken
  if (data.a) {
    console.log('Data.a:', data.a);  // Controleer de waarde van data.a
    console.log('Mapped value:', fieldMapping.a[data.a]);  // Controleer de gemapte waarde
    const agreementText = fieldMapping.a[data.a] || data.a;
    document.getElementById('rdfcv-agreement').innerText = agreementText;
  } else {
    document.getElementById('rdfcv-agreement').innerText = 'Geen overeenkomst gevonden.';
  }
}


rdfcvAcceptButton.onclick = () => {
  const timestamp = new Date().toLocaleString();

  // Verwijder eerdere event handler om duplicatie te voorkomen
  confirmPinBtnVerifier.onclick = null;

  // Toon eerst het pincode-bevestigingsscherm
  goToPinConfirmationVerifier();

  confirmPinBtnVerifier.onclick = () => {
    if (window.currentRdfcvData) {
      saveSharedData(window.currentRdfcvData, timestamp);
      goToVerifierSuccessScreen(window.currentRdfcvData);
    } else {
      console.error("Geen RDFCV data beschikbaar om op te slaan.");
    }
    pinConfirmationScreenVerifier.style.display = 'none';
    resetPinInputs();
  };

  rdfcvModal.style.display = 'none';
};

rdfcvStopButton.onclick = () => {
  rdfcvModal.style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
  resetQrScanner();
};




// Functie om het pincode bevestigingsscherm verifier te tonen
function goToPinConfirmationVerifier() {
  console.log("Navigating to pin confirmation screen...");
  rdfcvModal.style.display = 'none'; // Verberg de vraagmodal
  pinConfirmationScreenVerifier.style.display = 'flex'; // Toon verifier pin bevestigingsscherm
  resetPinInputs(); // Reset pincode-invoervelden
}

// Functie voor het succes-scherm na delen met verifier
function goToVerifierSuccessScreen(data) {
  successScreen.style.display = 'flex';
  successMessage.textContent = "Succes!";
  verifierNameElement.textContent = data.requester || 'Onbekende partij'; // Voeg hier data.requester toe

  // Logging wanneer het succes-scherm wordt weergegeven
  console.log("Succes-scherm geopend voor verifier:", data.requester || 'Onbekende partij');

  // "Zie Activiteit" knop
  seeActivityBtn.onclick = function() {
      console.log("Zie Activiteit knop ingedrukt. Wallet-scherm verbergen, activiteiten-scherm tonen.");

      successScreen.style.display = 'none'; // Verberg het succes-scherm
      addCardScreen.style.display = 'none'; // Verberg het add-card scherm
      walletScreen.style.display = 'none';  // Verberg het wallet-scherm
      bottomNav.style.display = 'flex'; // Toon de navbar onderaan opnieuw
      activityScreen.style.display = 'block'; // Toon het activiteiten-scherm
      showActivities(); // Toon de activiteitenlijst

      // Navigatiebalk correct instellen
      document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active')); 
      document.querySelector('.nav-item:nth-child(2)').classList.add('active'); // Activeer het activiteiten-item

      console.log("Wallet-scherm verborgen, activiteiten-scherm getoond.");
  };

  // "Sluiten" knop
  closeSuccessBtn.onclick = function() {
      console.log("Sluiten knop ingedrukt. Terug naar het wallet-scherm.");

      successScreen.style.display = 'none'; // Verberg het succes-scherm
      addCardScreen.style.display = 'none'; // Verberg het add-card scherm
      bottomNav.style.display = 'flex'; // Toon de navbar onderaan opnieuw
      walletScreen.style.display = 'block'; // Terug naar het wallet-scherm
      resetPinInputs(); // Reset de pincode-invoer

      // Reset de status van de deelactie
      isSharingActionInProgress = false;

      console.log("Succes-scherm verborgen, wallet-scherm getoond, deelactie gereset.");
  };
}


// Functie om gegevens op te slaan in localStorage zonder een kaartje toe te voegen
function saveSharedData(data) {
  const timestamp = new Date().toLocaleString();
  credentials.push({
      name: data.requester || 'Onbekende partij',
      reason: data.reason || 'Geen reden opgegeven',
      sharedData: data.rdfcv.map(field => fieldMapping[field] || field),
      agreement: data.a ? data.a.split(', ').map(agreement => fieldMapping.a[agreement] || agreement) : [],
      actionTimestamp: timestamp,
      isShareAction: true // Markeer als deelactie
  });
  saveCredentials();
}

floatingQrButton.addEventListener('click', () => {
  // Verberg de wallet-screen en de navbar
  walletScreen.style.display = 'none';
  bottomNav.style.display = 'none';

  // Toon het add-card scherm
  addCardScreen.style.display = 'flex';

  // Start direct de QR-scanner
  startQrScan();
});

// Logica voor het sluiten van het add-card scherm


if (closeScanButton) {
  closeScanButton.onclick = () => {
    // Controleer of de QR-scanner actief is
    if (html5QrCode) {
      console.log("Stopping QR scanner...");
      html5QrCode.stop().then(() => {
        console.log("QR scanner stopped.");
        readerDiv.style.display = 'none';
        closeScanButton.style.display = 'none';
        document.querySelector('.scan-container').style.display = 'flex'; // Toon scan-knop en tekst
        html5QrCode = null; // Reset de scanner
      }).catch(err => {
        console.error("Failed to stop scanning: ", err);
      });
    }

    // Verberg het add-card scherm
    addCardScreen.style.display = 'none';

    // Toon het wallet-screen opnieuw
    walletScreen.style.display = 'block';
    bottomNav.style.display = 'flex'; // Toon de navbar onderaan opnieuw
  };
}


document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-view-button');
  const buttonList = document.querySelector('.button-list');
  const sectionHeaders = document.getElementById('section-organisation-headers');

  // Start logica: button-list zichtbaar, section-organisation-headers verborgen
  toggleButton.addEventListener('click', function () {
      const icon = toggleButton.querySelector('i');

      if (buttonList.style.display === 'none') {
          // Toon button-list, verberg de headers
          buttonList.style.display = 'flex';
          sectionHeaders.style.display = 'none';
          icon.className = 'fas fa-building';
          toggleButton.innerHTML = '<i class="fas fa-building"></i> Weergave per organisatie';
      } else {
          // Verberg button-list, toon de headers
          buttonList.style.display = 'none';
          sectionHeaders.style.display = 'block';
          icon.className = 'fas fa-list';
          toggleButton.innerHTML = '<i class="fas fa-list"></i> Weergave per attribuut';
      }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.header-bar');

  headers.forEach(header => {
    header.addEventListener('click', function () {
      const formButtons = header.nextElementSibling;

      // Wissel de zichtbaarheid van de form-buttons
      if (formButtons.style.display === 'none' || formButtons.style.display === '') {
        formButtons.style.display = 'block';
        header.querySelector('.fa-chevron-down').classList.remove('fa-chevron-down');
        header.querySelector('.header-right i').classList.add('fa-chevron-up');
      } else {
        formButtons.style.display = 'none';
        header.querySelector('.header-right i').classList.remove('fa-chevron-up');
        header.querySelector('.header-right i').classList.add('fa-chevron-down');
      }
    });
  });
});

// Functie om de CSAS Modal te vullen met de juiste gegevens uit de QR-code
function populateCsasModal(data) {
  // Sla de CSAS data op voor later gebruik
  window.currentCsasData = data;

  // Toon de naam van de verifier
  csasRequester.textContent = data.requester;

  // Leeg de details-container zodat oude gegevens worden verwijderd
  csasDetailsContainer.innerHTML = '';

  // Toon de reden waarom de gegevens worden opgevraagd, indien aanwezig
  const reasonElement = document.getElementById('csas-reason');
  if (data.reason) {
    reasonElement.textContent = ` ${data.reason}`;
  } else {
    reasonElement.textContent = '';
  }

  // Vul de details-container met de gegevens die opgevraagd worden
  data.csas.forEach(item => {
    // Controleer of zowel `issuedBy` als `name` aanwezig zijn
    if (item.issuedBy && item.name) {
      const issuerName = fieldMapping[item.issuedBy] || item.issuedBy;  // Gebruik fieldmapping voor leesbare namen van de uitgever
      const cardName = fieldMapping[item.name] || item.name;  // Gebruik fieldmapping voor de kaartnaam

      // Maak een element aan om de informatie weer te geven
      const detail = document.createElement('div');
      detail.className = 'csas-detail';

      // Voeg een gestructureerde weergave toe van de uitgever en het kaartje
      detail.innerHTML = `
        <p>Uitgegeven door:</p>
        <p><strong>${issuerName}</strong></p>
        <p>Gegevens:</p>
        <p><strong>${cardName}</strong></p>
      `;

      // Voeg een divider toe voor nette scheiding
      const divider = document.createElement('div');
      divider.className = 'divider';
      divider.style.borderTop = '1px solid #ccc';
      divider.style.margin = '10px 0';

      // Voeg het detail en de divider toe aan de details-container
      csasDetailsContainer.appendChild(detail);
      csasDetailsContainer.appendChild(divider);
    } else {
      console.error('CSAS item ontbreekt belangrijke gegevens: ', item);
    }
  });

  // Vul de overeenkomst informatie (bijv. opslagduur)
  if (data.a && fieldMapping.a[data.a]) {
    csasAgreement.textContent = fieldMapping.a[data.a];
  } else {
    csasAgreement.textContent = 'Geen overeenkomst gevonden.';
  }
}

function saveCsasCredentials(data) {
  console.log("Start met opslaan van CSAS credentials...");
  data.csas.forEach(item => {
    // Gebruik fieldMapping om leesbare namen te verkrijgen
    const issuerName = fieldMapping[item.issuedBy] || item.issuedBy;
    const cardName = fieldMapping[item.name.toLowerCase()] || item.name;

    console.log(`Opslaan van credential: Issuer: ${issuerName}, Card: ${cardName}`);

    // Controleer of het om de VOG gaat
    if (issuerName === 'Justis' && cardName === 'Verklaring Omtrent Gedrag (VOG)') {
      // Voeg de gedetailleerde VOG-gegevens toe
      const newCredential = {
        name: 'Verklaring Omtrent Gedrag (VOG)',
        issuedBy: 'Justis',
        actionTimestamp: new Date().toLocaleString(),
        isShareAction: false,
        data: {
          "Issuer": true,
          "name": "Verklaring Omtrent Gedrag (VOG)",
          "issuedBy": "Justis",
          "LEID": "NL_KVK_27378698",
          "Issued_Date": "2023-09-17",
          "Issued_to_subject": "Willeke Liselotte de Bruijn",
          "Algemeen_profiel": "4,5,6,7",
          "Specifiek_profiel": "55",
          "Attestation_Trust_Type": "PuB-EAA",
          "rdfci": ["gn", "sn", "bd", "bsn"],
          "a": "12t",
          "t": "w"
        }
      };
      credentials.push(newCredential);
    } else {
      // Bestaande code voor andere credentials
      const newCredential = {
        name: cardName,
        issuedBy: issuerName,
        actionTimestamp: new Date().toLocaleString(),
        isShareAction: false,
        data: {
          issuedBy: issuerName,
          cardName: cardName
        }
      };
      credentials.push(newCredential);

      console.log("Nieuw credential toegevoegd aan lijst:", newCredential);
    }
  });

  // Sla de credentials op in de local storage
  saveCredentials();
  console.log("Credentials opgeslagen in local storage.");


  // Werk de weergave van de wallet bij
  displayCredentials();
  console.log("Weergave van wallet bijgewerkt met nieuwe credentials.");

    // Optioneel: Log de credentials voor debugging
    console.log("Credentials na opslaan:", credentials);
}

// Aangepaste pincode bevestigingslogica voor CSAS
document.addEventListener('DOMContentLoaded', function() {
  const confirmPinCsas = document.getElementById('confirm-pin-csas');
  
  if (confirmPinCsas) {
    confirmPinCsas.onclick = () => {
      // Bevestig de pincode en sla gegevens op
      if (window.currentCsasData) {
        saveCsasCredentials(window.currentCsasData); // Sla de nieuwe kaartjes op
        saveCsasShareAction(window.currentCsasData); // Sla de deelactie op
        console.log("Credentials en deelactie opgeslagen:", credentials);
      } else {
        console.error("Er is geen CSAS data beschikbaar om op te slaan.");
        return;
      }
 
      goToCsasSuccessScreen();
 
      // Sluit het pincode bevestigingsscherm
      csasPinConfirmationScreen.style.display = 'none';
 
      // Stop de QR-code scanner
      if (html5QrCode) {
        console.log("Stopping QR scanner after CSAS confirmation...");
        html5QrCode.stop().then(() => {
          console.log("QR scanner stopped after CSAS confirmation.");
          readerDiv.style.display = 'none';
          closeScanButton.style.display = 'none';
          document.querySelector('.scan-container').style.display = 'flex';
        }).catch(err => {
          console.error("Failed to stop QR scanner: ", err);
        });
      }
    };
  } else {
    console.error("Element 'confirm-pin-csas' niet gevonden.");
  }
});


// Functie om het CSAS successcherm te tonen
function goToCsasSuccessScreen() {
  // Toon de naam van de verifier in het successcherm
  csasSuccessRequester.textContent = csasRequester.textContent;

  // Leeg de container voor de kaartjes zodat oude gegevens worden verwijderd
  csasSuccessCardContainer.innerHTML = '';

  // Voeg de nieuwe kaartjes toe aan het successcherm
  currentCsasData.csas.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    // Haal stijlen op basis van kaartnaam
    const nameLower = item.name.toLowerCase();
    const styles = cardStyles[nameLower] || {
      imagePath: null,
      iconColor: '#333',
      textColor: '#333'
    };

    // Gebruik fieldMapping voor de leesbare issuer en kaartnaam
    const issuerName = fieldMapping[item.issuedBy] || item.issuedBy;
    const cardName = fieldMapping[item.name.toLowerCase()] || item.name;

    // Creëer een logo element als er een logo beschikbaar is
    let logoElement = '';
    if (styles.imagePath) {
      logoElement = `<img src="${styles.imagePath}" alt="${cardName}" class="card-logo" style="width: 30px; height: 30px; margin-bottom: 10px;">`;
    }

    // Voeg de HTML voor de kaart toe, inclusief logo indien beschikbaar
    card.innerHTML = `
      ${logoElement}
      <div class="card-text" style="color: ${styles.textColor};">
        <h3>${cardName}</h3>
        <p style="font-size: 14px; color: #555; margin: 5px 0 0 0;">${issuerName}</p>
      </div>
    `;

    // Voeg de kaart toe aan de success card container
    csasSuccessCardContainer.appendChild(card);
  });

  // Toon het CSAS successcherm
  csasSuccessScreen.style.display = 'flex';

  // Verberg het add-card scherm
  addCardScreen.style.display = 'none';

  // Close knop logica voor het sluiten van het successcherm
closeCsasSuccessBtn.onclick = () => {
  csasSuccessScreen.style.display = 'none'; // Verberg het successcherm
  addCardScreen.style.display = 'none'; // Verberg het add-card scherm
  walletScreen.style.display = 'block'; // Toon het wallet-scherm
  bottomNav.style.display = 'flex'; // Toon de navigatiebalk onderaan opnieuw

  // **Laad de credentials opnieuw en werk de weergave bij**
  loadCredentials(); // Laad credentials uit de local storage
  displayCredentials(); // Werk de wallet-weergave bij
};
}





// Event listener voor de "Doorgaan"-knop in de CSAS-modal
csasAcceptButton.onclick = () => {
  console.log("CSAS Accept Button clicked.");
  csasPinConfirmationScreen.style.display = 'flex'; // Ga naar pincode bevestigingsscherm
  csasModal.style.display = 'none'; // Verberg de CSAS-modal
};

// Event listener voor de "Stoppen"-knop in de CSAS-modal
csasStopButton.onclick = () => {
  console.log("CSAS Stop Button clicked.");
  // Verberg de CSAS-modal
  csasModal.style.display = 'none';
  addCardScreen.style.display = 'none';
 
  
  // Toon het wallet-scherm
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex'; // Toon de navigatiebalk onderaan opnieuw
  
  // Stop de QR-code scanner
  if (html5QrCode) {
    console.log("Stopping QR scanner after stopping CSAS...");
    html5QrCode.stop().then(() => {
      console.log("QR scanner stopped after CSAS cancellation.");
      readerDiv.style.display = 'none';
      closeScanButton.style.display = 'none';
      document.querySelector('.scan-container').style.display = 'flex';
    }).catch(err => {
      console.error("Failed to stop QR scanner: ", err);
    });
  }
};

function saveCsasShareAction(data) {
  const timestamp = new Date().toLocaleString();
  credentials.push({
    name: data.requester || 'Onbekende partij',
    reason: data.reason || 'Geen reden opgegeven',
    sharedData: data.csas.map(item => {
      return {
        issuedBy: fieldMapping[item.issuedBy] || item.issuedBy,
        name: fieldMapping[item.name] || item.name
      };
    }),
    agreement: data.a ? (fieldMapping.a[data.a] || data.a) : 'Geen overeenkomst',
    actionTimestamp: timestamp,
    isShareAction: true // Markeer als deelactie
  });
  saveCredentials();
}

// In de add card catalogus een vog ophalen
document.addEventListener('DOMContentLoaded', function () {
  const cardButtons = document.querySelectorAll('.card-button');

  cardButtons.forEach(button => {
    const buttonTextElement = button.querySelector('.button-text');
    if (buttonTextElement && buttonTextElement.textContent.includes("VOG")) {
      button.addEventListener('click', function () {
        // VOG gegevens ophalen alsof deze via QR-code zijn gescand
        const vogData = {
          "Issuer": true,
          "name": "Verklaring Omtrent Gedrag (VOG)",
          "issuedBy": "Justis",
          "LEID": "NL_KVK_27378698",
          "Issued_Date": "2023-09-17",
          "Issued_to_subject": "Willeke Liselotte de Bruijn",
          "Algemeen_profiel": "4,5,6,7",
          "Specifiek_profiel": "55",
          "Attestation_Trust_Type": "PUB-EAA",
          "rdfci": [/* "gn", "sn", "bd", "bsn" */],
          "a": "12t",
          "t": "w"
        };

        // Sla de data op voor later gebruik
        window.currentRdfciData = vogData;

        // Vul het RDFCI modal met de gegevens
        populateRdfciModal(vogData);

        // Toon het RDFCI modal
        rdfciModal.style.display = 'flex';

        // Pas rdfciAcceptButton.onclick aan
        rdfciAcceptButton.onclick = () => {
          // Toon het pincode bevestigingsscherm
          pinConfirmationScreenIssuer.style.display = 'flex';
          // Verberg de RDFCI-modal
          rdfciModal.style.display = 'none';
          // Reset de pincode-invoer
          resetPinInputs();
        };

        rdfciStopButton.onclick = () => {
          // Sluit het RDFCI modal
          rdfciModal.style.display = 'none';
          addCardScreen.style.display = 'none';
          walletScreen.style.display = 'block';
          bottomNav.style.display = 'flex';
        };
      });
    }
  });
});


// In de add card catalogus een diploma ophalen
document.addEventListener('DOMContentLoaded', function () {
  const cardButtons = document.querySelectorAll('.card-button');

  cardButtons.forEach(button => {
    const buttonTextElement = button.querySelector('.button-text');
    if (buttonTextElement && buttonTextElement.textContent.includes("Diploma")) {
      button.addEventListener('click', function () {
        // Diploma gegevens ophalen alsof deze via QR-code zijn gescand
        const diplomaData = {
          "Issuer": true,
          "name": "Diploma Verpleegkunde",
          "issuedBy": "DUO",
          "LEID": "NL_KVK_27378698",
          "Issued_Date": "2023-06-15",
          "Issued_to_subject": "Willeke Liselotte de Bruijn",
          "Diploma_Type": "Bachelor",
          "Institution": "Hogeschool Rotterdam",
          "rdfci": [/* "gn", "sn", "bd", "bsn" */],
          "a": "12t",
          "t": "w"
        };

        // Sla de data op voor later gebruik
        window.currentRdfciData = diplomaData;

        // Vul het RDFCI modal met de gegevens
        populateRdfciModal(diplomaData);

        // Toon het RDFCI modal
        rdfciModal.style.display = 'flex';

        // Pas rdfciAcceptButton.onclick aan
        rdfciAcceptButton.onclick = () => {
          // Toon het pincode bevestigingsscherm
          pinConfirmationScreenIssuer.style.display = 'flex';
          // Verberg de RDFCI-modal
          rdfciModal.style.display = 'none';
          // Reset de pincode-invoer
          resetPinInputs();
        };

        rdfciStopButton.onclick = () => {
          // Sluit het RDFCI modal
          rdfciModal.style.display = 'none';
          addCardScreen.style.display = 'none';
          walletScreen.style.display = 'block';
          bottomNav.style.display = 'flex';
        };
      });
    }
  });
});

// In de add card catalogus een diploma ophalen
document.addEventListener('DOMContentLoaded', function () {
  const cardButtons = document.querySelectorAll('.card-button');

  cardButtons.forEach(button => {
    const buttonTextElement = button.querySelector('.button-text');
    if (buttonTextElement && buttonTextElement.textContent.includes("Rijbewijs")) {
      button.addEventListener('click', function () {
        // Diploma gegevens ophalen alsof deze via QR-code zijn gescand
        const diplomaData = {
          "Issuer": true,
          "name": "Rijbewijs",
          "issuedBy": "RDW",
          "LEID": "NL_KVK_000000",
          "Issued_Date": "2023-06-15",
          "Issued_to_subject": "Willeke Liselotte de Bruijn",
          "Type": "A, B, D1, T",
          "rdfci": [/* "gn", "sn", "bd", "bsn" */],
          "a": "w",
          "t": "w"
        };

        // Sla de data op voor later gebruik
        window.currentRdfciData = diplomaData;

        // Vul het RDFCI modal met de gegevens
        populateRdfciModal(diplomaData);

        // Toon het RDFCI modal
        rdfciModal.style.display = 'flex';

        // Pas rdfciAcceptButton.onclick aan
        rdfciAcceptButton.onclick = () => {
          // Toon het pincode bevestigingsscherm
          pinConfirmationScreenIssuer.style.display = 'flex';
          // Verberg de RDFCI-modal
          rdfciModal.style.display = 'none';
          // Reset de pincode-invoer
          resetPinInputs();
        };

        rdfciStopButton.onclick = () => {
          // Sluit het RDFCI modal
          rdfciModal.style.display = 'none';
          addCardScreen.style.display = 'none';
          walletScreen.style.display = 'block';
          bottomNav.style.display = 'flex';
        };
      });
    }
  });
});







// Functie om "mandate" QR-code te verwerken
function handleMandateQR(data, timestamp) {
  // Controleer of de benodigde velden aanwezig zijn
  if (!data.requester || !data.reason || !Array.isArray(data.mandate)) {
      console.error("Mandate QR-code mist noodzakelijke velden:", data);
      return;
  }

  // Vul de mandate-modal met gegevens uit de QR-code
  populateMandateModal(data);
}

function populateMandateModal(data) {
  console.log('populateMandateModal aangeroepen met data:', data); // Debugging log

  // Sla de Mandate data op voor later gebruik
  window.currentMandateData = data;

   // Selecteer het bestaande 'mandate-content' element
   const mandateContentDiv = document.querySelector('.mandate-content-request');

   // Controleer of het element bestaat
   if (!mandateContentDiv) {
     console.error('mandate-content element niet gevonden in de DOM.');
     return;
   }
 
   // Vul de `innerHTML` van `mandateContentDiv` met de gewenste inhoud
 
   mandateContentDiv.innerHTML = `
    <p>De volgende partij vraagt een machtiging:</p>
    <p><strong>Handelsnaam:</strong> ${data.requester}</p>
    <p><strong>Organisatie ID:</strong> ${data.LEID}</p>
    
       
   `;


  // Toon de reden van het verzoek
  const reasonElement = document.getElementById('mandate-reason');
  if (data.reason) {
    reasonElement.textContent = data.reason;
    console.log('Updating mandate-reason:', data.reason);
  } else {
    reasonElement.textContent = 'Geen reden opgegeven.';
    console.log('Updating mandate-reason: Geen reden opgegeven.');
  }

  // Vul de gegevens-container met de opgehaalde gegevens
  const mandateDataContainer = document.getElementById('mandate-data-container');
  mandateDataContainer.innerHTML = ''; // Maak de container leeg

  data.mandate.forEach((item, idx) => {
    // Gebruik fieldMapping om leesbare namen te verkrijgen
    const mappedIssuedBy = fieldMapping[item.issuedBy] || item.issuedBy;
    const mappedName = fieldMapping[item.name.toLowerCase()] || item.name;
    const dienst = item.dienst || 'Onbekende dienst';
    const leid = data.LEID || 'Niet beschikbaar';
    const handelsnaam = data.requester || 'Niet beschikbaar';


    console.log(`Adding mandate detail for item ${idx}: IssuedBy=${mappedIssuedBy}, Name=${mappedName}`);

    // Maak een element aan om de informatie weer te geven
    const detail = document.createElement('div');
    detail.className = 'mandate-detail';

    // Voeg een gestructureerde weergave toe van de uitgever en het kaartje
    detail.innerHTML = `
      <p>Dienstverlener: ${mappedIssuedBy}</p>
      <p>Dienst: ${item.dienst}</p>
      <p>Gegevens: ${item.name}</p>
   `;

    // Voeg een divider toe voor nette scheiding, behalve na de laatste item
    if (idx < data.mandate.length - 1) {
      const hr = document.createElement('hr');
      detail.appendChild(hr);
    }

    // Voeg het detail toe aan de container
    mandateDataContainer.appendChild(detail);
  });

// Vul de overeenkomst informatie (bijv. opslagduur) met fieldMapping
const agreementElement = document.getElementById('mandate-agreement');
if (data.a && fieldMapping.a && fieldMapping.a[data.a]) {
    agreementElement.textContent = fieldMapping.a[data.a];
} else {
    agreementElement.textContent = 'Geen overeenkomst gevonden.';
}

// Controleer of geldigheidsduur en intrekbaar beschikbaar zijn en voeg deze toe als <p>-elementen
if (data.geldigheidsduur || data.intrekbaar) {
  const detailContainer = document.createElement('div');
  detailContainer.className = 'additional-details';

  if (data.geldigheidsduur) {
      const durationElement = document.createElement('p');
      durationElement.textContent = `Geldigheidsduur: ${data.geldigheidsduur}`;
      detailContainer.appendChild(durationElement);
  }

  if (data.intrekbaar) {
      const retractableElement = document.createElement('p');
      retractableElement.textContent = `Intrekbaar: ${data.intrekbaar}`;
      detailContainer.appendChild(retractableElement);
  }

  // Voeg de extra details toe aan de div met id "mandate-agreement"
  agreementElement.appendChild(detailContainer);
}

  //vul requester in
  const mandateRequesterAgreement = document.getElementById('mandate-requester-agreement');
  mandateRequesterAgreement.textContent = data.requester


  // Toon de Mandate Modal
  document.getElementById('mandate-modal').style.display = 'flex';
}

// Event listener voor de "Stoppen" knop in de mandate-modal
document.getElementById('mandate-stop-button').addEventListener('click', () => {
  console.log("Mandate Stop Button clicked.");

  // Verberg de mandate-modal
  document.getElementById('mandate-modal').style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';

  // Controleer of de QR-code scanner actief is en stop deze indien nodig
  if (html5QrCode) {
    html5QrCode.stop().then(() => {
      console.log("QR scanner stopped.");
    }).catch(err => {
      console.error("Failed to stop scanner: ", err);
    });
  }

  // Herstel de scanner en interface
  resetQrScanner();

  // Toon het wallet-screen, verberg add-card screen, toon bottom-nav
  walletScreen.style.display = 'block';
  addCardScreen.style.display = 'none';
  bottomNav.style.display = 'flex';
});

function resetQrScanner() {
  console.log("Resetting QR scanner...");

  // Verberg de camera- en sluitknoppen
  if (html5QrCode) {
    html5QrCode.stop().then(() => {
      console.log("QR scanner stopped.");
    }).catch(err => {
      console.error("Failed to stop scanning: ", err);
    });
  }
  
  // Verberg de camera en toon de scan-knop weer
  readerDiv.style.display = 'none';
  closeScanButton.style.display = 'none';
  document.querySelector('.scan-container').style.display = 'flex'; // Toon scan-knop en tekst
}

// Event listener voor de "Akkoord" knop in de mandate-modal
document.getElementById('mandate-accept-button').addEventListener('click', () => {
  console.log("Mandate Accept Button clicked.");

  // Verberg de mandate-modal
  document.getElementById('mandate-modal').style.display = 'none';

  // Toon het pincode bevestigingsscherm
  document.getElementById('mandate-pin-confirmation-screen').style.display = 'flex';
});


// Event listener voor de "Bevestigen" knop in het mandate-pin-confirmation-screen
document.getElementById('confirm-pin-mandate').addEventListener('click', () => {
  console.log("Mandate Confirm Pin Button clicked.");


  // Haal de gegevens uit de currentMandateData
  const currentData = window.currentMandateData;
  if (!currentData) {
      console.error("Er is geen Mandate data beschikbaar om op te slaan.");
      return;
  }

  console.log(currentData);
  // Sla de Mandate credentials op
  processMandate(currentData);


  // Toon het mandate-success-screen
  document.getElementById('mandate-success-screen').style.display = 'flex';

  // Verberg het pincode bevestigingsscherm
  document.getElementById('mandate-pin-confirmation-screen').style.display = 'none';

  // Reset de pincode invoervelden
  resetPinInputs();
});


function processMandate(data) {
  const timestamp = new Date().toLocaleString();
  console.log("processMandate functie aangeroepen met data:", data);

  // Creëer een machtiging kaartje voor de machtigingen-sectie
  const machtigingCard = {
      type: 'mandate',
      requester: data.requester || 'Onbekende requester',
      leid: data.LEID, 
      reason: data.reason || 'Geen reden opgegeven',
      mandate: data.mandate.map(item => ({
          issuedBy: fieldMapping[item.issuedBy] || item.issuedBy,
          name: fieldMapping[item.name.toLowerCase()] || item.name,
          dienst: fieldMapping[item.dienst] || item.dienst
      })),
      a: fieldMapping.a[data.a] || data.a,
      actionTimestamp: timestamp,
      isShareAction: false,
      name: `Machtiging - ${data.requester}` // Nodig voor displayCredentials indien nodig
  };

  // Voeg geldigheidsduur toe als het bestaat
  if (data.geldigheidsduur) {
    machtigingCard.geldigheidsduur = data.geldigheidsduur;
  }

  // Voeg intrekbaar toe als het bestaat
  if (data.intrekbaar) {
    machtigingCard.intrekbaar = data.intrekbaar;
  }

  credentials.push(machtigingCard);
  saveCredentials();
  displayMachtigingen(); // Functie om machtigingen weer te geven in de machtigingen-section

  // Log de activiteit voor het activiteiten-scherm
  const activity = {
      type: 'mandate', // Type activiteittype: 'machtiging', // Type activiteit
      name: 'Machtiging',
      requester: data.requester || 'Onbekende requester',
      reason: data.reason || 'Geen reden opgegeven',
      actionTimestamp: timestamp, // Gebruik 'actionTimestamp' consistent
      isActivity: true // Markeer als activiteit
  };

  credentials.push(activity);
  saveCredentials();

  // Toon het mandate-success-screen
  showMandateSuccessScreen(data.requester, timestamp);
}






// Functie om een activiteit te loggen
function logActivity(type, requester, timestamp) {
  const activity = {
      type: type, // 'machtiging' of 'share'
      requester: requester,
      timestamp: timestamp,
      isActivity: true // Markeer als activiteit
  };
  // Voeg de activiteit toe aan credentials
  credentials.push(activity);
  saveCredentials();
}

// Functie om het mandate-success-screen te tonen
function showMandateSuccessScreen(requester, timestamp) {
  // Vul de requester naam in het success-screen
  document.getElementById('mandate-success-requester').innerText = requester || 'Onbekende requester';

  // Toon het mandate-success-screen
  document.getElementById('mandate-success-screen').style.display = 'flex';
}

// Event listener voor de "Bekijk Machtiging" knop in het mandate-success-screen
document.getElementById('view-mandate-button').addEventListener('click', () => {
  console.log("Bekijk Machtiging Button clicked.");

  // Verberg het mandate-success-screen
  document.getElementById('mandate-success-screen').style.display = 'none';

  // Verberg het add-card screen
  addCardScreen.style.display = 'none';

   // Toon het wallet-screen
   walletScreen.style.display = 'none';

  // Toon de bottom-nav
  bottomNav.style.display = 'flex';

  // Toon de machtiging-section
  document.getElementById('machtiging-section').style.display = 'flex';

  // Activeer het machtigingen navbar-item
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  machtigingNavbarItem.classList.add('active');

 // Roep de functie aan om de machtigingen weer te geven
 displayMachtigingen();


  console.log("Machtiging-section getoond");
});


// Event listener voor de "Sluiten" knop in het mandate-success-screen
document.getElementById('close-mandate-success-button').addEventListener('click', () => {
  console.log("Sluiten Button clicked.");

  // Verberg het mandate-success-screen
  document.getElementById('mandate-success-screen').style.display = 'none';

  // Verberg het add-card screen
  addCardScreen.style.display = 'none';

  // Toon de bottom-nav
  bottomNav.style.display = 'flex';

  // Toon het wallet-screen
  walletScreen.style.display = 'block';

  console.log("Terug naar wallet-screen.");
});





// Functie om de Signdoc modal te vullen en te tonen
function populateModalSignDoc(data) {
  // Populate the modal with data
  signdocDocumentElement.textContent = data.documentName || 'Onbekend document';
  signdocIssuedByElement.textContent = data.issuedBy || 'Onbekende uitgever';

  // Show the signdoc modal
  signdocModal.style.display = 'flex';
}

// Event listener voor de stop-knop in de Signdoc modal
signdocStopButton.addEventListener('click', () => {
  signdocModal.style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
  resetQrScanner();
});

// Event listener voor de accept-knop in de Signdoc modal
signdocAcceptButton.addEventListener('click', () => {
  signdocModal.style.display = 'none';
  pinConfirmationScreenSigndoc.style.display = 'flex';
  resetPinInputs(); // Reset de pincode-invoervelden
});

// Event listener voor de confirm-knop in de Signdoc pincode confirmation
confirmPinSigndocBtn.addEventListener('click', () => {
  // Hier kun je pincode verificatie toevoegen indien nodig

  // Voor demonstratiedoeleinden gaan we ervan uit dat de pincode correct is

  // Haal de huidige timestamp op
  const timestamp = new Date().toLocaleString();

  // Maak een nieuw credential object voor de signdoc actie
  const newCredential = {
    name: signdocDocumentElement.textContent || 'Onbekend document', // Gebruik de documentnaam
    issuedBy: signdocIssuedByElement.textContent || 'Onbekende uitgever',
    type: 'signdoc',
    actionTimestamp: timestamp,
    isShareAction: false,
    data: {
        documentName: signdocDocumentElement.textContent,
        issuedBy: signdocIssuedByElement.textContent,
        // Voeg indien nodig andere relevante data toe
    }
};

  // Voeg de nieuwe actie toe aan credentials
  credentials.push(newCredential);
  saveCredentials();
  showActivities(); // Update het activiteitenoverzicht

  // Verberg het pincode-confirmatiescherm
  pinConfirmationScreenSigndoc.style.display = 'none';

  // Toon het successcherm
  signdocSuccessScreen.style.display = 'flex';
});


// Select the button by its ID
  document.getElementById("signdoc-download-btn").addEventListener("click", function () {
    // Show the alert message
    alert("Vanwege demo doeleinden wordt het document niet gedownload.");
});

// Event listener voor de sluitknop in het Signdoc success scherm
closeSigndocSuccessBtn.addEventListener('click', () => {
  signdocSuccessScreen.style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
});




// Functie om een mock QR-code te verwerken
function scanMockQRCode(mockData) {
  try {
      const data = JSON.parse(mockData);
      const timestamp = new Date().toLocaleString();

      // Stap 1: Controleer het type QR-code
      if (data.type === "mandate") {
          console.log("Mandate Mock QR-code herkend.");
          handleMandateQR(data, timestamp);
      }
      // Bestaande condities voor andere types (CSAS, RDFCV, RDFCI, Issuer)
      else if (data.type === "verifier" && data.csas) {
          // ... bestaande RDFCV en CSAS handling ...
      }
      else if (data.issuedBy && data.name) {
          // ... bestaande Issuer handling ...
      } else {
          console.log("Onbekende QR-code structuur.");
      }

  } catch (error) {
      console.error("Mock QR-code parse error: ", error);
  }
}

// Voeg een event listener toe voor het tonen van machtiging details
function showMandateDetails(mandate) {
 

  // Verberg andere secties
  document.getElementById('wallet-screen').style.display = 'none';
  machtigingSection.style.display = 'none';
   // Verberg de bottom-nav
   bottomNav.style.display = 'none';

  // Toon de machtigingsdetails
  const mandateDetailsView = document.getElementById('mandate-details');
  mandateDetailsView.style.display = 'block';

  // Vul de titel en de content
  document.getElementById('mandate-details-title').textContent = `Machtiging aan ${mandate.requester}`;
  
  let detailsHTML = `
    <p><strong>Aanvrager:</strong> ${mandate.requester}</p>
    <p><strong>Organisatie ID:</strong> ${mandate.leid}</p>
      <div class="divider"></div>
    <p><strong>Reden verzoek:</strong> ${mandate.reason}</p>
    <p><strong>Machtiging afgegeven op:</strong> ${mandate.actionTimestamp}</p>
    <div class="divider"></div>
    <p><strong>Tot welke dienstverleners en diensten heeft ${mandate.requester} toegang:</strong></p>
    
  `;

  mandate.mandate.forEach(item => {
    detailsHTML += `
 
      <p>Dienstverlener: ${fieldMapping[item.issuedBy] || item.issuedBy}</p>
      <p>Dienst: ${fieldMapping[item.name.toLowerCase()] || item.dienst}</p>
      <p>Gegevens: ${fieldMapping[item.name.toLowerCase()] || item.name}</p>
      
    `;
  });

  // Voeg gevraagde gegevens toe onder een nieuw kopje
  detailsHTML += `
    <div class="divider"></div>
    <p><strong>Gevraagde gegevens voor ophalen:</strong></p>
    <p>Burgerservicenummer (BSN): 999999990</p>
   
  `;

  detailsHTML += `
  <div class="divider"></div>
  <p><strong>Overeenkomst:</strong></p>
  <p>${fieldMapping.a[mandate.a] || mandate.a}</p>
`;

if (mandate.geldigheidsduur) {
  detailsHTML += `<p>Geldigheidsduur: ${mandate.geldigheidsduur}</p>`;
}

if (mandate.intrekbaar) {
  detailsHTML += `<p>Intrekbaar: ${mandate.intrekbaar}</p>`;
}

  document.getElementById('mandate-details-content').innerHTML = detailsHTML;

  // Voeg de functionaliteit toe voor de terugknop van de details
  document.getElementById('close-details-mandate').onclick = () => {
    mandateDetailsView.style.display = 'none';
    machtigingSection.style.display = 'flex'; // Ga terug naar de machtigingensectie
    bottomNav.style.display = 'flex'; // Toon de bottom-nav weer
  };
}


  // Voeg de functionaliteit toe voor de terugknop van de machtiging sectie
  document.getElementById('close-machtiging-section').onclick = () => {
   
    machtigingSection.style.display = 'none'; // 
    walletScreen.style.display = 'block';
    bottomNav.style.display = 'flex'; // Toon de bottom-nav weer
    overviewNavbarItem.classList.add('active');
  };



    // Voeg de functionaliteit toe voor de terugknop van de contacten sectie
    document.getElementById('close-trusted-contacts-section').onclick = () => {
   
      trustedContactsSection.style.display = 'none';
      walletScreen.style.display = 'block';
      bottomNav.style.display = 'flex'; // Toon de bottom-nav weer
      overviewNavbarItem.classList.add('active');
    };
  
  


// Gecombineerde displayMachtigingen functie
function displayMachtigingen() {
  console.log("displayMachtigingen functie aangeroepen");

  const machtigingGrid = document.getElementById('machtiging-grid');
  machtigingGrid.innerHTML = '';

  // Filter en toon alleen machtiging kaartjes die geen activiteit zijn
  const machtigingen = credentials.filter(cred => cred.type === 'mandate' && !cred.isActivity);


  // Sorteer de machtigingen op datum (meest recente eerst)
  machtigingen.sort((a, b) => {
      let dateA = Date.parse(convertToStandardDate(a.actionTimestamp));
      let dateB = Date.parse(convertToStandardDate(b.actionTimestamp));
      return dateB - dateA;
  });
  console.log("Gesorteerde machtigingen:", machtigingen);

  // Doorloop de gesorteerde machtigingen en voeg ze toe aan de weergave
  machtigingen.forEach((mandate, index) => {
    const card = document.createElement('div');
    card.className = 'card';

      card.innerHTML = `
          <div class="card-text">
              <h3>${mandate.requester}</h3>
              <p>Reden: ${mandate.reason}</p>
              <p>Datum: ${mandate.actionTimestamp}</p>
          </div>
      `;

      // Gebruik showMandateDetails voor het weergeven van details
      card.addEventListener('click', () => showMandateDetails(mandate));

      // Voeg kaart toe aan de grid
      machtigingGrid.appendChild(card);
  });
}

// Event listener voor het klikken op de overzicht-knop in de navbar
overviewNavbarItem.addEventListener('click', () => {
  // Verberg andere secties
  walletScreen.style.display = 'block';
  activitiesSection.style.display = 'none';
  trustedContactsSection.style.display = 'none';
  instellingenSection.style.display = 'none';
  machtigingSection.style.display = 'none';

  // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Zet het overzicht-item actief in de navbar
  overviewNavbarItem.classList.add('active');
});

// Event listener voor het klikken op de activiteiten-knop in de navbar
activitiesNavbarItem.addEventListener('click', () => {
  // Verberg andere secties
  walletScreen.style.display = 'none';
  activitiesSection.style.display = 'flex';
  trustedContactsSection.style.display = 'none';
  instellingenSection.style.display = 'none';
  machtigingSection.style.display = 'none';

  // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Zet het activiteiten-item actief in de navbar
  activitiesNavbarItem.classList.add('active');
});

// Event listener voor het klikken op de contacten-knop in de navbar
contactsNavbarItem.addEventListener('click', () => {
  // Verberg andere secties
  walletScreen.style.display = 'none';
  activitiesSection.style.display = 'none';
  instellingenSection.style.display = 'none';
  machtigingSection.style.display = 'none';
  bottomNav.style.display = 'none';

  // Toon het trusted contacts scherm
  trustedContactsSection.style.display = 'block';

  // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Zet het contacten-item actief in de navbar
  contactsNavbarItem.classList.add('active');
});




settingsButton.addEventListener('click', () => {
  // Verberg het wallet-overzicht
  walletScreen.style.display = 'none';
  bottomNav.style.display = 'none';
  activitiesSection.style.display = 'none';
  trustedContactsSection.style.display = 'none';
  machtigingSection.style.display = 'none';

  // Toon het instellingen-scherm
  instellingenSection.style.display = 'flex';
});

closeSettingsBtn.addEventListener('click', () => {
  // Verberg het instellingen-scherm
  instellingenSection.style.display = 'none';
  activitiesSection.style.display = 'none';
  trustedContactsSection.style.display = 'none';
  instellingenSection.style.display = 'none';
  machtigingSection.style.display = 'none';

  // Toon het wallet-scherm
  bottomNav.style.display = 'flex';
  walletScreen.style.display = 'block';
});



// Functie om een bericht te openen
function openMessageDetails(sender, message, datetime) {
  // Vul de gegevens in het detailscherm
  contactNameElement.textContent = sender;
  messageDatetimeElement.textContent = datetime;
  messageTextElement.textContent = message;

  // Verberg de Trusted Contacts sectie en toon het bericht details scherm
  trustedContactsSection.style.display = 'none';
   // Verberg de bottom-nav
   bottomNav.style.display = 'none';
  messageDetailsScreen.style.display = 'block';
}




// Event listener voor het sluiten van het berichtdetailscherm
closeMessageDetailsBtn.addEventListener('click', () => {
  messageDetailsScreen.style.display = 'none';
  
  trustedContactsSection.style.display = 'block'; // Keer terug naar de Trusted Contacts sectie


});

const messageTexts = {
  ipa5: 'IPA-5 Deel uw diploma met ons voor het aanmeldingsproces. Haal uw diploma op bij DUO.',
  ipa6: 'IPA-6 Wij willen graag dat u uw diploma met ons deelt voor het aanmeldingsproces. Klik op de volgende link: <a href="#" id="share-link">Diploma ophalen</a> om uw diploma op te halen in de catalogus van de wallet',
  ipa7: 'IPA-7 Deel uw diploma met ons voor het aanmeldingsproces. Klik op de volgende link: <a href="#" id="ipa7-share-link">Diploma delen</a>',
  ipa8: 'IPA-8 Woningcorporatie Leijendak heeft een machtiging aangevraagd om namens u gegevens éénmalig op te halen voor een financiële check. Klik op de volgende link: <a href="#" id="ipa8-mandate-link">Eénmalige machtiging ophalen gegevens bekijken</a>',
  notaris: 'Test bericht',
  woningcorporatie: 'Test bericht',
  verzekering: 'Test bericht',
  justis: 'Test bericht',
  duo: 'Test bericht',
  pensioenfonds: 'Test bericht'
};


const IPA5MessageButton = document.getElementById('IPA-5-message-button');

IPA5MessageButton.addEventListener('click', () => {
    // Voeg het mock-bericht toe en gebruik de tekst vanuit het object
    addMockMessageToTrustedContacts('Werkgever IPA 5', messageTexts.ipa5, 'ipa5'); 

    // Verberg het instellingen-scherm
    instellingenSection.style.display = 'none';

    // Toon het wallet-scherm
    walletScreen.style.display = 'block';

     // Toon de bottom-nav weer
    bottomNav.style.display = 'flex';
});

const IPA6MessageButton = document.getElementById('IPA-6-message-button');

IPA6MessageButton.addEventListener('click', () => {
    // Voeg het mock-bericht toe en gebruik de tekst vanuit het object
    addMockMessageToTrustedContacts('Werkgever IPA 6', messageTexts.ipa6, 'ipa6'); 

    // Verberg het instellingen-scherm
    instellingenSection.style.display = 'none';

 // Toon de bottom-nav weer
 bottomNav.style.display = 'flex';

    // Toon het wallet-scherm
    walletScreen.style.display = 'block';
});

const IPA7MessageButton = document.getElementById('IPA-7-message-button');

IPA7MessageButton.addEventListener('click', () => {
    // Voeg het mock-bericht toe en gebruik de tekst vanuit het object
    addMockMessageToTrustedContacts('Werkgever IPA 7', messageTexts.ipa7, 'ipa7'); 

    // Verberg het instellingen-scherm
    instellingenSection.style.display = 'none';

 // Toon de bottom-nav weer
 bottomNav.style.display = 'flex';

    // Toon het wallet-scherm
    walletScreen.style.display = 'block';
});


const IPA8MessageButton = document.getElementById('IPA-8-message-button');

IPA8MessageButton.addEventListener('click', () => {
    // Voeg het mock-bericht toe en gebruik de tekst vanuit het object
    addMockMessageToTrustedContacts('Woningcorporatie Leijendak', messageTexts.ipa8, 'ipa8'); 

    // Verberg het instellingen-scherm
    instellingenSection.style.display = 'none';

    // Toon de bottom-nav weer
    bottomNav.style.display = 'flex';

    // Toon het wallet-scherm
    walletScreen.style.display = 'block';
});


const NotarisMessageButton = document.getElementById('notaris-message-button');
const WoningcorporatieMessageButton = document.getElementById('woningcorporatie-message-button');
const VerzekeringMessageButton = document.getElementById('verzekering-message-button');
const JustisMessageButton = document.getElementById('justis-message-button');
const DuoMessageButton = document.getElementById('duo-message-button');
const PensioenfondsMessageButton = document.getElementById('pensioenfonds-message-button');

NotarisMessageButton.addEventListener('click', (e) => {
    e.preventDefault();
    addMockMessageToTrustedContacts('Notaris', 'Test bericht', 'notaris');
});

WoningcorporatieMessageButton.addEventListener('click', (e) => {
    e.preventDefault();
    addMockMessageToTrustedContacts('Woningcorporatie', 'Test bericht', 'woningcorporatie');
});

VerzekeringMessageButton.addEventListener('click', (e) => {
    e.preventDefault();
    addMockMessageToTrustedContacts('Verzekering', 'Test bericht', 'verzekering');
});

JustisMessageButton.addEventListener('click', (e) => {
    e.preventDefault();
    addMockMessageToTrustedContacts('Justis', 'Test bericht', 'justis');
});

DuoMessageButton.addEventListener('click', (e) => {
    e.preventDefault();
    addMockMessageToTrustedContacts('Duo', 'Test bericht', 'duo');
});

PensioenfondsMessageButton.addEventListener('click', (e) => {
    e.preventDefault();
    addMockMessageToTrustedContacts('Pensioenfonds', 'Test bericht', 'pensioenfonds');
});







function openMessageDetails(sender, message, datetime, messageType) {

  bottomNav.style.display = 'none';  // Dit zorgt ervoor dat de bottom navigation wordt verborgen
  // Zet het overzicht-item actief in de navbar
  
  const messageDetailsScreen = document.getElementById('message-details-screen');
  messageDetailsScreen.style.display = 'block';
  trustedContactsSection.style.display = 'none';

  const messageSenderElement = document.getElementById('contact-name');
  const messageDatetimeElement = document.getElementById('message-datetime');
  const messageTextElement = document.getElementById('message-text');

  messageSenderElement.textContent = sender;
  messageDatetimeElement.textContent = datetime;
  messageTextElement.innerHTML = message;

  // Voeg de juiste event listener toe voor de link, afhankelijk van het berichttype
  if (messageType === 'ipa6') {
      const shareLink = document.getElementById('share-link');
      if (shareLink) {
          shareLink.addEventListener('click', function(e) {
              e.preventDefault();
              messageDetailsScreen.style.display = 'none';
              trustedContactsSection.style.display = 'none';
              cardCatalogue.style.display = 'block'; 
               // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
              // Zet het overzicht-item actief in de navbar
  overviewNavbarItem.classList.add('active');
          });
      }
  } else if (messageType === 'ipa7') {
      const shareLink = document.getElementById('ipa7-share-link');
      if (shareLink) {
          shareLink.addEventListener('click', function(e) {
              e.preventDefault();
              messageDetailsScreen.style.display = 'none';
              trustedContactsSection.style.display = 'none';
              const mockVerifierData = {
                  type: "verifier",
                  requester: "Werkgever IPA-7",
                  reason: "Diploma delen voor aanmeldingsproces",
                  csas: [{ issuedBy: "DUO", name: "Diploma Verpleegkunde" }],
                  a: "12t"
              };
              window.currentCsasData = mockVerifierData;
              populateCsasModal(mockVerifierData);
              csasModal.style.display = 'flex';
               // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
              // Zet het overzicht-item actief in de navbar
  overviewNavbarItem.classList.add('active');
          });
      }
  } else if (messageType === 'ipa8') {
      const mandateLink = document.getElementById('ipa8-mandate-link');
      if (mandateLink) {
          mandateLink.addEventListener('click', function(e) {
              e.preventDefault();
              messageDetailsScreen.style.display = 'none';
              trustedContactsSection.style.display = 'none';

              // Mock mandate QR data
              const mockMandateData = {
                  type: "mandate",
                  requester: "Woningcorporatie Leijendak",
                  LEID: "NL_KVK_00000000",
                  reason: "financiële check",
                  geldigheidsduur: "30 dagen",
                  intrekbaar: "Niet intrekbaar",
                  mandate: [{ issuedBy: "BD", dienst: "Gegevensuitvraag Inkomensafhankelijke Huurregelingen", name: "Inkomensverklaring" }],
                  a: "12t"
              };

              // Simuleer de invoer van de mock mandate QR-code
              handleMandateQR(mockMandateData, new Date().toLocaleString());
              mandateModal.style.display = 'flex';
               // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
              // Zet het overzicht-item actief in de navbar
  overviewNavbarItem.classList.add('active');
          });
      }
  }
}



function addMockMessageToTrustedContacts(sender, message, messageType) {
  const messagesGrid = document.getElementById('messages-grid');
  if (messagesGrid) {
      const datetime = new Date().toLocaleString(); // Voeg datum en tijd toe aan het bericht
      const messageItem = document.createElement('li');
      messageItem.classList.add('message-item');

      // Truncate afzendernaam tot 10 tekens
      const truncatedSender = sender.length > 10 ? sender.substring(0, 10) + '...' : sender;

      // Voeg dynamisch het juiste logo toe op basis van de afzender
      let logoHTML = '';
      switch (sender.toLowerCase()) {
          case 'duo':
              logoHTML = '<img src="duologo.svg" alt="DUO logo" class="logo-icon">';
              break;
          case 'belastingdienst':
              logoHTML = '<img src="belastingdienstlogo.svg" alt="Belastingdienst logo" class="logo-icon">';
              break;
          case 'woningcorporatie leijendak':
              logoHTML = '<img src="woningcorporatielogo.svg" alt="Leijendak logo" class="logo-icon">';
              break;
          case 'werkgever ipa 5':
              logoHTML = '<img src="ipa5logo.svg" alt="IPA 5 logo" class="logo-icon">';
              break;
          case 'werkgever ipa 6':
              logoHTML = '<img src="ipa6logo.svg" alt="IPA 6 logo" class="logo-icon">';
              break;
          case 'werkgever ipa 7':
              logoHTML = '<img src="ipa7logo.svg" alt="IPA 7 logo" class="logo-icon">';
              break;
              case 'duo':
                logoHTML = '<img src="duologo.svg" alt="DUO logo" class="logo-icon">';
                break;
            case 'justis':
                logoHTML = '<img src="bdlogo.svg" alt="Justis logo" class="logo-icon">';
                break;
        case 'woningcorporatie':
        logoHTML = `
            <div class="icon-circle" style="background-color: #4abd84;">
                <i class="fas fa-home"></i>
            </div>`;
            break;
            case 'notaris':
                logoHTML = `
                    <div class="icon-circle" style="background-color: #1E3A5F;">
                        <i class="fas fa-pen-nib" style="color: white;"></i>
                    </div>`;
                break;
            case 'verzekering':
                logoHTML = `
                    <div class="icon-circle" style="background-color: #9ac1db;">
                        <i class="fas fa-shield-alt" style="color: white;"></i>
                    </div>`;
                break;
            case 'pensioenfonds':
                logoHTML = `
                    <div class="icon-circle" style="background-color: #0a73ad;">
                        <i class="fas fa-piggy-bank" style="color: white;"></i>        
                    </div>`;
                break;
          default:
              logoHTML = '';
              break;
      }

      // Beperk de lengte van het bericht en voeg "..." toe als het langer is
      const truncatedMessage = message.length > 50 ? message.substring(0, 50) + '...' : message;

      // Stel de HTML van het bericht samen
      messageItem.innerHTML = `
          <div class="message-item-container">
              <div class="message-logo">
                  ${logoHTML}
              </div>
              <div class="message-content">
                  <div class="message-header">
                      <strong class="message-sender">${truncatedSender}</strong>
                      <span class="message-datetime">${datetime}</span>
                  </div>
                  <div class="message-body">
                      <span>${truncatedMessage}</span>
                  </div>
              </div>
          </div>
      `;

      // Voeg event listener toe aan het bericht om details te openen
      messageItem.addEventListener('click', () => {
          openMessageDetails(sender, message, datetime, messageType);

          // Verberg het notificatiebolletje zodra op het bericht wordt geklikt
          const notificationBadge = document.getElementById('notification-badge');
          if (notificationBadge) {
              notificationBadge.style.display = 'none';
          }
      });

      // Voeg het nieuwe bericht toe aan het grid
      messagesGrid.appendChild(messageItem);

      // Voeg loggings toe om de datums te controleren tijdens sorteren
  console.log("Berichten voor sortering:", Array.from(messagesGrid.children).map(msg => msg.querySelector('.message-datetime').textContent));

    
// Sorteer de berichten in `messages-grid` op datum in aflopende volgorde (nieuwste eerst)
const sortedMessages = Array.from(messagesGrid.children)
    .sort((a, b) => {
        const dateStrA = a.querySelector('.message-datetime').textContent;
        const dateStrB = b.querySelector('.message-datetime').textContent;
        console.log("Oorspronkelijke datum A:", dateStrA, "Geconverteerde datum A:", convertToStandardDate(dateStrA));
        console.log("Oorspronkelijke datum B:", dateStrB, "Geconverteerde datum B:", convertToStandardDate(dateStrB));
 
        const dateA = new Date(convertToStandardDate(dateStrA));
        const dateB = new Date(convertToStandardDate(dateStrB));
        return dateB - dateA; // Aflopende volgorde (nieuwste eerst)
    });

console.log("Berichten na sortering:", sortedMessages.map(msg => msg.querySelector('.message-datetime').textContent));
 

      // Leeg het grid en voeg de gesorteerde berichten toe zonder reverse
      messagesGrid.innerHTML = '';
      sortedMessages.forEach(msg => messagesGrid.appendChild(msg));

      // Toon het notificatiebolletje
      const notificationBadge = document.getElementById('notification-badge');
      notificationBadge.style.display = 'flex';
      notificationBadge.textContent = '1'; // Aantal berichten, kan worden aangepast
  } else {
      console.error("Trusted Contacts sectie niet gevonden.");
  }
}


// Functie om de card-catalogue te openen en de wallet te verbergen
openCardCatalogueBtn.addEventListener('click', () => {
  walletScreen.style.display = 'none';     // Verberg het wallet-scherm
  cardCatalogue.style.display = 'block';   // Toon het card-catalogue scherm
  bottomNav.style.display = 'none';        // Verberg de bottom-nav
});

// Functie om terug te gaan van card-catalogue naar het wallet-scherm
closeCardCatalogueBtn.addEventListener('click', () => {
  cardCatalogue.style.display = 'none';    // Verberg het card-catalogue scherm
  walletScreen.style.display = 'block';    // Toon het wallet-scherm opnieuw
  bottomNav.style.display = 'flex';        // Toon de bottom-nav opnieuw
});

// Event listener om 'Mijn digitale bewijzen' te openen
openCurrentCardsBtn.addEventListener('click', function() {
  currentCardsSection.style.display = 'flex';  // Toon 'Mijn digitale bewijzen' sectie
  walletScreen.style.display = 'none';  // Verberg het wallet-scherm
  bottomNav.style.display = 'none';  // Verberg de bottom-nav
});

// Event listener voor de terug-knop
closeCurrentCardsBtn.addEventListener('click', function() {
  currentCardsSection.style.display = 'none';  // Verberg de 'Mijn digitale bewijzen' sectie
  walletScreen.style.display = 'block';  // Toon het wallet-scherm
  bottomNav.style.display = 'flex';  // Toon de bottom-nav
});

// Zoekbalk functionaliteit bij demostarten
const searchInput = document.getElementById('search-input');
const demoLinks = document.querySelectorAll('.demo-button');

searchInput.addEventListener('input', function() {
  const filter = searchInput.value.toLowerCase();

  demoLinks.forEach(link => {
    const text = link.textContent.toLowerCase();
    if (text.includes(filter)) {
      link.style.display = 'block';
    } else {
      link.style.display = 'none';
    }
  });
});



/* 
function showMessage() {
  alert("Functie wordt later toegevoegd");
} */

  let currentSigningDocument = {
    name: '',
    isFake: false
};


// *** Event Listeners voor SignFromStorage Flow ***
signFromStorageButton.addEventListener('click', () => {
  signFromStorageFileExplorerModal.style.display = 'flex';
});

signFromStorageFileExplorerCloseButton.addEventListener('click', () => {
  signFromStorageFileExplorerModal.style.display = 'none';
  signFromStorageFileInput.value = ''; // Reset het file input
});

const fileListContainer = document.querySelector('.file-list');
fileListContainer.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('fake-file-btn')) {
        const filename = event.target.getAttribute('data-filename');
        signFromStorageConfirmDocumentText.textContent = `Wil je dit document "${filename}" ondertekenen?`;
        signFromStorageFileExplorerModal.style.display = 'none';
        signFromStorageConfirmSignModal.style.display = 'flex';

        // Update currentSigningDocument
        currentSigningDocument.name = filename;
        currentSigningDocument.isFake = true;

        // Voeg de 'clicked' klasse toe en verwijder deze van andere buttons
        const allFakeButtons = document.querySelectorAll('.fake-file-btn');
        allFakeButtons.forEach(btn => btn.classList.remove('clicked'));
        event.target.classList.add('clicked');
    }
});


signFromStorageFileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
      signFromStorageConfirmDocumentText.textContent = `Wil je dit document "${file.name}" ondertekenen?`;
      signFromStorageFileExplorerModal.style.display = 'none';
      signFromStorageConfirmSignModal.style.display = 'flex';
  }
}); 



signFromStorageConfirmSignStopButton.addEventListener('click', () => {
  signFromStorageConfirmSignModal.style.display = 'none';
  signFromStorageFileInput.value = ''; // Reset het file input
});

signFromStorageConfirmSignAcceptButton.addEventListener('click', () => {
  signFromStorageConfirmSignModal.style.display = 'none';
  signFromStoragePinConfirmationModal.style.display = 'flex';
  resetPinInputs(); // Reset de pincode-invoervelden
});

signFromStorageConfirmPinBtn.addEventListener('click', () => {
  // Hier kun je pincode verificatie toevoegen indien nodig

  // Voor demonstratiedoeleinden gaan we ervan uit dat de pincode correct is

  // Haal de huidige timestamp op
  const timestamp = new Date().toLocaleString();


  // Haal de geselecteerde bestandsnaam op
  let documentName = 'Onbekend document';
  const file = signFromStorageFileInput.files[0];
  if (file) {
      documentName = file.name;
  } else {
      // Controleer of een fictief bestand recent is geselecteerd
      const lastClickedFakeFile = document.querySelector('.file-list .fake-file-btn.clicked');
      if (lastClickedFakeFile) {
        console.log ("fictief bestand wordt gebruikt voor ondertekening");
          documentName = lastClickedFakeFile.getAttribute('data-filename');
      }
  }

   // Controleer of documentName correct is ingesteld
   console.log('Document Name:', documentName);


  // Maak een nieuw credential object voor de signFromStorage actie
  const newCredential = {
      name: documentName, // Gebruik de documentnaam als naam
      issuedBy: 'Gebruiker', // Je kunt dit aanpassen naar de juiste partij indien beschikbaar
      type: 'signfromstorage', // Nieuwe type naam om verwarring te voorkomen
      actionTimestamp: timestamp,
      isShareAction: false,
    
      data: {
          documentName: documentName,
          issuedBy: 'Gebruiker', // Pas aan indien beschikbaar
          // Voeg indien nodig andere relevante data toe
      }
  };

  // Voeg de nieuwe actie toe aan credentials
  credentials.push(newCredential);
  saveCredentials();
  showActivities(); // Update het activiteitenoverzicht

  // Verberg het pincode-confirmatiescherm
  signFromStoragePinConfirmationModal.style.display = 'none';

  // Toon het successcherm
  signFromStorageSuccessScreen.style.display = 'flex';

  signFromStorageFileInput.value = ''; // Reset file input na gebruik
});

signFromStorageCloseSuccessBtn.addEventListener('click', () => {
  signFromStorageSuccessScreen.style.display = 'none';
  bottomNav.style.display = 'flex';
  // Voeg eventuele andere acties toe om terug te keren naar het hoofdscherm


});

// Event listener voor de Download knop
const signFromStorageDownloadBtn = document.getElementById('signfromstorage-download-btn');

signFromStorageDownloadBtn.addEventListener('click', () => {
    if (currentSigningDocument.isFake) {
        // Voeg het ondertekende document toe aan de fake list
        addSignedDocumentToFakeList(currentSigningDocument.name);
        alert('Het ondertekende document is toegevoegd aan de bestandenlijst.');
    } else {
        // Toon een melding dat het ondertekende document niet beschikbaar is in de demo
        alert('In deze demo-omgeving is het ondertekende document niet beschikbaar.');
    }

    // Sluit het successcherm
    signFromStorageSuccessScreen.style.display = 'none';

    // Reset currentSigningDocument
    currentSigningDocument = {
        name: '',
        isFake: false
    };
});

// *** Functie om een ondertekend document toe te voegen aan de fake file list ***
function addSignedDocumentToFakeList(originalDocName) {
  console.log ("add signed doc to list started");
  // Haal de huidige datum en tijd op in een geschikt formaat
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formattedDate = `${year}${month}${day}-${hours}${minutes}${seconds}`;
  
  // Splits de originele bestandsnaam om de extensie te behouden
  const lastDotIndex = originalDocName.lastIndexOf('.');
  const baseName = lastDotIndex !== -1 ? originalDocName.substring(0, lastDotIndex) : originalDocName;
  const extension = lastDotIndex !== -1 ? originalDocName.substring(lastDotIndex) : '.pdf'; // Default extensie

  // Maak de nieuwe bestandsnaam
  const signedDocName = `${baseName}-signed-${formattedDate}${extension}`;

  // Maak een nieuw knop-element aan
  const newFakeFileButton = document.createElement('button');
  newFakeFileButton.classList.add('fake-file-btn');
  newFakeFileButton.setAttribute('data-filename', signedDocName);
  newFakeFileButton.textContent = signedDocName;

  // Voeg een klik-event listener toe aan het nieuwe knop-element
  newFakeFileButton.addEventListener('click', () => {
      signFromStorageConfirmDocumentText.textContent = `Wil je dit document "${signedDocName}" ondertekenen?`;
      signFromStorageFileExplorerModal.style.display = 'none';
      signFromStorageConfirmSignModal.style.display = 'flex';

      // Voeg de 'clicked' klasse toe en verwijder deze van andere buttons
      fakeFileButtons.forEach(btn => btn.classList.remove('clicked'));
      newFakeFileButton.classList.add('clicked');
  });

  // Voeg het nieuwe knop-element toe aan de file list
  const fileListContainer = document.querySelector('.file-list');
  fileListContainer.appendChild(newFakeFileButton);

}

// *** Initialisatie bij Pagina Laden ***
window.onload = () => {
  loadCredentials();
  showActivities(); // Zorg dat activiteiten worden weergegeven
};

function populateRdfcfModal(data) {
  // Set the form name
  const rdfcfFormNameElement = document.getElementById('rdfcf-form-name');
  rdfcfFormNameElement.textContent = data.formName || 'Onbekend formulier';
  addCardScreen.style.display = 'none';
  rdfcfModal.style.display = 'flex';

  // Clear previous details
  rdfcfDetailsContainer.innerHTML = '';

  // Group the fields by card
  let fieldsByCard = {};

  data.rdfcf.forEach((field) => {
    const fieldName = fieldMapping[field] || field; // Use field mapping

    // Try to find a credential where the credential's name matches the fieldName (whole card)
    let matchingCard = credentials.find(cred => cred.name === fieldName);

    if (matchingCard) {
      const cardName = matchingCard.name;

      if (!fieldsByCard[cardName]) {
        fieldsByCard[cardName] = { data: matchingCard.data, fields: [], showAllFields: true };
      }
    } else {
      // If no matching card by name, try to find a credential that has the field in its data
      matchingCard = credentials.find(cred => cred.data && cred.data.hasOwnProperty(fieldName));

      if (matchingCard) {
        const cardName = matchingCard.name;

        if (!fieldsByCard[cardName]) {
          fieldsByCard[cardName] = { data: matchingCard.data, fields: [], showAllFields: false };
        }

        fieldsByCard[cardName].fields.push(fieldName);
      } else {
        console.warn(`Field or card '${fieldName}' not found in credentials.`);
      }
    }
  });

  // Iterate over each card and create the card elements
  Object.keys(fieldsByCard).forEach((cardName) => {
    const cardInfo = fieldsByCard[cardName];

    // Create card container
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    // Create card header
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    cardHeader.textContent = cardName;

    // Set the background color based on the card name if desired
    if (cardName === 'Persoonlijke data') {
      cardHeader.style.backgroundColor = '#dfeaf2';
    } else if (cardName === 'Verklaring Omtrent Gedrag (VOG)') {
      cardHeader.style.backgroundColor = '#dfeaf2';
    } else {
      cardHeader.style.backgroundColor = '#dfeaf2'; // Default color
    }

    // Create card content container
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    

    // Add the header and content to the card container
    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardContent);

    // Create card details
    const cardDetails = document.createElement('div');
    cardDetails.className = 'card-details';

    if (cardInfo.showAllFields) {
      // Add all details from the card
      for (let key in cardInfo.data) {
        if (cardInfo.data.hasOwnProperty(key)) {
          const detailRow = document.createElement('div');
          detailRow.className = 'detail-row';

          const labelDiv = document.createElement('div');
          labelDiv.className = 'label';
          labelDiv.textContent = `${key}:`;

          const valueDiv = document.createElement('div');
          valueDiv.className = 'value';

          const value = cardInfo.data[key];

          if (key === 'Foto') {
            const img = document.createElement('img');
            img.src = value;
            img.alt = 'Foto';
            img.style.width = '100%';
            valueDiv.appendChild(img);
          } else {
            valueDiv.textContent = value || 'Niet beschikbaar';
          }

          detailRow.appendChild(labelDiv);
          detailRow.appendChild(valueDiv);

          cardDetails.appendChild(detailRow);
        }
      }
    } else {
      // Add only the specific requested fields
      cardInfo.fields.forEach(fieldName => {
        const value = cardInfo.data[fieldName];

        const detailRow = document.createElement('div');
        detailRow.className = 'detail-row';

        const labelDiv = document.createElement('div');
        labelDiv.className = 'label';
        labelDiv.textContent = `${fieldName}:`;

        const valueDiv = document.createElement('div');
        valueDiv.className = 'value';
        if (fieldName === 'Foto') {
          const img = document.createElement('img');
          img.src = value;
          img.alt = 'Foto';
          img.style.width = '100%';
          valueDiv.appendChild(img);
        } else {
          valueDiv.textContent = value || 'Niet beschikbaar';
        }

        detailRow.appendChild(labelDiv);
        detailRow.appendChild(valueDiv);

        cardDetails.appendChild(detailRow);
      });
    }

    // Add the card details to the card content
    cardContent.appendChild(cardDetails);

    // Add the card to the container
    rdfcfDetailsContainer.appendChild(cardContainer);
  });
}








// Event listener for the accept button
rdfcfAcceptButton.onclick = () => {
  // Show the PIN confirmation screen
  pinConfirmationScreenRdfcf.style.display = 'flex';
  rdfcfModal.style.display = 'none';
  resetPinInputs();
};

// Event listener for the stop button
rdfcfStopButton.onclick = () => {
  rdfcfModal.style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
  resetQrScanner();
};

confirmPinRdfcfBtn.onclick = () => {
  // After PIN confirmation, show success screen
  pinConfirmationScreenRdfcf.style.display = 'none';
  rdfcfSuccessScreen.style.display = 'flex';
  resetPinInputs();

  // Save the shared data action
  if (window.currentRdfcfData) {
    saveRdfcfSharedData(window.currentRdfcfData);
    console.log("RDFCF data saved:", credentials);
  } else {
    console.error("No RDFCF data available to save.");
  }
};

function saveRdfcfSharedData(data) {
  const timestamp = new Date().toLocaleString();
  credentials.push({
    type: 'rdfcf',
    formName: data.formName || 'Onbekend formulier',
    sharedData: data.rdfcf.map(field => fieldMapping[field] || field),
    actionTimestamp: timestamp,
    isShareAction: true // Mark as share action
  });
  saveCredentials();
}

closeRdfcfSuccessBtn.onclick = () => {
  rdfcfSuccessScreen.style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
};


function populatePpopModal(data) {
  // Vul de requester en amount
  ppopRequesterElement.textContent = data.requester || 'Onbekende partij';
  ppopAmountElement.textContent = `${data.currency || 'EUR'} ${data.amount || '0.00'}`;

  // Leeg de details-container
  ppopDetailsContainer.innerHTML = '';

  // Groepeer de velden en toon ze in kaartjes
  let fieldsByCard = {};

  data.rdfcppop.forEach((field) => {
    const fieldName = fieldMapping[field] || field; // Gebruik field mapping

    console.log(`Mapping field '${field}' to '${fieldName}'`);

    // Zoek of het veld hoort bij een kaartje in credentials
    let matchingCard = credentials.find(cred => {
      // Zoek in cred.data of het veld bestaat
      return cred.data && cred.data.hasOwnProperty(fieldName);
    });

    if (!matchingCard) {
      console.warn(`Veld of kaartje '${fieldName}' niet gevonden in de credentials.`);
      // Als niet gevonden, controleer of er een kaartje is waarvan de naam overeenkomt met fieldName
      matchingCard = credentials.find(cred => cred.name === fieldName);
    }

    if (matchingCard) {
      console.log(`Gevonden matching kaart voor '${fieldName}':`, matchingCard);
      const cardName = matchingCard.name;

      if (!fieldsByCard[cardName]) {
        fieldsByCard[cardName] = { data: matchingCard.data, fields: [], showAllFields: false };
      }

      if (matchingCard.name === fieldName) {
        // Als het veld overeenkomt met de kaartnaam, tonen we alle details
        fieldsByCard[cardName].showAllFields = true;
      } else {
        // Voeg het specifieke veld toe
        fieldsByCard[cardName].fields.push(fieldName);
      }
    } else {
      console.warn(`Veld of kaartje '${fieldName}' niet gevonden in de credentials.`);
    }
  });

  // Itereer over elk kaartje en maak de kaart elementen aan
  Object.keys(fieldsByCard).forEach((cardName) => {
    const cardInfo = fieldsByCard[cardName];

    // Maak kaart container aan
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    // Maak kaart header aan
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    cardHeader.textContent = cardName;

    // Stel de achtergrondkleur in op basis van de kaartnaam (optioneel)
    switch (cardName) {
      case 'IBAN-account number credentials':
        cardHeader.style.backgroundColor = '#bdcedb';
        break;
      case 'e-invoice address':
        cardHeader.style.backgroundColor = '#bdcedb';
        break;
      default:
        cardHeader.style.backgroundColor = '#bdcedb'; // Default kleur
    }

    // Maak kaart content container aan
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    // Voeg de header en content toe aan de kaartcontainer
    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardContent);

    // Maak kaart details aan
    const cardDetails = document.createElement('div');
    cardDetails.className = 'card-details';

    if (cardInfo.showAllFields) {
      // Voeg alle details van het kaartje toe uit cred.data
      for (let key in cardInfo.data) {
        if (cardInfo.data.hasOwnProperty(key)) {
          const detailRow = document.createElement('div');
          detailRow.className = 'detail-row';

          const labelDiv = document.createElement('div');
          labelDiv.className = 'label';
          labelDiv.textContent = `${key}:`;

          const valueDiv = document.createElement('div');
          valueDiv.className = 'value';
          valueDiv.textContent = cardInfo.data[key] || 'Niet beschikbaar';

          detailRow.appendChild(labelDiv);
          detailRow.appendChild(valueDiv);

          cardDetails.appendChild(detailRow);
        }
      }
    } else {
      // Voeg alleen de specifieke gevraagde velden toe
      cardInfo.fields.forEach(fieldName => {
        const value = cardInfo.data[fieldName];

        const detailRow = document.createElement('div');
        detailRow.className = 'detail-row';

        const labelDiv = document.createElement('div');
        labelDiv.className = 'label';
        labelDiv.textContent = `${fieldName}:`;

        const valueDiv = document.createElement('div');
        valueDiv.className = 'value';
        valueDiv.textContent = value || 'Niet beschikbaar';

        detailRow.appendChild(labelDiv);
        detailRow.appendChild(valueDiv);

        cardDetails.appendChild(detailRow);
      });
    }

    // Voeg de kaart details toe aan de kaart content
    cardContent.appendChild(cardDetails);

    // Voeg de kaart toe aan de container
    ppopDetailsContainer.appendChild(cardContainer);
  });
}


// Event listener voor de stop-knop in de PPOP modal
ppopStopButton.addEventListener('click', () => {
  ppopModal.style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
  resetQrScanner();
});

// Event listener voor de accept-knop in de PPOP modal
ppopAcceptButton.addEventListener('click', () => {
  ppopModal.style.display = 'none';
  ppopPinConfirmationScreen.style.display = 'flex';
  resetPinInputs(); // Reset de pincode-invoervelden
});

// Event listener voor de confirm-knop in de PPOP pincode confirmation
confirmPinPpopBtn.addEventListener('click', () => {
  // Hier kun je pincode verificatie toevoegen indien nodig

  // Voor demonstratiedoeleinden gaan we ervan uit dat de pincode correct is

  // Haal de huidige timestamp op
  const timestamp = new Date().toLocaleString();

    // Genereer een willekeurige transactie-ID
    const transactionId = 'TX-' + Math.floor(Math.random() * 1000000000);

    // Voeg de transactie-ID toe aan ppopData
    window.currentPpopData.transactionId = transactionId;
  

  // Maak een nieuw credential object voor de PPOP actie
  const newCredential = {
    name: 'Betaling aan ' + (window.currentPpopData.requester || 'Onbekende partij'),
    amount: window.currentPpopData.amount || '0.00',
    currency: window.currentPpopData.currency || 'EUR',
    issuedBy: window.currentPpopData.requester || 'Onbekende partij',
    type: 'ppop',
    actionTimestamp: timestamp,
    isShareAction: false,
    data: {
      requester: window.currentPpopData.requester,
      amount: window.currentPpopData.amount,
      currency: window.currentPpopData.currency,
      referenceId: window.currentPpopData.referenceId,
      // Voeg indien nodig andere relevante data toe
    }
  };

  // Voeg de nieuwe actie toe aan credentials
  credentials.push(newCredential);
  saveCredentials();
  showActivities(); // Update het activiteitenoverzicht

  // Verberg het pincode-confirmatiescherm
  ppopPinConfirmationScreen.style.display = 'none';

// Toon het successcherm
ppopSuccessRequester.textContent = window.currentPpopData.requester || 'Onbekende partij';
ppopSuccessScreen.style.display = 'flex';
});

// Event listener voor de sluitknop in het PPOP success scherm
ppopCloseSuccessButton.addEventListener('click', () => {
  ppopSuccessScreen.style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
});


// Event listener voor de download-knop in het PPOP success scherm
ppopDownloadButton.addEventListener('click', () => {
  // Maak een tijdelijk anker-element
  const link = document.createElement('a');
  link.href = 'invoice.pdf';
  link.download = 'invoice.pdf'; // Zorgt ervoor dat het bestand wordt gedownload
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});