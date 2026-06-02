const form = document.getElementById("user-form")
const lista = document.getElementById("user-list")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const nome = document.getElementById("form-nome").value
    const email = document.getElementById("form-email").value

    console.log(nome)
    console.log(email)

    cadastrarUsuario(nome, email)
})

function cadastrarUsuario(nome, email){

    fetch("/api/user/register", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({nome, email})
    }).then(
        form.reset()
    )
}