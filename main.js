import * as THREE from 'three';
// import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r128/examples/jsm/controls/OrbitControls.js';

// Set up scene
const scene = new THREE.Scene();
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff83 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Set up camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600);
camera.position.z = 20;
scene.add(camera)

// Set up renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 700);
renderer.render(scene,camera)
