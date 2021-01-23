import React from 'react';
import WpData from "./data/WPdata.json"
import VirtualWP from "./Three/VirtualWP";
import MainBooth from "./Three/MainBooth";

function BuildBooth({info, monitorState, videoPlayer}) {

	return (
			<>
				{
					WpData.map((_, index)  => {
						switch (_.type){

							case "simple": {
								return <VirtualWP
										info={info}
										monitorState={monitorState}
										videoPlayer={videoPlayer}
										position={_.position}
										monitor={_.monitor}
										poster={_.poster}
										key={index}
								/>
							}

							case "main": {
								return <MainBooth
										info={info}
										monitorState={monitorState}
										videoPlayer={videoPlayer}
										position={_.position}
										monitor={_.monitor}
										poster={_.poster}
										key={index}
								/>
							}
							default: return <></>
						} //switch

					}) //map
				}
			</>
	);
}
export default BuildBooth;