async function load(){

const res = await fetch("config.json");
const data = await res.json();

document.getElementById("couple").innerText=data.couple;
document.getElementById("date").innerText=data.date;

document.getElementById("bride").innerText=data.bride;
document.getElementById("groom").innerText=data.groom;

document.getElementById("brideParents").innerText=data.bride_parents;
document.getElementById("groomParents").innerText=data.groom_parents;

document.getElementById("eventDate").innerText=data.event_date;
document.getElementById("eventTime").innerText=data.event_time;
document.getElementById("location").innerText=data.location;

document.getElementById("maps").src=data.maps;

document.getElementById("waLink").href="https://wa.me/"+data.whatsapp;

const params = new URLSearchParams(window.location.search);
const guest = params.get("to") || "Tamu Undangan";

document.getElementById("guest").innerText=guest;

document.getElementById("openBtn").onclick=()=>{
document.getElementById("opening").style.display="none";
document.getElementById("music").play();
};

}

load();
