const str = "Goodbye World!";
console.log(str);
let result;

result = str.substring(0,7);
console.log("Hasil dari substring                       : " + result);

result = str.substr(0,4);
console.log("Hasil dari substr                          : " + result);

result = str.replace("Goodbye", "Hello");
console.log("Hasil dari replace                         : " + result);

result = str.toUpperCase();
console.log("Hasil dari toUpperCase                     : " + result);

result = str.toLowerCase();
console.log("Hasil dari toLowerCase                     : " + result);

result = str.length;
console.log(`Jumlah Karakter dari kata di atas adalah   : ${result}`)

