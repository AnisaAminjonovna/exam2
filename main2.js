let elForm = document.querySelector(".form")
let elFormEmail = document.querySelector(".form .form_email")
let elFormPassword = document.querySelector(".form .form_password")
let elFormButton = document.querySelector(".form .form_button")

elFormButton.addEventListener("click", (e) => {
    e.preventDefault()

    if (elFormEmail.value == "admin") {
        elFormEmail.style.border = "2px solid green"
    //  alert("registratsiyadan muovafaqiatli o`ttingiz")
        
    }else {
         elFormEmail.style.border = "2px solid red"
    }

    if (elFormPassword.value == 123) {
        elFormPassword.style.border = "2px solid green"
    //  alert("registratsiyadan muovafaqiatli o`ttingiz")
        
    }else {
         elFormPassword.style.border = "2px solid red"
    }
       
})
function openPage(){
    if (elFormEmail.value == "admin") {
        elFormEmail.style.border = "2px solid green"
        window.open("index2.html")
    }else{
        elFormEmail.style.border = "2px solid red"
    }
    if (elFormPassword.value == 123) {
        elFormPassword.style.border = "2px solid green"
        window.open("index2.html")

    }else{
        elFormPassword.style.border = "2px solid red"
    }
    if(elFormEmail.value == "admin" && elFormPassword.value != 123 ){
        elFormEmail.style.border = "2px solid green"
        elFormPassword.style.border = "2px solid red"
    }else if(elFormPassword.value == 123 && elFormEmail.value != "admin" ){
        elFormPassword.style.border = "2px solid green"
        elFormEmail.style.border = "2px solid red"
    }
   
}
