class kendaraan {
    constructor(totalroda, kecepatanperjam) {
        this.totalroda = totalroda;
        this.kecepatanperjam = kecepatanperjam
    }
}

class mobil extends kendaraan {
    berjalan(kecepatanbaru) {
        return this.kecepatanperjam + kecepatanbaru
    }
    
    roda(tambahroda) {
        return this.totalroda + tambahroda
    }
}

let mobilcepat = new mobil(4, 10);

console.log('Kecepatan Baru: ', mobilcepat.berjalan(10));
console.log('Total Roda: ', mobilcepat.roda(2))