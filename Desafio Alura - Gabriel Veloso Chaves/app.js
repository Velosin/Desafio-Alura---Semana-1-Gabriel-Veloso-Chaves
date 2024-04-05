let titulo = document.querySelector('h1');
titulo.innerHTML = 'Os desafios... - Semana 1';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Criado por: Gabriel Veloso Chaves';


function clicarBotaoMedia(){
let media = (8 + 9 + 7) / 3;
alert('Sua primeira nota foi 8.');
alert('Sua segunda nota foi 9.');
alert('Sua terceira nota foi 7.');
alert(`A sua média das notas é ${media}.`);
}


function clicarBotaoLoteria(){
let listaLoteria = [15, 8, 90, 75, 102, 6, 2];
let maiorNumero = Math.max.apply(Math, listaLoteria);
let menorNumero = Math.min.apply(Math, listaLoteria);
alert(`Tais, seus números da loteria foram: ${listaLoteria}.`);
alert(`O seu maior número é ${maiorNumero}.`);
alert(`O seu menor número é ${menorNumero}.`);
}


function clicarBotaoOrdenaçao(){
let ordemDosFrascos = [12, 5, 23, 17, 8, 14, 3, 19];
let ordemDosFrascosInicial = [12, 5, 23, 17, 8, 14, 3, 19];
ordemDosFrascos.sort(function(a, b){
return a - b;
})
alert(`Alquimistas, os números dos frascos são ${ordemDosFrascosInicial}.`);
alert(`A ordem dos frascos ficará como ${ordemDosFrascos}.`);
}


function clicarBotaoPrimos(){
let listaDosNumeros = [23, 16, 11, 8, 19, 14, 5, 21];
function verificarNumeroPrimo(numero){
if (numero <= 1){
return false;
}
for (let i = 2; i < numero; i++){
if (numero % i === 0){
return false;
}
}
return true;
}
let numerosPrimos = [];
for (let i = 0; i < listaDosNumeros.length; i++){
if (verificarNumeroPrimo(listaDosNumeros[i])){
numerosPrimos.push(listaDosNumeros[i]);
}
}
numerosPrimos.sort(function(a, b){
return a - b
})
alert(`Os números do fazendeiro são: ${listaDosNumeros}.`);
alert(`Os números primos que o fazendeiro quer são ${numerosPrimos}.`);
}


function clicarBotaoContagem(){
let fraseDaContagem = 'What is Lorem Ipsum?';
let caracteres = /[^a-z]/gi;
alert(`O número de caracteres que existe na frase "${fraseDaContagem}" são ${fraseDaContagem.replace(caracteres, "").length}.`);
}


function clicarBotaoFatorial(){
function fatorial(numero){
if (numero < 0){
return -1;
}
else if (numero == 0){
return 1;
}
else{
return (numero * fatorial(numero - 1));
}
}
let numeroDoFatorial = fatorial(12);
alert(`O fatorial do número 12 é ${numeroDoFatorial}.`);
}


function clicarBotaoConta(){
let item1 = (2.50);
let item2 = (3.75);
let item3 = (1.99);
let conta = item1 + item2 + item3;
alert(`Senhor, o que o senhor comprou tiveram os preços de ${item1}, ${item2} e ${item3}.`);
alert(`O preço total deu ${conta}.`);
}


function clicarBotaoMulta(){
let diasDeAtraso = 0;
while (diasDeAtraso != 7){
diasDeAtraso++;
}
let multa = (diasDeAtraso * 0.5);
alert(`Aluno, como você está com ${diasDeAtraso} dias de atraso, você deverá pagar ${multa} reais para a biblioteca.`);
}


function clicarBotaoHp(){
let hp = 100;
let dano = 20;
let ataques = 0;
while (ataques != 3){
ataques++;
}
let quantidadeDeVidaResultado = (hp - (dano * ataques));
alert(`Jogador, você sofreu ${ataques} ataques, e agora sua vida está ${quantidadeDeVidaResultado}.`);
}


function clicarBotaoMaiusculo(){
let fraseDaMaiuscula = 'LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY';
let maiusculas = /[^A-Z]/g;
alert(`A quantidade de letras Maiúsculas que existem na frase "${fraseDaMaiuscula}" são:`);
alert(fraseDaMaiuscula.replace(maiusculas, "").length);
}

function clicarBotaoIdade(){
function calcularIdadeAtual(dataDeNascimento){
let diaAtual = new Date();
let anoDeNascimento = new Date(dataDeNascimento);
return diaAtual.getFullYear() - anoDeNascimento.getFullYear();
}
let idade = calcularIdadeAtual(prompt("Digite sua data de nascimento: YYYY-MM-DD"));
alert(`Você tem ${idade} anos.`)
}


