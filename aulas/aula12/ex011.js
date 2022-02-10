var idade = 67
if (idade < 16){
    console.log("Não vota")
} else if (idade < 18 || idade > 65){ // o "else if" é apenas uma forma simplificada... usada paa não ser necessário escrever um if dentro do cloco de código do else. -> reduz as linhas do código
    console.log("Voto opcional")
} else{
    console.log("Você obrigatório!")
}