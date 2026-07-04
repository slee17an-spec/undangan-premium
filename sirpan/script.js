// ================= ELEMENT =================
const openBtn = document.getElementById("btn")
const music = document.getElementById("bg-music")
const btnMusic = document.getElementById("music-btn")


// ================= OPEN INVITATION =================
openBtn.addEventListener("click", () => {

  music.play()

  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  })

})


// ================= COUNTDOWN =================
// WITA (UTC +8)
const weddingDate = new Date("2026-03-30T19:00:00+08:00")

const interval = setInterval(() => {

  const now = new Date()
  const diff = weddingDate - now

  if (diff <= 0) {
    clearInterval(interval)
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


// ================= MUSIC CONTROL =================
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


// ================= COPY DANA =================
function copyDana() {
  navigator.clipboard.writeText("082211864752")
  alert("Nomor DANA berhasil disalin")
}

// ================= NAMA TAMU (SIMPLE) =================
const urlParams = new URLSearchParams(window.location.search)
let nama = urlParams.get("to")

if (nama) {

  nama = decodeURIComponent(nama).trim()

  // rapikan koma & spasi
  nama = nama.replace(/,/g, ", ")
  nama = nama.replace(/\s+/g, " ").trim()

  // kapitalisasi tiap kata
  nama = nama.split(" ").map(kata => {
    return kata.charAt(0).toUpperCase() + kata.slice(1)
  }).join(" ")

  document.getElementById("nama-tamu").innerText = nama
}
