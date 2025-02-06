function menurun (n) {
    console.log(n);
    let angka_berikutnya = n - 1;
    if (angka_berikutnya > 0 ){
        menurun(angka_berikutnya);
    } else {
        console.log("Selesai");
    }
}

menurun(8972)