fetch("data.json")
.then(res => res.json())
.then(data => {

document.getElementById("couple").innerHTML =
data.groom + " & " + data.bride

document.getElementById("date").innerHTML = data.date

document.getElementById("location").innerHTML = data.location

document.getElementById("maps").href = data.maps

document.getElementById("music").src = data.music

})

const params = new URLSearchParams(window.location.search)

document.getElementById("guest").innerHTML =
params.get("to") || "Tamu Undangan"

function openInvite(){

document.querySelector(".cover").style.display = "none"

document.getElementById("music").play()

}
