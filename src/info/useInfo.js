import {useState} from 'react';

export const useInfo = (defaultValue = 'Info default value') => {
	const [info, setInfo] = useState(defaultValue)

	const setInfoWrapper = (value) => {
		setInfo(value);
		if(!value) setInfo('Info default value');
	}
	return {infoText: info, setInfo: setInfoWrapper}
}


