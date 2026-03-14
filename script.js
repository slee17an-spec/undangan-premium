fetch("config.json")

.then(res => res.json())

.then(data => {

document.getElementById("couple").innerHTML =
data.groom + " & " + data.bride

document.getElementById("heroCouple").innerHTML =
data.groom + " & " + data.bride

document.getElementById("story").innerHTML =
data.story

document.getElementById("date").innerHTML =
data.date + " | " + data.time

document.getElementById("venue").innerHTML =
data.venue

document.getElementById("maps").href =
data.maps

document.getElementById("wa").href =
"https://wa.me/" + data.whatsapp

document.getElementById("music").src =
data.music


const gallery = document.getElementById("gallery")

data.gallery.forEach(img => {

gallery.innerHTML +=
"<img src='"+img+"'>"

})

})


const params = new URLSearchParams(window.location.search)

document.getElementById("guest").innerHTML =
params.get("to") || "Tamu Undangan"


function openInvite(){

document.getElementById("cover").style.display="none"

document.getElementById("music").play()

}
window.addEventListener("scroll",()=>{

document.querySelectorAll("section").forEach(sec=>{

const pos = sec.getBoundingClientRect().top
const screen = window.innerHeight

if(pos < screen - 100){
sec.style.opacity = 1
sec.style.transform = "translateY(0)"
}

})

})
const targetDate = new Date("July 12, 2026 09:00:00").getTime()

setInterval(()=>{

const now = new Date().getTime()

const diff = targetDate - now

const days = Math.floor(diff/(1000*60*60*24))

document.getElementById("countdown").innerHTML =
days + " Hari Lagi"

},1000)
const flowerContainer = document.querySelector(".flowers")

function createFlower(){

const flower = document.createElement("div")

flower.classList.add("flower")

flower.innerHTML="🌸"

flower.style.left=Math.random()*100+"vw"

flower.style.animationDuration=5+Math.random()*5+"s"

flower.style.fontSize=10+Math.random()*20+"px"

flowerContainer.appendChild(flower)

setTimeout(()=>{

flower.remove()

},10000)

}

setInterval(createFlower,500)
