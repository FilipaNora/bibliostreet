window.onload = function () {
  

    if (localStorage.getItem("users")) {


        users = JSON.parse(localStorage.getItem("users"))
        //console.log(localStorage.length)
        //alert(users.length)

    }


    //Formulário Bibilioteca
    let formuser = document.getElementById("formuser")

    let fbutuser = document.getElementById("fbutuser")

    let fnome = document.getElementById("fnome")
    let festado = document.getElementById("festado")
    let femail = document.getElementById("femail")
    let fpassword = document.getElementById("fpassword")
    let fmulta = document.getElementById("fmulta")

    let tblUser = document.getElementById("divuser")


    renderTableUsers()
    fbutuser.addEventListener("click", function () {

        renderTableUsers()

    })

    //Adicionar um nova biblioteca
    formuser.addEventListener("submit", function () {

        let strError = ""

        //Itera sobre o array e verifica se existe alguma biblioteca
        for (var i = 0; i < users.length; i++) {
            if (users[i].email == femail.value) {
                strError += "Já existe um utilizador com o email selecionado!"
            }
        }

        if (strError == "") {

            let newUser = new User(fnome.value, femail.value, fpassword.value, festado.value, fmulta.value)
            users.push(newUser)

            localStorage.removeItem("users")

            localStorage.setItem("users", JSON.stringify(users))

            renderTableUsers()

            event.preventDefault()

        } else {

            alert(strError)

            renderTableUsers()
            event.preventDefault()
        }

    })

    //Render tabela
    function renderTableUsers() {

        tblUser.innerHTML = ""

        let strHTML = `<table id='tabelaBiblio' style='width: 100%; border: 1px solid'>
        <tr>
        <th>Nome</th>
        <th>Tipo</th>
        <th>Email</th>
        <th>Password</th>
        <th>Multa</th>
        <th>Actions</th>
        </tr>`



        for (let i = 0; i < users.length; i++) {
            strHTML += `<tr><td>${users[i]._name}</td>
                <td>${users[i]._type}</td>
                <td>${users[i]._email}</td>
                <td>${users[i]._password}</td>
                <td>${users[i]._multa}</td>
                <td>
                <button class='remove' style='background-color: lightcoral'><a id='${users[i]._id}'>
                <i class='fas fa-trash-alt'></i></a></button>
                </td> 
            </tr>`
        }
        strHTML += '</table>'

        tblUser.innerHTML += strHTML

        let btnRemove = document.getElementsByClassName("remove")
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                let rowId = btnRemove[i].firstChild.getAttribute("id")
                removebiblioById(rowId)
                renderTableUsers()
            })
        }
    }

    function removebiblioById(id) {
        for (let i = 0; i < users.length; i++) {
            if (users[i]._id == id) {
                users.splice(i, 1)
            }
        }

        localStorage.removeItem("users")

        localStorage.setItem("users", JSON.stringify(users))

    }

    // LOGOUT
    optLogout.addEventListener("click", function () {
        userId = 0
        optLogout.style.display = 'none'
        erase();

        // similar behavior as an HTTP redirect
        window.location.replace("index.html");

    })

    function erase() {
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('pw1');
    }
}