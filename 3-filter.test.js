const test = require('ava')
const {testHelpers} = require('./lib')
const patos = require('./patos')


test('1 - Implementar função "filtrarPatosPelaCor" que receba uma cor e patos e retorne um array com apenas os patos que tem a cor amarela no seu atributo cores', t => {
  function filtrarPatosPelaCor(patos, cor) {
    return []
  }

  const resultado = filtrarPatosPelaCor(patos, 'amarelo')
  t.is(resultado.length, 2)
  t.is(resultado[0].nome, 'Alfredo')
  t.is(resultado[1].nome, 'Feijão')    
})

test('2 - Criar função "alimentaCisne" que escolha apenas os patos de cor "branca" e dobre seu peso. Usar filter e map', t => {
  const cisneis =  []
  t.truthy(cisneis[0])
  t.is(cisneis[0].peso, 28)
  t.is(cisneis[1].peso, 14)
  t.is(cisneis[2].peso, 40)
  t.is(cisneis[3].peso, 18)
})
