function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("foto");
    var agora = new Date()
    var hora = agora.getHours()

    if (hora > 0 && hora <= 12) {
        img.src= "foto da manhã.png"
        msg.innerText = `Agora são ${hora} horas`

    } else if(hora <= 18){
        img.src= "foto da tarde.png"
        msg.innerText = `Agora são ${hora} horas`

    } else {
        img.src= "foto da noite.png"
        msg.innerText =`Agora são ${hora} horas`

    }
}