// import sum from `./penjumlahan`;

// import function
const {sum, sum2} = require("./penjumlahan")
const {kurang, kurang2} = require("./pengurangan")
const {kali, kali2} = require("./perkalian")
const {bagi, bagi2} = require("./pembagian")
const {totalharga, totalharga2} = require("./totalharga")
const {quantitasbarang, quantitasbarang2} = require("./quantitasbarang")

// console.log(sum(10, 300))
// console.log(sum2(10, 300))
// console.log(kurang(10, 300))
// console.log(kurang2(10, 300))


// 1 hasil tambah inputan user (done)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('angka pertama yang mau dijumlahkan? ', (angka1) => {
    rl.question('angka kedua yang mau dijumlahkan? ', (angka2) => {
        const hasil = sum(parseInt(angka1), parseInt(angka2));
        console.log(`Hasil dari penjumlahan ${angka1} and ${angka2} adalah ${hasil} !`);
        
        rl.close();
    })
});

// 2 hasil kurang inputan user
const readline = require('readline');

const rf = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rf.question('angka pertama yang mau dikurangkan? ', (angka1) => {
    rf.question('angka kedua yang mau dikurangkan? ', (angka2) => {
        const hasil = kurang(parseInt(angka1), parseInt(angka2));
        console.log(`Hasil dari pengurangan ${angka1} and ${angka2} adalah ${hasil} !`);
        
        rf.close();
    })
});

// 3 hasil kali inputan user
const readline = require('readline');

const rg = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rg.question('angka pertama yang mau dikalikan? ', (angka1) => {
    rg.question('angka kedua yang mau dikalikan? ', (angka2) => {
        const hasil = kali(parseInt(angka1), parseInt(angka2));
        console.log(`Hasil dari perkalian ${angka1} and ${angka2} adalah ${hasil} !`);
        
        rg.close();
    })
});

// 4 hasil bagi inputan user
const readline = require('readline');

const rc = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rc.question('angka pertama yang mau dibagi? ', (angka1) => {
    rc.question('angka kedua yang mau dibagi? ', (angka2) => {
        const hasil = bagi(parseInt(angka1), parseInt(angka2));
        console.log(`Hasil dari pembagian ${angka1} and ${angka2} adalah ${hasil} !`);
        
        rc.close();
    })
});

// 5 hasil total harga kali quantitas barang
const readline = require('readline');

const rk = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rk.question('harga barang pertama? ', (angka1) => {
    rk.question('harga barang kedua? ', (angka2) => {
        const hasil = totalharga(parseInt(angka1), parseInt(angka2));
        console.log(`Hasil dari total harga ${angka1} and ${angka2} adalah ${hasil} !`);
rk.question('jumlah barang pertama? ', (angka1) => {
rk.question('jumlah barang kedua? ', (angka2) => {
        const hasil = quantitasbarang(parseInt(angka1), parseInt(angka2));
        console.log(`Hasil dari quantitasbarang ${angka1} and ${angka2} adalah ${hasil} !`);
rk.question('Total Harga adalah ? ', (angka1) => {
rk.question('Quantitas Barang adalah? ', (angka2) => {
        const hasil = kali(parseInt(angka1), parseInt(angka2));
        console.log(`Hasil dari total harga kali quantitas barang ${angka1} and ${angka2} adalah ${hasil} !`);

        rk.close();
    })})})
})})
});