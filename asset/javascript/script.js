function kirimData() {
    let nama = document.getElementById("nama").value;
    let nik = document.getElementById("nik").value;
    let jalur = document.getElementById("jalur").value;

    if (nama === "" || nik === "" || jalur === "") {
        alert("Semua field wajib diisi!");
        return;
    }
    if (nik.length !== 16) {
        alert("NIK harus 16 digit!");
        return;
    }
    document.getElementById("successPopup").style.display = "flex";
}
    function closePopup() {
    document.getElementById("successPopup").style.display = "none";
}