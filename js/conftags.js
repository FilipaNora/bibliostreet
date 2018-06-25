window.onload = function () {



    if (localStorage.getItem("tags")) {

        tags = JSON.parse(localStorage.getItem("tags"))

    }


    //Formulário Tag
    let formTag = document.getElementById("formtag")

    let fbutTag = document.getElementById("ffbutTag")

    let ftag = document.getElementById("ftag")

    let tblTag = document.getElementById("divTag")

    renderTabletag()
    fbutTag.addEventListener("click", function () {

        renderTabletag()

    })


    formTag.addEventListener("submit", function () {

        let strError = ""

        //Iterar sobre o array para verificar se existe a tag
        for (var i = 0; i < tags.length; i++) {
            if (tags[i].tagName == ftag.value) {
                strError += "Esta tag já existe!"
            }
        }

        if (strError == "") {

            let newtag = new tag(ftag.value)
            tags.push(newtag)

            localStorage.removeItem("tags")

            localStorage.setItem("tags", JSON.stringify(tags))

            renderTabletag()

            event.preventDefault()

        } else {

            alert(strError)

            event.preventDefault()
        }


    })

    function renderTabletag() {

        tblTag.innerHTML = ""

        let strHTML = `<table id='tabelatag' style='width: 100%; border: 1px solid'>
            <tr>
            <th>Tags</th>
            <th>Actions</th>
            </tr>`


        for (let i = 0; i < tags.length; i++) {

            strHTML += `<tr><td>${tags[i]._tagName}</td>
                <td>
                <button class='remove' style='background-color: lightcoral'><a id='${tags[i]._id}'>
                <i class='fas fa-trash-alt'></i></a></button>
                </td> 
            </tr>`


        }
        strHTML += `</table>`

        tblTag.innerHTML += strHTML

        let btnRemove = document.getElementsByClassName("remove")
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                let rowId = btnRemove[i].firstChild.getAttribute("id")
                removetagByIdd(rowId)
                renderTabletag()
            })
        }
    }

    function removetagByIdd(id) {
        console.log("ID: " + id)
        for (let i = 0; i < tags.length; i++) {
            if (tags[i]._id == id) {
                tags.splice(i, 1)
            }
        }

        localStorage.removeItem("tags")

        localStorage.setItem("tags", JSON.stringify(tags))
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