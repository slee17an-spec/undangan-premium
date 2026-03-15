
fetch('config.json')
.then(response => response.json())
.then(data => {

document.getElementById('cover-names').innerText = `${data.nama_panggilan_pria} & ${data.nama_panggilan_wanita}`;
document.getElementById('closing-names').innerText = `${data.nama_panggilan_pria} & ${data.nama_panggilan_wanita}`;

document.getElementById('nama-pria').innerText = data.nama_lengkap_pria;
document.getElementById('nama-wanita').innerText = data.nama_lengkap_wanita;

document.getElementById('ortu-pria').innerText = data.ortu_pria;
document.getElementById('ortu-wanita').innerText = data.ortu_wanita;

document.getElementById('tgl-akad').innerText = data.tanggal_akad;
document.getElementById('wkt-akad').innerText = data.waktu_akad;
document.getElementById('lok-akad').innerText = data.lokasi_akad;

document.getElementById('tgl-resepsi').innerText = data.tanggal_akad;
document.getElementById('wkt-resepsi').innerText = data.waktu_resepsi;
document.getElementById('lok-resepsi').innerText = data.lokasi_resepsi;

document.getElementById('cover').style.backgroundImage =
`linear-gradient(rgba(18,18,18,0.8),rgba(18,18,18,0.9)),url('${data.bg_image}')`;

document.getElementById('audio-source').src = data.bg_music;
document.getElementById('bg-music').load();

});

let music = document.getElementById("bg-music");
let musicBtn = document.getElementById("music-btn");
let isPlaying = false;

function openInvitation(){

document.getElementById("cover").style.top = "-100vh";

setTimeout(function(){

document.getElementById("main-content").style.display = "block";
document.getElementById("cover").style.display = "none";
musicBtn.style.display = "block";

},800);

music.play().catch(()=>console.log("Autoplay blocked"));
isPlaying = true;

}

function toggleMusic(){

if(isPlaying){
music.pause();
musicBtn.innerHTML = "🔇";
}else{
music.play();
musicBtn.innerHTML = "🎵";
}

isPlaying = !isPlaying;

}
