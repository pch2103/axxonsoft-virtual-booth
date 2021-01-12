import * as THREE from "three"

export const monitorMaterial = {
	hovered: new THREE.MeshPhongMaterial({color: 0x008AE0,}),
	selected: new THREE.MeshPhongMaterial({color: 0x9A0000,}),
	default: new THREE.MeshPhongMaterial({color: 0x0A0A0A,})
}
