const test = require('ava')
const {saudacao, patosMaisPesado, valorPassagem, assarPato, fazerPedido} = require('./lib')

test('1 - Implemente função "saudacao" que receba um nome e retorne uma string com uma saudação', t => {
  const resultado = saudacao('Mauricio')

  t.is(resultado, 'Hello Mauricio, to Javascript World')
})

test('2 - Implemente função "patoMaisPesado" que receba dois patos e informe qual é mais pesado', t => {
  const pato1 = {nome: 'Ronaldo', peso: 10}
  const pato2 = {nome: 'Fernando', peso: 8}

  const patoPesado = patosMaisPesado(pato1, pato2)
  t.is(patoPesado, pato1)
})


test('3 - Implemente função "valorPassagem" que receba o valor da passagem e retorne uma outra função "totalGrupo" que quando invocada passando a quantidade de pessoas, retorne o valor total de passagem para o grupo.', t => {
  const valor = 30
  const totalGrupo = valorPassagem(valor)
  const total8 = totalGrupo(8)
  const total15 = totalGrupo(15)
  t.is(total8, 240)
  t.is(total15, 450)
})

test('4 - Implemente função "assarPato" que transforme o pato em pato assado', t => {
  const pato = {
    peso: 3,
    cor: 'branco'
  }

  t.deepEqual(assarPato(pato), {
    peso: 1,
    cor: undefined,
    assado: true
  })

  t.deepEqual(pato, {
    peso: 3,
    cor: 'branco'
  })
})

test('5 - Implemente a função "fazerPedido" que servirá para fazer o pedido de um pato', t => {
  const pato = {
    id: 10,
    peso: 4,
    nome: 'Donald'
  }
  const pedido = fazerPedido({pato, quantidade: 3, precoKg: 2.99})
  t.deepEqual(pedido, {
    patoId: 10,
    quantidade: 3,
    precoKg: 2.99,
    total: 35.88
  })
})
