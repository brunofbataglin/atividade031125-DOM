





function verificarCheck(){
    var x = document.getElementById("urgente").checked
    return x
}


/*Cada nota a ser inserida seguirá o padrão de cores: Azul, Verde, Roxo.   */

function pegarnota(){
    var nota = document.getElementById("novanota").value
    var urgente = verificarCheck()
    if(urgente){
        var novo = document.createElement("li")
        novo.innerText=nota
        novo.id="paragrafo"
        var notasUrgentes = document.getElementById("notasUrgentes")
        notasUrgentes.appendChild(novo)
    }
    else{
        var novo = document.createElement("li")
        novo.innerText=nota
        novo.id="paragrafo"
        var notasNaoUrgentes = document.getElementById("notasNaoUrgentes")
        notasNaoUrgentes.appendChild(novo)
    }
    
}

function removerUltima(){
    var urg = verificarCheck()
    if(urg){
        if(paragrafo){
        var paragrafo = document.getElementById("paragrafo")
        paragrafo.remove();
    }
    else{
        alert("Não há texto para remover")
    }
    }
    else{
        if(paragrafo){
        var paragrafo = document.getElementById("paragrafo")
        paragrafo.remove();
    }
    else{
        alert("Não há texto para remover")
    }
    }
    
}

function removerTodoTexto(){
    var urgente = verificarCheck()
    if(urgente){
        var urg = document.getElementById("notasUrgentes")
        urg.innerHTML=""
    }
    else{
        var urg = document.getElementById("notasNaoUrgentes")
        urg.innerHTML=""
    }
}





function colorir(){
    var itens = document.querySelectorAll("p")
    for(i=0;i<itens.length;i++){
        itens[i].style.color="green"
    }
}















