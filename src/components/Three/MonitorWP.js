import React, {useEffect, useRef, useState} from 'react'
import {TextureLoader} from 'three'
import {useLoader} from 'react-three-fiber'
import * as THREE from "three";
import InfoData from '../../info/Data/InfoData'

const materialDefault = new THREE.MeshPhongMaterial({
	color: 0x0A0A0A,
})
const materialHover = new THREE.MeshPhongMaterial({
	color: 0x005FA8,
})
const materialSelected = new THREE.MeshPhongMaterial({
	color: 0xA50022,
})

export default function MonitorWP(props) {
	const ref = useRef(null);
	const texture_1 = useLoader(TextureLoader, props.texture);
	const [hovered, setHover] = useState(false)
	const [selected, setSelected] = useState(false)
	const {info, setInfo, setMonitors} = props.info;

	const PointerOver = e => {
		e.stopPropagation()
		setHover(true)
		if (info !== InfoData[props.screen]) setInfo(InfoData[props.screen])
	}
	const PointerOut = e => {
		e.stopPropagation()
		setHover(false)
		setInfo()
	}
	const PointerClick = e => {
		e.stopPropagation()
		setSelected(!selected)
	}

	useEffect(()=>{
		setMonitors(props.screen)
		// console.log("Monitor", props.screen)
	},[])

	const useMaterial = () => {
		return (selected && materialSelected) || (hovered && materialHover) || materialDefault
	}

	return (
			<group ref={ref}>
				<mesh {...props} onPointerOver={PointerOver} onPointerOut={PointerOut} onClick={PointerClick}>
					<boxBufferGeometry attach="geometry" args={[0.61, 0.35, 0.015]}/>
					<meshStandardMaterial attach="material" map={texture_1}/>
				</mesh>
				<mesh ref={ref} {...props} material={useMaterial()}>
					<boxBufferGeometry attach="geometry" args={[0.63, 0.37, 0.012]}/>
				</mesh>
			</group>
	);
}