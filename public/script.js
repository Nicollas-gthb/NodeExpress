const form = document.getElementById("user-form")
const lista = document.getElementById("list-user")

const editContainer = document.getElementById("form-container")


carregarUsuarios()

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const nome = document.getElementById("form-nome").value
    const email = document.getElementById("form-email").value

    console.log(nome)
    console.log(email)

    cadastrarUsuario(nome, email)
    carregarUsuarios()
})

function cadastrarUsuario(nome, email){

    fetch("/api/user/register", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({nome, email})
    })
    .then(
        form.reset()
    )
}

function carregarUsuarios(){

    fetch("/api/user/list", {
        method: "GET"
    }).then(res => res.json()).then(data => {

        lista.innerHTML = "";

        data.forEach(user => {
            
            const li = document.createElement("li")
            li.innerHTML = `ID: ${user.id} <br> Nome: ${user.nome} <br> Email: ${user.email} <button onclick="excluirUsuario(${user.id})">Excluir</button> <button onclick="editarUsuario(${user.id})">Editar</button>`

            lista.appendChild(li)
        });

    })
}

function excluirUsuario(id){

    const confirm = window.confirm("Tem certeza?")

    if(!confirm) return


    fetch(`/api/user/delete/${id}`, {
        method: "DELETE"
    }).then(() => {
        carregarUsuarios()
    })
}


function editarUsuario(id){

    const editForm = document.createElement("form")

    editForm.innerHTML = `

        <h2>Editar usuario de ID: ${id}</h2>

        <label for="edit-nome">Nome</label>
        <input 
            name="edit-nome" 
            id="edit-nome" 
            type="text"
            placeholder="Seu nome"
            required
        >

        <br>

        <label for="edit-email">Email</label>
        <input 
            name="edit-email" 
            id="edit-email" 
            type="text"
            placeholder="Seu@email"
            required
        >

        <br>

        <button id="edit-teste" type="submit">Editar</button>
    `

    editContainer.appendChild(editForm)


    editForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const nome = document.getElementById("edit-nome").value
        const email = document.getElementById("edit-email").value


        updateUsuario(id, nome, email)
        editContainer.innerHTML = ""
        carregarUsuarios()
    })
}


function updateUsuario(id, nome, email){
    fetch(`/api/user/updateAll/${id}`, {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({nome, email})
    })
    .then(
        form.reset()
    )
}