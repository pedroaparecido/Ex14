function carregar(){
    let data = new Date()
    let msg = window.document.getElementById('msg')
        switch (data.getHours()){
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                msg.innerHTML = `${data.getHours()}:${data.getMinutes()}`
                window.document.getElementById('imagem').src = 'imagens/pexels-ave-calvar-martinez-3030459.png'
                window.document.body.style.background = '#f4ddc4'
                break
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                msg.innerHTML = `${data.getHours()}:${data.getMinutes()}`
                window.document.getElementById('imagem').src = 'imagens/pexels-torsten-kellermann-955656.jpg'
                window.document.body.style.background = 'bca823'
                break
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                msg.innerHTML = `${data.getHours()}:${data.getMinutes()}`
                window.document.getElementById('imagem').src = 'imagens/pexels-elijah-o\'donnell-6059094.jpg'
                window.document.body.style.background = '#3c3638'
                break
            default:
                msg.innerHTML = `ERR0R HORA NOT FOUND`
                window.document.getElementById('imagem').src = 'imagens/pexels-pixabay-207580.jpg'
                break
        }
}