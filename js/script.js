function calcular() {
    let date = new Date()
    let year = date.getFullYear()

    let age = document.querySelector('input#age')
    let res = document.querySelector('div#res')

    if(age.value.length == 0 || Number(age.value) > year) {
        window.alert('erro')
    } else {
        let fSex = document.getElementsByName('radSex')
        let idade = year - Number(age.value)

        let img = document.createElement('img')
        img.setAttribute('id' , 'photo')

        let gender = ''

        if(fSex[0].checked) {
            gender = 'Homem'
            if(idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'img/menino.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'img/garoto.png')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso.png')
            }

        } else if(fSex[1].checked) {
            gender = 'Mulher'
            if(idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'img/menina.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'img/garota.png')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gender} com ${idade} anos.`
        res.appendChild(img)
    } 
    /*
    */
}