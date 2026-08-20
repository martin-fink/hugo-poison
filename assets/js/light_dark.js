(() => {
    const btn = document.querySelector(".btn-light-dark");
    const moon = document.querySelector(".moon");
    const sun = document.querySelector(".sun");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    function applyTheme(theme) {
        const isDark = theme === "dark";

        document.body.classList.toggle("dark-theme", isDark);
        document.body.classList.toggle("light-theme", !isDark);
        moon.style.display = isDark ? "none" : "block";
        sun.style.display = isDark ? "block" : "none";

        if (document.getElementById("remark42") && window.REMARK42) {
            window.REMARK42.changeTheme(theme);
        }
    }

    const savedTheme = localStorage.getItem("theme");
    applyTheme(savedTheme || (systemTheme.matches ? "dark" : "light"));

    btn.addEventListener("click", function () {
        const theme = document.body.classList.contains("dark-theme") ? "light" : "dark";
        localStorage.setItem("theme", theme);
        applyTheme(theme);
    });

    systemTheme.addEventListener("change", function (event) {
        if (!localStorage.getItem("theme")) {
            applyTheme(event.matches ? "dark" : "light");
        }
    });
})();
