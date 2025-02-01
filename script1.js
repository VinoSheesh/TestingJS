var kawasan = "";
var luas = 0;
var fasilitas = "";

console.log("Selamat datang di aplikasi seleksi rumah impian!");
console.log("Silahkan jawab pertanyaan pertanyaan berikut..");
kawasan = prompt("Apakah rumah berada di kawasan rawan banjir?");
switch(kawasan) {
    case "ya":
        console.log("Kamu gagal memenuhi kriteria!");
        break;
    case "tidak":
        console.log("Kawasan tidak rawan banjir,lanjut ke kriteria selanjutnya");
        kawasan = prompt("Apakah rumah berada di kawasan rawan longsor?");
        switch(kawasan) {
            case "ya":
                console.log("Kamu gagal memenuhi kriteria!");
                break;
            case "tidak":
                console.log("Kawasan tidak rawan longsor,lanjut ke kriteria selanjutnya");
                kawasan = prompt("Apakah rumah berada di kawasan industri/pabrik?");
                switch(kawasan) {
                    case "ya":
                        console.log("Kamu gagal memenuhi kriteria!");
                        break;
                    case "tidak":
                        console.log("Kawasan tidak rawan longsor,lanjut ke kriteria selanjutnya");
                        luas = parseFloat(prompt("Berapa luas tanahnya? (tulis dalam meter)"));
                        if (luas >= 800){
                            console.log("Luas bangunan memenuhi kriteria,lanjut ke fasilitas selanjutnya");
                            luas = parseFloat(prompt("Berapa luas bangunannya? (tulis dalam meter)"));
                                    if(luas >= 400){
                                        console.log("Luas bangunan memenuhi kriteria,lanjut ke fasilitas");
                                        fasilitas = prompt ("apakah rumah memiliki fasilitas kolam renang?(ya/tidak)");
                                        switch(fasilitas){
                                            case "tidak":
                                                console.log("rumah tidak memenuhi kriteria");
                                                break;
                                            case "ya":
                                                console.log("ada fasilitas kolam renang,lanjut ke fasilitas selanjutnya");
                                                fasilitas = prompt("apakah rumah memiliki fasilitas gym pribadi?(ya/tidak)");
                                                switch (fasilitas) {
                                                    case "tidak" :
                                                        console.log("rumah tidak memenuhi kriteria");
                                                        break;
                                                    case "ya" :
                                                        console.log("semua kriteria memenuhi syarat,silahkan membeli rumah");
                                                        
                                                    default:
                                                        console.log("gunakan satuan meter!")
                                                }
                                                default:
                                        console.log("gunakan satuan meter!");
                                        }   
                            } else {
                                console.log("Luas bangunan tidak memenuhi kriteria");
                            }
                        } else {
                            console.log("Luas tanah tidak memenuhi kriteria");
                        }
                    default:
                        console.log("pilih antara iya/tidak!");   
                }
            default:
                console.log("pilih antara iya/tidak!");
        }
    default:
        console.log("pilih antara iya/tidak!");
}