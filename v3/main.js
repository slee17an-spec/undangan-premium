
const openBtn = document.getElementById("openInvite");
const intro = document.getElementById("envelopeIntro");
const main = document.getElementById("mainContent");

openBtn.onclick = () => {
intro.style.display="none";
main.classList.remove("hidden");
};

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

function raf(time){
lenis.raf(time);
requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* Firebase Placeholder */

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_DOMAIN",
projectId: "YOUR_PROJECT"
};

