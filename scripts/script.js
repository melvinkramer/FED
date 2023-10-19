document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll("#banner li");
    let currentIndex = 0;

    // Function to hide all items
    function hideAllItems() {
        items.forEach(function(item) {
            item.style.display = 'none';
        });
    }

    // Function to show the current item
    function showCurrentItem() {
        hideAllItems();
        items[currentIndex].style.display = 'block';
    }

    // Initially show the first item
    showCurrentItem();

    // Change the item every 3 seconds
    setInterval(function() {
        currentIndex++;
        if (currentIndex >= items.length) {
            currentIndex = 0;
        }
        showCurrentItem();
    }, 3000);
});

// *************************************************  Video pauze
function toggleVideo() {
    const video = document.getElementById("backgroundVideo");
    const playIcon = document.getElementById("playIcon");
    const pauseIcon = document.getElementById("pauseIcon");

    if (video.paused) {
        video.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline-block";
    } else {
        video.pause();
        playIcon.style.display = "inline-block";
        pauseIcon.style.display = "none";
    }
}