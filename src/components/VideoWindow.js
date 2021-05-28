import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import {BiArrowBack} from "react-icons/bi";

function VideoWindow({videoPlayer, ...props}) {
	const [play, setPlay] = useState(false)
	const opts = {
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
			showinfo: 0,
			controls: 1,
			start: 0
		},
	};

	useEffect(() => {
		document.addEventListener("keydown", escFunction, false);
				if (videoPlayer.playVideo) {
					setPlay(true)
				}
				// eslint-disable-next-line
			}, [videoPlayer.playVideo]
	)

	const escFunction = e => {
		e.preventDefault()
		if (e.keyCode === 27) {
			videoPlayer.setPlayVideo(null)
			props.info.setInfoText(null)
			props.monitorState.setSelected(false)
			setPlay(false)
			document.removeEventListener("keydown", escFunction, false);
		}
	}

	const handlerBackClick = e => {
		e.preventDefault()
		videoPlayer.setPlayVideo(null)
		props.info.setInfoText(null)
		props.monitorState.setSelected(false)
		setPlay(false)
		document.removeEventListener("keydown", escFunction, false);
	}

	return <>
		{play && (
				<div className={'videoBack'}>
					<div className={'videoButtonWrapper'}>
						<div className={'closeButton'} onClick={handlerBackClick}>
							<span className={'btn'}><BiArrowBack/></span>&nbsp;
							<span>Back to booth</span>
						</div>
					</div>
					<YouTube
							className={'videoPlayer'}
							// containerClassName={'videoWrapper'}
							videoId={videoPlayer.playVideo}
							opts={opts}/>
				</div>
		)}
	</>
}

export default VideoWindow;