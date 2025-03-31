import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría y material para los cubos
const geometry = new THREE.BoxGeometry(1, 1, 1);

const materialGreen = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const materialBlue = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const materialRed = new THREE.MeshStandardMaterial({ color: 0xff0000 });

const cube = new THREE.Mesh(geometry, materialGreen);
cube.position.x = -2;
scene.add(cube);

const cubeBlue = new THREE.Mesh(geometry, materialBlue);
cubeBlue.position.x = 0;
scene.add(cubeBlue);

const cubeRed = new THREE.Mesh(geometry, materialRed);
cubeRed.position.x = 2;
scene.add(cubeRed);

// Agregar una luz direccional y ajustar su posición
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con rotación y renderizado
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cubeBlue.rotation.x += 0.03;
    cubeBlue.rotation.y += 0.03;

    cubeRed.rotation.x += 0.05;
    cubeRed.rotation.y += 0.05;

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);