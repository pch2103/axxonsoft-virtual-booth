import {useState} from "react";
import {monitorMaterial} from '../components/data/monitorMaterial'

export const useMonitors = () => {
	const [monitors,] = useState([]);
	const [selected, setSelected] = useState(false)

	const setActive = (screenId) => {

		monitors.forEach(m => {
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

	const setMonitors = ({screenId, ref, active=false}) => {
		if (ref) monitors.push({ screenId, ref, active })
	}

	return {monitors, setMonitors, setActive, selected, setSelected}
}

