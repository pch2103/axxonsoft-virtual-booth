import React from 'react';
import WpData from "./data/WPdata.json"
import VirtualWP from "./Three/VirtualWP";

function BuildWP({info, monitorState}) {

	return (
			<>
				{
					WpData.map((_, index)  => {
						return <VirtualWP
								info={info}
								monitorState={monitorState}
								position={_.position}
								monitor={_.monitor}
								poster={_.poster}
								key={index}
						/>
					})
				}
			</>
	);
}
export default BuildWP;