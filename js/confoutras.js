window.onload = function () {

    if (localStorage.getItem("fines")) {


        fines = JSON.parse(localStorage.getItem("fines"))
        console.log(localStorage.length)
        //alert(fines.length)

    }

    //Formulário Outras configurações
    let fbutOutras = document.getElementById("fbutOutras")

    let fdias = document.getElementById("fdias")
    let fmulta = document.getElementById("fmulta")
    let flimite = document.getElementById("flimite")

    fbutOutras.addEventListener("click", function () {

        let newOutra = new mulct(fdias.value, fmulta.value, flimite.value)
        fines.push(newOutra)
        console.log(fines)

        localStorage.setItem("fines", JSON.stringify(fines))

        //renderTableBiblio()
        alert("Multa configurada!")

        event.preventDefault()

    })

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