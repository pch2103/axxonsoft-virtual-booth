import React from 'react';
import MonitorWP from "./Three/MonitorWP";

function BuildMonitor({monitor, info, monitorState, videoPlayer}) {
	const Monitors = monitor.map((_) => {
		return <MonitorWP
				info={info}
				monitorState={monitorState}
				videoPlayer={videoPlayer}
				screenId={_.screenId}
				position={_.position}
				texture={`/${_.texture}`}
				youtubeUrl={_.youtubeUrl}
				key={_.screenId}
		/>
	})

	return Monitors
}

export default BuildMonitor;