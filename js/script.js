
function carregarFunctions() {
    //pegando o elemento HTML que vai exibir a hora 
    const textHours = document.querySelector("#hours")
    const textMinutes = document.querySelector('#minutes')
    const textSeconds = document.querySelector('#seconds')
    const phrase = document.querySelector('#phrase')


    //array com as frases
    const phrases = ["Levanta, sacode a poeira, dá a volta por cima.","De nada adianta ter sonhos, se você não se empenhar em correr atrás",
    "Dê mais atenção ao que você tem de bom na sua vida", "Nem todos os dias são bons, mas há algo bom em cada dia.",
    "Respeite sua mente e trate seu corpo com carinho.","Para chegar ao topo, o que importa é começar!","Positividade para começar o dia é colocar a sua fé em prática",
    "Comece seu dia com um sorriso que venha lá de dentro da alma.", "Lembre-se que, quando a vida te derrubar, você pode sempre se levantar!",
    "Vamos inventar o amanhã no lugar de se preocupar com o que aconteceu ontem.",
    "Você pode não ter o melhor do mundo, mas tem muito pelo que agradecer!", "Não deixe sua felicidade nas mãos de ninguém!",
    "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência","No meio da dificuldade encontra-se a oportunidade.",
    "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.","Você precisa fazer aquilo que pensa que não é capaz de fazer.",
    "Inspiração vem dos outros. Motivação vem de dentro de nós.","O caminho pra perfeição é fazer da dificuldade uma motivação",
    "Tenha coragem para se tornar aquilo que sonha.","Desconfie do destino e acredite em você.",
    "E se não for para rir dos nossos erros, qual é a graça da vida?","Meta do dia: agradecer por estar vivo!",
    "Deus está protegendo o seu caminho.","Repita comigo: você é incrível!", "Onde você está é sempre o melhor lugar para começar.",
    "Os caminhos que fazemos já são parte do sucesso!","Não importa que você vá devagar, contanto que você não pare."
    ]

    let randomPhrase = Math.floor(Math.random() * phrases.length) //gera frase randomica
    
    phrase.style.display = 'block'
    phrase.style.fontFamily = "Open Sans, sans-serif"
    phrase.style.fontStyle = 'italic'
    phrase.style.fontWeight = '500'
    phrase.style.textAlign = 'center'
    phrase.style.padding = '5px'
    phrase.style.color = 'rgb(220, 189, 14)'
    
    phrase.textContent = phrases[randomPhrase]

    //Arrow function que formata a exibição da hora adicionando o (0) na frente dos numeros < 10
    const addZero = n => {
        return ('0' + n).slice(-2)
    }

    //função que cria um intervalo que é executado a cada 1seg atualizando a hora atual e inserindo no HTML
    setInterval(() => {
        const currentTime = new Date()

        let hours = addZero(currentTime.getHours())
        let minutes = addZero(currentTime.getMinutes())
        let Seconds = addZero(currentTime.getSeconds())

        textHours.textContent = hours
        textMinutes.textContent = minutes
        textSeconds.textContent = Seconds

        //alterar imagem de background e adiciona a frase aleatória
        if(hours >= 06 && hours <= 11) {
            document.body.style.backgroundImage = 'url(img/manha2.jpg)'

        }else if(hours >= 12 && hours <= 17) {
            document.body.style.backgroundImage = 'url(img/tarde1.jpg)'

        }else if(hours >= 18 && hours <= 23 ) {
            document.body.style.backgroundImage = 'url(img/noitee.jpg)'
        }
        else { 
            document.body.style.backgroundImage = 'url(img/madrugada.jpg)'
        }

        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition = 'bottom'

    }, 1000)
}




  