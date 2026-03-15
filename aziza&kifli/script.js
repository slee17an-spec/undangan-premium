// OPEN INVITATION

function openInvitation(){

document.querySelector(".leftDoor").style.transform="translateX(-100%)"

document.querySelector(".rightDoor").style.transform="translateX(100%)"

document.getElementById("music").play()

}


// MUSIC

function toggleMusic(){

let music=document.getElementById("music")

if(music.paused){
music.play()
}else{
music.pause()
}

}


// SCROLL NAVIGATION

function goSection(n){

let sections=document.querySelectorAll(".page")

sections[n-1].scrollIntoView({
behavior:"smooth"
})

}


// NAMA TAMU URL

const params=new URLSearchParams(window.location.search)

const guest=params.get("to")

if(guest){

document.querySelector(".guestName").innerText=guest

}


// COPY DANA

function copyDana(){

navigator.clipboard.writeText("082211864752")

alert("Nomor DANA disalin")

}


// RSVP WHATSAPP

function sendRSVP(){

let nama=document.querySelector(".guestName").innerText

let pesan=`Assalamualaikum, saya ${nama} akan menghadiri undangan.`

let url=`https://wa.me/6282211864752?text=${encodeURIComponent(pesan)}`

window.open(url)

}


// COUNTDOWN

let target=new Date("March 30, 2026 19:00:00").getTime()

setInterval(()=>{

let now=new Date().getTime()

let jarak=target-now

let hari=Math.floor(jarak/(1000*60*60*24))

let jam=Math.floor((jarak%(1000*60*60*24))/(1000*60*60))

let menit=Math.floor((jarak%(1000*60*60))/(1000*60))

let detik=Math.floor((jarak%(1000*60))/1000)

document.getElementById("hari").innerHTML=hari
document.getElementById("jam").innerHTML=jam
document.getElementById("menit").innerHTML=menit
document.getElementById("detik").innerHTML=detik

},1000)
