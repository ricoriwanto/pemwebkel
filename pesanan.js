document.getElementById('pemesananForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const halteAwal = document.getElementById('halte-awal').value;
    const halteTujuan = document.getElementById('halte-tujuan').value;
    const jumlahTiket = document.getElementById('jumlah-tiket').value;
  
    if (!halteAwal || !halteTujuan || !jumlahTiket) {
      alert('Harap lengkapi semua data!');
      return;
    }
  
    const pemesananData = { halteAwal, halteTujuan, jumlahTiket };
    const pemesananList = JSON.parse(localStorage.getItem('pemesananTiketList')) || [];
    pemesananList.push(pemesananData);
    localStorage.setItem('pemesananTiketList', JSON.stringify(pemesananList));
  
    alert('Data berhasil disimpan!');
    event.target.reset();
  });
  document.getElementById('jumlah-tiket').addEventListener('input', function () {
    const hargaPerTiket = 50000;
    const jumlahTiket = parseInt(this.value, 10) || 0;
    const totalHarga = hargaPerTiket * jumlahTiket;
    document.getElementById('harga-tiket').value = `Rp ${totalHarga.toLocaleString('id-ID')}`;
  });
  
