const ids = ['inisialPria','inisialWanita','namaPria','ketPria','namaWanita','ketWanita','tanggal','jam','tempat','hiburan','pembuka','ucapan','salamPenutup','ayat','judulPengundang','keluarga'];
const $ = id => document.getElementById(id);
let zoom = 0.72;
const sample = {
  inisialPria:'S',
  inisialWanita:'N',
  namaPria:'Sirpan Bin Abd. Aziz',
  ketPria:'(Putra ke Dua dari Bapak Abd. Aziz dan Ibu Hajra)',
  namaWanita:'Nur Binti Hasan',
  ketWanita:'(Putri ke Dua dari Bapak Hasan dan Ibu Mase)',
  tanggal:'Minggu, 5 Juli 2026',
  jam:'19.30 WITA - Selesai',
  tempat:'Samping Masjid Babul Jannah, Dusun Bugis Desa Kombo',
  hiburan:'Karya Budaya Electone',
  pembuka:'Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud melaksanakan pernikahan putra-putri kami',
  ucapan:'Merupakan Suatu Kehormatan & Kebahagiaan bagi kami apabila Bapak / Ibu / Sdr (i) berkenan hadir memberikan Do’a Restu kepada kedua mempelai.\n\nAtas Kehadiran dan Do’a Restu Bapak / Ibu / Sdr (i), kami sekeluarga mengucapkan banyak terima kasih.',
  salamPenutup:'Wassalamu Alaikum Warahmatullahi Wabarakatuh.',
  ayat:'“Dan diantara tanda - tanda (kebesaran-Nya) ialah Dia menciptakan pasangan - pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tentram kepadanya, dan Dia menjadikan diantaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar - benar terdapat tanda - tanda (kebesaran Allah) bagi kaum yang berpikir”\n\n(Surat Ar-Ruum : 21)',
  judulPengundang:'Hormat kami yang mengundang :',
  keluarga:'Kel. Abd. Aziz & Hajra\nKel. Asri Dg. Maroa & Hadiati Guru Hade\nKel. Kamaruddin & Rasidina\nKel. Hi. Usman & Hj. Barlian\nKel. Aripiddin & Asrida\nKel. Hi. Syahrir Dg. Ngesa & Hj. Nirma\nKel. Jufriansa Hi. Syahrir & Hasira, A.Md. Keb\nKel. Hi. Kuruseng & Hj. Rahmawati\nKel. Zainal Hi. Abd. Hamid'
};
function esc(value){return String(value || '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;').replaceAll('\n','<br>')}
function data(){const out={}; ids.forEach(id => out[id] = ($(id)?.value || '').trim()); return out}
function setData(obj){ids.forEach(id => { if($(id) && obj[id] !== undefined) $(id).value = obj[id]; }); render()}
function families(text){return String(text || '').split(/\r?\n/).map(x => x.trim()).filter(Boolean)}
function front(d){return `
  <span class="corner-bottom-left">❦</span><span class="corner-bottom-right">❦</span>
  <div class="mono">${esc(d.inisialPria || 'S')}<span>&nbsp;|&nbsp;</span>${esc(d.inisialWanita || 'N')}</div>
  <div class="arabic">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
  <p class="salam">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
  <p class="intro">${esc(d.pembuka)}</p>
  <div class="ornline"><span>✤</span></div>
  <h2 class="name">${esc(d.namaPria)}</h2>
  <p class="name-note">${esc(d.ketPria)}</p>
  <div class="with">Dengan</div>
  <h2 class="name">${esc(d.namaWanita)}</h2>
  <p class="name-note">${esc(d.ketWanita)}</p>
  <div class="section-title">Waktu Penyelenggaraan</div>
  <table class="detail">
    <tr><td class="ico">▣</td><td class="lab">Hari, Tanggal</td><td class="colon">:</td><td>${esc(d.tanggal)}</td></tr>
    <tr><td class="ico">◷</td><td class="lab">Jam</td><td class="colon">:</td><td>${esc(d.jam)}</td></tr>
    <tr><td class="ico">◆</td><td class="lab">Tempat</td><td class="colon">:</td><td>${esc(d.tempat)}</td></tr>
    <tr><td class="ico">♫</td><td class="lab">Hiburan</td><td class="colon">:</td><td>${esc(d.hiburan)}</td></tr>
  </table>
  <div class="ornline"><span>✤</span></div>
  <p class="thanks">${esc(d.ucapan)}</p>
  <div class="bottom-orn">♡ ❦ ♡</div>
`}
function back(d){const list = families(d.keluarga); return `
  <span class="corner-bottom-left">❦</span><span class="corner-bottom-right">❦</span>
  <div class="top-orn">❦</div>
  <p class="closing-salam">${esc(d.salamPenutup)}</p>
  <div class="ornline"><span>✤</span></div>
  <p class="ayat">${esc(d.ayat)}</p>
  <h3 class="invite-title">${esc(d.judulPengundang)}</h3>
  <div class="families">${list.map(item => `<div class="family">${esc(item)}</div>`).join('')}</div>
  <div class="bottom-orn">♡ ❦ ♡</div>
`}
function render(){const d = data(); document.querySelectorAll('.front-card').forEach(el => el.innerHTML = front(d)); document.querySelectorAll('.back-card').forEach(el => el.innerHTML = back(d)); $('sheet').style.setProperty('--zoom', zoom); localStorage.setItem('undangan-pernikahan-draft', JSON.stringify(d)); $('status').textContent = 'Draft tersimpan otomatis.'}
function load(){try{const raw = localStorage.getItem('undangan-pernikahan-draft'); if(raw){setData(JSON.parse(raw)); return true}}catch(e){} setData(sample); return false}
function download(name, content, type='application/json'){const blob = new Blob([content], {type}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url)}
function copyWa(){const d = data(); const txt = `Assalamu'alaikum Warahmatullahi Wabarakatuh\n\n${d.pembuka}\n\n${d.namaPria}\n${d.ketPria}\n\nDengan\n\n${d.namaWanita}\n${d.ketWanita}\n\nHari/Tanggal: ${d.tanggal}\nJam: ${d.jam}\nTempat: ${d.tempat}\nHiburan: ${d.hiburan}\n\n${d.ucapan}\n\n${d.salamPenutup}`; navigator.clipboard?.writeText(txt).then(()=>alert('Teks undangan WhatsApp disalin.')).catch(()=>alert(txt))}
ids.forEach(id => $(id)?.addEventListener('input', render));
$('saveBtn').onclick = () => { render(); alert('Draft tersimpan di browser ini.') };
$('sampleBtn').onclick = () => setData(sample);
$('resetBtn').onclick = () => { if(confirm('Reset ke contoh awal?')) { localStorage.removeItem('undangan-pernikahan-draft'); setData(sample); } };
$('exportBtn').onclick = () => download('data-undangan-pernikahan.json', JSON.stringify(data(), null, 2));
$('importFile').onchange = e => { const file = e.target.files[0]; if(!file) return; const reader = new FileReader(); reader.onload = () => { try{ setData(JSON.parse(reader.result)); }catch(err){ alert('File JSON tidak valid.'); } }; reader.readAsText(file); };
$('printBtn').onclick = () => window.print();
$('copyBtn').onclick = copyWa;
$('plus').onclick = () => { zoom = Math.min(1, +(zoom + .04).toFixed(2)); render(); };
$('minus').onclick = () => { zoom = Math.max(.38, +(zoom - .04).toFixed(2)); render(); };
load();
