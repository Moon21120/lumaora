/* =========================================
   LUMAORA
   Main Configuration
   ========================================= */


/* =========================================
   EASY SETTINGS
   ========================================= */

// Change these whenever you want.

const LOGO_FILENAME = "lumaora-logo.png";

const SUPPORT_URL = "#";


/* =========================================
   PROJECTS
   ========================================= */

// Add or remove projects here.
// Empty slots are automatically hidden.

const PROJECTS = [
    {
        name: "Luna AI",
        url: "https://luna-ai-q92z.onrender.com"
    },

    {
        name: "Luna AI Developer Portal",
        url: "https://lunadeveloperportal.onrender.com"
    },

    {
        name: "Gibberish Translator",
        url: "https://gibberish-decoder.lovable.app"
    },

    {
        name: "",
        url: ""
    },

    {
        name: "",
        url: ""
    }
];


/* =========================================
   PAGE NAVIGATION
   ========================================= */

const pages = document.querySelectorAll(".page");
const navigationLinks = document.querySelectorAll("nav a");


function showPage(pageId) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const targetPage =
        document.getElementById(pageId);

    if (targetPage) {
        targetPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function handleNavigation() {

    const hash =
        window.location.hash.replace("#", "");

    if (hash && document.getElementById(hash)) {
        showPage(hash);
    } else {
        showPage("home");
    }
}


window.addEventListener(
    "hashchange",
    handleNavigation
);


/* =========================================
   PROJECTS
   ========================================= */

function loadProjects() {

    const projectGrid =
        document.getElementById("project-grid");

    if (!projectGrid) return;

    projectGrid.innerHTML = "";

    PROJECTS.forEach(project => {

        if (
            !project.name ||
            !project.url
        ) {
            return;
        }

        const card =
            document.createElement("a");

        card.className =
            "project-card";

        card.href =
            project.url;

        card.target =
            "_blank";

        card.rel =
            "noopener noreferrer";

        card.innerHTML = `
            <h3>${escapeHTML(project.name)}</h3>
            <span>Open project →</span>
        `;

        projectGrid.appendChild(card);
    });
}


/* =========================================
   SUPPORT
   ========================================= */

function loadSupport() {

    const button =
        document.getElementById(
            "support-button"
        );

    if (!button) return;

    button.href =
        SUPPORT_URL;
}


/* =========================================
   LOGO
   ========================================= */

function loadLogo() {

    const logo =
        document.querySelector(
            ".brand img"
        );

    if (!logo) return;

    logo.src =
        `assets/${LOGO_FILENAME}`;
}


/* =========================================
   SECURITY
   ========================================= */

function escapeHTML(value) {

    const element =
        document.createElement("div");

    element.textContent =
        value;

    return element.innerHTML;
}


/* =========================================
   ACCOUNT BUTTONS
   ========================================= */

const loginButton =
    document.getElementById(
        "login-button"
    );

const signupButton =
    document.getElementById(
        "signup-button"
    );


if (loginButton) {

    loginButton.addEventListener(
        "click",
        () => {

            alert(
                "Lumaora account login will be available soon."
            );

        }
    );

}


if (signupButton) {

    signupButton.addEventListener(
        "click",
        () => {

            alert(
                "Lumaora account creation will be available soon."
            );

        }
    );

}


/* =========================================
   STARTUP
   ========================================= */

loadProjects();

loadSupport();

loadLogo();

handleNavigation();
