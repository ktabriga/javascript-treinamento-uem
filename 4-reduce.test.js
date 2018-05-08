const test = require('ava')
const {testHelpers} = require('./lib')
const patos = require('./patos')

test('1 - Criar funçao que dados os patos, retorne o pato mais pesado. Usar reduce', t => {
  
  const maisPesado = (patos) => {
    const maisPesadoReduce = (acc, pato) => {
      if (pato.peso > acc.peso) {
        return pato
      }
      return acc
    }

    return patos.reduce(maisPesadoReduce, {peso: 0})
  }
  const resultado =  maisPesado(patos)
  t.is(resultado.peso, 20)
})

test('2 - Criar funçao que dados os patos, retorne o peso médio deles. Usar reduce', t => {
  const media = (patos) => {
    const total = patos.reduce((acc, pato) => {
      return acc + pato.peso
    }, 0)
    return total / patos.length
  }
  const resultado =  media(patos)
  t.is(Math.round(resultado), 12)
})
