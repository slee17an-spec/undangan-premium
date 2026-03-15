const btn=document.getElementById('openBtn');
const music=document.getElementById('music');

btn.addEventListener('click',()=>{
music.play().catch(()=>{});
window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});
});

function copyDana(){
const text=document.getElementById("dana").innerText;
navigator.clipboard.writeText(text);
alert("Nomor DANA disalin");
}
"""

with open(os.path.join(base,"index.html"),"w") as f: f.write(index_html)
with open(os.path.join(base,"style.css"),"w") as f: f.write(style_css)
with open(os.path.join(base,"script.js"),"w") as f: f.write(script_js)

os.makedirs(os.path.join(base,"music"),exist_ok=True)
