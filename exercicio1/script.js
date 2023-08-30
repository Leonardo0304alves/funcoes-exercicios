/*

b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. 
Chame esta função várias vezes com números diferentes.

c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ */

// Exrcicicio letra A

function darOla () {
    console.log ('Olá, Leonardo!')
}


darOla ()


// Exrcicicio letra B e C

const verMutiplicacao = ()=> {
    let numero = Number (prompt ( 'Digite um número: '))
    const numero1 = numero * 1
    console.log (numero1)

    const numero2 = numero * 2
    console.log (numero2)

    const numero3 = numero * 3
    console.log (numero3)

    const numero4 = numero * 4
    console.log (numero4)

    const numero5 = numero * 5
    console.log (numero5)

    const numero6 = numero * 6
    console.log (numero6)

    const numero7 = numero * 7
    console.log (numero7)

    const numero8 = numero * 8
    console.log (numero8)

    const numero9 = numero * 9
    console.log (numero9)

    const numero10 = numero * 10
    console.log (numero10)
}

//verMutiplicacao ()
