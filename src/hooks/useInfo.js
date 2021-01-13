import {useState} from 'react';
import dataInfo from '../components/data/dataInfo'

export const useInfo = (defaultValue = dataInfo.default) => {
	const [info, setInfo] = useState(defaultValue)

	const setInfoWrapper = (value) => {
		setInfo(value);
		if(!value) setInfo(defaultValue);
	}
	return {infoText: info, setInfo: setInfoWrapper}
}



