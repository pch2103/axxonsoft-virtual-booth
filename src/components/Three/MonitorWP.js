import React, {useState} from 'react'
import {TextureLoader} from 'three'
import {useLoader} from 'react-three-fiber'
import * as THREE from "three";
import {Html} from "@react-three/drei";

const materialDefault = new THREE.MeshPhongMaterial({
	color: 0x0A0A0A,
})
const materialHover = new THREE.MeshPhongMaterial({
	color: 0x008AE0,
})

export default function MonitorWP(props) {
	const texture_1 = useLoader(TextureLoader, props.texture);
	const [hovered, setHover] = useState(false)
	const {info, setInfo} = props.info;

	const PointerOver = e => {
		e.stopPropagation()
		setHover(true)
		if (info !== props.title) setInfo(props.title)
	}
	const PointerOut = e => {
		e.stopPropagation()
		setHover(false)
		setInfo()
	}

	return (
			<>
				<mesh {...props} onPointerOver={PointerOver} onPointerOut={PointerOut}>
					<boxBufferGeometry attach="geometry" args={[0.61, 0.35, 0.015]}/>
					<meshStandardMaterial attach="material" map={texture_1}/>
					<Html scaleFactor={3} style={{ pointerEvents: "auto", display: hovered ? "block" : "none" }}>
						<div className="content">
							<strong>{props.title}</strong><br/>
							<span>{props.text}</span>
						</div>
					</Html>
				</mesh>
				<mesh {...props} material={hovered ? materialHover : materialDefault}>
					<boxBufferGeometry attach="geometry" args={[0.63, 0.37, 0.012]}/>
				</mesh>

			</>
	);
}