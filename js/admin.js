window.onload = function () {
    // document.getElementById('requisitar').addEventListener("click", function () {
    //     localStorage.setItem("bookid", id)
    //     window.location.href = "./livros.html"
    // });


    //lista dos livros
    renderListlivro();
    function renderListlivro() {
        var lstLivros = document.getElementById("listaLivros")
        console.log(lstLivros)
        if (lstLivros) {
            lstLivros.innerHTML = ""

            let strHTML = ''
            console.log(livros)
            for (let i = 0; i < livros.length; i++) {

                strHTML += `<div class="col-sm-4"><div class="col-sm-12" style="margin-top: 3%">
                <div class="col-sm-7 text-center">
                    <img src=${livros[i]._capa} alt="Norway" style="width:178px; height:270px;">
                </div>

                <div class="col-sm-5 text-left">
                    <h3 id="bookname">
                        <b>${livros[i]._nome}</b>
                    </h3>
                    <h4 id="bookauthor">${livros[i]._autores}</h4>
                    <button id="requisitar"><a href="./livros.html"> ver mais </a></button>
                    
                </div>
            </div></div>`


            }


            lstLivros.innerHTML = strHTML


        }

    }

    renderCategories()
    function renderCategories() {
        console.log(categories)
        var fgenero = document.getElementById("fgenero")
        if (fgenero) {
            fgenero.innerHTML = ""
            let strHTML = "<option value=null>Categorias</option>"
            for (let i = 0; i < categories.length; i++) {
                strHTML += '<option value=' + categories[i]._categoryName + '>' + categories[i]._categoryName + '</option>'
            }
            fgenero.innerHTML = strHTML
        }
    }

    renderBibli()
    function renderBibli() {
        var fcodigo = document.getElementById("fcodigo")
        if (fcodigo) {
            fcodigo.innerHTML = ""
            let strHTML = "<option value=null>Bibliotecas</option>"
            for (let i = 0; i < libraries.length; i++) {
                strHTML += '<option value=' + libraries[i]._id + '>' + libraries[i]._freguesia + '</option>'
            }
            fcodigo.innerHTML = strHTML
        }
    }

    document.getElementById("fgenero").addEventListener("change", fbutFiltrar);
    document.getElementById("fcodigo").addEventListener("change", fbutFiltrar);

    var fbutFiltrar = document.getElementById("fbutFiltrar")
    fbutFiltrar.addEventListener("click", function () {

        var lstLivros = document.getElementById("listaLivros")

        var fgenero = document.getElementById("fgenero")
        var genero = fgenero.options[fgenero.selectedIndex].value
        var fcodigo = document.getElementById("fcodigo")
        var biblioteca = fcodigo.options[fcodigo.selectedIndex].value
        let strHTML = ''
        console.log(genero, biblioteca)
        for (let i = 0; i < livros.length; i++) {

            if (genero != 'null') {
                console.log(genero, livros[i]._genero)
                if (genero == livros[i]._genero) {
                    if (biblioteca != 'null') {
                        if (biblioteca == livros[i]._codigo) {
                            strHTML += `<div class="col-sm-4"><div class="col-sm-12" style="margin-top: 3%">
                    <div class="col-sm-7 text-center">
                        <img src=${livros[i]._capa} alt="Norway" style="width:178px; height:270px;">
                    </div>
    
                    <div class="col-sm-5 text-left">
                        <h3 id="bookname">
                            <b>${livros[i]._nome}</b>
                        </h3>
                        <h4 id="bookauthor">${livros[i]._autores}</h4>
                        
                    </div>
                    </div>
                </div>`
                        }
                    }
                    else {
                        strHTML += `<div class="col-sm-4"><div class="col-sm-12" style="margin-top: 3%">
                    <div class="col-sm-7 text-center">
                        <img src=${livros[i]._capa} alt="Norway" style="width:178px; height:270px;">
                    </div>
    
                    <div class="col-sm-5 text-left">
                        <h3 id="bookname">
                            <b>${livros[i]._nome}</b>
                        </h3>
                        <h4 id="bookauthor">${livros[i]._autores}</h4>
                        
                    </div>
                    </div>
                </div>`

                    }
                }
            }
            else if (biblioteca != 'null') {
                if (biblioteca == livros[i]._codigo) {
                    strHTML += `<div class="col-sm-4"><div class="col-sm-12" style="margin-top: 3%">
                    <div class="col-sm-7 text-center">
                        <img src=${livros[i]._capa} alt="Norway" style="width:178px; height:270px;">
                    </div>
    
                    <div class="col-sm-5 text-left">
                        <h3 id="bookname">
                            <b>${livros[i]._nome}</b>
                        </h3>
                        <h4 id="bookauthor">${livros[i]._autores}</h4>
                        
                    </div>
                    </div>
                </div>`
                }
            }
            if (genero == 'null' && biblioteca == 'null') {
                console.log("OI")
                strHTML += `<div class="col-sm-4"><div class="col-sm-12" style="margin-top: 3%">
                    <div class="col-sm-7 text-center">
                        <img src=${livros[i]._capa} alt="Norway" style="width:178px; height:270px;">
                    </div>
    
                    <div class="col-sm-5 text-left">
                        <h3 id="bookname">
                            <b>${livros[i]._nome}</b>
                        </h3>
                        <h4 id="bookauthor">${livros[i]._autores}</h4>
                        
                    </div>
                    </div>
                </div>`
            }
        }

        lstLivros.innerHTML = strHTML



    })
      var fbutOrdenar = document.getElementById("fbutOrdenar")
    fbutOrdenar.addEventListener("click", function () {
        var lstLivros = document.getElementById("listaLivros")
        let strHTML = ''
        livros.sort(function(a,b) {return (a._nome > b._nome) ? 1 : ((b._nome > a._nome) ? -1 : 0);} );
        console.log(livros)
        for (let i = 0; i < livros.length; i++) {
           
            strHTML += `<div class="col-sm-4"><div class="col-sm-12" style="margin-top: 3%">
                    <div class="col-sm-7 text-center">
                        <img src=${livros[i]._capa} alt="Norway" style="width:178px; height:270px;">
                    </div>
    
                    <div class="col-sm-5 text-left">
                        <h3 id="bookname">
                            <b>${livros[i]._nome}</b>
                        </h3>
                        <h4 id="bookauthor">${livros[i]._autores}</h4>
                    </div>
                    </div>
                </div>`
        }
        lstLivros.innerHTML = strHTML
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
