const test = require('ava')
const {testHelpers} = require('./lib')
const patos = require('./patos')


test('1 - Utilizar a função map para transformar os valores do array "valores" aplicando uma função dobro', t => {
  const valores = [2, 5, 8, 20]
  const dobro = x => x * 2
  const resultado = valores.map(dobro)
  t.is(resultado[0], 4)
  t.is(resultado[1], 10)
  t.is(resultado[2], 16)
  t.is(resultado[3], 40)
})

test('2 - Implementar função transformarCores que receba os patos e transforme seu campo cores em um array com todas as cores do pato. Usar map', t => {
  function transformarCores(patos) {
    return patos.map(p => {
      return {
        nome: p.nome,
        cores: p.cores.split(',')
      }
    })  
  }

  const resultado = transformarCores(patos)
  t.true(resultado.length > 0)
  resultado.forEach(testHelpers.verificaCoresPato(t))
  //exemplo resultado esperado {nome: 'mauricio', cores: ['branco', 'preto']}
})
