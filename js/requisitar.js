window.onload = function () {
    console.log(123)

    var livro = JSON.parse(localStorage.getItem("verMaisLivro"))

    //lista dos livros
    renderReqlivros();
    function renderReqlivros() {
        var reqLivros = document.getElementById("requesitarLivro")
        console.log(reqLivros)
        if (reqLivros) {
            reqLivros.innerHTML = ""

            let strHTML = ''
            console.log(livros)

            // var livro;
            //             if (localStorage.getItem("bookid")) {
            //                 for (let i = 0; i < livros.length; i++) {
            //                     if (livros[i]._id == localStorage.getItem("bookid")) {
            //                         livro = livros[i]
            //                     }
            //                 }
            //             }



            strHTML += ` <div class="col-sm-3 text-center">
                <img id="image" src=${livro._capa} alt="Norway" style=" height:178px;">
            </div>

            <div class="col-sm-9 text-left">
                <h3 id="bookname">
                    <b>${livro._nome}</b>
                </h3>
                <h4 id="bookauthor">${livro._autores}</h4>
                <p id="demo"></p>
                <button id="requisitar" onclick="document.getElementById('comentarios').style.display = 'block'"> Requisitar </button>
            </div>
            <div class="col-sm-12" style="margin-top: 1%">
                <h4>
                    <b>DESCRIÇÃO</b>
                </h4>
                <h6 id="bookresume">${livro._descricao} </div>`





            reqLivros.innerHTML = strHTML


        }

    }
    renderComments();
    function renderComments() {

        var strHTML = ''

        for (var i = 0; i < comments.length; i++) {
            if (comments[i]._book_id == livro._id) {

                strHTML += `<div class="w3-panel w3-card">
                <p> ${comments[i]._message} </p>
                <h6 class="text-right">
                    <b>${comments[i]._user_name}</b>
                </h6>
            </div>`

            }
        }

        document.getElementById("listcoment").innerHTML = strHTML

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

function Comentar() {

    var livro = JSON.parse(localStorage.getItem("verMaisLivro"))

    var message = document.getElementById("comentario").value
    var user_name = localStorage.getItem("name")
    var book_id = livro._id;

    comments.push(new comment(message, user_name, book_id));
    localStorage.setItem("comments", JSON.stringify(comments));
    
    
    var strHTML = ''

        for (var i = 0; i < comments.length; i++) {
            if (comments[i]._book_id == livro._id) {

                strHTML += `<div class="w3-panel w3-card">
                <p> ${comments[i]._message} </p>
                <h6 class="text-right">
                    <b>${comments[i]._user_name}</b>
                </h6>
            </div>`

            }
        }

        document.getElementById("listcoment").innerHTML = strHTML

}

function Pontuar() {
    var txt;
    var pontuacao = parseInt(prompt("Por favor de a sua pontuação a este livro de 1 a 5"));
    if (pontuacao == 0 || pontuacao >= 6) {
        txt = "Pontuação não permitida";
    } else {
        txt = ((2.5 + pontuacao) / 2);//pontuação inicial igual para todos os livros 
    }
    document.getElementById("demo").innerHTML = txt;
}


