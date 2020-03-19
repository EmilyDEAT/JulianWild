// DARK MODE

const darkMode = document.getElementById('dark-mode')

darkMode.onclick = function() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        // White Mode
        document.documentElement.setAttribute('data-theme', 'ligth')
    } else {
        // Dark Mode
        document.documentElement.setAttribute('data-theme', 'dark')
    }

    sessionStorage.setItem('dataTheme', document.documentElement.getAttribute('data-theme'))
}

const savedDataTheme = sessionStorage.getItem('dataTheme')

switch (savedDataTheme) {
    case 'dark':
        document.documentElement.setAttribute('data-theme', 'dark')
        break
    case 'light':
        document.documentElement.setAttribute('data-theme', 'ligth')
        break
    default:
        sessionStorage.setItem('dataTheme', 'light')
        document.documentElement.setAttribute('data-theme', 'ligth')
        break
}

// EMAIL VERIFICATION FORM
const aideEmail = document.getElementById("email");
aideEmail.addEventListener("input", function(e) {
    let email = e.target.value;
    let border = "";
    if (email.includes("@") === false) {
        border = "2px solid red";
    }
    aideEmail.style.border = border;
});