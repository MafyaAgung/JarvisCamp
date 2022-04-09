// 3 Cara Membuat Function 
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function

// 1. Function Declaration
function Luas_Persegi(sisi = 0){
    result = sisi * sisi;
    console.log(result);
}
Luas_Persegi(10);
Luas_Persegi(9);

// 2. Function Expression
const Luas_Persegi_2 =function(sisi = 0){
    result = sisi * sisi;
    console.log(result);
}
Luas_Persegi_2(8);
Luas_Persegi_2(7);

// 3. Arrow Function
const Luas_Persegi_3 = (sisi) =>{
    result = sisi * sisi;
    console.log(result);
}
Luas_Persegi_3(6);
Luas_Persegi_3(5);