function updateTable() {
    const tableBody = document.getElementById('pemesanan-table-body');
    tableBody.innerHTML = ''; // Kosongkan tabel sebelum memuat data baru
  
    // Ambil data dari localStorage
    const pemesananList = JSON.parse(localStorage.getItem('pemesananTiketList')) || [];
  
    
    pemesananList.forEach((pemesanan, index) => {
      const totalHarga = pemesanan.jumlahTiket * 50000; // Hitung total harga
      
      
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${pemesanan.halteAwal}</td>
        <td>${pemesanan.halteTujuan}</td>
        <td>${pemesanan.jumlahTiket}</td>
        <td>Rp ${totalHarga.toLocaleString('id-ID')}</td> <!-- Format harga dalam Rupiah -->
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Event listener untuk tombol "Hapus Semua"
  document.getElementById('hapus-semua').addEventListener('click', function() {
    if (confirm('Apakah Anda yakin ingin menghapus semua data pemesanan?')) {
      localStorage.removeItem('pemesananTiketList'); // Hapus data dari localStorage
      updateTable(); // Perbarui tabel
      alert('Semua data berhasil dihapus.');
    }
  });

  // Muat data tabel saat halaman dibuka
  document.addEventListener('DOMContentLoaded', updateTable);
  
