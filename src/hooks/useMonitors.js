import {useState} from "react";
import {monitorMaterial} from '../components/data/monitorMaterial'

export const useMonitors = () => {
	const [monitors,] = useState([]);
	// const [active, setActive] = useState(false)

	const setActive = (screenId) => {

		monitors.forEach(m => {
			if (m.screenId === screenId) {
				if (!m.active) m.ref.current.children[1].material = monitorMaterial.selected
				m.active = true
			} else {
				if (m.active) m.ref.current.children[1].material = monitorMaterial.default
				m.active = false
			}
		})
	}

	const isActive = (screenId) => {
		monitors.forEach(m => {
			if(m.screenId === screenId)  console.log('isActive', m.screenId, m.active)
		})

		return false
	}

	const setMonitors = ({screenId, ref, active=false}) => {
		if (ref) monitors.push({ screenId, ref, active })
	}

	return {monitors, setMonitors, setActive, isActive}
}

