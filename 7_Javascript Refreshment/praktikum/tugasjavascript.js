var a = 5;
let b = "Kampus Merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log (
        "perkenalkan nama saya" +  nama + " no urut" +  a + " sekarang sedang mengikuti" +  b + " berasal dari" +  asal 
    );
}

if (terdaftar == true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

// a = b;
// // nama = b;

// console.log("asal diakses =" +asal);

// console.log(lengkap_arr[2]);
// console.log("a adalah = " +a);
// console.log("b adalah = " +b);
// perkenalan();

// const foo = ['Budi', 'Sita', 'Ayu'];
// const [A, B, C] = foo;

// let bdays = ['10-17', '05-19', '20-19'];
// bdays.splice('10/17', '05/19', '20/19');
// console.log(bdays);

// let value = [1,2,3,4,5,6];
// let map1 = value.map(x => x*2);
// console.log(map1);

let arr = [1.5, 2.56, 5.1, 12.33];
let arr1 = Math.ceil(arr);
console.log(arr1);