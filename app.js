function criptografar() {
    const texto = document.getElementById('texto').value.toLowerCase();
    const resultado = texto.replace(/[aeiou]/g, function (match) {
        switch (match) {
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'a': return 'ai';
            case 'o': return 'ober';
            case 'u': return 'ufat';
            default: return match;
        }
    });
    exibirResultado(resultado);
}

function descriptografar() {
    const texto = document.getElementById('texto').value.toLowerCase();
    const resultado = texto.replace(/enter|imes|ai|ober|ufat/g, function (match) {
        switch (match) {
            case 'enter': return 'e';
            case 'imes': return 'i';
            case 'ai': return 'a';
            case 'ober': return 'o';
            case 'ufat': return 'u';
            default: return match;
        }
    });
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const resultadoTextArea = document.getElementById('resultado');
    const imagem = document.getElementById('imagem');

    if (resultado) {
        resultadoTextArea.value = resultado;
        resultadoTextArea.style.display = 'block';
        imagem.style.display = 'none';
    } else {
        resultadoTextArea.style.display = 'none';
        imagem.style.display = 'block';
    }
}

function copiarTexto() {
    const resultadoTextArea = document.getElementById('resultado');
    const imagem = document.getElementById('imagem');
    resultadoTextArea.select();
    navigator.clipboard.writeText(resultadoTextArea.value).then(function () {
        alert('Texto copiado para area de transferência!');

        resultadoTextArea.style.display = 'none';
        if (resultadoTextArea.value) {
            imagem.style.display = 'block';
        }

        document.getElementById('texto').value = '';
        resultadoTextArea.value = '';
    }).catch(function (err) {
        alert('Erro ao copiar texto.' + err);
    });
}