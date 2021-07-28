import React, {useRef, useState} from 'react';
import { TextureLoader } from 'three'
import { useLoader } from 'react-three-fiber'


function Button(props) {
	const group = useRef()
	const texture = useLoader(TextureLoader, props.texture);
	const alphaTexture = useLoader(TextureLoader, props.alphaMap);
	const textureHover = useLoader(TextureLoader, props.textureHover);
	const alphaTextureHover = useLoader(TextureLoader, props.alphaMapHover);
	const [hovered, setHover] = useState(false)
	const [clicked, setClicked] = useState(false)

	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	const PointerOver = e => {
		e.stopPropagation()
		setHover(true)
		document.body.style.cursor = "pointer"
	}

	const PointerOut = e => {
		e.stopPropagation()
		setHover(false)
		document.body.style.cursor = "default"
	}

	const PointerDown = e => {
		e.stopPropagation()
		setClicked(true)
	}

	const PointerUp = e => {
		e.stopPropagation()
		if (clicked && hovered) {
				if (props.link !== undefined)  openInNewTab(props.link)
			}
			setClicked(false)
		}

	return (
			<group ref={group}>
				<mesh position={props.position} rotation={props.rotation}
							onPointerOver={PointerOver}
							onPointerOut={PointerOut}
							onPointerDown={PointerDown}
							onPointerUp={PointerUp}
				>
					<boxBufferGeometry attach="geometry" args={props.size}/>
					{
						((props.buttonId !== undefined) && !hovered) &&
						<meshPhongMaterial attach="material"
															 map={texture}
															 alphaMap={alphaTexture}
															 transparent={true}/>
					}
					{
						((props.buttonId !== undefined) && hovered) &&
						<meshPhongMaterial attach="material"
															 map={textureHover}
															 alphaMap={alphaTextureHover}
															 transparent={true}/>
					}
				</mesh>
			</group>
	);
}

export default Button;