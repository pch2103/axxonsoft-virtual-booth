import React, {useEffect, useRef, useState} from 'react'
import {TextureLoader} from 'three'
import {useLoader} from 'react-three-fiber'
import infoData from '../data/infoData'
import {monitorMaterial} from '../data/monitorMaterial'

export default function MonitorWP(props) {
	const ref = useRef(null);
	const texture_1 = useLoader(TextureLoader, props.texture);
	const [hovered, setHover] = useState(false)

	useEffect(() => {
		props.monitorState.setMonitorState({screenId: props.screenId, ref})
		// eslint-disable-next-line
	}, [])

	const PointerOver = e => {
		e.stopPropagation()
		setHover(true)
		if (infoData[props.screenId] !== props.info.infoText) props.info.setInfoText(infoData[props.screenId])
	}
	const PointerOut = e => {
		e.stopPropagation()
		setHover(false)
		props.info.setInfoText(null)
	}

	const PointerClick = e => {
		e.stopPropagation()
		props.monitorState.setActive(props.screenId)
		props.info.setSelectedText(infoData[props.screenId])
		const selectedMonitorState = props.monitorState.getMonitorState(props.screenId)
    if(!(selectedMonitorState.clickCounter % 2)) props.videoPlayer.setPlayVideo(props)
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
					<boxBufferGeometry attach="geometry" args={[0.65, 0.39, 0.010]}/>
				</mesh>
				}
			</group>
	);
}
