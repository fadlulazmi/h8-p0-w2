function bandingkanAngka (angka1, angka2) {
    if (angka1<angka2){
        var result = true;
        return result
    }
    else if (angka1==angka2){
        var result2=-1
        return result2
    } 
    else {
        var result3=false
        return result3
    }
  }
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false