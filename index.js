const tipos = ["♥", "♠", "♣", "♦"];
const valores = ["As","2","3","4","5","6","7","8","9","10","J","Q","K"];

function numeroAleatorio(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function tarjetaAleatoria() {
  const tipo = numeroAleatorio(tipos);
  const valor = numeroAleatorio(valores);
  const color = tipo === "♥" || tipo === "♦" ? "red" : "black";

  document.getElementById("top-tipo").innerHTML = tipo;
  document.getElementById("card-value").textContent = valor;
  document.getElementById("bottom-tipo").innerHTML = tipo;
  document.getElementById("top-tipo").style.color = color;
  document.getElementById("bottom-tipo").style.color = color;

}

document.addEventListener("DOMContentLoaded", tarjetaAleatoria());

