const darkMode = document.getElementById("dark-mode")

darkMode.onclick = function() {
    if (document.documentElement.hasAttribute('data-theme', 'dark')) {
        document.documentElement.removeAttribute('data-theme', 'dark')
        console.log("ok 2")
    } else {
        document.documentElement.setAttribute('data-theme', 'dark')
        console.log("ok")
    }
}