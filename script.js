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

    let keterangan = document.querySelector('input[name="keterangan"]:checked')?.value;

    if (keterangan == 'lulus') {
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

            public.style.display = 'flex';
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

    } else if (keterangan == 'tidak lulus') {
        const tidakLulus = document.getElementById('tidak-lolos-desktop')
        const namaTidakLulus = document.getElementById('nama-tidak-lulus');
        const nomorTidakLulus = document.getElementById('nomorTidakLulus');
        const body = document.body;


        namaTidakLulus.textContent = namaPeserta
        nomorTidakLulus.textContent = nomorPeserta
        namaTidakLulus.style.fontWeight = 'bold'
        nomorTidakLulus.style.fontWeight = 'bold'
        tidakLulus.style.display = 'flex';
        public.style.display = 'none';
        settings.style.display = 'none';
        body.style.backgroundImage = 'none';
        body.style.background = 'RGB(136, 159, 205)'
        body.style.background = 'linear-gradient(135deg, rgba(136, 159, 205, 1) 31%, rgba(121, 191, 201, 1) 71%)';
    }else{
        alert('pilih ketrangan lulus!')
    }
    //////////-------------------------------------//////

}
const backDesktop = document.getElementById('back-desktop');

backDesktop.onclick = () => {
    const public = document.getElementById('public');
    const settings = document.getElementById('settings');
    const tidakLulus = document.getElementById('tidak-lolos-desktop')
    const body = document.body

    body.style.display = 'flex';
    body.style.padding = '16px'
    body.style.backgroundImage = 'url(./image/background.jpg)'
    public.style.display = 'none';
    settings.style.display = 'flex';
    settings.style.background = 'rgba(0, 0, 0, 0.58)';
    button.style.display = 'none';
    tidakLulus.style.display = 'none';
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

    body.style.display = 'flex';
    body.style.padding = '16px'
    body.style.backgroundImage = 'url(./image/background.jpg)'
    public.style.display = 'none';
    settings.style.display = 'flex';
    settings.style.background = 'rgba(0, 0, 0, 0.58)';
    button.style.display = 'none';
})

//-----------Mobile Generate------------------------//
const generateMobile = document.getElementById('mb-gen-btn');

