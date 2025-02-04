document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const leftSidebar = document.getElementById('leftSidebar');
  const contentSections = document.querySelectorAll('.content-section');
  const tableOfContents = document.getElementById('tableOfContents');
  const navLinks = document.querySelectorAll('.nav-item, .subnav-item');

  // 1) MAIN SECTIONS array uitgebreid met "home"
  const mainSections = ['home', 'introductie', 'propositie', 'afspraken', 'onderzoek', 'beproevingen', 'contact'];

  // Function to update content and table of contents
  function updateContent(hash) {
      // 2) Als hash leeg is → default "home" i.p.v. "introductie"
      const sectionId = hash.replace('#', '') || 'home';
      
      // Check if this is a main section
      const isMainSection = mainSections.includes(sectionId);
      
      // Hide all sections
      contentSections.forEach(section => {
          section.style.display = 'none';
      });
      
      // Show the appropriate section
      const targetSection = document.getElementById(`content-${sectionId}`);
      if (targetSection) {
          targetSection.style.display = 'block';
          
          // Update table of contents
          tableOfContents.innerHTML = '';
          
          // Als het een mainSection is én er staan .subitem-cards in,
          // neem de card-titels in de TOC op
          if (isMainSection && targetSection.querySelector('.subitem-cards')) {
              const cards = targetSection.querySelectorAll('.card');
              cards.forEach(card => {
                  const heading = card.querySelector('h3');
                  const link = document.createElement('a');
                  link.href = card.getAttribute('href');
                  link.className = 'nav-item';
                  link.textContent = heading.textContent;
                  tableOfContents.appendChild(link);
              });
          } else {
              // Anders tonen we de h2-headings (bijv. in Home)
              const headings = targetSection.querySelectorAll('h2');
              headings.forEach(heading => {
                  const link = document.createElement('a');
                  // link direct naar de heading ID (scrollen in de pagina)
                  link.href = `#${heading.id}`;
                  link.className = 'nav-item';
                  link.textContent = heading.textContent;
                  tableOfContents.appendChild(link);
              });
          }
      }

      // Update active state in navigation
      navLinks.forEach(link => {
          if (link.getAttribute('href') === hash) {
              link.classList.add('active');
          } else {
              link.classList.remove('active');
          }
      });
  }

  // Event Handlers
  menuToggle.addEventListener('click', () => {
      leftSidebar.classList.add('active');
  });
  
  closeMenu.addEventListener('click', () => {
      leftSidebar.classList.remove('active');
  });

  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
              leftSidebar.classList.remove('active');
          }
          
          const hash = link.getAttribute('href');
          updateContent(hash);
      });
  });

  window.addEventListener('hashchange', () => {
      updateContent(window.location.hash);
  });

  // Als je in de TOC klikt, scroll naar de heading
  tableOfContents.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
          e.preventDefault();
          const targetId = e.target.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      }
  });

  // Zorg dat klikken op .card (bijv. sublinks) ook updateContent triggert
  document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
          setTimeout(() => {
              updateContent(card.getAttribute('href'));
          }, 100);
      });
  });

  // 3) Initial content load: gebruik je (nieuwe) default 'home'
  updateContent(window.location.hash);
});


// Hier gaan we er vanuit dat "marked.min.js" is ingeladen in <head>.

// Variabele om alle callouts op te slaan
let allCallouts = [];

// Ophalen van data
async function fetchKnowledgeBase() {
  try {
    const response = await fetch('data.json'); // Pas dit aan naar je JSON-pad
    const data = await response.json();

    // Als je data-structuur zo is: data.data.space.collaboration.calloutsSet.callouts
    allCallouts = data.data.space.collaboration.calloutsSet.callouts || [];

    displayKnowledgeBase(allCallouts);
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('kbContent').innerHTML =
      `<p>Er is een fout opgetreden bij het laden van de data: ${error.message}</p>`;
  }
}

