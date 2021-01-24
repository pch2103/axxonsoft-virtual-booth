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
	const [clicked, setClicked] = useState(false)

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
		if (infoData.close !== props.info.infoText) props.info.setInfoText(null)
	}

	const PointerClick = e => {
		e.stopPropagation()
		if (clicked) {
			props.monitorState.setActive(props.screenId)
			props.info.setSelectedText(infoData[props.screenId])
			if ((
					selectedMonitorState !== undefined) && !(
					selectedMonitorState.clickCounter % 2)) {
				props.videoPlayer.setPlayVideo(props.youtubeVideoId)
			}
			setClicked(false)
		}
	}
	const PointerDown = e => {
		e.stopPropagation()
		setClicked(true)
	}

	return (
			<group {...props} ref={ref}>
				<mesh
							onPointerOver={PointerOver}
							onPointerOut={PointerOut}
							onPointerDown={PointerDown}
							onPointerUp={PointerClick}
				>
					<boxBufferGeometry attach="geometry" args={[props.size[0], props.size[1], 0.015]}/>
					<meshStandardMaterial attach="material" map={texture_video}/>
				</mesh>
				<mesh material={monitorMaterial.default}>
					<boxBufferGeometry attach="geometry" args={[props.size[0] + 0.02, props.size[1] + 0.02, 0.012]}/>
				</mesh>
				{hovered &&
				<mesh material={monitorMaterial.hovered}>
					<boxBufferGeometry attach="geometry" args={[props.size[0] + 0.04, props.size[1] + 0.04, 0.010]}/>
				</mesh>
				}
				{(
						selectedMonitorState !== undefined) && selectedMonitorState.active &&
				<mesh>
					<boxBufferGeometry attach="geometry" args={[props.size[0], props.size[1], 0.015]}/>
					<meshStandardMaterial attach="material" map={texture_playIcon} alphaMap={texture_playIconAlpha}
																transparent={true}/>
				</mesh>
				}
			</group>
	);
}
