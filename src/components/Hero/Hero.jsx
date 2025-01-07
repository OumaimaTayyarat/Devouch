import { useState, useEffect } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_imae from "../assets/hero_image.png";

function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const canvas = document.querySelector(".webgl");
    const heroSection = document.querySelector(".hero");
    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();
    const sizes = {
      width: heroSection.clientWidth,
      height: heroSection.clientHeight,
    };

    // Base camera
    const camera = new THREE.PerspectiveCamera(
      15,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = -14;
    camera.position.y = 6;
    camera.position.z = 16;
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.minDistance = 10;
    controls.maxDistance = 22;
    controls.minPolarAngle = Math.PI / 5;
    controls.maxPolarAngle = Math.PI / 2;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;

    // Lights
    const light = new THREE.DirectionalLight("#ffffff", 3);
    scene.add(light);
    light.position.set(0, 3, 0);
    light.intensity = 1.5;

    const light2 = new THREE.DirectionalLight("#ffffff", 3);
    scene.add(light2);
    light2.position.set(-4, 0, -2);
    light2.intensity = 1.5;

    const light3 = new THREE.DirectionalLight("#ffffff", 3);
    scene.add(light3);
    light3.position.set(4, 1, 2);
    light3.intensity = 0.5;

    const light4 = new THREE.DirectionalLight("#ffffff", 3);
    scene.add(light4);
    light4.position.set(0, 0, 3);
    light4.intensity = 0.6;

    const light5 = new THREE.DirectionalLight("#ffffff", 4);
    scene.add(light5);
    light5.position.set(0, 0, -5);
    light5.intensity = 1;

    const rectLight = new THREE.RectAreaLight(0xffffff, 0.9, 10, 10);
    rectLight.position.set(0, 2, 0);
    rectLight.lookAt(0, 0, 0);
    scene.add(rectLight);

    // Materials
    // const bakedTexture = textureLoader.load(
    //   "https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room12/cecbd1c77333b3c9ee23bb1eb41dee395e14ca3e/dist/baked.jpg"
    // );
    // bakedTexture.flipY = false;
    // bakedTexture.encoding = THREE.sRGBEncoding;

    // const normalTexture = textureLoader.load(
    //   "https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room12/cecbd1c77333b3c9ee23bb1eb41dee395e14ca3e/dist/normal.jpg"
    // );
    // normalTexture.flipY = false;
    // normalTexture.encoding = THREE.sRGBEncoding;

    // const occlusionTexture = textureLoader.load(
    //   "https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room12/cecbd1c77333b3c9ee23bb1eb41dee395e14ca3e/dist/occlusion.jpg"
    // );
    // occlusionTexture.flipY = false;
    // occlusionTexture.encoding = THREE.sRGBEncoding;

    // const metalicMaterial = new THREE.MeshStandardMaterial({
    //   map: bakedTexture,
    //   side: THREE.DoubleSide,
    // });

    // Loader
    const loader = new GLTFLoader();
    loader.load(
      "/untitled.glb",
      (gltf) => {
        const model = gltf.scene;
        // model.traverse((child) => {
        //   child.material = metalicMaterial;
        //   child.material.roughness = 0;
        // });
        scene.add(model);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      }
    );

    window.addEventListener("resize", () => {
      sizes.width = heroSection.clientWidth;
      sizes.height = heroSection.clientHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return (
    <div className="hero">
      <canvas className="webgl"></canvas>
    </div>
  );
}

export default Hero;
