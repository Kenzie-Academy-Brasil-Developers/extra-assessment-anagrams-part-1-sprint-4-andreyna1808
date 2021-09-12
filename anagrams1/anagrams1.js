// VARIÁVEIS 
const button = document.getElementById("button");
button.addEventListener("click", function (){
    let texto = document.getElementById("input").value;
    let resultado = anagramas(texto);
    resposta(resultado)
});

function palavras(print) {
    return print.toLowerCase().split("").sort().join("").trim();
}

function anagramas(texto) {
    let output = []
    words.map( word => {
        if (palavras(word) === palavras(texto)){
            if (texto !== word) output.push(word)
        }

    })
    return(output)
}

function resposta(result) {
    let newElement = document.getElementById('resultado')
    newElement.innerHTML = result.join(', ')
    return document.body.appendChild(newElement)

}