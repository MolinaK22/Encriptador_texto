const textoInput = document.getElementById('texto');
const encriptarButton = document.getElementById('encriptar');
const desencriptarButton = document.getElementById('desencriptar');
const encriptadoOutput = document.getElementById('encriptado');

encriptarButton.addEventListener('click', encriptar);
desencriptarButton.addEventListener('click', desencriptar);

function encriptar() {
	const texto = textoInput.value.toLowerCase();
	const encriptado = '';
	for (let i = 0; i < texto.length; i++) {
		const char = texto[i];
		if (char.match(/[a-z]/)) {
			const code = char.charCodeAt(0) - 97;
			const encriptadoCode = (code + 3) % 26 + 97;
			encriptado += String.fromCharCode(encriptadoCode);
		} else {
			encriptado += char;
		}
	}
	encriptadoOutput.value = encriptado;
}

function desencriptar() {
	const encriptado = encriptadoOutput.value;
	const desencriptado = '';
	for (let i = 0; i < encriptado.length; i++) {
		const char = encriptado[i];
		if (char.match(/[a-z]/)) {
			const code = char.charCodeAt(0) - 97;
			const desencriptadoCode = (code - 3 + 26) % 26 + 97;
			desencriptado += String.fromCharCode(desencriptadoCode);
		} else {
			desencriptado += char;
		}
	}
	encriptadoOutput.value = desencriptado;
}