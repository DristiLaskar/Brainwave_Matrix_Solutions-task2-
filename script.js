document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const carouselContainer = document.querySelector(".carousel-container");
    let scrollAmount = 0;
    let intervalId; // Variable to hold interval ID for clearInterval

    // Function to start automatic sliding
    function startAutoSlide() {
        intervalId = setInterval(function() {
            carouselContainer.scrollTo({
                top: 0,
                left: (scrollAmount += 300),
                behavior: "smooth"
            });
            if (scrollAmount >= carouselContainer.scrollWidth - carouselContainer.clientWidth) {
                scrollAmount = 0;
            }
        }, 3000); // Adjust this value to control slide interval (e.g., 3000 milliseconds = 3 seconds)
    }

    // Function to stop automatic sliding
    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    // Event listeners for previous and next buttons
    nextBtn.addEventListener("click", function() {
        stopAutoSlide(); // Stop automatic sliding when manually clicking next
        carouselContainer.scrollTo({
            top: 0,
            left: (scrollAmount += 300),
            behavior: "smooth"
        });
        if (scrollAmount >= carouselContainer.scrollWidth - carouselContainer.clientWidth) {
            scrollAmount = 0;
        }
        startAutoSlide(); // Restart automatic sliding after manual click
    });

    prevBtn.addEventListener("click", function() {
        stopAutoSlide(); // Stop automatic sliding when manually clicking previous
        carouselContainer.scrollTo({
            top: 0,
            left: (scrollAmount -= 300),
            behavior: "smooth"
        });
        if (scrollAmount < 0) {
            scrollAmount = carouselContainer.scrollWidth - carouselContainer.clientWidth;
        }
        startAutoSlide(); // Restart automatic sliding after manual click
    });

    // Start automatic sliding initially
    startAutoSlide();
});


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (bar) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}