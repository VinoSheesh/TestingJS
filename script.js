var kawasan = "";
var luasan = 0;
var fasilitas = "";

console.log("selamat datang di aplikasi seleksi kriteria rumah !");
console.log("silahkan isi kriteria rumah dibawah ini !");

kawasan = prompt ("apakah rumah berada di kawasan rawan banjir? (ya/tidak)");
    if (kawasan == "ya") {
        console.log("skip wak rawan banjir");
    } else if (kawasan == "tidak") {
        console.log("lanjutkan pencarianmu");
        kawasan = prompt ("apakah rumah berada di kawasan rawan longsor? (ya/tidak)");
        if (kawasan == "ya") {
            console.log("skip dulu deh rawan longsor,ngeri euy");
        } else if (kawasan == "tidak") {
            console.log("mantap,lanjut ke kriteria selanjutnya bro!");
            kawasan = prompt ("apakah rumah berada di kawasan industri/pabrik? (ya/tidak)");
            if (kawasan == "ya") {
                console.log ("skip la,banyak polusi,paru paru tidak smile woo");
            } else if (kawasan == "tidak") {
                console.log ("mantap,paru paru smile,lanjut gas ke kriteria selanjutnya");
                luasan = prompt ("Berapa luasnya? (tulis dalam ukuran meter)");
                if (luasan >= 800) {
                    console.log("mantap,memenuhi kriteria,lanjutkan!!");
                    luasan = prompt ("berapa luas bangunannya (tuliskan dalam meter)");
                    if (luasan >= 400) {
                        console.log("masukk kriteriaaa mantap jiwaa,lanjut ke selanjutnya ye");
                        fasilitas = prompt("Apakah rumah tersebut memiliki fasilitas kolam renang? (ya/tidak)");
                        if (fasilitas == "ya") {
                            console.log("mantap,langsung gas ke selanjutnya");
                            fasilitas = prompt("Apakah rumah tersebut memiliki fasilitas parkiran luas? (ya/tidak)");
                            if (fasilitas == "ya") {
                                console.log("mantap,langsung gas ke kriteria terakhir");
                                fasilitas = prompt ("apakah rumah baru tersebut memiliki kebun di belakang rumah? (ya/tidak)");
                                if (fasilitas == "ya") {
                                    console.log("Selamat,semua kriteria cocok,anda dapat membeli rumah yang anda inginkan");
                                    console.log("silahkan membeli rumah tersebut");
                                } else if (fasilitas == "tidak") {
                                    console.log("skip,karena tidak memiliki kebun belakang");
                                } else {
                                    console.log("jawaban harus iya/tidak!");
                                }
                            } else {
                                console.log("jawaban harus iya/tidak!");
                            }
                        } else {
                            console.log("jawaban harus iya/tidak!");
                        }
                    } else {
                        console.log("jawaban harus iya/tidak!");
                    }
                } else {
                    console.log("luas minimal 800 meter!");
                }
            } else {
                console.log("luas minimal 400 meter!");
            }
        } else {
            console.log("jawaban harus iya/tidak!");
        }
    } else {
        console.log("jawaban harus iya/tidak!");
    }