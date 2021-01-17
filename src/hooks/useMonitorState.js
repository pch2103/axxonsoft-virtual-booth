import {useState} from "react";
import {monitorMaterial} from '../components/data/monitorMaterial'

export const useMonitorState = () => {
	const [monitorState,] = useState([]);
	const [selected, setSelected] = useState(false)

	const getMonitorState = (screenId) => {
		return monitorState.find( m => m.screenId === screenId)
	}

	const setActive = (screenId) => {
		monitorState.forEach(m => {
			if (m.screenId === screenId) {
				m.clickCounter++
				if (!m.active) {
					m.ref.current.children[1].material = monitorMaterial.selected
					m.active = true
					setSelected(true)
				} else {
					if (m.active) m.ref.current.children[1].material = monitorMaterial.default
					m.active = false
					setSelected(false)
				}
			} else {
				m.clickCounter=0
				if (m.active) m.ref.current.children[1].material = monitorMaterial.default
				m.active = false
			}
		})
	}

	const setMonitorState= ({screenId, ref, active=false, clickCounter=0}) => {
		if (ref) monitorState.push({ screenId, ref, active, clickCounter })
	}

	return {monitorState, setMonitorState, setActive, selected, setSelected, getMonitorState}
}

