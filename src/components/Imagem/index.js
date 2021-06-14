import React from 'react'
import BiscoitoFechado from '../../assets/biscoito.png'
import BiscoitoAberto from '../../assets/open-biscoito.png'

export default function Imagem(props) {
  return (
    <div>
      <img src={props.attr.textoFrase ? BiscoitoAberto : BiscoitoFechado} />
    </div>
  )
}
