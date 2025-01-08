const demoConfig = {
    totalSteps: 12 // Definieer hier het aantal stappen voor deze demo
};

let currentStep = 1; // Houd de huidige stap bij

document.addEventListener('DOMContentLoaded', () => {
    const totalSteps = demoConfig.totalSteps;

    // Lees de huidige stap van de hash in de URL
    const hash = window.location.hash;
    const stepFromHash = hash ? parseInt(hash.replace('#', ''), 10) : 1;

    // Stel de huidige stap in op basis van de hash of standaard naar 1
    currentStep = (stepFromHash > 0 && stepFromHash <= totalSteps) ? stepFromHash : 1;

    // Verberg stappen die niet worden gebruikt
    for (let i = totalSteps + 1; i <= 8; i++) {
        const stepElement = document.getElementById(`step-${i}`);
        if (stepElement) {  
            stepElement.style.display = 'none';
        }
    }

    // Toon de juiste stap
    showStep(currentStep);

    // Voeg eventlisteners toe aan de knoppen voor 'Volgende' en 'Terug'
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('next')) {
            goToStep(currentStep + 1);
        } else if (e.target.classList.contains('prev')) {
            goToStep(currentStep - 1);
        } else if (e.target.classList.contains('register-button')) {
            goToStep(currentStep + 1); // "Registreren" gaat naar de volgende stap
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

        // Update de URL-hash
        window.location.hash = `#${currentStep}`;
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

   // Scroll direct naar boven
    window.scrollTo(0, 0);

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

        if (!document.querySelector('.go-example') && !document.querySelector('.go-home')) {
            const exampleButton = document.createElement('button');
            exampleButton.innerHTML = '<i class="fas fa-flask"></i> Naar onderzoek';
            exampleButton.className = 'go-example';
            exampleButton.onclick = () => window.location.href = 'https://www.tipdemo.nl/research';

            const homeButton = document.createElement('button');
            homeButton.innerHTML = '<i class="fas fa-home"></i> Terug naar hoofdwebsite';
            homeButton.className = 'go-home';
            homeButton.onclick = () => window.location.href = 'https://www.tipdemo.nl';

            buttonContainer.appendChild(exampleButton);
            buttonContainer.appendChild(homeButton);
        }
    } else if (nextButton) {
        nextButton.style.display = 'inline-block';
    }
}

// Controleer of de pagina via de terugknop van de browser is bezocht
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // Als de pagina uit de cache is geladen, forceer dan een herlaad
        window.location.reload();
    }
});
