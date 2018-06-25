window.onload = function () {

    if (localStorage.getItem("users") != null) {

        let temp_users = JSON.parse(localStorage.getItem("users"));
        console.log(temp_users)
        for (var i = 0; i < temp_users.length; i++) {
            let user = new User(temp_users[i]._name, temp_users[i]._email, temp_users[i]._password, temp_users[i]._type)
            users.push(user);
        }
        console.log(users)
    }


    check();


    // Referência para elementos HTML
    let optLogin = document.getElementById("optLogin")

    // Injetar users e viagens via código
    if (users.length == 0) {
        let user01 = new User("ric", "ric@mail.pt", 12345, 0)
        users.push(user01);
        let user02 = new User("Maria", "maria@mail.pt", 54321, 1)
        users.push(user02);
        let user03 = new User("Ana", "ana@mail.pt", 54321, 2)
        users.push(user03);
    }




    let frmLogin = document.getElementById("frmLogin")
    // SUBMISSÃO DE AUTENTICAÇÃO
    frmLogin.addEventListener("submit", function (event) {

        event.preventDefault()

        // Obter as referências para as caixas de texto
        let inputLoginEmail = document.getElementById("inputLoginEmail")
        let inputLoginPassword = document.getElementById("inputLoginPassword")

        console.log("Email: " + inputLoginEmail.value)
        console.log("Pass: " + inputLoginPassword.value)

        // Iterar sobre o array e verificar se o utilizador já existe
        let userExists = false
        let userName = ""

        for (var i = 0; i < users.length; i++) {
            console.log(users[i].email)
            if (users[i].email == inputLoginEmail.value && users[i].password == inputLoginPassword.value) {

                userExists = true

                userId = users[i]._id
                userName = users[i]._name
                userType = users[i]._type

            }
        }



        // Se sim, autenticar utilizador
        if (userExists == true) {
            store(userName, inputLoginEmail.value, inputLoginPassword.value);
            alert("Autenticação efetuado com sucesso!!")
            // Fechar a modal
            $('#login-modal').modal('hide')
            if (userType == 2) {
                window.location.replace("uti.html");

            } else
            if (userType == 1) {
                window.location.replace("operador.html");
            } else if (userType == 0) {
                window.location.replace("admin.html");
            }

        } else {
            // Se não, exibir mensagem a indicar a inexistência do utilizador no array
            alert("Dados de autenticação inválidos!!")
        }


    })

    // SUBMISSÃO DE REGISTO
    let frmRegister = document.getElementById("frmRegister")
    frmRegister.addEventListener("submit", function () {
        // 1. Validar pass iguais
        let inputPassword1 = document.getElementById("inputPassword1")
        let inputPassword2 = document.getElementById("inputPassword2")
        let strError = ""

        console.log(inputPassword1.value)
        console.log(inputPassword2.value)

        if (inputPassword1.value != inputPassword2.value) {
            strError = "As passwords têm de ser iguais"
        }

        // 2. Validar se já existe um user com o mesmo email
        let inputEmail = document.getElementById("inputEmail")
        let userExist = false
        for (var i = 0; i < users.length; i++) {
            if (users[i].email == inputEmail.value) {
                userExist = true
            }
        }

        if (userExist == true) {
            strError += "\nEmail já existente!"
        }

        // 3. Criar o utilizador
        if (strError == "") {
            let inputName = document.getElementById("inputName")
            let newUser = new User(inputName.value, inputEmail.value, inputPassword1.value, 2)
            // 4. Adicionar ao array
            users.push(newUser)
            userId = newUser.id
            localStorage.setItem("users", JSON.stringify(users));

            // 5. Alerta de sucesso!
            alert("Registo efetuado com sucesso!!")
            // 6. Fechar a modal
            $('#registoModal').modal('hide')
            $('#login-modal').modal('hide')

            window.location.replace("admin.html");

        } else {
            alert(strError)
            frmRegister.reset()
            inputName.focus()
        }
        event.preventDefault()
    })
}