generateMobile.onclick = () => {
    let mbNumber = document.getElementById('mb-no').value;
    let mbName = document.getElementById('mb-nm').value;
    mbName = mbName.toUpperCase();
    let mbDate = document.getElementById('mb-dt').value;
    let mbMonth = document.getElementById('mb-mo').value;
    mbMonth = mbMonth.slice(0, 1).toUpperCase() + mbMonth.slice(1, mbMonth.length);
    let mbYear = document.getElementById('mb-yr').value;
    let mbCcode = document.getElementById('mb-cc').value;
    let mbCname = document.getElementById('mb-cn').value;
    mbCname = mbCname.toUpperCase();
    let mbMcode = document.getElementById('mb-mc').value;
    let mbMname = document.getElementById('mb-mn').value;
    mbMname = mbMname.toUpperCase();

    const mbPublic = document.getElementById('public-mobile');
    const settingsMb = document.getElementById('settings-mobile');
    const tidakLulusMb = document.getElementsByName('tidak-lolos-mobile');
    let tingkatPendidikan = document.querySelector('input[name="mbTingkat pendidikan"]:checked')?.value;
    const body = document.body;
    ///////////
    let keterangan = document.querySelector('input[name="keterangan"]:checked')?.value;

    if (keterangan == 'lulus') {
        const mNomorP = document.getElementById('mb-pub-nomorPeserta');
        const mNamaP = document.getElementById('mb-pub-namaPeserta');
        const mTanggalP = document.getElementById('mb-pub-tglPeserta');
        const mNamaPt = document.getElementById('mb-pub-kodeNamaPTN');
        const mNamaPr = document.getElementById('mb-pub-kodeNamaProdiTp');

        // const mbPublic = document.getElementById('public-mobile');
        // const settingsMb = document.getElementById('settings-mobile');

        let state;
        if (
            tingkatPendidikan == undefined || mbNumber == "" || mbName == "" || mbDate == "" || mbMonth == "" || mbYear == "" || mbCcode == "" || mbCname == "" || mbMcode == "" || mbMname == ""
        ) {
            alert('Maaf terdapat kesalahan saat mengisi data!, Silahkan ulangi kembali')
            state = false;

        } else {

            mNomorP.textContent = mbNumber;
            mNamaP.textContent = mbName;



            mTanggalP.textContent = mbDate + ' - ' + mbMonth[0].toUpperCase() + mbMonth.slice(1, blnLahir.length) + ' - ' + mbYear;

            mNamaPt.textContent = mbCcode + ' - ' + mbCname;
            mNamaPr.textContent = mbMcode + ' - ' + mbMname + '  (' + tingkatPendidikan + ')'

            mbPublic.style.display = 'flex';
            settingsMb.style.display = 'none';
            state = true;
            body.style.padding = '16px';
            body.style.height = '120vh';
            body.style.width = '100%';
            body.style.overflow = 'auto';
            body.style.backgroundImage = 'none';
            body.style.background = 'RGB(136, 159, 205)'
            body.style.background = 'linear-gradient(90deg, rgba(136, 159, 205, 1) 31%, rgba(121, 191, 201, 1) 71%)';

        }

        if (state) {
            setTimeout(() => {
                alert("NB : Untuk kembali ke section sebelumnya klik pada kotak berwana hijau dibagian paling bawah");
            }, 3000);
        } else {

        }
    } else if (keterangan == 'tidak lulus') {


        const tidakLulusMb = document.getElementById('tidak-lolos-mobile')
        const namaTidakLulusMb = document.getElementById('nama-tidak-lulusMb');
        const nomorTidakLulusMb = document.getElementById('nomorTidakLulusMb');
        const public = document.getElementById('public');
        const settings = document.getElementById('settings');
        
        const body = document.body;


        namaTidakLulusMb.textContent = mbName
        nomorTidakLulusMb.textContent =mbNumber
        namaTidakLulusMb.style.fontWeight = 'bold'
        nomorTidakLulusMb.style.fontWeight = 'bold'
        tidakLulusMb.style.display = 'flex';
        public.style.display = 'none';
        settings.style.display = 'none';
        body.style.backgroundImage = 'none';
        body.style.background = 'RGB(136, 159, 205)'
        body.style.background = 'linear-gradient(135deg, rgba(136, 159, 205, 1) 31%, rgba(121, 191, 201, 1) 71%)';
        body.style.height = '70vh';

        mbPublic.style.display = 'none';
        settingsMb.style.display = 'none';
        tidakLulusMb.style.display = 'flex';

    }else{
        alert('pilih ketrangan lulus!')
    }
}

const backMobile = document.getElementById('back-mobile');

backMobile.onclick = () => {
    const tidakLulusMb = document.getElementById('tidak-lolos-mobile')
    const settingsMb = document.getElementById('settings-mobile');
    const body = document.body;
    tidakLulusMb.style.display = 'none';
    settingsMb.style.display = 'flex';
    body.style.backgroundImage = 'url(./image/background.jpg';
    body.style.backgroundRepeat = 'none'
    body.style.backgroundSize ='cover'
    body.style.backgroundPosition = 'center'
}

const mbBack = document.getElementById('mb-button');

mbBack.onclick = () => {
    const body = document.body;
    const mbPublic = document.getElementById('public-mobile');
    const settingsMb = document.getElementById('settings-mobile');

    mbPublic.style.display = 'none';
    settingsMb.style.display = 'flex';
    body.style.backgroundImage = 'url(./image/background.jpg)'
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    settingsMb.style.height = '100vh';
    body.style.padding = '0px';
    body.style.overflow = 'auto';
}

const mbReset = document.getElementById('mb-res-btn');

mbReset.onclick = () => {
    window.location.reload()
}