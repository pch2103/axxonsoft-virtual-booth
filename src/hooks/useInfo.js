import {useState} from 'react';
// import infoData from '../components/data/infoData'

export const useInfo = () => {
	const [infoText, setInfoText] = useState(null)
	const [selectedText, setSelectedText] = useState(null)

	// const setInfoTextWrapper = (value) => {
	// 	setInfoText(value);
	// 	if(!value) setInfoText(defaultValue);
	// }
	return {infoText, setInfoText, selectedText, setSelectedText}
}



