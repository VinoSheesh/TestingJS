const brands = ["SMKN6","VISKA","Surakarta"];
//menggunakan for sebagai metode perulangan
let i = 0;
let text = "";
for(;brands[i];i++){
 text += brands[i];
  }
console.log( text );
//menggunakan while sebagai metode perulangan
i = 0;
text = "";
while(brands[i]){
 text += brands[i];
 i++; }
console.log( text );