// Tonen van de callouts in #kbContent
function displayKnowledgeBase(callouts) {
  const content = document.getElementById('kbContent');
  content.innerHTML = '';  // Leegmaken

  callouts
    // Filter “Toelichting” weg (optioneel)
    .filter(callout => callout.framing?.profile?.displayName !== "Toelichting")
    .forEach(callout => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';

      // KOP
      const questionHeader = document.createElement('div');
      questionHeader.className = 'question-header';

      const questionTitle = document.createElement('h2');
      questionTitle.textContent = callout.framing?.profile?.displayName || 'Geen titel';

      const authorSpan = document.createElement('span');
      authorSpan.className = 'author';

      const authorDisplay = callout.createdBy?.profile?.displayName || 'Onbekend';

      // Datum
      let formattedDate = '';
      if (callout.framing?.createdDate) {
        try {
          const dateObj = new Date(callout.framing.createdDate);
          formattedDate = dateObj.toLocaleDateString('nl-NL');
        } catch(e) {
          // als parsing mislukt, doen we niks
        }
      }
      authorSpan.textContent = `Geplaatst op ${formattedDate} door: ${authorDisplay}`;

      questionHeader.appendChild(questionTitle);
      questionHeader.appendChild(authorSpan);

      // BODY
      const questionBody = document.createElement('div');
      questionBody.className = 'content-body';

      // Beschrijving
      const questionDesc = document.createElement('div');
      questionDesc.className = 'markdown';
      questionDesc.innerHTML = marked.parse(callout.framing?.profile?.description || '');

      // Antwoord-titel
      const answersHeading = document.createElement('h3');
      const numContributions = (callout.contributions || []).length;
      answersHeading.textContent = `Antwoorden (${numContributions}):`;

      // Antwoord-lijst
      const answerList = document.createElement('div');
      answerList.className = 'answer-list';

      (callout.contributions || []).forEach(contribution => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer';

        // ANSWER header
        const aHeader = document.createElement('div');
        aHeader.className = 'answer-header';

        const postProfile = contribution.post?.profile || {};
        const postAuthor = contribution.post?.createdBy?.profile?.displayName || 'Onbekend';

        const aTitle = document.createElement('h4');
        aTitle.textContent = postProfile.displayName || 'Naamloos antwoord';

        const aAuthorSpan = document.createElement('span');
        aAuthorSpan.className = 'author';
        aAuthorSpan.textContent = `Antwoord van: ${postAuthor}`;

        aHeader.appendChild(aTitle);
        aHeader.appendChild(aAuthorSpan);

        // ANSWER body
        const aBody = document.createElement('div');
        aBody.className = 'answer-body';
        aBody.innerHTML = `<div class="markdown">${marked.parse(postProfile.description || '')}</div>`;

        // Klik op answer-header => toggle
        aHeader.addEventListener('click', () => {
          aBody.style.display = (aBody.style.display === 'block') ? 'none' : 'block';
        });

        answerDiv.appendChild(aHeader);
        answerDiv.appendChild(aBody);
        answerList.appendChild(answerDiv);
      });

      questionBody.appendChild(questionDesc);
      questionBody.appendChild(answersHeading);
      questionBody.appendChild(answerList);

      // Klik op vraag-header => toggle
      questionHeader.addEventListener('click', () => {
        questionBody.style.display =
          (questionBody.style.display === 'block') ? 'none' : 'block';
      });

      questionDiv.appendChild(questionHeader);
      questionDiv.appendChild(questionBody);
      content.appendChild(questionDiv);
    });
}

// Zoekfunctie
function filterKnowledgeBase(term) {
  const lowerTerm = term.toLowerCase();

  const filtered = allCallouts.filter(callout => {
    const qTitle = callout.framing?.profile?.displayName?.toLowerCase() || '';
    const qDesc  = callout.framing?.profile?.description?.toLowerCase() || '';
    const questionMatches = qTitle.includes(lowerTerm) || qDesc.includes(lowerTerm);

    if (!questionMatches) {
      // Check answers
      const hasMatchingAnswer = (callout.contributions || []).some(contribution => {
        const ansTitle = contribution.post?.profile?.displayName?.toLowerCase() || '';
        const ansDesc  = contribution.post?.profile?.description?.toLowerCase() || '';
        return ansTitle.includes(lowerTerm) || ansDesc.includes(lowerTerm);
      });
      return hasMatchingAnswer;
    }
    return true;
  });

  displayKnowledgeBase(filtered);
}

// Event listener voor searchInput
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filterKnowledgeBase(e.target.value);
    });
  }
});

// (optioneel) functie om alleen te laden als #content-kennisbank in beeld komt
// of zodra de pagina laadt:
fetchKnowledgeBase();


/*********************************************
 * Navigatie: klik op menu-link => showContent
 *********************************************/
