/*Declare e invoque as funções abaixo:

d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.*/

/*LETRA A 
const somarValor = (numero)=>{
    let resultado = numero + 12
    console.log (resultado)
}
somarValor(1,2)

//LETRA B

const somarValor = (numero)=>{
    let resultado = numero >= numero
    console.log (resultado)
}
somarValor(887,22)

//LETRA C

const somarValor = (numero)=> {
    let resultado = numero % 2 === 0
    console.log (resultado)
}
somarValor (23) */

// LETRA D

const salarioLiquido = (salarioBruto)=>{
    let salario = salarioBruto * 10/100 
        console.log (salario)
}
salarioLiquido(1300)