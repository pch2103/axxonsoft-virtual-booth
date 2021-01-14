import React from 'react';
import MonitorWP from "./Three/MonitorWP";

function BuildMonitor({monitor, info, monitorState}) {
	const Monitors = monitor.map((_) => {
		return <MonitorWP
				info={info}
				monitorState={monitorState}
				screenId={_.screenId}
				position={_.position}
				texture={`/${_.texture}`}
				key={_.screenId}
		/>
	})

	return Monitors
}

export default BuildMonitor;