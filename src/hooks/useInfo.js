import {useState} from 'react';

export const useInfo = () => {
	const [infoText, setInfoText] = useState(null)
	const [selectedText, setSelectedText] = useState(null)
	const [infoPic, setInfoPic] = useState(null)

	return {infoText, setInfoText, selectedText, setSelectedText, infoPic, setInfoPic}
}



