function getIconSVG(theme) {
    if (theme === "dark") {
        // Icono luna (ON)
        return `
        <svg xmlns="http://www.w3.org/2000/svg" class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>`;
    } else {
        // Icono sol (OFF)
        return `
        <svg xmlns="http://www.w3.org/2000/svg" class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>`;
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const toggleBtn = document.querySelector('.theme-toggle');
    const current = html.getAttribute("data-theme") || "light";
    const nextTheme = current === "light" ? "dark" : "light";

    html.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);

    toggleBtn.innerHTML = getIconSVG(nextTheme);
    toggleBtn.setAttribute("aria-pressed", nextTheme === "dark" ? "true" : "false");
}

window.onload = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const html = document.documentElement;
    const toggleBtn = document.querySelector('.theme-toggle');

    html.setAttribute("data-theme", savedTheme);
    toggleBtn.innerHTML = getIconSVG(savedTheme);
    toggleBtn.setAttribute("aria-pressed", savedTheme === "dark" ? "true" : "false");
};
