// Global scope
const APP_THEME = "dark";

function applyTheme() {
    if (APP_THEME === "dark") {
        // Apply dark theme styles to the entire app
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

applyTheme();