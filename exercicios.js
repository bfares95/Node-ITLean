//Exercício 0

// var palavra = 'Socorram-me, subi no ônibus em Marrocos'

// function palindromo (texto){
//     // let espaço = texto.split(' ').join('');
//     let inverso = espaço.split('').reverse().join('');
//     console.log(inverso)
//     if(palavra == inverso){
//         console.log(true)
//     }else{
//         console.log(false)
//     } 
// }

// palindromo(palavra)

//--------------------------------------

// function palindromo (texto){
//     let inverso = texto.split('')
//     let y =[]
//     // console.log(inverso)
//     for(let i = 0 ; i < y.length; i++){
//         let x = inverso.pop()
//         y.push(x)
//         console.log(y)
//     }
// }
// palindromo(palavra)

// --------------------------------------

// function isPolidrome(word){
//     let mid = Math.floor(word.length/2)
//     for(let i =0; i<mid; i++){
//         if(word[i]!=word(word.lenght -1 - i)){
//             false
//         }else{
//             true
//         }
//     }
// }


// ===================================

//Exercício 1

// var arrNumero = [1,4,6,8,9]
// var soma = 0
// var divisor = arrNumero.length


// function media(numeros){
//     // let soma = numeros.pop()
//     for(let x of numeros){
//     soma += x
//     console.log(soma)
// }
// console.log(soma/divisor)
// }


// media(arrNumero)

//---------------------------------

//Exercício 2

// var x = 24
// var seqF = [0,1]


// function Fibonnacci(number){
//     for(let i = 2; seqF[i-1] < number  ; i++) {
//        seqF[i] = seqF[i -1] + seqF [i-2]
//        console.log(seqF[i-1])
//     }

// }


// Fibonnacci(x)


//----------------------------------

//Exercício 3

var arrNum = [23,3,48,15,14,43,65];
var nMaior = 0
var segMaior = 0

function segundoMaior(numeros){
    let index
    for(let i = 0;i<arrNum.length;i++){
        if(nMaior < arrNum[i]){
            nMaior = arrNum[i]
            index = [i]
        }else{
            // nMaior = arrNum[i+1]
            // index = [i+1]
        }
    }
    arrNum.splice(index,1)
    // console.log(arrNum)
    // console.log(nMaior)

    for(let i = 0;i<arrNum.length;i++){
        if(segMaior < arrNum[i]){
            segMaior = arrNum[i]
            // console.log(segMaior)
            index = [i]
        }else{
            // segMaior = arrNum[i+1]
            // index = [i+1]
        }
    }
    // console.log(arrNum)
    console.log(segMaior)
    arrNum.push(nMaior)
    // console.log(arrNum)

}

segundoMaior()

//------------------------

//Exercício 4

var palavra = 'bruno fares sebastiao'
var x =''


function primeiraLetra(word){
    let arrWord = word.split(' ')
    // console.log(arrWord)
    for(let i=0;i<arrWord.length;i++){
    // x[i] = arrWord[i][0].toUpperCase() + arrWord[i].substring(1)
    x += arrWord[i][0].toUpperCase() + arrWord[i].substring(1) + ' '
    }
    console.log(x)
    return x;
   
    }
    // let x = first[0].toUpperCase() + first.substring(1)
   
    



primeiraLetra(palavra)


// console.log(primeiraLetra(palavra))



function Teste(c, d){
    let a = 5
    let b = 6
    // return console.log("Olá")
    return(console.log(a + b)) //também inalcançável
    
}
Teste() //continua imprimindo apenas o Olá



