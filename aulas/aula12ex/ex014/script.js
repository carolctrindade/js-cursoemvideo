function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = "imagens/manha.png"
        document.body.style.background = "#e6c9a7"
        //BOM DIA
    } else if (hora >= 12 && hora <= 18){
        img.src = "imagens/tarde.png"
        document.body.style.background = "#f77c83"
        //BOA TARDE
    } else {
        img.src = "imagens/noite.png"
        document.body.style.background = "#0d3046"
    }
}