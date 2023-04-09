import * as THREE from "../build/three.module.js";
import { WEBGL } from "./webgl.js";

if (WEBGL.isWebGLAvailable()) {
	//  씬
	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0x004fff);
	// 카메라
	const camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	// 렌더러
	const renderer = new THREE.WebGL1Renderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	renderer.render(scene, camera);
} else {
	const warning = WEBGL.getErrorMessage();
	document.body.appendChild(warning);
}
