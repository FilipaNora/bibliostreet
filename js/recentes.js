window.onload = function () {

    //lista dos livros
    renderListlivro();
    function renderListlivro() {
        var lstLivros = document.getElementById("recentes")
        console.log(lstLivros)
        if (lstLivros) {
            lstLivros.innerHTML = ""

            let strHTML = ''
            console.log(livros)
            for (let i = 0; i < livros.length; i++) {

                strHTML += `<div class="col-sm-4">
                <div class="w3-card-4">
                    <img src=${livros[i]._capa}alt="Norway" style="width:168px">
                    <div class="w3-container w3-center">
                        <h4 class="card-title">${livros[i]._autores}</h4>
                        
                    </div>
                </div>
            </div>`


            }


            lstLivros.innerHTML = strHTML


        }

    }
}