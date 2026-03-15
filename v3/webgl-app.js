
const canvas = document.getElementById("galaxy-canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer({canvas, alpha:true});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

const starsGeometry = new THREE.BufferGeometry();
const starCount = 10000;

const positions = [];

for(let i=0;i<starCount;i++){
positions.push((Math.random()-0.5)*200);
positions.push((Math.random()-0.5)*200);
positions.push((Math.random()-0.5)*200);
}

starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions,3));

const starsMaterial = new THREE.PointsMaterial({
color:0xffffff,
size:0.7
});

const starField = new THREE.Points(starsGeometry,starsMaterial);
scene.add(starField);

function animate(){
requestAnimationFrame(animate);
starField.rotation.y += 0.0005;
renderer.render(scene,camera);
}

animate();

window.addEventListener("resize",()=>{
renderer.setSize(window.innerWidth, window.innerHeight);
camera.aspect = window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
});
