const canvas = document.querySelector(".webgl");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ canvas });
const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial({ color: 0x009900 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 15;
renderer.render(scene, camera);
