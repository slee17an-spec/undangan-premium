const openBtn = document.getElementById("openBtn")
const music = document.getElementById("music")

openBtn.addEventListener("click",()=>{

music.play()

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
})

})


const weddingDate = new Date("2026-03-30T19:00:00")

setInterval(()=>{

const now = new Date()
const diff = weddingDate - now

const days = Math.floor(diff/(1000*60*60*24))
const hours = Math.floor((diff/(1000*60*60))%24)
const minutes = Math.floor((diff/1000/60)%60)
const seconds = Math.floor((diff/1000)%60)

document.getElementById("days").innerText = days
document.getElementById("hours").innerText = hours
document.getElementById("minutes").innerText = minutes
document.getElementById("seconds").innerText = seconds

},1000)


function copyDana(){

navigator.clipboard.writeText("082211864752")
alert("Nomor DANA berhasil disalin")

}

// ambil nama tamu dari url
const params = new URLSearchParams(window.location.search)
const guest = params.get("to")

if(guest){
document.querySelector(".guest").innerText = guest
}
