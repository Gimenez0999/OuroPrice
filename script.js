
async function calcular() {
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

  try {
    resultado.innerText = "Calculando...";

    // Obter cotação do ouro em USD/oz
    const ouroResponse = await fetch("https://api.metals.live/v1/spot/gold");
    const ouroData = await ouroResponse.json();
    const usdPorOnca = ouroData[0][1];

    // Obter cotação do dólar em BRL
    const dolarResponse = await fetch("https://api.metals.live/v1/spot/usdbrl");
    const dolarData = await dolarResponse.json();
    const cotacaoDolar = dolarData[0][1];

    // Conversão para BRL/g com deságio de 18%
    const usdPorGrama = usdPorOnca / 31.1035;
    const brlPorGrama = usdPorGrama * cotacaoDolar * 0.82;

    const valorFinal = peso * teorMap[teor] * brlPorGrama;
    resultado.innerText = `Valor estimado: R$ ${valorFinal.toFixed(2).replace('.', ',')}`;
  } catch (error) {
    resultado.innerText = "Erro ao obter a cotação.";
  }
}
