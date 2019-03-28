const test = require('ava')

test('1 - Criar função que receba um nome e retorne uma string com uma saudação', t => {
  const saudacao = nome => `Hello ${nome}, to Javascript World`
  const resultado = saudacao('Mauricio')

  t.is(resultado, 'Hello Mauricio, to Javascript World')
})

test('2 - Criar uma função que receba dois patos e informe qual é mais pesado', t => {
  const pato1 = {nome: 'Ronaldo', peso: 10}
  const pato2 = {nome: 'Fernando', peso: 8}

  const patosMaisPesado = (p1, p2) => {
    if (p1.peso > p2.peso) {
      return p1
    }
    return p2
  }

  const patoPesado = patosMaisPesado(pato1, pato2)
  t.is(patoPesado, pato1)
})


test('3 - Criar função "valorPassagem" que receba o valor da passagem e retorne uma outra função "totalGrupo" que quando invocada passando a quantidade de pessoas, retorne o valor total de passagem para o grupo.', t => {
  const valor = 30

  const valorPassagem = valor => quantidade => valor * quantidade

  const totalGrupo = valorPassagem(valor)
  const total8 = totalGrupo(8)
  const total15 = totalGrupo(15)

  t.is(total8, 240)
  t.is(total15, 450)
})

test('4 - Crie um função que transforme o pato em pato assado', t => {
  const pato = {
    peso: 3,
    cor: 'branco'
  }

  const assarPato = patoVivo => ({
    ...patoVivo,
    peso: 1,
    cor: undefined,
    assado: true
  })

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
