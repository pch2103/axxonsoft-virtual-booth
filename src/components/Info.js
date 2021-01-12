import React from 'react';

function Info(props) {
	return (
			<div className={'infoPanel'}>{props.info.infoText}</div>
	);
}

export default Info;