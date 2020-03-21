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

// ADD FIGCAPTION
const container1Length = document.getElementsByClassName("container1").length

for (let i = 0; i < container1Length; i++) {
    const figcaptionElt = document.createElement("figcaption")
    figcaptionElt.className = "like"
    const imgLike = document.createElement("img")
    imgLike.className = "img-like"
    imgLike.src = "Logos/heart.svg"
    imgLike.style.width = "25px"
    imgLike.style.height = "25px"
    imgLike.style.marginRight = "5px";
    const pLike = document.createElement("p")
    pLike.className = "p-like"
    pLike.textContent = "0"
    pLike.style.marginRight = "5px";
    document.getElementsByClassName("container1")[i].appendChild(figcaptionElt)
    document.getElementsByClassName("like")[i].appendChild(imgLike)
    document.getElementsByClassName("like")[i].appendChild(pLike)

    // LIKE COUNTER
    const imgLikeElt = document.getElementsByClassName('img-like')[i];
    let clic = 0
    imgLikeElt.addEventListener('click', function() {
        clic++
        document.getElementsByClassName('p-like')[i].textContent = clic;
    });

}