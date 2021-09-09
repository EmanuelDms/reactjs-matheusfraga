import React from 'react';

export default function CTAButton(props) {
  let thisState = props.attr;
  let textoFrase = thisState.state.textoFrase;
  let acao, textoBotao;

  if (textoFrase) {
    acao = thisState.resetarBiscoito;
    textoBotao = 'Gerar outro biscoito';
  } else {
    acao = thisState.quebraBiscoito;
    textoBotao = 'Abrir biscoito';
  }

  return (
    <div>
      <button onClick={acao}>{textoBotao}</button>
    </div>
  );
}
