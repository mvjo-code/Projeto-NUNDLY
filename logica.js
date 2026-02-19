const socket = new
WebSocket("ws://localhost:8080")
socket.onopen = () => {
    console.log('conectado ao servidor')
}
socket.onmessage = (event) => {
    const msg = JSON.parse(event.data)
    console.log('mensagem recebida: ', msg)
    if(msg.type === 'room-created'){
        const codigo = msg.payload.roomCode
        alert(mdg)
    }
}
const botaoCriarSala = document.querySelector('.criarsala')
const botaoEntrarSala = document.querySelector('.entrarsala')
//criar sala
botaoCriarSala.addEventListener('click', () => {
    console.log('criar sala chamada')
    socket.send(JSON.stringify({
        type: 'create',
        payload: {
            name: nomeMaiusculo
        }
    }))
})
//entrar na sala
botaoEntrarSala.addEventListener('click', ()=> {
    console.log('entrar sala chamada')
    const codigosala = prompt('digite o código da sala: ')
    if(codigosala) {
        socket.send(JSON.stringify({
            type: 'join',
            payload: {
                name: nomeMaiusculo,
                roomCode: codigosala
            }
        }))
    }
})
let nome = localStorage.getItem('nome');
let nomeMaiusculo = nome.charAt(0).toUpperCase() + nome.slice(1)
let escola = localStorage.getItem('escola');
const nomeUsuario = document.querySelector('.Nomedojogador')
let genero = localStorage.getItem('genero')
const cumprimento = ()=>{
    if(genero === 'Masculino'){
        nomeUsuario.innerHTML = 'Bem vindo,  ' + nomeMaiusculo + '!'
    }
    else{
        nomeUsuario.innerHTML = 'Bem vinda,  ' + nomeMaiusculo + '!'
    }
}
cumprimento()
//mudança de background
const corpo = document.body;
const fade = document.getElementById('background-fade');
function exibirpopup(){
    console.log('funçao chamada')
    const telamultiplayer = document.querySelector('.popupdemultiplayer')
    telamultiplayer.style.display = 'flex'
}
function fecharpopup(){
    const telaMultiplayerTotal = document.querySelector('.filtrodopopup')
    const telaMultiplayer = document.querySelector('.popupdemultiplayer')
    const aviao = document.querySelector('.aviaomultiplayer')
    telaMultiplayer.style.height = '0'
    telaMultiplayer.style.width = '0'
    aviao.style.opacity = '0'
    aviao.style.left = '-100%'
    setTimeout(()=>{
        telaMultiplayerTotal.style.width = '0'
        telaMultiplayerTotal.style.visibility = 'hidden'
        telaMultiplayerTotal.style.opacity = '0'
        aviao.style.opacity = '1'
        aviao.style.transition = 'all 0.7s ease-in-out'
        aviao.style.left = '4em'
    },200)
}
function aviaomultiplayer(){
    console.log('funçao chamada')
    const telaMultiplayerTotal = document.querySelector('.filtrodopopup')
    const telaMultiplayer = document.querySelector('.popupdemultiplayer')
    const aviao = document.querySelector('.aviaomultiplayer')
    aviao.style.transition = 'all 0.2s ease-in-out'
    aviao.style.left = '100%'
    telaMultiplayerTotal.style.opacity = '1'
    telaMultiplayerTotal.style.visibility = 'visible'
    telaMultiplayerTotal.style.width = '100vw'
    setTimeout(() => {
        telaMultiplayer.style.width = '67vw'
        telaMultiplayer.style.height = '60vh'
    }, 200);
}