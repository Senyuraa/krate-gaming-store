/* ================= PRELOADER + APP REVEAL ================= */
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    const app = document.getElementById("app");

    setTimeout(() => {
        if (loader) loader.style.opacity = "0";

        setTimeout(() => {
            if (loader) loader.style.display = "none";
            if (app) app.classList.add("visible");
            document.body.classList.remove("loading");
        }, 600);

    }, 2500);
});

/* ================= FEATURED INFINITE SLIDER ================= */
(function initFeaturedSlider() {
    const track = document.getElementById("featured-track");
    if (!track) return;

    const slides = track.querySelectorAll(".featured-slide");
    if (slides.length < 3) return;

    let index = 1;
    let isTransitioning = false;
    const total = slides.length;
    const duration = 900; // must match CSS transition

    // start position
    track.style.transform = `translateX(-${index * 100}%)`;

    let sliderInterval = setInterval(moveNext, 3000);

    function moveNext() {
        if (isTransitioning) return;
        isTransitioning = true;

        index++;
        track.style.transition = `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    track.addEventListener("transitionend", () => {
        // reached cloned FIRST slide
        if (index === total - 1) {
           requestAnimationFrame(() => {
            track.style.transition = "none";
            index = 1;
            track.style.transform = `translateX(-${index * 100}%)`;

            // force browser to apply instantly
            track.offsetHeight;
        });
    }
        isTransitioning = false;
    });
})();

