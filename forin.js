const biodata = { Nama:"Alysse Orvino Rayhan",Kelas: " Dari 11 RPL",Umur: " dan Saya berumur 17 tahun"};
let output = "";

for ( let data in biodata) {
    output += biodata[data];
}

console.log(output)