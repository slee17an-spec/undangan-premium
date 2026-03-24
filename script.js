// ================= OPEN INVITATION =================
const openBtn = document.getElementById("btn")
const music = document.getElementById("bg-music")

openBtn.addEventListener("click", () => {
  music.play()

  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  })
})


// ================= COUNTDOWN =================
// pakai timezone WITA (UTC+8)
const weddingDate = new Date("2026-03-30T19:00:00+08:00")

setInterval(() => {

  const now = new Date()
  const diff = weddingDate - now

  if (diff <= 0) {
    document.querySelector(".countdown").innerHTML = "Acara Dimulai"
    return
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / 1000 / 60) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  document.getElementById("days").innerText = days
  document.getElementById("hours").innerText = hours
  document.getElementById("minutes").innerText = minutes
  document.getElementById("seconds").innerText = seconds

}, 1000)


// ================= COPY DANA =================
function copyDana() {
  navigator.clipboard.writeText("082211864752")
  alert("Nomor DANA berhasil disalin")
}


// ================= MUSIC CONTROL =================
const btnMusic = document.getElementById("music-btn")
let isPlaying = false

document.body.addEventListener("click", function () {
  if (!isPlaying) {
    music.play()
    isPlaying = true
  }
})

btnMusic.addEventListener("click", function () {
  if (music.paused) {
    music.play()
    btnMusic.innerHTML = "🔊"
  } else {
    music.pause()
    btnMusic.innerHTML = "🔇"
  }
})
