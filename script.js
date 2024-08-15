function hitungBMI() {
    let jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
    let beratBadan = document.getElementById('bb').value;
    let usia = document.getElementById('usia').value;
    let tinggiBadan = document.getElementById('tb').value;
    let warningMessage = document.getElementById('warningMessage');

    // Validasi input
    if (!jenisKelamin) {
        warningMessage.innerText = "Tolong pilih jenis kelamin terlebih dahulu.";
        return;
    } else if (!beratBadan) {
        warningMessage.innerText = "Tolong input berat badan terlebih dahulu.";
        return;
    } else if (!usia) {
        warningMessage.innerText = "Tolong input usia terlebih dahulu.";
        return;
    } else if (!tinggiBadan) {
        warningMessage.innerText = "Tolong input tinggi badan terlebih dahulu.";
        return;
    } else {
        warningMessage.innerText = "";
    }

    // Konversi dan perhitungan BMI
    beratBadan = parseFloat(beratBadan);
    let tinggiBadanCm = parseFloat(tinggiBadan);
    let tinggiBadanM = tinggiBadanCm / 100; 
    const bmi = (beratBadan / (tinggiBadanM * tinggiBadanM)).toFixed(1);

    let hasil = "";
    let keterangan = "";

    if (bmi < 18.5) {
        hasil = "Kekurangan Berat Badan";
        keterangan = "Anda berada dalam kategori kekurangan berat badan. Untuk meningkatkan berat badan ke level yang sehat, dianjurkan untuk mengonsumsi lebih banyak kalori, memilih makanan padat gizi, dan melakukan latihan kekuatan untuk membangun otot.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        hasil = "Normal (Ideal)";
        keterangan = "Anda berada dalam kategori berat badan normal atau ideal. Pertahankan gaya hidup sehat dengan menjaga pola makan seimbang dan rutin berolahraga.";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        hasil = "Kelebihan Berat Badan";
        keterangan = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.";
    } else {
        hasil = "Kegemukan (Obesitas)";
        keterangan = "Anda berada dalam kategori obesitas. Obesitas meningkatkan risiko berbagai penyakit serius seperti diabetes, hipertensi, dan penyakit jantung.";
    }

    document.getElementById('hasil').innerHTML = `
        <div class="hasil-container">
            <h2>${hasil}</h2>
            <div class="bmi-value">${bmi}</div>
            <div class="bmi-status">Anda dalam keadaan ${hasil.toLowerCase()}</div>
            <a class="download-btn">Download Hasil BMI</a>
            <p>${keterangan}</p>

            <p><strong>Saran:</strong> ${
                hasil === "Normal (Ideal)" 
                ? "Tetap pertahankan gaya hidup sehat Anda!"
                : "Disarankan untuk konsultasi dengan ahli gizi atau dokter."
            }</p>
        </div>
    `;
}

// Event listener untuk tombol reset
document.getElementById('resetButton').addEventListener('click', function() {
    // Reset pesan peringatan
    document.getElementById('warningMessage').innerText = "";

    // Reset hasil BMI
    document.getElementById('hasil').innerHTML = `
        <div class="hasil-container">
            <p>Hasil BMI akan ditampilkan disini</p>
        </div>
    `;
});