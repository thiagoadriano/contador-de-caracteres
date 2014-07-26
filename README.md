# Contador de Caracteres
========================

Plugin baseado no jQuery para contagem de cracteres do input que foi chamado

Adicione o plugin na página e chame o mesmo no input

<script src="../jquery.counter.caracter.js"></script>

**$([input]).counter()**

## Configurações
-----------------------
As configurações podem ser passadas via parametro com {}

### Limite
passando limite de caracteres

{
  limite: 200
}

### Informar caracteres
Texto para informar quantos caracteres podem ser passados

{
  txtContador: "Digite até: "
}

## Informar término do limite
Texto que irá informar ao usuário quando atingiu o limite

{
  txtLimite: "Digitou o limite máximo!"
}

## Posição
Pode colocar acima ou abaixo do input selecionado bastando passar "up" ou "down"

{
  posicao: "up"
}

## Exemplo
Veja a aplicação do mesmo em um textarea com id resposta
$(function () {
 $('#resposta').counter({
   limite     : 15,
   txtContador: "Pode digitar Até: ",
   txtLimite  : "0",
   posicao    : "down"
 });
});