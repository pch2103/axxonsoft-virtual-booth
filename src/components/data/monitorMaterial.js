import * as THREE from "three"

export const monitorMaterial = {
	hovered: new THREE.MeshBasicMaterial({color: 0x008AE0,}),
	selected: new THREE.MeshPhongMaterial({color: 0x008AE0,}),
	default: new THREE.MeshPhongMaterial({color: 0x0A0A0A,})
}
