const saudacao = nome => `Hello ${nome}, to Javascript World`

const patosMaisPesado = (p1, p2) => {
  if (p1.peso > p2.peso) {
    return p1
  }
  return p2
}

const valorPassagem = valor => quantidade => valor * quantidade

const assarPato = patoVivo => ({
  ...patoVivo,
  peso: 1,
  cor: undefined,
  assado: true
})

const fazerPedido = ({pato={}, quantidade=0, precoKg=0}) => {
  const {peso, id} = pato
  return {
    patoId: id,
    quantidade,
    precoKg,
    total: peso * precoKg * quantidade
  }
}

module.exports = {
  saudacao,
  patosMaisPesado,
  valorPassagem,
  assarPato,
  fazerPedido
}
