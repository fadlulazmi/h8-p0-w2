//soal nomor 1
console.log('-Soal nomor 1--------------')
console.log('LOOPING PERTAMA')
var i=1
while (i<=20) {
    if (i%2 === 0){
        console.log(i + ' - I love coding')
    }
i++
}

console.log('LOOPING KEDUA')
var i=20
while (i>=1) {
    if (i%2 === 0){
        console.log(i + ' - I will become fullstack developer')
    }
i--
}

//soal nomor 2
console.log('-Soal nomor 2--------------')
console.log('LOOPING PERTAMA')
for (var i=1; i<=20; i++) {
    console.log (i + ' - I love coding')
}

console.log('LOOPING KEDUA')
for (var i=20; i>=1; i--) {
    console.log (i + ' - I will become fullstack developer')
}

//soal nomor 3
console.log('-Soal nomor 3--------------')
console.log('- 3.1 & 3.2 --------------')
for (var i=1; i<=100; i++) {
    if (i%2 === 0){
        console.log(i + ' GENAP')
    } else if (i%1 === 0) {
        console.log (i + ' GANJIL')
    }
}

console.log('- 3.3 & 3.4 --------------')

for (var x=1; x<=100; x++){
    if (x%3 === 0){
        
        console.log( x + ' kelipatan 3')
    } else {
        console.log(x)
    }
    
}
console.log('--------------------------------------------')
for (var x=1; x<=100; x++){
    if (x%6 === 0){
        
        console.log( x + ' kelipatan 6')
    } else {
        console.log(x)
    }
    
}
console.log('--------------------------------------------')
for (var x=1; x<=100; x++){
    if (x%10 === 0){
        
        console.log( x + ' kelipatan 10')
    } else {
        console.log(x)
    }
    
}