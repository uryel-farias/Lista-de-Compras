let listaDeItens = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");

form.addEventListener("submit", function(evento){
    evento.preventDefault();
})

function salvarItem() {
    const comprasItem = itensInput.value;

    listaDeItens.push ({
        valor: comprasItem
    })


}