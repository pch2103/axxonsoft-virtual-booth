import React from 'react';
import {BiMouseAlt, BiMobileAlt, BiPlayCircle} from "react-icons/bi";
import {Lightbox} from "react-modal-image";

function Info(props) {

	const decorationDefault = () => {
		return <>
			Use&nbsp;<BiMouseAlt className={'selectedText'}/>&nbsp;or&nbsp;<BiMobileAlt className={'selectedText'}/>
		</>
	}

	const decorationSelected = () => {
		const classes = ['btn', 'selectedText']
		return <>
			<BiPlayCircle className={classes.join(' ')}/>
			&nbsp;{props.info.selectedText}
			&nbsp;&#8212;&nbsp;
			<span className={'selectedText'}>
				Click again to Play
			</span>
		</>
	}

	const decorationPlayed = () => {
		return <>
			<BiPlayCircle className={'selectedText'}/>
			&nbsp;<span className={'selectedText'}>{props.info.selectedText}</span>
		</>
	}

	return (
			<>
				{ props.info.infoPic &&
				<Lightbox
						large={props.info.infoPic}
						alt = {props.info.infoPic}
						onClose = {() => props.info.setInfoPic(null)}
				/>
				}
				<div className={'infoPanel'}>
					{(!props.monitorState.selected && !props.info.infoText) && decorationDefault()}
					{(props.monitorState.selected && !props.videoPlayer.playVideo) && decorationSelected()}
					{(props.monitorState.selected && props.videoPlayer.playVideo) && decorationPlayed()}
					{!props.monitorState.selected && props.info.infoText}
				</div>
			</>
	)
}

export default Info;