var x = 0;
var body = document.getElementById('body');
while (x <= 10) {
  var y = 0;
  while (y <= 10) {
    document.write(`${x} x ${y} = ${x * y}<br>`);
    y++;
  }
  document.write("<br>");
  x++;
}

// SPREAD = Espalhar
let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 6];
let pessoa = {
  nome: "Manel",
  idade: 18,
  cargo: "dev"
}

let novaPessoa = {
  ...pessoa,
  prop: "value"
}

function cadastroPessoa(info) {
  let novosDados = {
    ...info,
    cargo: "dev",
    status: 1,
    code: "23423"
  }

  return novosDados;
}

console.log(cadastroPessoa(
  {
    nome: "Matheus", sobrenome: "Fraga", anoInicio: 2045
  }
));

// </> SPREAD = Espalhar
// REST = Descansar
// a função não sabe o que vem, logo usa-se o rest   
function minhaLista(...nomes) {
  console.log(nomes);
}
minhaLista("Emanuel", "Moisés", "Jesus");

function cadastrar(usuarios, ...novosUsuario) {
  return console.log([...usuarios, ...novosUsuario]);
}

let usuarios = ["Matheus", "Joao"];

let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");
// </> REST = Descansar
// Operações dentro de arrays
const lista = [1, 2, 3, 4, 5, 6];

// MAP: 'Mapear' -> Vai percorrer um vetor [array] e retornar um valor.
const novaLista = lista.map((item, index) => item + index);

// Reduce: 'reduzir' -> Vai percorrer um vetor [array] e reduzí-lo a um único valor
const soma = lista.reduce((total, proximo) => total + proximo);
console.log(novaLista);

// Find: 'achar' -> Vai percorrer um vetor [array] e retornar valores de acordo com a determina condição
const find = lista.find((item) => item === 2);
console.log(find);

// Filter: 'filtrar' -> Cria uma matriz preenchida com todos os elementos da matriz que passam em um teste (condição) (fornecido como uma função)
let idades = [32, 33, 16, 40];
let maioridade = idades.filter((idade) => idade >= 18);
console.log(maioridade);

// </> Operações dentro de arrays

/**
 * includes
 * endsWith
 * startsWith
 */

/* includes [boolean]: verificar seja em string, array, array de objetos, se possui dentro
 do que estamos mandando. */
let nomes = ['Matheus', 'Lucas', 'João'];

// se possui lucas dentro de nomes
console.log(`includes: ${nomes.includes('Lucas')}`);

/* startsWith & endsWith: verifica se nome/string possui o parâmetro passado */
// obs: case sensetive
console.log(`endsWith: ${(nomes[0]).endsWith('eus')}`);
console.log(`startsWith: ${(nomes[0]).startsWith('Ma')}`);

/* SOME EVERY */

// SOME [boolean]: Retorna um boolean se satisfazer alguma parte da condição solicitada
console.log(`SOME: ${nomes.some(item => item === 'Matheus')}`);
// EVERY [boolean]: Retorna um boolean se toda a condição solicitada
let pessoas =
  [
    {
      "nome": "Igor Pedro Henrique Leonardo Castro",
      "idade": 52,
      "cpf": "083.420.737-00",
      "rg": "34.730.158-7",
      "data_nasc": "11\/03\/1969",
      "sexo": "Masculino",
      "signo": "Peixes",
      "mae": "Ayla Rita",
      "pai": "Lorenzo Fernando Cauã Castro",
      "email": "igorpedrohenriqueleonardocastro..igorpedrohenriqueleonardocastro@mail.com",
      "senha": "HkxaDDdxcM",
      "cep": "88811-765",
      "endereco": "Rua Antônio Benedet",
      "numero": 150,
      "bairro": "Próspera",
      "cidade": "Criciúma",
      "estado": "SC",
      "telefone_fixo": "(48) 2593-3572",
      "celular": "(48) 98976-4559",
      "altura": "1,79",
      "peso": 102,
      "tipo_sanguineo": "AB-",
      "cor": "verde"
    },
    {
      "nome": "Joana Esther Renata Drumond",
      "idade": 32,
      "cpf": "252.907.409-70",
      "rg": "12.805.336-7",
      "data_nasc": "11\/11\/1989",
      "sexo": "Feminino",
      "signo": "Escorpião",
      "mae": "Liz Louise Joana",
      "pai": "Lorenzo Mário Drumond",
      "email": "joanaestherrenatadrumond-82@formulaweb.com.br",
      "senha": "X87k3AWUBP",
      "cep": "21511-210",
      "endereco": "Rua Porto Feliz",
      "numero": 878,
      "bairro": "Honório Gurgel",
      "cidade": "Rio de Janeiro",
      "estado": "RJ",
      "telefone_fixo": "(21) 3930-2539",
      "celular": "(21) 99979-7974",
      "altura": "1,77",
      "peso": 53,
      "tipo_sanguineo": "AB+",
      "cor": "laranja"
    },
    {
      "nome": "Gustavo Julio Aparício",
      "idade": 19,
      "cpf": "274.253.097-50",
      "rg": "50.860.359-6",
      "data_nasc": "14\/03\/2002",
      "sexo": "Masculino",
      "signo": "Peixes",
      "mae": "Rayssa Andrea",
      "pai": "Cauã Vinicius Levi Aparício",
      "email": "gustavojulioaparicio-89@hawk.com.br",
      "senha": "0O5QeapeUb",
      "cep": "68902-865",
      "endereco": "Avenida Treze de Setembro",
      "numero": 882,
      "bairro": "Buritizal",
      "cidade": "Macapá",
      "estado": "AP",
      "telefone_fixo": "(96) 3689-6751",
      "celular": "(96) 98954-4292",
      "altura": "1,81",
      "peso": 91,
      "tipo_sanguineo": "B+",
      "cor": "preto"
    }
  ];

console.log(`EVERY: ${pessoas.every(item => item.idade >= 18)}`);