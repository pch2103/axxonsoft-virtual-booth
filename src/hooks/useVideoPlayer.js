import {useState} from 'react';

function useVideoPlayer() {
	const [playVideo, setPlayVideo] = useState(null)
	return {playVideo, setPlayVideo}
}
export default useVideoPlayer;