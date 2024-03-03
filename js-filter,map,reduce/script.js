const videos = array.from(document.querySelectorAll('[data-duration]'));

let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).map(item => item.dataset.duration)
.map(waktu => {
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60 ) + parts[1]
} )

.reduce((total,detik)=> total + detik);

const jam = Math.floor(jsLanjut/3600);
jsLanjut = jsLanjut - jam *3600;
const menit = math.floor(jsLanjut/60);
const detik = jsLanjut - menit*60;

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video`;




