let chess = 'torre'

switch(chess.toLowerCase()) {
    case 'cavalo':
        console.log('O cavalo anda em L')
        break
    case 'bispo':
        console.log('o bispo anda na diagonal')
        break
    case 'peão' :      
        console.log('o peão anda apenas 1 casa pra frente (só no começo que ele pode andar 2)')
        break
    case 'rainha':
        console.log('a rainha pode andar em qualquer direção')
        break
    case 'rei':        
        console.log('o rei pode andar em qualquer direção, porém apenas 1 casa')
        break
    case 'torre':
        console.log('a torre pode andar ou apenas reto, ou apenas para os lados, ou apenas pra trás')
        break
    default:
        console.log('Erro, peça inválida!')
        break
}