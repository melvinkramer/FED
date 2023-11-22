// Banner Carrousel: Deze code creëert een eenvoudige beeldcarrousel die automatisch door verschillende items (lijsten) bladert.
// Bron 1: ChatGPT als antwoord op de vraag "Hoe maak ik een diavoorstelling in Javascript binnen een webpagina?"
document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll("#banner li"); // Selecteer alle lijstitems
    let currentIndex = 0; // Huidige index van het getoonde item

    // Verberg alle items
    function hideAllItems() {
        items.forEach(function (item) {
            item.classList.remove("show-item");
        });
    }

    // Toon het huidige item
    function showCurrentItem() {
        hideAllItems();
        items[currentIndex].classList.add("show-item");
    }

    // Toon het eerste item bij het laden van de pagina
    showCurrentItem();

    // Verander het getoonde item elke 3 seconden
    setInterval(function () {
        currentIndex++;
        if (currentIndex >= items.length) {
            currentIndex = 0;
        }
        showCurrentItem();
    }, 3000);
});

// Video Pauze/Toggle: Deze code zorgt ervoor dat een video kan worden afgespeeld en gepauzeerd door te klikken op een knop.
// Bron 2: ChatGPT als antwoord op de vraag "Hoe voeg ik een play pauze optie toe aan Js voor een video uit de HTML?"
document.getElementById("videoToggleButton").addEventListener("click", toggleVideo);

function toggleVideo() {
    const video = document.getElementById("backgroundVideo");
    const playIcon = document.getElementById("playIcon");
    const pauseIcon = document.getElementById("pauseIcon");

    if (video.paused) {
        video.play(); // Speel de video af
        playIcon.classList.remove("show-icon"); // Verberg het afspeelicoon
        pauseIcon.classList.add("show-icon"); // Toon het pauzeicoon
    } else {
        video.pause(); // Pauzeer de video
        playIcon.classList.add("show-icon"); // Toon het afspeelicoon
        pauseIcon.classList.remove("show-icon"); // Verberg het pauzeicoon
    }
}

// Open/close menu - Deze code zorgt ervoor dat het sidemenu kan worden geopend en gesloten, in combinatie met een overlay. Hier mogen vragen over gestelt worden!

// Bron 3: ChatGPT als antwoord op de vraag "Hoe voeg ik een openen/sluiten menufunctionaliteit toe aan JavaScript-knoppen met een overlay?"
function openMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    menu.classList.add("show-menu"); // Voeg de CSS-klasse toe om het zijmenu te tonen
    overlay.classList.add("show-overlay"); // Voeg de CSS-klasse toe om de overlay te tonen
}

function closeMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    menu.classList.remove("show-menu"); // Verwijder de CSS-klasse om het zijmenu te verbergen
    overlay.classList.remove("show-overlay"); // Verwijder de CSS-klasse om de overlay te verbergen
}

// Voeg event listeners toe aan de knoppen
document.getElementById("openMenuButton").addEventListener("click", function () {
    openMenu();
});

document.getElementById("closeMenuButton").addEventListener("click", function () {
    closeMenu();
});

// Optioneel: Voeg een event listener toe aan de overlay om het menu te sluiten
document.getElementById("overlay").addEventListener("click", function () {
    closeMenu();
});
