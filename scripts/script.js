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