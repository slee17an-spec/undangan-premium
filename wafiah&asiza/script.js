const params = new URLSearchParams(window.location.search);
const guest = params.get("to") || "Tamu Undangan";
document.getElementById("guest").innerText = guest;

document.getElementById("openBtn").onclick = () => {
document.getElementById("opening").style.display="none";
document.getElementById("music").play();
};
