import "./style.css";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
// const camera = new THREE.OrthographicCamera(-1, 1, 1 - 1);
camera.position.x = 2;
// camera.position.y = 2;
// camera.position.z = 2;
camera.lookAt(mesh.position);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

const controls = new OrbitControls( camera, canvas );
controls.enableDamping = true;
controls.update();
// -> lets see how to move the camera here
// first get the coordinates of camera.
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (e) => {
  (cursor.x = e.clientX - (sizes.width - 0.5)),
    (cursor.y = e.clientY - (sizes.height - 0.5)),
    console.log(cursor.x);
});

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  controls.update();
  // Update objects
  //   mesh.rotation.y = elapsedTime;
  // camera.position.x += cursor.x *.0001;
  
  // Render
  renderer.render(scene, camera);
  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

// in this chapter we are gonna lean about camera
// this is from abstract class
// we will be using ortographic and prespective camera.
// prespctiveCamera(fieldOfView,aspect ration ,nearplane , farplane);
// only things between the nearplane and far place will be visible to us.

// # orthographic camera -> there we will not use prespetive to the object that is if the object is far from us it will still show it near to the camera.
// this is to render 3d objects in 2d i mean rembember orthographic projections class 12th ed box -> square
// four parameters of orthographich camera is left,right,top,bottom
// also it can take near and plane in the end.

// all this camera rotating shit is already being provided by three named controllers
// mainly we will gonna focus on orbit control