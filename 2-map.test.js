const test = require('ava')
const {testHelpers} = require('./lib')
const patos = require('./patos')


test('1 - Utilizar a função map para transformar os valores do array "valores" aplicando uma função dobro', t => {
  const valores = [2, 5, 8, 20]
  const resultado = valores
  t.is(resultado[0], 4)
  t.is(resultado[1], 10)
  t.is(resultado[2], 16)
  t.is(resultado[3], 40)
})

test('2 - Implementar função transformarCores que receba os patos e transforme seu campo cores em um array com todas as cores do pato. Usar map', t => {
  function transformarCores(patos) {
    return []  
  }

  const resultado = transformarCores(patos)
  t.true(resultado.length > 0)
  resultado.forEach(testHelpers.verificaCoresPato(t))
  //exemplo resultado esperado {nome: 'mauricio', cores: ['branco', 'preto']}
})

test('6 - Criar função "alimentaCisne" que escolha apenas os patos de cor "branca" e dobre seu peso. Usar filter e map', t => {
  const cisneis =  []
  t.truthy(cisneis[0])
  t.is(cisneis[0].peso, 28)
  t.is(cisneis[1].peso, 14)
  t.is(cisneis[2].peso, 40)
  t.is(cisneis[3].peso, 18)
})

test('7 - Criar funçao que dados os patos, retorne o peso médio deles. Usar reduce', t => {
  const resultado =  0
  t.is(resultado, 12)
})
