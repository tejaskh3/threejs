import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
// in this section we are gonna talk about animations,
// animations are like move stop take picture and move again repeatedly.
// most of the pcs works on 60frames per/sec we also need to animate with this speed.
// we use this window.requestAnimationFrame(callback) it tells browser to add animation to the frame
// it adds the animation/function to the next frame but now we are gonna add same for the time being.(recursion)

// the actual use of reqAniFrame to call the function on next frame.
let i = 1;
const print = () => {
  console.log("print");
  mesh.position.x +=.001
  renderer.render(camera, scene);
  requestAnimationFrame(print); // this will behave like recursion
};
print();
