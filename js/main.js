let users = []
//let userId = 0
let libraries = []
//console.log(localStorage.getItem("livros"))
let livros = []
let livroId = 0
let tags = []
let categories = []
let fines = []
let comments = []

//////////////////////////////////
//////////////////////////////////
//          USERS
//////////////////////////////////
//////////////////////////////////
class User {

    constructor(name, email, password, type, multa) {
        this._id = User.getLastId() + 1
        this.name = name
        this.email = email
        this.password = password
        this.type = type
        this.multa = multa
    }

    // Propriedade ID
    get id() {
        return this._id
    }

    // Propriedade NAME
    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName
    }

    // Propriedade EMAIL
    get email() {
        return this._email
    }

    set email(newEmail) {
        this._email = newEmail
    }

    // Propriedade PASSWORD
    get password() {
        return this._password
    }

    set password(newPassword) {
        this._password = newPassword
    }

    // Propriedade TIPO USER
    get type() {
        return this._type
    }

    set type(newType) {
        this._type = newType
    }

    // Propriedade MULTA
    get multa() {
        return this._multa
    }

    set multa(newMulta) {
        this._multa = newMulta
    }

    static getLastId() {
        let lastId = 0
        if (users.length != 0) {
            lastId = users[users.length - 1]._id
        }
        return lastId
    }

}

//////////////////////////////
//////////////////////////////
//       BIBLIOTECAS
//////////////////////////////
//////////////////////////////
class library {

    constructor(freguesia, morada, capacidade) {

        this._id = library.getLastId() + 1
        this.freguesia = freguesia
        this.morada = morada
        this.capacidade = capacidade

    }

    get id() {
        return this._id
    }

    get freguesia() {
        return this._freguesia
    }

    set freguesia(newFreguesia) {
        this._freguesia = newFreguesia
    }

    get morada() {
        return this._morada
    }

    set morada(newMorada) {
        this._morada = newMorada
    }

    get capacidade() {
        return this._capacidade
    }

    set capacidade(newCapacidade) {
        this._capacidade = newCapacidade
    }

    static getLastId() {
        let lastId = 0
        if (libraries.length != 0) {
            lastId = libraries[libraries.length - 1]._id
        }
        return lastId
    }

}

//////////////////////////////
//////////////////////////////
//        LIVROS
//////////////////////////////
//////////////////////////////
class Livro {

    constructor(nome, capa, descricao, autores, data, genero, tag, editora, paginas, estado, nomedoador, dataDoacao, codigo) {
        this._id = Livro.getLastId() + 1
        this.nome = nome
        this.capa = capa
        this.descricao = descricao
        this.autores = autores
        this.data = data
        this.genero = genero
        this.tag = tag
        this.editora = editora
        this.paginas = paginas
        this.estado = estado
        this.nomedoador = nomedoador
        this.dataDoacao = dataDoacao
        this.codigo = codigo

    }


    // Propriedade ID
    get id() {
        return this._id
    }

    // Propriedade NAME
    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome
    }

    // Propriedade Capa
    get capa() {
        return this._capa
    }

    set capa(novoCapa) {
        this._capa = novoCapa
    }

    // Propriedade Descrição
    get descricao() {
        return this._descricao
    }

    set descricao(novoDescricao) {
        this._descricao = novoDescricao
    }


    // Propriedade Autores
    get autores() {
        return this._autores
    }

    set autores(novoAutores) {
        this._autores = novoAutores
    }

    // Propriedade Data
    get data() {
        return this._data
    }

    set data(novodata) {
        this._data = novodata
    }

    // Propriedade Genero
    get genero() {
        return this._genero
    }

    set genero(novoGenero) {
        this._genero = novoGenero

    }


    // Propriedade Tag
    get tag() {
        return this._tag
    }

    set tag(novoTag) {
        this._tag = novoTag
    }

    // Propriedade Editora
    get editora() {
        return this._editora
    }

    set editora(novoEditora) {
        this._editora = novoEditora
    }

    // Propriedade Paginas
    get paginas() {
        return this._paginas
    }

    set paginas(novoPaginas) {
        this._paginas = novoPaginas
    }

    // Propriedade Estado
    get estado() {
        return this._estado
    }

    set estado(novoEstado) {
        this._estado = novoEstado

    }


    // Propriedade Nome do Doador
    get nomedoador() {
        return this._nomedoador
    }

    set nomedoador(novoNomedoador) {
        this._nomedoador = novoNomedoador
    }

    // Propriedade Data da doação
    get dataDoacao() {
        return this._dataDoacao
    }

    set dataDoacao(novoDataDoacao) {
        this._dataDoacao = novoDataDoacao
    }

    // Propriedade Código da Biblioteca
    get codigo() {
        return this._codigo
    }

    set codigo(novoCodigo) {
        this._codigo = novoCodigo
    }


    static getLastId() {
        let lastId = 0
        if (livros) {
            if (livros.length != 0) {
                lastId = livros[livros.length - 1]._id
            }
        }

        return lastId
    }

}

