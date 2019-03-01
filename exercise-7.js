//Soal nomor 1

console.log ('Soal nomor 1')

function stars(number) {
    var i = 0
    var result = ''

    while (i<number) {
        result = result + '*'
        if (i<number - 1){
            result = result + '\n'
        }
    i= i+1  
    }
return result
}

console.log (stars(5))

//Soal nomor 2

console.log ('Soal nomor 2')


var i = 0
var result2= ''

while (i<5) {
    var inside= ''
    var j = 0
    while (j<5) {
        inside = inside + '*'
        j= j+1
    }
result2 = result2 + inside + '\n'
i= i+1  
}



console.log (result2)

//Soal nomor 3

console.log ('Soal nomor 3')

var result3=''
for (var i = 0; i < 5; i++){
    result3 += '*'
    console.log (result3)
}


// var i=0
// var result3 = ''

// while (i<5) {
//     var inside= ''
//     /*var j = 0
//     while (j<5) {
//         inside = inside + '*'
//         j= j+1
//     }*/
// result3 = result3 /*+ inside */+ '\n'
// i= i+1  
// }



// console.log (result3)

