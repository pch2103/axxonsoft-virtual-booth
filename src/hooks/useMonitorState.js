import {useState} from "react";
import {monitorMaterial} from '../components/data/monitorMaterial'

export const useMonitorState = () => {
	const [monitorState,] = useState([]);
	const [selected, setSelected] = useState(false)

	const setActive = (screenId) => {
		monitorState.forEach(m => {
			if (m.screenId === screenId) {
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
				if (m.active) m.ref.current.children[1].material = monitorMaterial.default
				m.active = false
			}
		})
	}

	const setMonitorState= ({screenId, ref, active=false}) => {
		if (ref) monitorState.push({ screenId, ref, active })
	}

	return {monitorState, setMonitorState, setActive, selected, setSelected}
}

