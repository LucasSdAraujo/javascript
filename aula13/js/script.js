function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data= new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas!`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = '../img/dia1.png'
        document.body.style.backgroundColor = '#4384D9'
    }else if (hora >=12 && hora<18){
        //BOA TARDE!
        img.src = '../img/tarde1.png'
        document.body.style.backgroundColor = '#F2BB77'
    }else{
        //BOA NOITE!
        img.src = '../img/noite1.png'
        document.body.style.backgroundColor = '#1A3540'
    }
}