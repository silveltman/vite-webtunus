import '../css/main.css'
// import 'three.js'

import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'

//======================
// Size and DOM

const canvas = document.querySelector('#canvas')
const canvasContainer = document.querySelector('#canvas-container')
const size = {
  width: canvasContainer.offsetWidth,
  height: canvasContainer.offsetHeight,
}

//======================
// Scene

const scene = new THREE.Scene()

//======================
// Camera

const camera = new THREE.PerspectiveCamera(
  75,
  size.width / size.height,
  0.1,
  1000
)
camera.position.z = 2

//======================
// Textures

const textureLoader = new THREE.TextureLoader()
const colorTexture = textureLoader.load('/assets/img/maps/ColorMap.jpg')
const displacementTexture = textureLoader.load(
  '/assets/img/maps/DisplacementMap.jpg'
)
const roughnessTexture = textureLoader.load('/assets/img/maps/RoughnessMap.jpg')
const normalTexture = textureLoader.load('/assets/img/maps/NormalMap.jpg')

//======================
// Objects

const geometry = new THREE.SphereBufferGeometry(1.15, 128, 128)
const material = new THREE.MeshStandardMaterial()
material.map = colorTexture
material.normalMap = normalTexture
material.roughnessMap = roughnessTexture
material.displacementMap = displacementTexture
material.displacementScale = 0.02

const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

//======================
// Lights

const ambientLight = new THREE.AmbientLight(0x0d1321)
const PointLight = new THREE.PointLight(0xffffff)
PointLight.position.set(10, 8, 10)
PointLight.intensity = 0.9
scene.add(PointLight, ambientLight)

// const lightHelper = new THREE.PointLightHelper(PointLight)
// const gridHelper = new THREE.GridHelper(200, 50)
// scene.add(lightHelper, gridHelper)

//======================
// Controls

const controls = new TrackballControls(camera, canvas)
controls.noZoom = true
controls.noPan = true
controls.rotateSpeed = 0.1

//======================
// Renderer

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
})

renderer.setSize(size.width, size.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//======================
// Update renderer

window.addEventListener('resize', () => {
  //Update Sizes:
  size.width = canvasContainer.offsetWidth
  size.height = canvasContainer.offsetHeight

  //Camera
  camera.aspect = size.width / size.height
  camera.updateProjectionMatrix()

  //Update renderer:
  renderer.setSize(size.width, size.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

//======================
// Animate

function animate() {
  requestAnimationFrame(animate)

  sphere.rotation.x += 0.0004
  sphere.rotation.y += 0.001
  //   sphere.rotation.z += 0.01

  controls.update()

  // PointLight.position.copy(camera.position)

  renderer.render(scene, camera)
}

animate()
