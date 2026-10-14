function hitungTotal() {
    //Mengambil nilai dari HTML
    let nama = document.getElementById("nama").value;
    let harga = document.getElementById("produk").value;
    let jumlah = document.getElementById("jumlah").value;
    //Mengubah string menjadi angka agar bisa dihitung
    harga = Number(harga);
    jumlah = Number(jumlah);
    //Menghitung total
    let total = harga * jumlah;
    //Menghitung diskon
    let diskon = 0;
    if(total >= 50000){
        diskon = total * 0.10;
    }
    //Menghitung total bayar
    let totalbayar = total - diskon;
    
    //Menampilkan hasil ke HTML
    document.getElementById("hasilNama").innerHTML = nama;
    document.getElementById("totalHarga").innerHTML = 
    //ubah number menjadi string agar bisa ditampilkan
    total.toLocaleString("id-ID");

    document.getElementById("diskon").innerHTML = 
    diskon.toLocaleString("id-ID");

    document.getElementById("totalBayar").innerHTML = 
    totalbayar.toLocaleString("id-ID");
}