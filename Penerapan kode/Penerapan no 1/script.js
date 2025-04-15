const JENIS_NOMOR = {
    GENAP: 'GENAP',
    GANJIL: 'GANJIL'
};

let counter = 1;

//scan plat nomor
function checkPlat() {
    const customDate = parseInt(document.getElementById('customDate').value);
    const kodeWilayah = document.getElementById('kodeWilayah').value;
    const nomorPolisi = document.getElementById('nomorPolisi').value;
    const kodeAkhir = document.getElementById('kodeAkhir').value.toUpperCase();
    
    //just alert
    if (!customDate || !nomorPolisi || !kodeAkhir) {
        alert('Harap isi semua kolom yang telah disediakan!');
        return;
    }
    
    if (customDate < 1 || customDate > 30) {
        alert('Harap masukkan tanggal antara 1-30!');
        return;
    }
    
    if (!/^\d{1,4}$/.test(nomorPolisi)) {
        alert('Nomor polisi harus 1-4 digit angka!');
        return;
    }
    
    if (!/^[A-Za-z]+$/.test(kodeAkhir)) {
        alert('Kode akhir hanya boleh berisi huruf!');
        return;
    }
    
    //pengambilan digit akhir dari no polisi
    const platNomor = `${kodeWilayah} ${nomorPolisi} ${kodeAkhir}`;
    const digitAkhir = nomorPolisi.slice(-1);
    let kategoriPlat;
    
    //penentuan digit ganjil atau genap
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
    
    //nentuin ganjil atau genap dari tanggal yang udh diisi di kolom tanggal
    const peraturan = customDate % 2 === 0 ? JENIS_NOMOR.GENAP : JENIS_NOMOR.GANJIL;
    const statusLaluLintas = kategoriPlat === peraturan ? 'DIIZINKAN' : 'DILARANG';
    
    tambahKeTabel(platNomor, kategoriPlat, statusLaluLintas, customDate);
    
    //reset kolom setelah mendapat hasil dari plat nomor
    document.getElementById('nomorPolisi').value = '';
    document.getElementById('kodeAkhir').value = '';
}

function tambahKeTabel(platNomor, kategoriPlat, statusLaluLintas, tanggal) {
    const table = document.getElementById('result-table');
    const tbody = document.getElementById('result-body');
    const noData = document.getElementById('no-data');
    
    noData.style.display = 'none';
    table.style.display = 'table';
    
    //baris baru
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${counter++}</td>
        <td>${platNomor}</td>
        <td>${kategoriPlat}</td>
        <td class="status-${statusLaluLintas === 'DIIZINKAN' ? 'diizinkan' : 'dilarang'}">${statusLaluLintas}</td>
        <td>${tanggal}</td>
        <td><button class="hapus-btn" onclick="hapusBaris(this)">Hapus</button></td>
    `;
    
    tbody.appendChild(row);
}

function hapusBaris(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    
    if (document.getElementById('result-body').children.length === 0) {
        document.getElementById('no-data').style.display = 'block';
        document.getElementById('result-table').style.display = 'none';
        counter = 1;
    }
}

function resetData() {
    const konfirmasi = confirm('Apakah kamu yakin akan menghapus semua data?');
    
    if (konfirmasi) {
        document.getElementById('result-body').innerHTML = '';
        document.getElementById('no-data').style.display = 'block';
        document.getElementById('result-table').style.display = 'none';
        counter = 1;
    }
}
