import React, {useEffect, useRef, useState} from 'react'
import {TextureLoader} from 'three'
import {useLoader} from 'react-three-fiber'
import dataInfo from '../data/dataInfo'
import {monitorMaterial} from '../data/monitorMaterial'

export default function MonitorWP(props) {
	const ref = useRef(null);
	const texture_1 = useLoader(TextureLoader, props.texture);
	const [hovered, setHover] = useState(false)
	const {info, setInfo} = props.info;

	useEffect(() => {
		props.monitors.setMonitors({screen: props.screen, ref})
		// eslint-disable-next-line
	},[])

	const PointerOver = e => {
		e.stopPropagation()
		setHover(true)
		if (dataInfo[props.screen] !== info) setInfo(dataInfo[props.screen])
	}
	const PointerOut = e => {
		e.stopPropagation()
		setHover(false)
		setInfo()
	}

	const PointerClick = e => {
		e.stopPropagation()
		props.monitors.setActive(!props.monitors.active, props.screen)
	}

	return (
			<group ref = {ref}>
				<mesh {...props} onPointerOver={PointerOver} onPointerOut={PointerOut} onClick={PointerClick}>
					<boxBufferGeometry attach="geometry" args={[0.61, 0.35, 0.015]}/>
					<meshStandardMaterial attach="material" map={texture_1}/>
				</mesh>
				<mesh {...props} material={ props.monitors.isActive(props.screen) && monitorMaterial.selected || hovered ? monitorMaterial.hovered : monitorMaterial.default}>
					<boxBufferGeometry attach="geometry" args={[0.63, 0.37, 0.012]}/>
				</mesh>
			</group>
	);
}