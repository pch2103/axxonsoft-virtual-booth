import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import {FiX} from "react-icons/fi";

function VideoWindow({videoPlayer, ...props}) {
	const [play, setPlay] = useState(false)
	const opts = {
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
			showinfo: 0,
			controls: 0,
			start: 0
		},
	};

	useEffect(() => {
				if (videoPlayer.playVideo) {
					setPlay(true)
				}
				// eslint-disable-next-line
			}, [videoPlayer.playVideo]
	)

	const handlerBackClick = e => {
		e.preventDefault()
		videoPlayer.setPlayVideo(null)
		props.info.setInfoText(null)
		props.monitorState.setSelected(false)
		setPlay(false)
	}

	return <>
		{play && (
				<div className={'videoBack'}>
					<div className={'videoButtonWrapper'}>
						<div className={'closeButton'} onClick={handlerBackClick}>
							<span className={'btn'}><FiX/></span>&nbsp;
							<span>CLOSE</span>
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