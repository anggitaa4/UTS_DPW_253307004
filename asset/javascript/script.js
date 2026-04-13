function showToast(pesan) {
    const toast = document.getElementById("toast");
    toast.innerText = pesan;
    toast.style.opacity = 1;

    setTimeout(() => {
        toast.style.opacity = 0;
    }, 3000);
}

function kirimData() {
    let nama = document.getElementById("nama").value;
    let nik = document.getElementById("nik").value;
    let jalur = document.getElementById("jalur").value;

    if (nama === "" || nik === "" || jalur === "") {
        showToast("Semua field wajib diisi!");
        return;
    }

    if (nik.length !== 16) {
        showToast("NIK harus 16 digit!");
        return;
    }

    showToast("Pendaftaran berhasil!");

    document.getElementById("formDaftar").reset();
}