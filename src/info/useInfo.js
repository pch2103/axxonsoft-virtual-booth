import {useState} from 'react';
import InfoData from './Data/InfoData'

const Monitor = {
	ref: null,
	screen: null,
	info: null,
	selected: false
};

export const useInfo = (defaultValue = InfoData.default) => {
	const [info, setInfo] = useState(defaultValue)
	const monitors = []

	const setInfoWrapper = (value) => {
		setInfo(value);
		if(!value) setInfo(defaultValue);
	}

	const setMonitorsWrapper = (info) => {
		console.log("INFO", info)
		monitors.push(info)
	}

	return {infoText: info, setInfo: setInfoWrapper, monitors, setMonitors: setMonitorsWrapper}
}


