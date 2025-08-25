//PARA SORTEAR BACKGROUND
const imagens = [
    "url('../imgs/criaca_resolvendo_conta.jpg.jpg')",
    "url('../imgs/crianca_levantando_a_mao.jpg.webp')",
    "url('../imgs/crianca_jogando_tabuleiro.jpg.webp')",
    "url('../imgs/crianca_escrevendo.jpeg')",
    "url('../imgs/crianca-estudando.jpeg')"
]
const imagensAleatorias = () => {
    let background = document.querySelector('body')
    let numeroDaImagem = Math.floor(Math.random() * imagens.length)
    background.style.backgroundImage = `${imagens[numeroDaImagem]}`
}
window.addEventListener('load', imagensAleatorias);


//so pra mudar um bug do navegador é foda
let selectbox = document.querySelector('.genero')
function mudarcordooption() {
    if (selectbox.value === 'nenhum') {
        selectbox.style.color = 'gray'
    }
    else {
        selectbox.style.color = '#fff'
    }
    localStorage.setItem('genero', selectbox.value);
}
mudarcordooption()
selectbox.addEventListener('change', mudarcordooption)

//PARA VERIFICAÇAO DE FORMULARIO
const formulario = document.querySelector('.form');
const erro = document.querySelector('.mensagemerror');
function mensagemErro(mensagem){
    erro.textContent = mensagem;
    erro.style.padding = '3px'
    erro.style.fontSize = '9px'
    erro.style.color = 'rgb(211, 24, 24)';
    erro.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'

}
function mensagemSucesso(mensagem){
    erro.textContent = mensagem
    erro.style.color = 'green';
    erro.style.backgroundColor = 'rgba(110, 194, 110, 0.2)'
}
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim()
    const escola = document.getElementById('escola').value.trim()
    // Validação do nome
    if (nome.length < 3) {
        mensagemErro('Nome muito curto.')
        return;
    }

    // Validação do nome da escola
    if (escola.length > 0 && escola.length < 3) {
        mensagemErro('Nome da escola muito curto.')
        return;
    }
    //validaçao do genero
    let genero = localStorage.getItem('genero')
    if (genero === 'nenhum') {
        mensagemErro('Selecione seu gênero')
        return;
    }
    localStorage.setItem('nome', nome)
    localStorage.setItem('escola', escola)
    mensagemSucesso('Entrando...')

    // Tudo certo

    setTimeout(() => {
        window.location.href = '../paginas/trilha.html'
    }, 1000)

    // Aqui você pode enviar os dados via fetch/ajax ou redirecionar
    console.log('Tudo validado! Nome e escola');
})