const demoConfig = {
    totalSteps: 4 // Definieer hier het aantal stappen voor deze demo
};

let currentStep = 1; // Houd de huidige stap bij

// Zorg ervoor dat de juiste secties worden getoond wanneer de DOM geladen is
document.addEventListener('DOMContentLoaded', () => {
    const totalSteps = demoConfig.totalSteps;

    // Verberg alle stappen boven het totale aantal
    for (let i = totalSteps + 1; i <= 8; i++) {
        const stepElement = document.getElementById(`step-${i}`);
        if (stepElement) {  
            stepElement.style.display = 'none';
        }
    }

    // Toon de eerste stap
    showStep(currentStep);

    // Voeg eventlisteners toe aan de knoppen voor 'Volgende' en 'Terug'
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('next')) {
            goToStep(currentStep + 1);
        } else if (e.target.classList.contains('prev')) {
            goToStep(currentStep - 1);
        }
    });

     

      // Voeg iconen en tekst aan de knoppen
      document.querySelectorAll('.next').forEach(button => {
        button.innerHTML = 'Volgende stap <i class="fas fa-arrow-right"></i>';
    });
    document.querySelectorAll('.prev').forEach(button => {
        button.innerHTML = '<i class="fas fa-arrow-left"></i> Vorige stap';
    });
});

function goToStep(step) {
    if (step > 0 && step <= demoConfig.totalSteps) {
        currentStep = step;
        showStep(currentStep);
    }
}

function showStep(step) {
    // Verberg alle stappen
    document.querySelectorAll('.step').forEach((section) => {
        section.classList.remove('active');
        section.style.display = 'none'; // Verberg alle secties
    });

    // Toon de juiste stap
    const stepToShow = document.getElementById(`step-${step}`);
    if (stepToShow) {
        stepToShow.classList.add('active');
        stepToShow.style.display = 'block'; // Toon alleen de actieve sectie
    }

     // Scroll naar boven met een korte vertraging
     setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Zorg voor een soepele scroll
        });
    }, 100); // Vertraging van 100 ms

    // Pas de knoppenlogica aan
    toggleButtons();
}

function toggleButtons() {
    // Verberg de 'Terug'-knop bij de eerste stap
    const prevButton = document.querySelector(`#step-${currentStep} .prev`);
    if (currentStep === 1 && prevButton) {
        prevButton.style.display = 'none';
    } else if (prevButton) {
        prevButton.style.display = 'inline-block';
    }

    // Verberg de 'Volgende'-knop bij de laatste stap en voeg extra knoppen toe
    const nextButton = document.querySelector(`#step-${currentStep} .next`);
    const buttonContainer = document.querySelector(`#step-${currentStep} .button-container`);

    if (currentStep === demoConfig.totalSteps) {
        if (nextButton) {
            nextButton.style.display = 'none'; // Verberg de 'Volgende'-knop
        }

        // Controleer of de knoppen al bestaan voordat je ze toevoegt
        if (!document.querySelector('.go-example') && !document.querySelector('.go-home')) {
            // Voeg de 'Sluiten tabblad'-knop toe met Font Awesome icoon
            const exampleButton = document.createElement('button');
            exampleButton.innerHTML = '<i class="fas fa-lightbulb"></i> Naar Onderzoek';
            exampleButton.className = 'go-example';
            exampleButton.onclick = ()=> window.location.href = 'https://www.tipdemo.nl/research/flows'; 

            // Voeg de 'Terug naar hoofdwebsite'-knop toe met Font Awesome icoon
            const homeButton = document.createElement('button');
            homeButton.innerHTML = '<i class="fas fa-home"></i> Terug naar hoofdwebsite';
            homeButton.className = 'go-home';
            homeButton.onclick = () => window.location.href = 'https://www.tipdemo.nl'; 

            // Voeg de knoppen toe aan de button-container
            buttonContainer.appendChild(exampleButton);
            buttonContainer.appendChild(homeButton);
        }

    } else if (nextButton) {
        nextButton.style.display = 'inline-block'; // Toon de 'Volgende'-knop indien niet op de laatste stap
    }
}

// Controleer of de pagina via de terugknop van de browser is bezocht
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // Als de pagina uit de cache is geladen, forceer dan een herlaad
        window.location.reload();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const pdfUrl = 'model_opgaaf_gegevens_loonheffingen_lh0082z11fol.pdf'; // Path naar jouw PDF
    const container = document.getElementById('pdf-container');

    const renderPDF = async () => {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;

        // Itereer door alle pagina's
        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
            const page = await pdf.getPage(pageNumber);

            // Maak een canvas voor elke pagina
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            const viewport = page.getViewport({ scale: 1.5 });
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const renderContext = {
                canvasContext: context,
                viewport: viewport,
            };

            // Render de pagina op het canvas
            await page.render(renderContext).promise;

            // Voeg het canvas toe aan de container
            container.appendChild(canvas);
        }
    };

    renderPDF().catch(console.error);
});