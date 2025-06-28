
function calcularValor() {
    const peso = parseFloat(document.getElementById("peso").value);
    const teor = document.getElementById("teor").value;
    const cotacaoOuro24k = 490; // valor fixo

    let valorBase = cotacaoOuro24k * (1 - 0.18); // deságio de 18%
    let fatorTeor = {
        "24k": 1.0,
        "22k": 0.89,
        "18k": 0.69,
        "14k": 0.40,
        "10k": 0.12
    }[teor];

    const resultado = peso * valorBase * fatorTeor;
    document.getElementById("resultado").innerText = "R$ " + resultado.toFixed(2);
}
