// Banner Carrousel: Deze code creëert een eenvoudige beeldcarrousel die automatisch door verschillende items (lijsten) bladert.

// Bron 1 - Door middel van Chat GPT heb ik een basiscode gekregen en passend gemaakt in mijn code

document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll("#banner li"); // Selecteer alle lijstitems
    let currentIndex = 0; // Huidige index van het getoonde item

    // Verberg alle items
    function hideAllItems() {
        items.forEach(function (item) {
            item.style.display = 'none';
        });
    }

    // Toon het huidige item
    function showCurrentItem() {
        hideAllItems();
        items[currentIndex].style.display = 'block';
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
// Bron 2 - Door middel van Chat GPT heb ik een basiscode gekregen en een pauze/play button toegevoegd aan de video.
document.getElementById("videoToggleButton").addEventListener("click", toggleVideo);

function toggleVideo() {
    const video = document.getElementById("backgroundVideo");
    const playIcon = document.getElementById("playIcon");
    const pauseIcon = document.getElementById("pauseIcon");

    if (video.paused) {
        video.play(); // Speel de video af
        playIcon.style.display = "none"; // Verberg het afspeelicoon
        pauseIcon.style.display = "inline-block"; // Toon het pauzeicoon
    } else {
        video.pause(); // Pauzeer de video
        playIcon.style.display = "inline-block"; // Toon het afspeelicoon
        pauseIcon.style.display = "none"; // Verberg het pauzeicoon
    }
}


// Wacht tot de document volledig geladen is
document.addEventListener("DOMContentLoaded", function () {
    // Navigatiemenu: Deze code opent en sluit een zijmenu met behulp van een overlay.

    // Voeg een click event listener toe aan de open menu knop
    document.getElementById("openMenuButton").addEventListener("click", function () {
        openMenu();
    });

    // Voeg een click event listener toe aan de close menu knop
    document.getElementById("closeMenuButton").addEventListener("click", function () {
        closeMenu();
    });

    // Optioneel: Voeg een click event listener toe aan de overlay om het menu te sluiten
    document.getElementById("overlay").addEventListener("click", function () {
        closeMenu();
    });
});

function openMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    menu.style.display = "block"; // Toon het zijmenu
    overlay.style.display = "block"; // Toon de overlay
}

function closeMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    menu.style.display = "none"; // Verberg het zijmenu
    overlay.style.display = "none"; // Verberg de overlay
}