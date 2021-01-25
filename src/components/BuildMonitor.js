import React from 'react';
import MonitorWP from "./Three/MonitorWP";

function BuildMonitor({monitor, info, monitorState, videoPlayer}) {
	const Monitors = monitor.map((_) => {
		return <MonitorWP
				info={info}
				monitorState={monitorState}
				videoPlayer={videoPlayer}
				screenId={_.screenId}
				title={_.title || ''}
				size={_.size}
				position={_.position}
				rotation = {
					_.rotation ?
							[_.rotation[0] * Math.PI/180, _.rotation[1] * Math.PI/180, _.rotation[2] * Math.PI/180]
							: [0, 0, 0]
				}
				texture={`/${_.texture}`}
				youtubeVideoId={_.youtubeVideoId}
				key={_.screenId}
		/>
	})

	return Monitors
}

export default BuildMonitor;