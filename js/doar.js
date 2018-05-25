
window.onload = function () {
	document.getElementById("formdoar").onsubmit = function (e) {
		e.preventDefault();



		let fnome = document.getElementById("fnome").value;
		let fcapa = document.getElementById("fcapa").value;
		let fdescricao = document.getElementById("fdescricao").value;
		let fautores = document.getElementById("fautores").value;
		let fdata = document.getElementById("fdata").value;
		let fgenero = document.getElementById("fgenero").value;
		let ftag = document.getElementById("ftag").value;
		let feditora = document.getElementById("feditora").value;
		let fpaginas = document.getElementById("fpaginas").value;
		let festado = document.getElementById("festado").value;
		let fnomedoador = document.getElementById("fnomedoador").value;
		let fdataDoacao = document.getElementById("fdataDoacao").value;
		let fcodigo = document.getElementById("fcodigo").value;
		//console.log("Doar")




		let livro = new Livro(fnome, fcapa, fdescricao, fautores, fdata, fgenero, ftag, feditora, fpaginas, festado, fnomedoador, fdataDoacao, fcodigo)
		livros.push(livro)
		localStorage.setItem("livros", JSON.stringify(livros))

	
console.log(livros)


	}
}

