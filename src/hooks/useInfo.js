import {useState} from 'react';
import dataInfo from '../components/data/dataInfo'

export const useInfo = (defaultValue = dataInfo.default) => {
	const [info, setInfo] = useState(defaultValue)

	const setInfoWrapper = (value) => {
		setInfo(value);
		if(!value) setInfo('Info default value');
	}
	return {infoText: info, setInfo: setInfoWrapper}
}



