import React, {useEffect, useRef, useState} from 'react'
import {TextureLoader} from 'three'
import {useLoader} from 'react-three-fiber'
import {monitorMaterial} from '../data/monitorMaterial'

export default function MonitorWP(props) {
	const ref = useRef(null);
	const texture_video = useLoader(TextureLoader, props.texture);
	const texture_playIcon_NO = useLoader(TextureLoader, '/play_screen_no.png');
	const texture_playIconAlpha_NO = useLoader(TextureLoader, '/play_alpha_no.png');
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
		//if (infoData[props.screenId] !== props.info.infoText) props.info.setInfoText(infoData[props.screenId])
		if (props.title !== props.info.infoText) props.info.setInfoText(props.title)
		document.body.style.cursor = "pointer"
	}

	const PointerOut = e => {
		e.stopPropagation()
		setHover(false)
		props.info.setInfoText(null)
		document.body.style.cursor = "default"
	}

	const PointerUp = e => {
		e.stopPropagation()
		if (clicked) {
			props.monitorState.setActive(props.screenId)
			props.info.setSelectedText(props.title)
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
			<group {...props} ref={ref} style={{cursor: 'pointer'}}>
				<mesh
						onPointerOver={PointerOver}
						onPointerOut={PointerOut}
						onPointerDown={PointerDown}
						onPointerUp={PointerUp}
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
				{
					(selectedMonitorState !== undefined && selectedMonitorState.active ) &&
					<mesh>
						<boxBufferGeometry attach="geometry" args={[props.size[0], props.size[1], 0.015]}/>
						<meshStandardMaterial attach="material" map={texture_playIcon}
																	alphaMap={texture_playIconAlpha}
																	transparent={true}/>
					</mesh>
				}
				{
					((selectedMonitorState === undefined) || (!selectedMonitorState.active)) &&
					<mesh>
						<boxBufferGeometry attach="geometry" args={[props.size[0], props.size[1], 0.015]}/>
						<meshStandardMaterial attach="material" map={texture_playIcon_NO}
																	alphaMap={texture_playIconAlpha_NO}
																	transparent={true}/>
					</mesh>
				}
			</group>
	);
}