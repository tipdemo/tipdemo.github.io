const demoConfig = {
    totalSteps: 9 // Definieer hier het aantal stappen voor deze demo
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
            const goStep = e.target.getAttribute('data-go-step');
            if (goStep) {
                goToStep(parseInt(goStep, 10));
            } else {
                goToStep(currentStep + 1);
            }
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
            exampleButton.innerHTML = '<i class="fas fa-play"></i> Naar demos';
            exampleButton.className = 'go-example';
            exampleButton.onclick = () => window.location.href = 'https://www.tipdemo.nl/examples';

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


document.addEventListener('DOMContentLoaded', function() {
    const handelingsButton1 = document.querySelector('.handelingsomgeving-button1');
    const loginBlock1 = document.querySelector('.login-block1');
    const newCustomerBlock1 = document.querySelector('.new-customer-block1');
    const buttonContainer1 = document.querySelector('.button-container1');
    const qrCodeContainer1 = document.getElementById('qr-code-container1');

    // Debugging: Controleer of elementen correct zijn geselecteerd
    console.log('handelingsButton1:', handelingsButton1);
    console.log('loginBlock1:', loginBlock1);
    console.log('newCustomerBlock1:', newCustomerBlock1);
    console.log('qrCodeContainer1:', qrCodeContainer1);

    if (handelingsButton1 && loginBlock1 && newCustomerBlock1 && qrCodeContainer1) {
        handelingsButton1.addEventListener('click', function(event) {
            event.preventDefault(); // Voorkom standaard form submission indien van toepassing

            // Verberg de login-block1 en newCustomerBlock
            loginBlock1.style.display = 'none';
            newCustomerBlock1.style.display = 'none';

            // Toon de QR-code container
            qrCodeContainer1.style.display = 'block';
            buttonContainer1.style.display = 'flex';
        });
    } else {
        console.warn('Een of meer elementen zijn niet gevonden. Controleer de class-namen en ID\'s.');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const handelingsButton2 = document.querySelector('.handelingsomgeving-button2');
    const loginBlock2 = document.querySelector('.login-block2');
    const newCustomerBlock2 = document.querySelector('.new-customer-block2');
    const buttonContainer2 = document.querySelector('.button-container2');
    const qrCodeContainer2 = document.getElementById('qr-code-container2');

    // Debugging: Controleer of elementen correct zijn geselecteerd
    console.log('handelingsButton2:', handelingsButton2);
    console.log('loginBlock2:', loginBlock2);
    console.log('newCustomerBlock2:', newCustomerBlock2);
    console.log('qrCodeContainer2:', qrCodeContainer2);

    if (handelingsButton2 && loginBlock2 && newCustomerBlock2 && qrCodeContainer2) {
        handelingsButton2.addEventListener('click', function(event) {
            event.preventDefault(); // Voorkom standaard form submission indien van toepassing

            // Verberg de login-block2 en newCustomerBlock2
            loginBlock2.style.display = 'none';
            newCustomerBlock2.style.display = 'none';

            // Toon de QR-code container en de button-container2
            qrCodeContainer2.style.display = 'block';
            buttonContainer2.style.display = 'flex';
        });
    } else {
        console.warn('Een of meer elementen voor stap 2 zijn niet gevonden. Controleer de class-namen en ID\'s.');
    }
});