const generate = document.getElementById('generate');
generate.onclick = () => {


    let nomorPeserta = document.getElementById('nomorPeserta').value;

    let namaPeserta = document.getElementById('namaPeserta').value;
    namaPeserta = namaPeserta.toUpperCase()

    let tglLahir = document.getElementById('tglLahir').value;

    let blnLahir = document.getElementById('blnLahir').value;

    let thnLahir = document.getElementById('thnLahir').value;

    let kodePTN = document.getElementById('kodePTN').value;

    let namaPTN = document.getElementById('namaPTN').value;
    namaPTN = namaPTN.toUpperCase();


    let kodeProdi = document.getElementById('kodeProdi').value;

    let namaProdi = document.getElementById('namaProdi').value;
    namaProdi = namaProdi.toUpperCase();


    let tingkatPendidikan = document.querySelector('input[name="Tingkat pendidikan"]:checked')?.value;


    //////////-------------------------------------//////
    const pub_nomorPeserta = document.getElementById('pub-nomorPeserta');
    const pub_namaPeserta = document.getElementById('pub-namaPeserta');
    const pub_tglPeserta = document.getElementById('pub-tglPeserta');
    const pub_kodeNamaPTN = document.getElementById('pub-kodeNamaPTN');
    const pub_kodeNamaProdiTp = document.getElementById('pub-kodeNamaProdiTp');

    const public = document.getElementById('public');
    const body = document.body


    let state;
    const settings = document.getElementById('settings');
    if (
        tingkatPendidikan == undefined || nomorPeserta == "" || namaPeserta == "" || tglLahir == "" || blnLahir == "" || thnLahir == "" || kodePTN == "" || namaPTN == "" || kodeProdi == "" || namaProdi == ""
    ) {
        alert('Maaf terdapat kesalahan saat mengisi data!, Silahkan ulangi kembali')
        state = false;

    }else if (namaPeserta == "debugging"){
        pub_nomorPeserta.textContent = nomorPeserta;
        pub_namaPeserta.textContent = namaPeserta;
        pub_tglPeserta.textContent = tglLahir + ' - ' + blnLahir[0].toUpperCase() + blnLahir.slice(1, blnLahir.length) + ' - ' + thnLahir;

        pub_kodeNamaPTN.textContent = kodePTN + ' - ' + namaPTN;
        pub_kodeNamaProdiTp.textContent = kodeProdi + ' - ' + namaProdi + '  (' + tingkatPendidikan + ')'

        public.style.display = 'grid';
        settings.style.display = 'none';
        state = true;
        body.style.paddinTop = '0';
        body.style.paddingBottom = '0';
        body.style.paddingLeft = '0';
        body.style.paddingRight = '0';
    } else {

        pub_nomorPeserta.textContent = nomorPeserta;
        pub_namaPeserta.textContent = namaPeserta;
        pub_tglPeserta.textContent = tglLahir + ' - ' + blnLahir[0].toUpperCase() + blnLahir.slice(1, blnLahir.length) + ' - ' + thnLahir;

        pub_kodeNamaPTN.textContent = kodePTN + ' - ' + namaPTN;
        pub_kodeNamaProdiTp.textContent = kodeProdi + ' - ' + namaProdi + '  (' + tingkatPendidikan + ')'

        public.style.display = 'grid';
        settings.style.display = 'none';
        state = true;
        body.style.paddinTop = '0';
        body.style.paddingBottom = '0';
        body.style.paddingLeft = '0';
        body.style.paddingRight = '0';

    }

    if (state) {
        setTimeout(() => {
            alert("NB : Untuk kembali ke section sebelumnya klik pada kotak berwana hijau dibagian paling bawah");
        }, 3000);

    } else {
        
    }

}

const reset = document.getElementById('reset');

reset.onclick = () => {
    window.location.reload()
}

const button = document.getElementById('button');

button.addEventListener('click', function () {
    const public = document.getElementById('public');

    const settings = document.getElementById('settings');

    public.style.display = 'none';
    settings.style.display = 'flex';
})