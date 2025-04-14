//array
const daftarPlatKendaraan = ['B 2905 NJK', 'AD 2110 GG', 'D 1226 R', 'P 5475 HAI'];
const tanggal = 12;
const JENIS_NOMOR = {
  GENAP: 'genap',
  GANJIL: 'ganjil'
};


daftarPlatKendaraan.forEach(kendaraan => {
  const [kodeWilayah, nomorPolisi, kodeAkhir] = kendaraan.split(' ');
  const digitAkhir = nomorPolisi.slice(-1);
  let kategoriPlat;

  switch (digitAkhir) {
    case '0':
    case '2':
    case '4':
    case '6':
    case '8':
      kategoriPlat = JENIS_NOMOR.GENAP;
      break;
    case '1':
    case '3':
    case '5':
    case '7':
    case '9':
      kategoriPlat = JENIS_NOMOR.GANJIL;
      break;
  }

  const peraturan = tanggal % 2 === 0 ? JENIS_NOMOR.GENAP : JENIS_NOMOR.GANJIL;
  const statusLaluLintas = kategoriPlat === peraturan ? 'DIIZINKAN' : 'DILARANG';

  // result ganjil atau genap
  console.log(`Kendaraan ${kendaraan} tergolong plat ${kategoriPlat} sehingga ${statusLaluLintas} melintas di jalur Puncak pada tanggal ${tanggal}`);
});