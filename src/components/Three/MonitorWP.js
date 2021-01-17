import React, {useEffect, useRef, useState} from 'react'
import {TextureLoader} from 'three'
import {useLoader} from 'react-three-fiber'
import infoData from '../data/infoData'
import {monitorMaterial} from '../data/monitorMaterial'

export default function MonitorWP(props) {
	const ref = useRef(null);
	const texture_video = useLoader(TextureLoader, props.texture);
	const texture_playIcon = useLoader(TextureLoader, '/play_screen.png');
	const texture_playIconAlpha = useLoader(TextureLoader, '/play_alpha.png');
	const selectedMonitorState = props.monitorState.getMonitorState(props.screenId)
	const [hovered, setHover] = useState(false)

	console.log('selectedMonitorState', selectedMonitorState)

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
    if(!(selectedMonitorState.clickCounter % 2)) props.videoPlayer.setPlayVideo(props.youtubeVideoId)
	}

	return (
			<group ref={ref}>
				<mesh {...props} onPointerOver={PointerOver} onPointerOut={PointerOut} onClick={PointerClick}>
					<boxBufferGeometry attach="geometry" args={[0.61, 0.35, 0.015]}/>
					<meshStandardMaterial attach="material" map={texture_video}/>
				</mesh>
				<mesh {...props} material={monitorMaterial.default}>
					<boxBufferGeometry attach="geometry" args={[0.63, 0.37, 0.012]}/>
				</mesh>
				{ hovered &&
				<mesh {...props} material={monitorMaterial.hovered}>
					<boxBufferGeometry attach="geometry" args={[0.65, 0.39, 0.010]}/>
				</mesh>
				}
				{ (selectedMonitorState !== undefined) && selectedMonitorState.active &&
				<mesh {...props}>
					<boxBufferGeometry attach="geometry" args={[0.61, 0.35, 0.015]}/>
					<meshStandardMaterial attach="material" map={texture_playIcon} alphaMap={texture_playIconAlpha}
																transparent={true}/>
				</mesh>
				}
			</group>
	);
}
