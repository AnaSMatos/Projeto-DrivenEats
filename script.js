let prato;
let bebida;
let sobremesa;

let precoPrato;
let precoBebida;
let precoSobremesa;


//botao finalizar

function finalizar(){
    if(prato != undefined && bebida != undefined && sobremesa != undefined){
        document.getElementById("desabilitado").style.display = "none";
        document.getElementById("habilitado").style.display = "block";
    }
}

//Pratos

function EscolherHamburguer(){
    //selecionar
    let icone = document.querySelector("#hamburguer");
    icone.classList.add("selecionado");
    //tirar selecao das outras opcoes
    icone = document.querySelector("#pizza");
    icone.classList.remove("selecionado");
    icone = document.querySelector("#frango");
    icone.classList.remove("selecionado");
    //add nome do prato
    prato = "Hamburguer";
    //add preço do prato
    precoPrato = 20.00;

    finalizar();
}

function EscolherPizza(){
    //selecionar
    let icone = document.querySelector("#pizza");
    icone.classList.add("selecionado");
    //tirar selecao das outras opcoes
    icone = document.querySelector("#hamburguer");
    icone.classList.remove("selecionado");
    icone = document.querySelector("#frango");
    icone.classList.remove("selecionado");
    //add nome do prato
    prato = "Pizza";
    //add preço do prato
    precoPrato = 32.50;

    finalizar();
}

function EscolherFrango(){
    //selecionar
    let icone = document.querySelector("#frango");
    icone.classList.add("selecionado");
    //tirar selecao das outras opcoes
    icone = document.querySelector("#pizza");
    icone.classList.remove("selecionado");
    icone = document.querySelector("#hamburguer");
    icone.classList.remove("selecionado");
    //add nome do prato
    prato = "Frango Yin Yang"
    //add preço do prato
    precoPrato = 14.90

    finalizar();
}

//Bebidas

function EscolherCoca(){
    //selecionar
    document.getElementById("coca").style.border = "5px solid #32B72F";
    let icone = document.querySelector("#coca")
    icone.classList.add("selecionado")
    //tirar selecao das outras opcoes
    document.getElementById("guarana").style.border = "5px solid white";
    icone = document.querySelector("#guarana")
    icone.classList.remove("selecionado")
    document.getElementById("pepsi").style.border = "5px solid white";
    icone = document.querySelector("#pepsi")
    icone.classList.remove("selecionado")
    //add nome do prato
    bebida = "Coquinha gelada"
    //add preço do prato
    precoBebida = 5.00

    finalizar();
}

function EscolherGuarana(){
    //selecionar
    document.getElementById("guarana").style.border = "5px solid #32B72F";
    let icone = document.querySelector("#guarana")
    icone.classList.add("selecionado")
    //tirar selecao das outras opcoes
    document.getElementById("coca").style.border = "5px solid white";
    icone = document.querySelector("#coca")
    icone.classList.remove("selecionado")
    document.getElementById("pepsi").style.border = "5px solid white";
    icone = document.querySelector("#pepsi")
    icone.classList.remove("selecionado")
    //add nome do prato
    bebida = "Guaraná"
    //add preço do prato
    precoBebida = 4.90

    finalizar();
}

function EscolherPepsi(){
    //selecionar
    document.getElementById("pepsi").style.border = "5px solid #32B72F";
    let icone = document.querySelector("#pepsi")
    icone.classList.add("selecionado")
    //tirar selecao das outras opcoes
    document.getElementById("guarana").style.border = "5px solid white";
    icone = document.querySelector("#guarana")
    icone.classList.remove("selecionado")
    document.getElementById("coca").style.border = "5px solid white";
    icone = document.querySelector("#coca")
    icone.classList.remove("selecionado")
    //add nome do prato
    bebida = "Pepsi"
    //add preço do prato
    precoBebida = 4.50

    finalizar();
}


//Sobremesas

function EscolherPudim(){
    //selecionar
    document.getElementById("pudim").style.border = "5px solid #32B72F";
    let icone = document.querySelector("#pudim")
    icone.classList.add("selecionado")
    //tirar selecao das outras opcoes
    document.getElementById("sundae").style.border = "5px solid white";
    icone = document.querySelector("#sundae")
    icone.classList.remove("selecionado")
    document.getElementById("torta").style.border = "5px solid white";
    icone = document.querySelector("#torta")
    icone.classList.remove("selecionado")
    //add nome do prato
    sobremesa = "Pudim"
    //add preço do prato
    precoSobremesa = 7.90

    finalizar();
}


function EscolherSundae(){
    //selecionar
    document.getElementById("sundae").style.border = "5px solid #32B72F";
    let icone = document.querySelector("#sundae")
    icone.classList.add("selecionado")
    //tirar selecao das outras opcoes
    document.getElementById("pudim").style.border = "5px solid white";
    icone = document.querySelector("#pudim")
    icone.classList.remove("selecionado")
    document.getElementById("torta").style.border = "5px solid white";
    icone = document.querySelector("#torta")
    icone.classList.remove("selecionado")
    //add nome do prato
    sobremesa = "Sundae"
    //add preço do prato
    precoSobremesa = 9.90

    finalizar();
}


function EscolherTorta(){
    //selecionar
    document.getElementById("torta").style.border = "5px solid #32B72F";
    let icone = document.querySelector("#torta")
    icone.classList.add("selecionado")
    //tirar selecao das outras opcoes
    document.getElementById("sundae").style.border = "5px solid white";
    icone = document.querySelector("#sundae")
    icone.classList.remove("selecionado")
    document.getElementById("pudim").style.border = "5px solid white";
    icone = document.querySelector("#pudim")
    icone.classList.remove("selecionado")
    //add nome do prato
    sobremesa = "Torta de limão"
    //add preço do prato
    precoSobremesa = 12.50

    finalizar();
}

//Confirmação do pedido


function Confirmar(){
    document.getElementById("confirmar-pedido").style.display = "flex"
}

function Cancelar(){
    document.getElementById("confirmar-pedido").style.display = "none"
}
