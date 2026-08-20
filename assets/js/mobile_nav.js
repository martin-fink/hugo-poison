(() => {
    const nav = document.querySelector(".sidebar-nav");
    const button = document.querySelector(".mobile-nav-scroll");

    if (!nav || !button) {
        return;
    }

    button.addEventListener("click", function () {
        nav.scrollBy({
            left: nav.clientWidth * 0.8,
            behavior: "smooth",
        });
    });
})();
