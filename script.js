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

    const backButton = document.getElementById('button');
    let state;
    const settings = document.getElementById('settings');
    if (
        tingkatPendidikan == undefined || nomorPeserta == "" || namaPeserta == "" || tglLahir == "" || blnLahir == "" || thnLahir == "" || kodePTN == "" || namaPTN == "" || kodeProdi == "" || namaProdi == ""
    ) {
        alert('Maaf terdapat kesalahan saat mengisi data!, Silahkan ulangi kembali')
        state = false;

    } else if (namaPeserta == "debugging") {
        pub_nomorPeserta.textContent = nomorPeserta;
        pub_namaPeserta.textContent = namaPeserta;
        pub_tglPeserta.textContent = tglLahir + ' - ' + blnLahir[0].toUpperCase() + blnLahir.slice(1, blnLahir.length) + ' - ' + thnLahir;

        pub_kodeNamaPTN.textContent = kodePTN + ' - ' + namaPTN;
        pub_kodeNamaProdiTp.textContent = kodeProdi + ' - ' + namaProdi + '  (' + tingkatPendidikan + ')'

        public.style.display = 'grid';
        settings.style.display = 'none';
        state = true;
        body.style.paddingTop = '0';
        body.style.paddingBottom = '0';
        body.style.paddingLeft = '0';
        body.style.paddingRight = '0';
        body.style.height = '100vh';
        body.style.width = '100%';
        body.style.overflow = 'hidden';
        body.style.backgroundImage = 'none';

    } else {

        pub_nomorPeserta.textContent = nomorPeserta;
        pub_namaPeserta.textContent = namaPeserta;
        pub_tglPeserta.textContent = tglLahir + ' - ' + blnLahir[0].toUpperCase() + blnLahir.slice(1, blnLahir.length) + ' - ' + thnLahir;

        pub_kodeNamaPTN.textContent = kodePTN + ' - ' + namaPTN;
        pub_kodeNamaProdiTp.textContent = kodeProdi + ' - ' + namaProdi + '  (' + tingkatPendidikan + ')'

        public.style.display = 'flex';
        public.style.height = '100%';
        public.style.width = '100%';
        settings.style.display = 'none';
        state = true;
        body.style.paddingTop = '0';
        body.style.paddingBottom = '0';
        body.style.paddingLeft = '0';
        body.style.paddingRight = '0';
        body.style.height = '100vh';
        body.style.width = '100vw';
        body.style.overflow = 'visible';
        body.style.backgroundImage = 'none';
        backButton.style.display = 'flex'

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
    const body = document.body

    body.style.display='flex';
    body.style.padding='16px'
    body.style.backgroundImage='url(./image/background.jpg)'
    public.style.display = 'none';
    settings.style.display = 'flex';
    settings.style.background = 'rgba(0, 0, 0, 0.58)';
    button.style.display='none';
})

//-----------Mobile Generate------------------------//
const generateMobile = document.getElementById('mb-gen-btn');

generateMobile.onclick = () => {
    let mbNumber = document.getElementById('mb-no').value;
    let mbName = document.getElementById('mb-nm').value;
    let mbDate = document.getElementById('mb-dt').value;
    let mbMonth = document.getElementById('mb-mo').value;
    let mbYear = document.getElementById('mb-yr').value;
    let mbCcode = document.getElementById('mb-cc').value;
    let mbCname = document.getElementById('mb-cn').value;
    let mbMcode = document.getElementById('mb-mc').value;
    let mbMname = document.getElementById('mb-mn').value;

    let tingkatPendidikan = document.querySelector('input[name="mbTingkat pendidikan"]:checked')?.value;
    const body = document.body;
    ///////////
    
    //Out//
    const mNomorP = document.getElementById('mb-pub-nomorPeserta');
    const mNamaP = document.getElementById('mb-pub-namaPeserta');
    const mTanggalP = document.getElementById('mb-pub-tglPeserta');
    const mNamaPt = document.getElementById('mb-pub-kodeNamaPTN');
    const mNamaPr = document.getElementById('mb-pub-kodeNamaProdiTp');

    const mbPublic = document.getElementById('public-mobile');
    const settingsMb = document.getElementById('settings-mobile');

    let state;
    if (
        tingkatPendidikan == undefined || mbNumber == "" || mbName == "" || mbDate == "" || mbMonth == "" || mbYear == "" || mbCcode == "" || mbCname == "" || mbMcode == "" || mbMname == ""
    ) {
        alert('Maaf terdapat kesalahan saat mengisi data!, Silahkan ulangi kembali')
        state = false;

    }else {

        mNomorP.textContent = mbNumber;
        mNamaP.textContent = mbName;



        mTanggalP.textContent = mbDate + ' - ' + mbMonth[0].toUpperCase() + mbMonth.slice(1, blnLahir.length) + ' - ' + mbYear;

        mNamaPt.textContent = mbCcode + ' - ' + mbCname;
        mNamaPr.textContent = mbMcode + ' - ' + mbMname + '  (' + tingkatPendidikan + ')'

        mbPublic.style.display = 'flex';
        settingsMb.style.display = 'none';
        state = true;
        body.style.paddingTop = '16px';
        body.style.paddingBottom = '16px';
        body.style.paddingLeft = '16px';
        body.style.paddingRight = '16px';
        body.style.height = '';
        body.style.width = '100%';
        body.style.overflow = 'auto';
        body.style.backgroundImage = 'none';
        body.style.background='RGB(136, 159, 205)'
        body.style.background='linear-gradient(90deg, rgba(136, 159, 205, 1) 31%, rgba(121, 191, 201, 1) 71%)';

    }

    if (state) {
        setTimeout(() => {
            alert("NB : Untuk kembali ke section sebelumnya klik pada kotak berwana hijau dibagian paling bawah");
        }, 3000);
    } else{

    }


}

const mbBack = document.getElementById('mb-button');

mbBack.onclick = () => {
    const body = document.body;
    const mbPublic = document.getElementById('public-mobile');
    const settingsMb = document.getElementById('settings-mobile');

    mbPublic.style.display='none';
    settingsMb.style.display='flex';
    body.style.backgroundImage='url(./image/background.jpg)'
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat ='no-repeat';
    settingsMb.style.height='100vh';
    body.style.padding='0px';
    body.style.overflow = 'hidden';
}

const mbReset = document.getElementById('mb-res-btn');

mbReset.onclick = () => {
    window.location.reload()
}