
var divbot = document.getElementById('divBtn')
var text = document.getElementById('texto')
var text2 = document.getElementById('texto2')
var letratext
var letratext2
var maxletra
var letras = 'abcdefghijklmnopqrstuvwxyz'
var buttons = []
var TodasPalavras = {
    paises: [
        'china', 'indonesia', 'brasil',
        'paquistao', 'nigeria',
        'russia', 'Japão', 'filipinas',
        'vietna', 'egito', 'alemanha',
        'turquia', 'tailândia', 'frança',
        'italia', 'ucrânia', 'colômbia',
        'espanha', 'sudao',
    ],
    capitais: [
        'pequin', '	jacarta', 'brasília',
        'islamabade', 'abuja',
        'moscovo', 'tóquio', 'manila',
        'hanói', 'cairo', 'berlim',
        'ancara', 'banguecoque', 'paris',
        'roma', 'quieve', 'bogotá', 'madrid'
    ],
    frutas: [
        'abacate',
        'abacaxi',
        'banana',
        'caqui',
        'coco',
        'figo',
        'laranja',
        'limão',
        'mamão',
        'manga',
        'maracujá',
        'marmelo',
        'maça',
        'melancia',
        'melão',
        'pera',
        'pêssego',
        'tangerina',
        'uva'
    ]
}

var maxButton
var positIni
var perd
var venc
var palvrEscolid
var conjunt_Escolido = []
function tradePalavra(temas) {
    //alert(conjunt_Escolido.length)
    if (temas == 'paises') {
        conjunt_Escolido = TodasPalavras.paises
    } else if (temas == 'capitais') {
        conjunt_Escolido = TodasPalavras.capitais

    } else if (temas == 'frutas') {
        conjunt_Escolido = TodasPalavras.frutas

    }





    palvrEscolid = conjunt_Escolido[Math.floor(Math.random() * conjunt_Escolido.length)]
    //alert(palvrEscolid)
    text.innerHTML = palvrEscolid
    res.innerHTML = palvrEscolid
    letratext = text.innerHTML.match(/[abcdefghijklmnopqrstuvwxyz]/ig)
    maxletra = letratext.length
    //////alert(maxletra)
    //////////
    text2.innerHTML = null
    for (var i = 0; i < maxletra; i++) {
        text2.innerHTML += '-'

    }
    letratext2 = text2.innerHTML.match(/[-| |]/ig)
}


function inicializar(p) {
    var temas = p
    tradePalavra(temas)
    carregar()
}
function carregar() {
    //// butons////
    perd = 0
    maxButton = letras.match(/[abcdefghijklmnopqrstuvwxyz]/ig)
    var max = maxButton.length
    for (var i = 0; i < max; i++) {
        let l = letras.charAt(i)
        let btn = document.createElement('button')
        btn.setAttribute('id', `btn_${l}`)

        btn.innerHTML = `${l}`
        let have = text.innerHTML.indexOf(btn.innerHTML)
        if (have == -1) {
            btn.addEventListener('click', red)
        } else {
            btn.addEventListener('click', verde)
        }
        divbot.appendChild(btn)
        buttons.push(btn)
    }
}
function red() {
    this.style.backgroundColor = 'red'
    perd++
    //alert(perd)
    if (perd == 5) {
        alert(' Voce perdeu')
        window.location.href = 'index.html';
        //window.open('index.html')
    }

}
function verde() {
    this.style.backgroundColor = 'chartreuse'
    //alert(text.innerHTML.indexOf(this.innerHTML))
    do {
        positIni = text.innerHTML.indexOf(this.innerHTML)
        //alert(letratext2)
        //alert(letratext2)


        letratext[positIni] = letratext2[positIni]
        letratext2[positIni] = this.innerHTML
        text.innerHTML = null
        text2.innerHTML = null

        for (let i = 0; i < maxletra; i++) {
            text.innerHTML += letratext[i]
            text2.innerHTML += letratext2[i]
        }
        positIni = text.innerHTML.indexOf(this.innerHTML)
    } while (positIni != -1)

    venc = text.innerHTML.match(/[-| |]/ig)
    if (venc.length == maxletra) {
        
        alert(`<h2 style: "color:red">a palvra era ${text2.innerHTML}, Voce venceu</h2>`)
        window.location.href = 'index.html';
    } else {

    }
}


