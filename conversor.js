const valor = prompt("Qual comprimento em metros você quer conveter?");
const metros = parseFloat(valor);

const medidas = prompt(
  "Em qual medida você quer converter?\na) Milímetro (mm)\nb) Centímetro (cm)\nc) Decímetro (dm)\nd) Decâmetro (dam)\ne) Hectômetro (hm)\nf) Quilômetro (km)"
);

switch (medidas) {
  case "a":
    alert("O resultado é " + metros * 1000 + "mm");
    break;
  case "b":
    alert("O resultado é " + metros * 100 + "cm");
    break;
  case "c":
    alert("O resultado é " + metros * 10 + "dm");
    break;
  case "d":
    alert("O resultado é " + metros * 0.1 + "dam");
    break;
  case "e":
    alert("O resultado é " + metros * 0.01 + "hm");
    break;
  case "f":
    alert("O resultado é " + metros * 0.001 + "km");
    break;
  default:
    alert("Opção inválida");
}
