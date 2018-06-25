window.onload = function () {


    if (localStorage.getItem("categories")) {

        categories = JSON.parse(localStorage.getItem("categories"))

    }


    //Formulário Categoria
    let formCat = document.getElementById("formcat")

    let fbutCat = document.getElementById("fbutCat")
    let fbutGenero = document.getElementById("genero")

    let fCat = document.getElementById("fcat")
    let tblcategories = document.getElementById("divCat")


    renderTableCat()
    fbutCat.addEventListener("click", function () {

        renderTableCat()
        console.log("hi")
    })


    formCat.addEventListener("submit", function () {

        let strError = ""

        //Itera sobre o array e verifica se existe a categoria
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].categoryName == fCat.value) {
                strError += "Esta categoria já existe!"
            }
        }

        if (strError == "") {

            let newCat = new category(fCat.value)
            categories.push(newCat)

            localStorage.removeItem("categories")

            localStorage.setItem("categories", JSON.stringify(categories))

            renderTableCat()

            event.preventDefault()

        } else {

            alert(strError)

            renderTableCat()

            event.preventDefault()
        }


    })

    // Render Tabela
    function renderTableCat() {

        tblcategories.innerHTML = ""

        let strHTML = `<table id='tblCat' style='width: 100%; border: 1px solid'>
            <tr>
            <th>Categorias</th>
            <th>Actions</th>
            </tr>`



        for (let i = 0; i < categories.length; i++) {

            strHTML += `<tr><td>${categories[i]._categoryName}</td>
                <td>
                <button class='remove' style='background-color: lightcoral'><a id='${categories[i]._id}'>
                <i class='fas fa-trash-alt'></i></a></button>
                </td> 
            </tr>`


        }
        strHTML += `</table>`

        tblcategories.innerHTML += strHTML

        let btnRemove = document.getElementsByClassName("remove")
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                let rowId = btnRemove[i].firstChild.getAttribute("id")

                removecatById(rowId)
                renderTableCat()
            })
        }

    }

    function removecatById(id) {
        console.log("ID: " + id)
        for (let i = 0; i < categories.length; i++) {
            if (categories[i]._id == id) {
                categories.splice(i, 1)
            }
        }

        localStorage.removeItem("categories")

        localStorage.setItem("categories", JSON.stringify(categories))
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