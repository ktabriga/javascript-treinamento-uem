const test = require('ava')

test('1 - Criar função que receba um nome e retorne uma string com uma saudação', t => {

  const resultado = saudacao('Mauricio')

  t.is(resultado, 'Hello to Javascript World Mauricio')	
})

test('2 - Criar uma função que receba dois patos e informe qual é mais pesado', t => {
  const pato1 = {nome: 'Ronaldo', peso: 10}
  const pato2 = {nome: 'Fernando', peso: 8}

  const patoPesado = patosMaisPesado(pato1, pato2)
  t.is(patoPesado, pato1)
})


test('3 - Implementar função "valorPassagem" que receba o valor da passagem e retorne uma outra função "totalGrupo" que quando invocada passando a quantidade de pessoas, retorne o valor total de passagem para o grupo.', t => {
  const valor = 30

  function valorPassagem(valor) {
    return null
  }

  const totalGrupo = valorPassagem(valor)
  const total8 = totalGrupo(8)
  const total15 = totalGrupo(15)

  t.is(total8, 240)   
  t.is(total15, 450)   
})



