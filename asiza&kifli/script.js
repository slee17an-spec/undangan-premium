
fetch("config.json")
.then(res=>res.json())
.then(data=>{

document.getElementById("couple").innerHTML=data.groom+" & "+data.bride
document.getElementById("heroCouple").innerHTML=data.groom+" & "+data.bride
document.getElementById("story").innerHTML=data.story
document.getElementById("date").innerHTML=data.date+" | "+data.time
document.getElementById("venue").innerHTML=data.venue
document.getElementById("maps").href=data.maps
document.getElementById("wa").href="https://wa.me/"+data.whatsapp
document.getElementById("music").src=data.music

const gallery=document.getElementById("gallery")

data.gallery.forEach(img=>{
gallery.innerHTML+="<img src='"+img+"'>"
})

})

const params=new URLSearchParams(window.location.search)
document.getElementById("guest").innerHTML=params.get("to")||"Tamu Undangan"

function openInvite(){
document.querySelector(".intro").style.display="none"
document.getElementById("music").play()
}

const weddingDate=new Date("July 12, 2026 09:00:00").getTime()

setInterval(()=>{

const now=new Date().getTime()
const distance=weddingDate-now

document.getElementById("days").innerHTML=Math.floor(distance/(1000*60*60*24))
document.getElementById("hours").innerHTML=Math.floor((distance%(1000*60*60*24))/(1000*60*60))
document.getElementById("minutes").innerHTML=Math.floor((distance%(1000*60*60))/(1000*60))
document.getElementById("seconds").innerHTML=Math.floor((distance%(1000*60))/1000)

},1000)

function sendWish(){

const name=document.getElementById("guestName").value
const msg=document.getElementById("guestMessage").value
const box=document.getElementById("wishes")

const item=document.createElement("div")
item.innerHTML="<b>"+name+"</b><br>"+msg

box.prepend(item)

}
