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
