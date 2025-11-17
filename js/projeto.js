
var contagem1=1, contagem2=1

function verificarCheck(){
    var x = document.getElementById("urgente").checked
    return x
}

function pegarCheck(){
    var urg = verificarCheck();

    if(urg){
        var container = document.getElementById("notasUrgentes")
    }
    else{
        var container = document.getElementById("notasNaoUrgentes")
    }
    return container
}


/*Cada nota a ser inserida seguirá o padrão de cores: Azul, Verde, Roxo.   */

function pegarnota(){

    var nota = document.getElementById("novanota").value
    if(nota == ""){
        return;
    }

    var urgente = verificarCheck()
    
    if(urgente){
        var novo = document.createElement("li")
        novo.innerText=nota

        if (contagem1 == 1){
            novo.id="azul"
    }
        if (contagem1 == 2){
            novo.id="verde"
    }
        if (contagem1 == 3){
            novo.id="roxo"
            contagem1=0
    }
    contagem1++

        var notasUrgentes = document.getElementById("notasUrgentes")
        notasUrgentes.appendChild(novo)
        
    }

    else{
        var novo = document.createElement("li")
        novo.innerText=nota

        if (contagem2 == 1){
            novo.id="azul"
    }
        if (contagem2 == 2){
            novo.id="verde"
    }
        if (contagem2 == 3){
            novo.id="roxo"
            contagem2=0
    }
    contagem2++

        var notasNaoUrgentes = document.getElementById("notasNaoUrgentes")
        notasNaoUrgentes.appendChild(novo)

    }

    document.getElementById("novanota").value = "";
    
    
}

function removerUltima(){

    var checagem = verificarCheck()
    var container = pegarCheck()

    var ultimo = container.lastElementChild;
    if(ultimo){
        var idCor = ultimo.id
        
        if(idCor == "roxo" && checagem){
            contagem1=3
        }
         else if(idCor == "verde" && checagem){
            contagem1=2
        }
        else if(idCor == "azul" && checagem){
            contagem1=1
        }

        else if(idCor == "roxo"){
            contagem2=3
        }
        else if(idCor == "verde"){
            contagem2=2
        }
        else if(idCor == "azul"){
            contagem2=1
        }
            
        container.removeChild(ultimo);
    } else {
        alert("Não há notas para remover");
    }
}

    



function removerTodoTexto(){
    var urgente = verificarCheck()
    if(urgente){
        var urg = document.getElementById("notasUrgentes")
        urg.innerHTML=""
        contagem1=1
    }
    else{
        var urg = document.getElementById("notasNaoUrgentes")
        urg.innerHTML=""
        contagem2=1
    }
}


















