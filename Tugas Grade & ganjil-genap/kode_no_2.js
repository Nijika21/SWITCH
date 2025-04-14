//daftar siswa
const daftarSiswa = [
    { nama: 'Gani', nilai: 98 },
    { nama: 'Dimas', nilai: 85 },
    { nama: 'Mahansa', nilai: 70 },
    { nama: 'Fhabil', nilai: 55 },
]

//kode yang akan dijalankan
function tentukanGrade(nilai) {
    switch (true) {
        case nilai >= 90:
            return 'A';
        case nilai >= 80:
            return 'B';
        case nilai >= 70:
            return 'C';
        case nilai >= 60:
            return 'D';
        default:
            return 'E';
    }
}

//result grade
daftarSiswa.forEach(siswa => {
    const grade = tentukanGrade(siswa.nilai);
    console.log(`${siswa.nama}: Nilai ${siswa.nilai} = Grade ${grade}`);
})