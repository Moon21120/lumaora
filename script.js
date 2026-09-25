/* =========================================
   LUMAORA
   Main Configuration
   ========================================= */


/* =========================================
   SUPABASE
   ========================================= */

const SUPABASE_URL =
    "https://yiqywovshakzeaxnrjkl.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_t8SwBp-pfmNOXzQtYtJZKQ_M2lJk5Ys";


/* =========================================
   EASY SETTINGS
   ========================================= */

const LOGO_FILENAME =
    "lumaora-logo.png";

const SUPPORT_URL =
    "https://gibberish-decoder.lovable.app/support";


/* =========================================
   PROJECTS
   ========================================= */

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
   SUPABASE CLIENT
   ========================================= */

let supabaseClient = null;

try {

    if (
        typeof window.supabase !== "undefined" &&
        SUPABASE_URL &&
        SUPABASE_KEY
    ) {

        supabaseClient =
            window.supabase.createClient(
                SUPABASE_URL,
                SUPABASE_KEY,
                {
                    auth: {
                        persistSession: true,
                        autoRefreshToken: true,
                        detectSessionInUrl: true
                    }
                }
            );

    }

} catch (error) {

    console.error(
        "Lumaora Supabase initialization failed:",
        error
    );

}


/* =========================================
   PAGE NAVIGATION
   ========================================= */

const pages =
    document.querySelectorAll(".page");

