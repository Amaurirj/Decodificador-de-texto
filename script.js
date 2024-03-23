const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const btnCopiar = document.querySelector(".btn-copiar");

function btnEncriptar() {
  if (!checkTextArea(textArea.value)) {
    alert("Texto inválido");
    return;
  }
  const textoEncriptado = criptografar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}
function criptografar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ]; // usando Array

  stringEncriptada = stringEncriptada.toLowerCase(); // retorna a string sempre em letras minusculas
  stringEncriptada = stringEncriptada
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  //remove acentos e caracteres especiais de uma string

  for (let i = 0; i < matrizCodigo.length; i++) {
    // for(let i=0; - Usada para criar a variável de controle de loop
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringEncriptada;
}
function bntDesencriptar() {
  if (!checkTextArea(textArea.value)) {
    alert("Texto inválido");
    return;
  }
  const textoDesencriptado = descriptografar(textArea.value); //const - uso de para indicar uma variavel constante
  mensagem.value = textoDesencriptado;
  checkTextArea();
  textArea.value = "";
}
function descriptografar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ]; // let - usado para indicar uma variavel onde poderá haver mudanças.

  stringDesencriptada = stringDesencriptada.toLowerCase();
  stringDesencriptada = stringDesencriptada
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }

  return stringDesencriptada;
}
function copiarTexto() {
  // Funçãi utilizada para copiar o texto dentro de um navegador web.
  navigator.clipboard.writeText(mensagem.value).then(() => {
    // linha utilizada em copiar para área de trsnferencia.
    alert("Copiado para a área de tranferência"); // exibir pop-up na tela indicando o que foi copiado.
  });
}

function checkTextArea(texto) {
  const regex = /^[a-z]+$/;
  const valido = regex.test(texto);

  return valido;
}
