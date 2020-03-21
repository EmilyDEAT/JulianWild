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