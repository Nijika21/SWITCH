// array simpan data input
let daftarSiswa = [];

// soal no 2 dari pak diki :)
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

function tambahSiswa() {
    const namaInput = document.getElementById('nama');
    const nilaiInput = document.getElementById('nilai');
    
    const nama = namaInput.value.trim();
    const nilai = parseInt(nilaiInput.value);
    
    // alert
    if (nama === '') {
        alert('Nama tidak boleh kosong!');
        return;
    }
    
    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        alert('Nilai harus antara 0-100!');
        return;
    }
    
    // push value ke array
    const grade = tentukanGrade(nilai);
    daftarSiswa.push({ nama, nilai, grade });
    
    updateTabel();
    
    // reset input
    namaInput.value = '';
    nilaiInput.value = '';
    namaInput.focus();
}

// update tabel
function updateTabel() {
    const tbody = document.getElementById('hasilBody');
    const gradeInfo = document.getElementById('gradeInfo');
    
    //empty
    tbody.innerHTML = '';
    
    // Isi tabel dengan data
    daftarSiswa.forEach((siswa, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td data-label="No">${index + 1}</td>
            <td data-label="Nama">${siswa.nama}</td>
            <td data-label="Nilai">${siswa.nilai}</td>
            <td data-label="Grade">${siswa.grade}</td>
            <button onclick="hapusSiswa(${index})">Hapus</button>
        `;
        
        tbody.appendChild(row);
    });
    
    // Update info
    if (daftarSiswa.length > 0) {
        gradeInfo.innerHTML = `<p>Total siswa: ${daftarSiswa.length}</p>`;
    } else {
        gradeInfo.innerHTML = '<p>Belum ada data siswa</p>';
    }
}

//  hapus data
function hapusSiswa(index) {
    daftarSiswa.splice(index, 1);
    updateTabel();
}

//  reset semua data
function resetData() {
    if (confirm('Apakah Anda yakin ingin menghapus semua data?')) {
        daftarSiswa = [];
        updateTabel();
    }
}

// optimize
document.addEventListener('DOMContentLoaded', updateTabel);