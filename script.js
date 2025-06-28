
function calcular() {
  const peso = parseFloat(document.getElementById("peso").value);
  const teor = document.getElementById("teor").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(peso) || peso <= 0) {
    resultado.innerText = "Informe um peso válido.";
    return;
  }

  const teorMap = {
    "24": 1.00,
    "22": 0.89,
    "18": 0.69,
    "14": 0.40,
    "10": 0.12
  };

  const precoGramaComDesagio = 490; // Valor fixo já com deságio de 18%

  const valorFinal = peso * teorMap[teor] * precoGramaComDesagio;
  resultado.innerText = `Valor estimado: R$ ${valorFinal.toFixed(2).replace('.', ',')}`;
}
