const Keranjang = ["Susu", "Gula", "Telur"];
console.log(Keranjang);
Keranjang.push("Roti");
console.log(Keranjang);
Keranjang.unshift("Kopi");
console.log(Keranjang);
Keranjang.pop();
console.log(Keranjang);
Keranjang.shift();
console.log(Keranjang);

for (let i = 0; i < Keranjang.length; i++) {
  console.log(1 + i + ". " + Keranjang[i]);
}

const produk = [
  { nama: "Minyak", harga: 30000 },
  { nama: "Beras" , harga: 50000 },
];

produk.push({ nama: "Garam", harga: 10000 });
produk.pop();
console.table(produk);

function tambahProduk(nama, harga) {
  produk.push({ nama: nama, harga: harga });
}
tambahProduk("Susu", 20000);
console.table(produk);

function hitungTotal() {
  let total = 0;
  for (let i = 0; i < produk.length; i++) {
    total += produk[i].harga;
  }
  return total;
}
console.log(hitungTotal());

if (produk.length > 0) {
  console.log("Produk Tersedia");
} else {
  console.log("Produk Kosong");
}

const hari = 3;
switch (hari) {
  case 0:
    console.log("Minggu");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;

  default:
    break;
}