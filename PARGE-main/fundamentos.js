function img01() {  
    var tipo = document.getElementById('botao1').type;

    if (tipo == 'reset') {
        document.getElementById('botao1').type = 'button';
        document.getElementById('trocarimg').src='imagensparge/compjava.png';
        document.getElementById('botao1').value = 'VOLTAR';
    }
    else {
        document.getElementById('botao1').type = 'reset';
        document.getElementById('trocarimg').src='imagensparge/scientist2.png';
        document.getElementById('botao1').value = 'COMPUTAÇÃO';
    } 
}

function img02() {  
    var tipo = document.getElementById('botao2').type;

    if (tipo == 'reset') {
        document.getElementById('botao2').type = 'button';
        document.getElementById('trocarimg').src='imagensparge/negociojava.png';
        document.getElementById('botao2').value = 'VOLTAR';
    }
    else {
        document.getElementById('botao2').type = 'reset';
        document.getElementById('trocarimg').src='imagensparge/scientist2.png';
        document.getElementById('botao2').value = 'NEGÓCIOS';
    } 
}


function img03() {  
    var tipo = document.getElementById('botao3').type;

    if (tipo == 'reset') {
        document.getElementById('botao3').type = 'button';
        document.getElementById('trocarimg').src='imagensparge/estajava.png';
        document.getElementById('botao3').value = 'VOLTAR';
    }
    else {
        document.getElementById('botao3').type = 'reset';
        document.getElementById('trocarimg').src='imagensparge/scientist2.png';
        document.getElementById('botao3').value = 'ESTATÍSTICA';
    } 
}
