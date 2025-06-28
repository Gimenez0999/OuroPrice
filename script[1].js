
async function calcular() {
  const peso = parseFloat(document.getElementById("peso").value);
  const teor = document.getElementById("teor").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(peso) || peso <= 0) {
    resultado.innerText = "Informe um peso válido.";
    return;
  }

  const valores = {
    "24": 1.00,
    "22": 0.89,
    "18": 0.69,
    "14": 0.40,
    "10": 0.12
  };

  try {
    const response = await fetch("https://api.metals.live/v1/spot/gold");
    const data = await response.json();
    const precoOuro24k = data[0][1] * 0.82; // Aplicando deságio de 18%

    const teorSelecionado = valores[teor];
    const valorFinal = precoOuro24k * peso * teorSelecionado;

    resultado.innerText = `R$ ${valorFinal.toFixed(2)}`;
  } catch (error) {
    resultado.innerText = "Erro ao obter a cotação.";
  }
}
