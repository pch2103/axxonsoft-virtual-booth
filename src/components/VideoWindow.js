import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import { VscChromeClose } from "react-icons/vsc";

function VideoWindow({videoPlayer}) {
	const [play, setPlay] = useState(false)

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
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
		setPlay(false)
	}

	return <>
		{play && (
				<div className={'videoBack'}>
					<div className={'closeButton'} onClick={handlerBackClick}><VscChromeClose className={'btn'}/></div>
					<YouTube className={'videoPlayer'} videoId={videoPlayer.playVideo} opts={opts}/>
				</div>
		)}
	</>
}

export default VideoWindow;