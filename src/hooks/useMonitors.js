import {useState} from "react";

export const useMonitors = () => {
	const [monitors,] = useState([]);
	const [active, setActive] = useState(false)

	const setActiveWrapper = (active, screen) => {
		setActive (active)
		monitors.forEach(m => {
			if(m.screen === screen) m.active = active
		})
	}

	const isActive = (screen) => {
		monitors.forEach(m => {
			if(m.screen === screen) return m.active //console.log('SCREEN', m.screen, m.active)
		})

		return false
	}

	const setMonitors = ({screen, ref}) => {
		if (ref) monitors.push({ screen, ref, active })
	}

	return {monitors, setMonitors, setActive: setActiveWrapper, active, isActive}
}

