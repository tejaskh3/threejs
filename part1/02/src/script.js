import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  // wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
// as this inherits form object 3d we can change it position, rotation, scale, quaternion
// mesh.position.set(0.7, -0.6, 1); // this is the easy way to set all the side in one go.

//  the possiton here is a vector3 it have many poperties just check them out by logging or docs
// console.log(mesh.position);
console.log(mesh.position.length());
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
  canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// this lesson is about transforming any object with it's 4 properties.
// 1.position 2.scale 3.rotation 4.quaternion
// prespective camera, mesh inherit form object 3D class and all the objects inherited from object 3d have these 4 properties.

// this is one of property of position to find distance from any vertor
//  eg distanceTo(new THREE.Vectors(1,2,3));
// another important property for position is normalize this will do vector length = 1 vector we are taling about is sq. root of x@@
console.log(mesh.position.distanceTo(camera.position));

// #AXES HELPERS
// An axis object to visualize the 3 axes in a simple way.
// The X axis is red. The Y axis is green. The Z axis is blue.
// camera.set(1,1,3)
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// #SCALE
// mesh.scale.x = 100;

// now let's talk a bit about rotation, we need to be extra conscious here because when we do .rotate.x and the object is rotating about x-axis and when it keeps on rotating eventually becomes // to the screen at some point of time at that moment now it's y-axis is  coming out of the screen instead being // to the screen.
// so we need to use reorder.before changing the rotation
// position.rotation.reorder('YZX') first rotation will get applied to y then z then x.

// # group 
// when you want to change the properties of our system to be chnaged the damand then we uwe Group
