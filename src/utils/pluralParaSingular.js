function pluralParaSingular(valor, singular) {
  return valor > 1 ? `${valor} ${singular}s` : `${valor} ${singular}`
}

export default pluralParaSingular
