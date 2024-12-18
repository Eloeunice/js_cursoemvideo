function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (form_ano.value.length == 0 || form_ano.value > ano){
        window.alert("Erro nos dados digitados. Tente Novamento!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(form_ano.value)
        var genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade < 13) {
                img.setAttribute('id', '')
            } else if (idade < 21){
                img.setAttribute('id', '')

            } else if (idade > 21){
                img.setAttribute('id', '')

            } else if (idade < 60){
                img.setAttribute('id', '')

            } else {
                img.setAttribute('id', '')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade < 13) {
                img.setAttribute('id', '')
            } else if (idade < 21){
                img.setAttribute('id', '')

            } else if (idade > 21){
                img.setAttribute('id', '')

            } else if (idade < 60){
                img.setAttribute('id', '')

            } else {
                img.setAttribute('id', '')
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }
}