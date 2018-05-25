console.log(localStorage.getItem("livros"))
let livros = []
let livroId = 0

class Livro {

    constructor(nome, capa, descricao, autores,data,genero,tag,editora,paginas,estado,nomedoador,dataDoacao,codigo) {
        this._id = Livro.getLastId() + 1
        this.nome = nome
        this.capa = capa
        this.descricao= descricao
        this.autores = autores
        this.data = data
        this.genero =genero
        this.tag = tag
        this.editora =editora
        this.paginas= paginas
        this.estado = estado
        this.nomedoador = nomedoador
        this.dataDoacao = dataDoacao
        this.codigo= codigo
        
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
        this._tag= novoTag
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
        this._nomedoador= novoNomedoador
    }

    // Propriedade Data da doação
    get dataDoacao() {
        return this._dataDoacao
    }

    set dataDoacao(novoDataDoacao) {
        this._dataDoacao= novoDataDoacao
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
        if (livros.length != 0) {
            lastId = livros[livros.length - 1].id
        }
        return lastId
    }

}

