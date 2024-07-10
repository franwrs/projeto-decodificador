function criptografar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = inputText.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = outputText;
    document.querySelector(".caixa__digitar").value='';
    document.querySelector(".retangulo").setAttribute("style","display:none;");
    document.querySelector(".retangulo__resposta").setAttribute("style","display:flex");
}

function descriptografar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = inputText.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = outputText;
    document.querySelector(".caixa__digitar").value='';
    document.querySelector(".retangulo").setAttribute("style","display:none;");
    document.querySelector(".retangulo__resposta").setAttribute("style","display:flex");
}

function copiar() {
    let outputText = document.getElementById('outputText').value;
    navigator.clipboard.writeText(outputText);
    alert("Copiado para a área de transferência.");
}