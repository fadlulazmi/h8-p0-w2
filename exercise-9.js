//Soal nomor 1
console.log ('Soal nomor 1')

function shoutOut(){
    var greetings = 'Halo Function!'
    return greetings
}


console.log(shoutOut()) // Menampilkan "Halo Function!" di console

//Soal nomor 2
console.log('Soal nomor 2')


function calculateMultiply(num1,num2){
    
  
    return num1*num2
    
}
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian)

//Soal nomor 3
console.log('Soal nomor 3')

function processSentence(){
    var fullSentence = 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!'
    return fullSentence
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"