const navigationLinks =
    document.querySelectorAll("nav a");


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

    if (
        hash &&
        document.getElementById(hash)
    ) {

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
        document.getElementById(
            "project-grid"
        );

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
   ACCOUNT ELEMENTS
   ========================================= */

const loggedOutAccount =
    document.getElementById(
        "logged-out-account"
    );

const authCard =
    document.getElementById(
        "auth-card"
    );

const loggedInAccount =
    document.getElementById(
        "logged-in-account"
    );

const loginButton =
    document.getElementById(
        "login-button"
    );

const signupButton =
    document.getElementById(
        "signup-button"
    );

const authForm =
    document.getElementById(
        "auth-form"
    );

const authTitle =
    document.getElementById(
        "auth-title"
    );

const authDescription =
    document.getElementById(
        "auth-description"
    );

const authSubmit =
    document.getElementById(
        "auth-submit"
    );

const authSwitch =
    document.getElementById(
        "auth-switch"
    );

const authCancel =
    document.getElementById(
        "auth-cancel"
    );

const authMessage =
    document.getElementById(
        "auth-message"
    );

const displayNameField =
    document.getElementById(
        "display-name-field"
    );

const usernameInput =
    document.getElementById(
        "username"
    );

const passwordInput =
    document.getElementById(
        "password"
    );

const displayNameInput =
    document.getElementById(
        "display-name"
    );

const profileDisplayName =
    document.getElementById(
        "profile-display-name"
    );

const profileUsername =
    document.getElementById(
        "profile-username"
    );

const logoutButton =
    document.getElementById(
        "logout-button"
    );

const profileButton =
    document.getElementById(
        "profile-button"
    );


let authMode = "login";


/* =========================================
   ACCOUNT MESSAGES
   ========================================= */

function showAuthMessage(
    message,
    isError = false
) {

    if (!authMessage) return;

    authMessage.textContent =
        message;

    authMessage.style.color =
        isError
            ? "#ff8d8d"
            : "rgba(255,255,255,.72)";

}


/* =========================================
   OPEN AUTH
   ========================================= */

function openAuth(mode) {

    authMode = mode;

    if (loggedOutAccount) {
        loggedOutAccount.style.display =
            "none";
    }

    if (loggedInAccount) {
        loggedInAccount.style.display =
            "none";
    }

    if (authCard) {
        authCard.style.display =
            "block";
    }

    showAuthMessage("");

    if (usernameInput) {
        usernameInput.value = "";
    }

    if (passwordInput) {
        passwordInput.value = "";
    }

    if (displayNameInput) {
        displayNameInput.value = "";
    }


    if (mode === "signup") {

        if (authTitle) {
            authTitle.textContent =
                "Create Account";
        }

        if (authDescription) {
            authDescription.textContent =
                "Create your Lumaora account.";
        }

        if (authSubmit) {
            authSubmit.textContent =
                "Create Account";
        }

        if (authSwitch) {
            authSwitch.textContent =
                "Log in instead";
        }

        if (displayNameField) {
            displayNameField.style.display =
                "block";
        }

    } else {

        if (authTitle) {
            authTitle.textContent =
                "Log In";
        }

        if (authDescription) {
            authDescription.textContent =
                "Log in to your Lumaora account.";
        }

        if (authSubmit) {
            authSubmit.textContent =
                "Log In";
        }

        if (authSwitch) {
            authSwitch.textContent =
                "Create an account instead";
        }

        if (displayNameField) {
            displayNameField.style.display =
                "none";
        }

    }

}


/* =========================================
   CLOSE AUTH
   ========================================= */

function closeAuth() {

    if (authCard) {
        authCard.style.display =
            "none";
    }

    if (loggedOutAccount) {
        loggedOutAccount.style.display =
            "block";
    }

    showAuthMessage("");

}


/* =========================================
   GET EMAIL FROM USERNAME
   ========================================= */

async function getEmailFromUsername(
    username
) {

    const cleanUsername =
        username
            .trim()
            .toLowerCase();

    const {
        data,
        error
    } =
        await supabaseClient.rpc(
            "get_auth_email_by_username",
            {
                requested_username:
                    cleanUsername
            }
        );

    if (error) {

        console.error(
            "Username lookup error:",
            error
        );

        throw new Error(
            "Unable to find that account."
        );

    }

    return data;

}


/* =========================================
   LOGIN
   ========================================= */

async function loginUser(
    username,
    password
) {

    if (!supabaseClient) {

        throw new Error(
            "Lumaora could not connect to Supabase."
        );

    }

    const cleanUsername =
        username
            .trim()
            .toLowerCase();


    if (!cleanUsername) {

        throw new Error(
            "Please enter your username."
        );

    }


    if (!password) {

        throw new Error(
            "Please enter your password."
        );

    }


    const email =
        await getEmailFromUsername(
            cleanUsername
        );


    if (!email) {

        throw new Error(
            "Username or password is incorrect."
        );

    }


    const {
        error
    } =
        await supabaseClient.auth
            .signInWithPassword({
                email: email,
                password: password
            });


    if (error) {

        console.error(
            "Login error:",
            error
        );

        throw new Error(
            "Username or password is incorrect."
        );

    }

}


/* =========================================
   CREATE ACCOUNT
   ========================================= */

async function createAccount(
    username,
    password,
    displayName
) {

    if (!supabaseClient) {

        throw new Error(
            "Lumaora could not connect to Supabase."
        );

    }


    const cleanUsername =
        username
            .trim()
            .toLowerCase();

    const cleanDisplayName =
        displayName.trim();


    if (
        !/^[a-z0-9_]{3,32}$/.test(
            cleanUsername
        )
    ) {

        throw new Error(
            "Username must be 3–32 characters and can only contain letters, numbers, and underscores."
        );

    }


    if (password.length < 6) {

        throw new Error(
            "Password must be at least 6 characters."
        );

    }


    /*
       Check username availability.
    */

    const existingEmail =
        await getEmailFromUsername(
            cleanUsername
        );


    if (existingEmail) {

        throw new Error(
            "That username is already taken."
        );

    }


    /*
       Supabase Auth requires an email/phone
       identifier for password authentication.

       Lumaora displays only the username.
    */

    const internalEmail =
        `${cleanUsername}@accounts.lumaora.com`;


    const {
        data,
        error
    } =
        await supabaseClient.auth.signUp({

            email:
                internalEmail,

            password:
                password,

            options: {

                data: {

                    username:
                        cleanUsername,

                    display_name:
                        cleanDisplayName ||
                        cleanUsername

                }

            }

        });


    if (error) {

        console.error(
            "Signup error:",
            error
        );

        throw new Error(
            error.message
        );

    }


    if (!data.user) {

        throw new Error(
            "Account creation failed."
        );

    }


    /*
       If email confirmation is enabled,
       there will be no session yet.
    */

    if (!data.session) {

        throw new Error(
            "Your account was created, but email confirmation is enabled in Supabase. Turn off Confirm Email in Authentication → Providers → Email."
        );

    }

}


/* =========================================
   LOAD PROFILE
   ========================================= */

async function loadProfile() {

    if (!supabaseClient) {

        showLoggedOut();

        return;

    }


    const {
        data: userData,
        error: userError
    } =
        await supabaseClient.auth.getUser();


    if (
        userError ||
        !userData ||
        !userData.user
    ) {

        showLoggedOut();

        return;

    }


    const user =
        userData.user;


    const {
        data: profile,
        error: profileError
    } =
        await supabaseClient
            .from("profiles")
            .select(
                "username, display_name"
            )
            .eq(
                "id",
                user.id
            )
            .single();


    if (profileError) {

        console.error(
            "Profile loading error:",
            profileError
        );

        showLoggedIn(
            user.user_metadata?.display_name ||
            user.user_metadata?.username ||
            "Welcome",

            user.user_metadata?.username ||
            "username"
        );

        return;

    }


    showLoggedIn(
        profile.display_name ||
        profile.username,

        profile.username
    );

}


/* =========================================
   SHOW LOGGED IN
   ========================================= */

function showLoggedIn(
    displayName,
    username
) {

    if (loggedOutAccount) {
        loggedOutAccount.style.display =
            "none";
    }

    if (authCard) {
        authCard.style.display =
            "none";
    }

    if (loggedInAccount) {
        loggedInAccount.style.display =
            "block";
    }

    if (profileDisplayName) {

        profileDisplayName.textContent =
            displayName;

    }

    if (profileUsername) {

        profileUsername.textContent =
            `@${username}`;

    }

}


/* =========================================
   SHOW LOGGED OUT
   ========================================= */

function showLoggedOut() {

    if (loggedOutAccount) {
        loggedOutAccount.style.display =
            "block";
    }

    if (authCard) {
        authCard.style.display =
            "none";
    }

    if (loggedInAccount) {
        loggedInAccount.style.display =
            "none";
    }

}


/* =========================================
   AUTH FORM
   ========================================= */

if (authForm) {

    authForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            showAuthMessage(
                "Please wait..."
            );


            if (authSubmit) {
                authSubmit.disabled =
                    true;
            }


            try {

                const username =
                    usernameInput
                        ? usernameInput.value
                        : "";

                const password =
                    passwordInput
                        ? passwordInput.value
                        : "";

                const displayName =
                    displayNameInput
                        ? displayNameInput.value
                        : "";


                if (authMode === "signup") {

                    await createAccount(
                        username,
                        password,
                        displayName
                    );

                    await loadProfile();

                    showAuthMessage(
                        "Account created successfully!"
                    );

                } else {

                    await loginUser(
                        username,
                        password
                    );

                    await loadProfile();

                    showAuthMessage(
                        "Logged in successfully!"
                    );

                }


                if (usernameInput) {
                    usernameInput.value = "";
                }

                if (passwordInput) {
                    passwordInput.value = "";
                }

                if (displayNameInput) {
                    displayNameInput.value = "";
                }


            } catch (error) {

                console.error(
                    error
                );

                showAuthMessage(
                    error.message ||
                    "Something went wrong.",
                    true
                );

            } finally {

                if (authSubmit) {
                    authSubmit.disabled =
                        false;
                }

            }

        }
    );

}


