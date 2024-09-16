document.querySelector('.signup-form').addEventListener('submit', function(event) {
    // Ambil nilai input dari form
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Regex untuk memvalidasi nomor telepon (hanya angka)
    const phoneRegex = /^[0-9]+$/;
    
    // Regex sederhana untuk memvalidasi email (memastikan ada @ dan .domain)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Cek apakah semua input sudah diisi
    if (!firstName || !lastName || !phoneNumber || !email || !password) {
        alert('Please fill in all the fields.');
        event.preventDefault(); // Stop jika ada yang kosong
        return;
    }

    // Cek apakah nomor telepon valid (hanya angka)
    if (!phoneRegex.test(phoneNumber)) {
        alert('Phone number must contain only digits.');
        event.preventDefault(); // Stop jika nomor telepon tidak valid
        return;
    }

    // Cek apakah email valid
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Stop jika email tidak valid
        return;
    }

    // Jika semua validasi lolos, lanjutkan ke halaman login
    window.location.href = 'login.html';
});

// Memastikan input nomor telepon hanya menerima angka saat diketik
document.getElementById('phone-number').addEventListener('input', function(event) {
    // Menghapus semua karakter yang bukan angka
    this.value = this.value.replace(/[^0-9]/g, '');
});
