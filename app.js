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
          //empurra para o array de numerosSorteados cada numero
          numerosSorteados.push(
               //condicao para satisfazer a condicao desejada no intervalo
               Math.floor(Math.random() * (maxNumeros - minNumeros + 1)) +
                    minNumeros
          );
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
     const resultado = sortear(
          //os valores precisam ser convertidos de strings para numbers
          parseInt(inputQtdNumeros.value),
          parseInt(inputMinNumeros.value),
          parseInt(inputMaxNumeros.value)
     );

     // apresenta os numeros na tela
     textoResultado.innerHTML = ` ${resultado}`;

     //ativa o estilo do botao reiniciar
     botaoReiniciar.classList.remove("container__botao-desabilitado");
     botaoReiniciar.classList.add("container__botao");
});

//quando o botao reinicia for clicado
botaoReiniciar.addEventListener("click", () => {
     //   limpa os campos dos inputs
     inputs.map((e) => {
          e.value = "";
     });

     //msg sem numeros quando reiniciar
     textoResultado.innerHTML = "nenhum até agora";

     // desabilitar estilo do botao reiniciar
     botaoReiniciar.classList.add("container__botao-desabilitado");
     botaoReiniciar.classList.remove("container__botao");
});
