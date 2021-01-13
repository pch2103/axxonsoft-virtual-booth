import React, {useEffect, useRef, useState} from 'react'
import {TextureLoader} from 'three'
import {useLoader} from 'react-three-fiber'
import dataInfo from '../data/dataInfo'
import {monitorMaterial} from '../data/monitorMaterial'

export default function MonitorWP(props) {
	const ref = useRef(null);
	const texture_1 = useLoader(TextureLoader, props.texture);
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false);
	const {info, setInfo} = props.info;

	useEffect(() => {
		props.monitors.setMonitors({screenId: props.screenId, ref})
		// eslint-disable-next-line
	}, [])

	const PointerOver = e => {
		e.stopPropagation()
		setHover(true)
		if (dataInfo[props.screenId] !== info) setInfo(dataInfo[props.screenId])
	}
	const PointerOut = e => {
		e.stopPropagation()
		setHover(false)
		setInfo()
	}

	const PointerClick = e => {
		e.stopPropagation()
		setActive(!active)
		props.monitors.setActive(props.screenId)
	}

	return (
			<group ref={ref}>
				<mesh {...props} onPointerOver={PointerOver} onPointerOut={PointerOut} onClick={PointerClick}>
					<boxBufferGeometry attach="geometry" args={[0.61, 0.35, 0.015]}/>
					<meshStandardMaterial attach="material" map={texture_1}/>
				</mesh>
				<mesh {...props} material={monitorMaterial.default}>
					<boxBufferGeometry attach="geometry" args={[0.63, 0.37, 0.012]}/>
				</mesh>
				{ hovered &&
					<mesh {...props} material={monitorMaterial.hovered}>
						<boxBufferGeometry attach="geometry" args={[0.64, 0.38, 0.010]}/>
					</mesh>
				}
			</group>
	);
}