document.addEventListener('DOMContentLoaded', function() {
    // Stap 1: Zet click handlers op alle navigatielinks
    // (pas de selector aan op hoe jouw menu-links eruitzien)
    const navLinks = document.querySelectorAll('.nav-section a');
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
  
        // Bepaal uit de href wat de content-id is
        // Voorbeeld: href="#vertrouwensdiensten" => content-vertrouwensdiensten
        const hash = link.getAttribute('href');  // bijvoorbeeld "#vertrouwensdiensten"
        if (hash.startsWith('#')) {
          const targetId = 'content-' + hash.substring(1); 
          // roep de functie aan
          showContent(targetId);
        }
      });
    });
  
    // **Optioneel**: toon standaard de home-sectie
    showContent('content-home');
  });
  
  
  /*********************************************
   * showContent verbergt alle .content-section
   * en toont alleen de div met id=contentId
   *********************************************/
  function showContent(contentId) {
    // 1) Verberg alles
    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(sec => {
      sec.style.display = 'none';
    });
  
    // 2) Toon de gevraagde sectie als die er is
    const target = document.getElementById(contentId);
    if (target) {
      target.style.display = 'block';
  
      // 3) Als het "content-vertrouwensdiensten" is, laad de data
      if (contentId === 'content-vertrouwensdiensten') {
        loadVertrouwensdiensten();
      }
    } else {
      console.warn('showContent: geen element met id=' + contentId);
    }
  }
  
  
  /*********************************************
   * Vertrouwensdiensten laden uit trust-services.md
   *********************************************/
  const TRUST_MD_FILE = 'trust-services.md'; // Pad naar je .md-bestand
  
  function loadVertrouwensdiensten() {
    // Check of de tabel al gevuld is (optioneel)
    //  voorkomen dat je bij iedere klik opnieuw laadt:
    // if (document.querySelector('#vdTableBody tr')) return;
  
    fetch(TRUST_MD_FILE)
      .then(response => {
        if (!response.ok) {
          throw new Error('Kon trust-services.md niet laden');
        }
        return response.text();
      })
      .then(markdownText => {
        // 1) Intro-tekst extraheren (alles tot de eerste regel die met "|" begint)
        const introMatch = markdownText.match(/^([\s\S]*?)\n\|/m);
        if (introMatch) {
          const introHtml = introMatch[1]
            .trim()
            .split('\n')
            .filter(line => line.trim())
            .map(line => `<p>${line.trim()}</p>`)
            .join('\n');
          document.getElementById('vdIntroText').innerHTML = introHtml;
        }
  
        // 2) Tabel-rijen parsen
        const rows = markdownText
          .split('\n')
          .filter(row => row.trim() && row.includes('|'))
          .map(row => row
            .split('|')
            .filter(cell => cell.trim())
            .map(cell => cell.trim())
          );
  
        // 3) Header vullen
        const vdHeader = document.getElementById('vdTableHeader');
        vdHeader.innerHTML = ''; // Leegmaken
        if (rows.length > 0) {
          const headerRow = rows[0];
          const tr = document.createElement('tr');
          headerRow.forEach(col => {
            const th = document.createElement('th');
            th.textContent = col;
            tr.appendChild(th);
          });
          vdHeader.appendChild(tr);
        }
  
        // 4) De eerste 2 rijen (header + separator) verwijderen
        //    Dus je moet in trust-services.md minstens 3 rijen hebben: 
        //    1) header, 2) separator (----), 3) data
        if (rows.length >= 2) {
          rows.splice(0, 2);
        }
  
        // 5) Body vullen
        const vdBody = document.getElementById('vdTableBody');
        vdBody.innerHTML = '';
        rows.forEach(row => {
          const tr = document.createElement('tr');
          row.forEach((cell, idx) => {
            const td = document.createElement('td');
            td.textContent = cell;
            // Voor kolommen 6 en 7 (index 5/6): yes/no
            if (idx === 5 || idx === 6) {
              const lower = cell.toLowerCase();
              if (lower === 'yes') td.classList.add('vd-yes');
              else if (lower === 'no') td.classList.add('vd-no');
            }
            tr.appendChild(td);
          });
          vdBody.appendChild(tr);
        });
  
        // 6) Zoekfunctie initialiseren
        initVertrouwensdienstenSearch();
      })
      .catch(err => {
        console.error('Fout bij laden trust-services.md:', err);
        const container = document.getElementById('vd-container');
        if (container) {
          container.innerHTML += `<p style="color: red;">Er is een fout opgetreden bij het laden van de gegevens: ${err.message}</p>`;
        }
      });
  }
  
  
  /*********************************************
   * Zoekfunctie voor de vertrouwensdiensten-tabel
   *********************************************/
  function initVertrouwensdienstenSearch() {
    const searchInput = document.getElementById('vdSearchInput');
    const noResults   = document.getElementById('vdNoResults');
    const searchTerm  = document.getElementById('vdSearchTerm');
    const tableRows   = document.querySelectorAll('#vdTableBody tr');
  
    if (!searchInput) {
      console.warn('initVertrouwensdienstenSearch: geen #vdSearchInput gevonden');
      return;
    }
  
    let searchTimeout = null;
    searchInput.addEventListener('input', event => {
      if (searchTimeout) clearTimeout(searchTimeout);
  
      searchTimeout = setTimeout(() => {
        const query = event.target.value.toLowerCase();
        let hasResults = false;
  
        tableRows.forEach(row => {
          const text = Array.from(row.cells)
            .map(cell => cell.textContent.toLowerCase())
            .join(' ');
  
          if (text.includes(query)) {
            row.classList.remove('vd-hidden');
            hasResults = true;
          } else {
            row.classList.add('vd-hidden');
          }
        });
  
        if (!hasResults && query) {
          noResults.classList.remove('vd-hidden');
          searchTerm.textContent = query;
        } else {
          noResults.classList.add('vd-hidden');
        }
      }, 150);
    });
  }