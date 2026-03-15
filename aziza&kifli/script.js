
const btn = document.getElementById('openBtn');
const content = document.getElementById('content');
const music = document.getElementById('music');

btn.onclick = ()=>{
document.getElementById('cover').style.display='none';
content.style.display='block';
music.play().catch(()=>{});
}

function copyDana(){
navigator.clipboard.writeText("082211864752");
alert("Nomor DANA disalin");
}
