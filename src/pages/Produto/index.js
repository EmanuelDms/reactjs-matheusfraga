import { useParams } from "react-router";

export default function Produto() {
  const { id } = useParams();
  return (
    <>
      <h1>Grade de Produtos</h1>
      {id ? (
        <span>Produto Selecionado: {id}</span>
      ) : (
        <span>Não há produto selecionado</span>
      )}
    </>
  );
}
