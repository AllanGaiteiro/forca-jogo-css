(function () {
    var divbot = document.getElementById('divBtn')
    var text = document.getElementById('texto')
    var text2 = document.getElementById('texto2')
    var letratext
    var letratext2
    var maxletra
    var letras = 'abcdefghijklmnopqrstuvwxyz'
    var buttons = []
    var maxButton
    var positIni
    var perd
    var venc
    var palvrEscolid
    var palavDif =
        [

            'acender','afilhado','ardiloso',/*'Áspero','assombração',*/'asterisco','basquete','caminho','champanhe','chiclete','chuveiro','coelho','contexto'/*,'convivência','coração'*/,'desalmado','eloquente','esfirra','esquerdo',/*'exceção',*/'fugaz','gororoba','heterossexual','horrorizado','impacto',/*'independência',*/'modernidade','oftalmologista','otorrinolaringologista',/*'paralelepípedo','prognósticio',*/'quarentena','quimera',/*'refeição',*/'reportagem','sino','taciturno',/*'tênue',*/'visceral'
        ]
    function tradePalavra() {
        //alert(palavDif.length)
        
        palvrEscolid = palavDif[Math.floor(Math.random()* palavDif.length)]
        //alert(palvrEscolid)
        text.innerHTML = palvrEscolid
        letratext = text.innerHTML.match(/[abcdefghijklmnopqrstuvwxyz]/ig)
        maxletra = letratext.length
        //////alert(maxletra)
        //////////
        text2.innerHTML = null
        for(var i = 0; i < maxletra; i++){
            text2.innerHTML += '-'

        }
        letratext2 = text2.innerHTML.match(/[-| |]/ig)
    }


    function inicializar() {
        tradePalavra()
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
            alert(' Voce venceu')
            window.location.href = 'index.html';
        } else {

        }
    }

    //texto.slice(9,14)
    inicializar()
}())