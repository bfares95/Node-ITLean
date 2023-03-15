// console.log('Hello Word')

// var num1 = 3
// var num2 = 4

// function soma(n1,n2){
// let x = n1+n2
// return x
// }

// console.log(soma(num1,num2))

var array = [1,3,7,5,5,2,4,5,7]
var repNum = 0
var numero 
var rep = 0

function highestrepetition(arrNumber){

for(j=0;j<arrNumber.length;j++) {

    
for(i=1;i<arrNumber.length;i++){
   
    if(arrNumber[0] == arrNumber[i]){
        rep = rep + 1
        console.log(rep)
    }
  
    if(rep > repNum){
        repNum = rep
        numero = arrNumber[0]
        console.log(numero)
        let x  = arrNum.shift()
        console.log(x)
        arrNum.push(x)
        
    }

}

}


}

// highestrepetition(array)

function object(key)

var qtd =  [{ name: "Alice", age: 20 }, { name: "Bob", age: 25 }, 
    { name: "Charlie", age: 30 }]

    if(qtd[1][key] == 'Bob'){
        console.log('Oi')
    }
    
    console.log(object('name'))
    // console.log(qtd[1]['name'])



    //..........................


    var obj = { name: "Bob", age: 25 }
    let x = obj.name
  
    console.log(typeof x)
    console.log(obj['name'])

    
    // const numero = 0;
// console.log(minhaVar)

// console.error('deu erro!')

// let x = '' ; 
// console.log(x)
// x = 'oi'

function imprimeTexto (texto){
    console.log(texto)
}

imprimeTexto("oi")
imprimeTexto(Soma())

// function soma (n1,n2){
// console.log(n1 + n2)
// }

// soma (2,3)


function Soma(){
x = 2023 - 1995 ;
return x;
}

// console.log(Soma())
let Bruno = "Bruno"

function pessoa (nome,idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}



console.log(pessoa(Bruno, x))


