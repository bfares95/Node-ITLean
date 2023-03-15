// Ex: 1
function inverter(word){
    let arrWord = word.split(' ')
    let invWord = ''
    for (let i = arrWord.length-1; i>=0; i--){
        for(let j = arrWord[i].length-1; j>=0; j--){
            invWord += arrWord[i][j]
        }
        invWord += ' '
    }
    
    return invWord
}


console.log(inverter("hello world"))


function inverter2(word){
    let invWord = ''
    for(i = word.length-1; i>=0; i--){
    invWord += word[i]
    }
    
    return invWord
}

console.log(inverter2("hello world"))

//Ex: 2

function highernumber(number){
    let higher = 0
    for(let i = 0; i < number.length; i++){
        if(number[i] > higher){
        higher = number[i]
    }
    }
    return higher
}

    console.log(highernumber([3,7,2,8,1]))

    
    // var qtd =  [{ name: "Alice", age: 20 }, { name: "Bob", age: 25 }, 
    // { name: "Charlie", age: 30 }]

    // if(qtd[1].name == 'Bob'){
    //     console.log('Oi')
    // }
    

    // console.log(qtd)
    // console.log(qtd[1].name)



    // Ex: 4
    function elementArray(array1,array2){
        let newArray = []
        let x = 0

        for(let i = 0; i< array1.length;i++ ){
            for(let j = 0; j < array2.length; j++){
                if(array1[i] == array2[j] && x != array1[i]){
                    x = array1[i]
                    newArray.push(x)
                }
            }
           
        }  
        return newArray
    }
    
    console.log(elementArray([1,2,3,5,3,7,6],[2,3,4,6,6]))


    // Ex: 6

    var arrObjet = [{ name: "Alice", age: 20 }, { name: "Bob", age: 25 }, 
    { name: "Charlie", age: 30 }]

    function propertyAndValue(nameVal,ageVal){
        let newArray = []
        for(let i = 0; i< arrObjet.length; i++ ){
            if(arrObjet[i].name == nameVal  || arrObjet[i].age == ageVal){
                newArray[i] = arrObjet[i] //
            }
        }
            return newArray
    }

    console.log(propertyAndValue('Bob',20)) 
