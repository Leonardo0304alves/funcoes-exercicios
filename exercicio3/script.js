/*a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos
 //e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

 //EXERCICIO A

 const CriarFuncao = (numero, numero2)=>{
    let subtração = numero - numero2
    console.log (subtração)

    let soma = numero + numero2
    console.log (soma)

    let multiplicação = numero * numero2
    console.log (multiplicação)

    let divisão = numero / numero2
    console.log (divisão)
 }
 CriarFuncao(5 , 25)
*/
 //b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

 const CriarFuncao = (numero, numero2)=>{
    let função1 = Number(prompt('Digite 1 número'))
    let função2 = Number(prompt('Digite outro número'))

    let subtração = função1  - função2
    console.log (subtração)

    let soma = função1 + função2
    console.log (soma)

    let multiplicação = função1 * função2
    console.log (multiplicação)

    let divisão = função1  / função2
    console.log (divisão)
 }
 CriarFuncao()