/* =========================================
   ACCOUNT BUTTONS
   ========================================= */

if (loginButton) {

    loginButton.addEventListener(
        "click",
        () => {

            openAuth("login");

        }
    );

}


if (signupButton) {

    signupButton.addEventListener(
        "click",
        () => {

            openAuth("signup");

        }
    );

}


if (authSwitch) {

    authSwitch.addEventListener(
        "click",
        () => {

            if (authMode === "login") {

                openAuth("signup");

            } else {

                openAuth("login");

            }

        }
    );

}


if (authCancel) {

    authCancel.addEventListener(
        "click",
        () => {

            closeAuth();

        }
    );

}


/* =========================================
   LOGOUT
   ========================================= */

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        async () => {

            if (!supabaseClient) {

                showLoggedOut();

                return;

            }


            const {
                error
            } =
                await supabaseClient.auth.signOut();


            if (error) {

                console.error(
                    "Logout error:",
                    error
                );

                showAuthMessage(
                    "Unable to log out right now.",
                    true
                );

                return;

            }


            showLoggedOut();

            window.location.hash =
                "account";

        }
    );

}


/* =========================================
   PROFILE
   ========================================= */

if (profileButton) {

    profileButton.addEventListener(
        "click",
        () => {

            alert(
                "Profile customization is coming next."
            );

        }
    );

}


/* =========================================
   AUTH STATE
   ========================================= */

if (supabaseClient) {

    supabaseClient.auth.onAuthStateChange(
        (
            event,
            session
        ) => {

            setTimeout(
                () => {

                    if (session) {

                        loadProfile();

                    } else {

                        showLoggedOut();

                    }

                },
                0
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


if (supabaseClient) {

    loadProfile();

} else {

    showLoggedOut();

}
