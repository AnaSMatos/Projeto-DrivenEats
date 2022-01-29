let prato;
let bebida;
let sobremesa;

let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let valorTotal;


//botao finalizar

function finalizar(){
    if(prato != undefined && bebida != undefined && sobremesa != undefined){
        document.getElementById("desabilitado").style.display = "none";
        document.getElementById("habilitado").style.display = "block";
    }
}

//Selecionar

//Pratos

function selecionarPrato(classePrato, nomePrato, preco){
    //retirar caso haja algum
    const selecionado = document.querySelector(".prato .selecionado");
    if(selecionado !== null) { 
        selecionado.classList.remove("selecionado");
    }
    //variaveis
    prato = nomePrato;
    precoPrato = preco;
    //adicionar estilo
    const selecionar = document.querySelector("#" + classePrato);
    selecionar.classList.add("selecionado");
    //mudar innerhtml caixa de confirmação
    const item1 = document.querySelector(".item1");
    item1.innerHTML = nomePrato;
    const preco1 = document.querySelector(".preco1");
    preco1.innerHTML = "R$" + (preco.toFixed(2));
    finalizar();
}

//Bebidas

function selecionarBebida(classeBebida, nomeBebida, preco){
    //retirar caso haja algum
    const selecionado = document.querySelector(".bebida .selecionado");
    if(selecionado !== null) { 
        selecionado.classList.remove("selecionado");
    }
    //variaveis
    bebida = nomeBebida;
    precoBebida = preco
    //adicionar estilo
    const selecionar = document.querySelector("#" + classeBebida);
    selecionar.classList.add("selecionado");
    //mudar innerhtml caixa de confirmação
    const item2 = document.querySelector(".item2");
    item2.innerHTML = nomeBebida;
    const preco2 = document.querySelector(".preco2");
    preco2.innerHTML = "R$" + (preco.toFixed(2));
    finalizar();
}

//Sobremesas

function selecionarSobremesa(classeSobremesa, nomeSobremesa, preco){
    //retirar caso haja algum
    const selecionado = document.querySelector(".sobremesa .selecionado");
    if(selecionado !== null) { 
        selecionado.classList.remove("selecionado");
    }
    //variaveis
    sobremesa = nomeSobremesa;
    precoSobremesa = preco
    //adicionar estilo
    const selecionar = document.querySelector("#" + classeSobremesa);
    selecionar.classList.add("selecionado");
    //mudar innerhtml caixa de confirmação
    const item3 = document.querySelector(".item3");
    item3.innerHTML = nomeSobremesa;
    const preco3= document.querySelector(".preco3");
    preco3.innerHTML = "R$" + (preco.toFixed(2));
    finalizar();
}

//Confirmação do pedido

function Confirmar(){
    valorTotal = precoPrato + precoBebida + precoSobremesa;
    const total = document.querySelector(".preco-total");
    total.innerHTML = "R$" + (valorTotal.toFixed(2))
    
    document.getElementById("confirmar-pedido").style.display = "flex"
}

function Finalizar(){
    let nome = prompt("Digite seu nome")
    let endereco = prompt("Digite seu endereço")

    let mensagem = "Olá, gostaria de fazer o pedido:  -Prato: " + prato + "  -Bebida: " + bebida + "  -Sobremesa: " + sobremesa + "  Total: R$ " + (valorTotal.toFixed(2)) + "  Nome: " + nome + "  Endereço: " + endereco;
    window.open("https://wa.me/5561981864151?text=" + encodeURIComponent(mensagem))
}

function Cancelar(){
    document.getElementById("confirmar-pedido").style.display = "none"
}
