window.onload = function () {

    if (localStorage.getItem("libraries")) {


        libraries = JSON.parse(localStorage.getItem("libraries"))
        //console.log(localStorage.length)
        //alert(libraries.length)

    }


    //Formulário Bibilioteca
    let formBiblio = document.getElementById("formbiblio")

    let fbutBiblio = document.getElementById("fbutBiblio")

    let fFreguesia = document.getElementById("ffreguesia")
    let fMorada = document.getElementById("fmorada")
    let fCapacidade = document.getElementById("fcap")

    let tblBiblio = document.getElementById("divBiblio")


    renderTableBiblio()
    fbutBiblio.addEventListener("click", function () {

        renderTableBiblio()

    })

    //Adicionar um nova biblioteca
    formBiblio.addEventListener("submit", function () {

        let strError = ""

        //Itera sobre o array e verifica se existe alguma biblioteca
        for (var i = 0; i < libraries.length; i++) {
            if (libraries[i].morada == fMorada.value) {
                strError += "Já existe uma biblioteca com a morada selecionada!"
            }
        }

        if (strError == "") {

            let newBiblio = new library(fFreguesia.value, fMorada.value, fCapacidade.value)
            libraries.push(newBiblio)

            localStorage.removeItem("libraries")

            localStorage.setItem("libraries", JSON.stringify(libraries))

            renderTableBiblio()

            event.preventDefault()

        } else {

            alert(strError)

            renderTableBiblio()
            event.preventDefault()
        }

    })

    //Render tabela
    function renderTableBiblio() {

        tblBiblio.innerHTML = ""

        let strHTML = `<table id='tabelaBiblio' style='width: 100%; border: 1px solid'>
        <tr>
        <th>Freguesia</th>
        <th>Morada</th>
        <th>Capacidade</th>
        <th>Actions</th>
        </tr>`



        for (let i = 0; i < libraries.length; i++) {
            strHTML += `<tr><td>${libraries[i]._freguesia}</td>
                <td>${libraries[i]._morada}</td>
                <td>${libraries[i]._capacidade}</td>
                <td>
                <button class='remove' style='background-color: lightcoral'><a id='${libraries[i]._id}'>
                <i class='fas fa-trash-alt'></i></a></button>
                </td> 
            </tr>`
        }
        strHTML += '</table>'

        tblBiblio.innerHTML += strHTML

        let btnRemove = document.getElementsByClassName("remove")
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                let rowId = btnRemove[i].firstChild.getAttribute("id")
                removebiblioById(rowId)
                renderTableBiblio()
            })
        }
    }

    function removebiblioById(id) {
        for (let i = 0; i < libraries.length; i++) {
            if (libraries[i]._id == id) {
                libraries.splice(i, 1)
            }
        }

        localStorage.removeItem("libraries")

        localStorage.setItem("libraries", JSON.stringify(libraries))

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