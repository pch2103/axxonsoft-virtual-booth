import {useState} from 'react';

function useVideoPlayer(props) {
	const [playVideo, setPlayVideo] = useState(null)

	return {playVideo, setPlayVideo}
}

export default useVideoPlayer;