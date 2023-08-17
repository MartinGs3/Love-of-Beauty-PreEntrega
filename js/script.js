//menu hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

function clearText() {
    var textarea = document.getElementById("consulta");
    if (textarea.value === "Escribe aquí...") {
        textarea.value = "";
    }
}