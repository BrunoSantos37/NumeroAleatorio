//seleciona os inputs de entrada
const inputQtdNumeros = document.querySelector("#quantidade");
const inputMinNumeros = document.querySelector("#de");
const inputMaxNumeros = document.querySelector("#ate");

//array com os inputs
const inputs = [inputQtdNumeros, inputMinNumeros, inputMaxNumeros];

//função sorteia
const sortear = (quantidadeDeNumeros, minNumeros, maxNumeros) => {
     //cria um array vazio para armazenar os numeros;
     const numerosSorteados = [];

     // cria numeros sorteados até for igual a quantidade desejada
     for (let i = 0; i < quantidadeDeNumeros; i++) {
          //condicao para satisfazer a condicao desejada no intervalo
          let numeroAleatorio =
               Math.floor(Math.random() * (maxNumeros - minNumeros + 1)) +
               minNumeros;

          //loop para não sortear números repetidos
          while (numerosSorteados.includes(numeroAleatorio)) {
               // sorteia um novo numero aleatorio caso
               numeroAleatorio =
                    Math.floor(Math.random() * (maxNumeros - minNumeros + 1)) +
                    minNumeros;
          }

          //empurra para o array de numerosSorteados cada numero
          numerosSorteados.push(numeroAleatorio);
     }
     //retorna os numeros
     return numerosSorteados;
};

//seleciona os botoes
const botaoSorteia = document.querySelector("#btn-sortear");
const botaoReiniciar = document.querySelector("#btn-reiniciar");

//seleciona o p que aparece os numeros no html
const textoResultado = document.querySelector("#resultado");

//quando o botao sorteia for clicado
botaoSorteia.addEventListener("click", () => {
     //transforma os valores dos inputs strings para inteiros
     let qtdNumero = parseInt(inputQtdNumeros.value);
     let deNumero = parseInt(inputMinNumeros.value);
     let ateNumero = parseInt(inputMaxNumeros.value);

     //guarda a quantidade de numeros possiveis a serem sorteados
     let qtdNumerosPossiveis = ateNumero - deNumero + 1;

     //verifica se o ate é menor ou igual ao de
     //verifica se é possível mostrar a quantidade de numeros que foi pedido
     if (ateNumero <= deNumero || qtdNumero > qtdNumerosPossiveis) {
          alert(
               "Algo deu errado. Por favor verifique se os dados estão corretos. Os números sorteados não se repetem."
          );
          return;
     }

     //chama a função com os parametros corretos
     // const re = ;

     // apresenta os numeros na tela
     textoResultado.innerHTML = sortear(qtdNumero, deNumero, ateNumero);

     //ativa o estilo do botao reiniciar
     botaoReiniciar.classList.remove("container__botao-desabilitado");
     botaoReiniciar.classList.add("container__botao");
});

//quando o botao reinicia for clicado
botaoReiniciar.addEventListener("click", () => {
     //msg sem numeros quando reiniciar
     textoResultado.innerHTML = "nenhum até agora";

     // desabilitar estilo do botao reiniciar
     botaoReiniciar.classList.add("container__botao-desabilitado");
     botaoReiniciar.classList.remove("container__botao");

     //   limpa os campos dos inputs
     inputs.map((e) => {
          e.value = "";
     });
});
