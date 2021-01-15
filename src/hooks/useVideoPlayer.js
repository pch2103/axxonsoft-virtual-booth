import {useEffect, useState} from 'react';

function useVideoPlayer(props) {
	const [playVideo, setPlayVideo] = useState({})

	useEffect(() => {
		console.log("PLAY", playVideo)
			},[playVideo]
	)
	return {playVideo, setPlayVideo}
}

export default useVideoPlayer;