function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //minuto.getFixed(2)
    hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12){
        imagem.src = "manha.png"
        //BOM DIA
    } else if (hora >= 12 && hora < 18){
        imagem.src = "tarde.png"
        //BOA TARDE
    } else {
        imagem.src = "noite.png"
    }
}