//////////////////////////////
//////////////////////////////
//          TAGS
//////////////////////////////
//////////////////////////////
class tag {

    constructor(tagName) {

        this._id = tag.getLastId() + 1
        this.tagName = tagName

    }

    get id() {
        return this._id
    }

    get tagName() {
        return this._tagName
    }

    set tagName(newtagName) {
        this._tagName = newtagName
    }

    static getLastId() {
        let lastId = 0
        if (tags.length != 0) {
            lastId = tags[tags.length - 1]._id
        }
        return lastId
    }

}

//////////////////////////////
//////////////////////////////
//        CATEGORIAS
//////////////////////////////
//////////////////////////////
class category {

    constructor(categoryName) {

        this._id = category.getLastId() + 1
        this.categoryName = categoryName

    }

    get id() {
        return this._id
    }

    get categoryName() {
        return this._categoryName
    }

    set categoryName(newcategoryName) {
        this._categoryName = newcategoryName
    }

    static getLastId() {
        let lastId = 0
        if (categories.length != 0) {
            lastId = categories[categories.length - 1]._id
        }
        return lastId
    }

}

//////////////////////////////
//////////////////////////////
//        MULTAS
//////////////////////////////
//////////////////////////////


class mulct {

    constructor(days, fineValue, limitMulct) {

        this._id = mulct.getLastId() + 1
        this.days = days
        this.fineValue = fineValue
        this.limitMulct = limitMulct

    }

    get id() {
        return this._id
    }

    get days() {
        return this._days
    }

    set days(newdays) {
        this._days = newdays
    }

    get fineValue() {
        return this._fineValue
    }

    set fineValue(newfineValue) {
        this._fineValue = newfineValue
    }

    get limitMulct() {
        return this._limitMulct
    }

    set limitMulct(newlimitMulct) {
        this._limitMulct = newlimitMulct
    }

    static getLastId() {
        let lastId = 0
        if (fines.length != 0) {
            lastId = fines[fines.length - 1]._id
        }
        console.log(lastId)
        return lastId
    }

}


//////////////////////////////////
//////////////////////////////////
//          COMENTÁRIOS
//////////////////////////////////
//////////////////////////////////
class comment {

    constructor(message, user_name, book_id) {

        this._id = comment.getLastId() + 1
        this.message = message
        this.user_name = user_name
        this.book_id = book_id
    }

    get id() {
        return this._id
    }

    get message() {
        return this._message
    }

    set message(newMessage) {
        this._message = newMessage
    }

    get user_name() {
        return this._user_name
    }

    set user_name(newUserName) {
        this._user_name = newUserName
    }

    get book_id() {
        return this._book_id
    }

    set book_id(newBookID) {
        this._book_id = newBookID
    }

    static getLastId() {
        let lastId = 0
        if (comments.length != 0) {
            lastId = comments[comments.length - 1]._id
        }
        return lastId
    }

}

if (localStorage.getItem("livros"))
    livros = JSON.parse(localStorage.getItem("livros"))
if (localStorage.getItem("categories"))
    categories = JSON.parse(localStorage.getItem("categories"))
if (localStorage.getItem("libraries"))
    libraries = JSON.parse(localStorage.getItem("libraries"))
if (localStorage.getItem("comments"))
    comments = JSON.parse(localStorage.getItem("comments"))

    
// var livro = new Livro("eed", "wedweugdwuke", "eiwhdwuked");
// livros.push(livro)


//////////////////////////////
//////////////////////////////
//        FILTROS
//////////////////////////////
//////////////////////////////


// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }



// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
