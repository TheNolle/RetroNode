import React from 'react'
import { useLocation } from 'react-router-dom'
import { useUserContext } from '../contexts/user.ctx'
import { getRankForGamerscore } from '../interfaces/ranks.e'

import '../styles/components/navbar.scss'

// Components
import { Link } from 'react-router-dom'
import * as Fa6 from 'react-icons/fa6'

export default function Navbar(): React.ReactElement {
	const [time, setTime] = React.useState<string>('00:00 AM')
	const [muted, setMuted] = React.useState<boolean>(false)
	const [battery, setBattery] = React.useState<React.ReactNode>(<Fa6.FaBatteryFull className='icon' />)
	const { pathname } = useLocation()

	const { user } = useUserContext()

	const getFormattedTime = (): string => {
		const date = new Date()
		const hour = date.getHours() % 12 || 12
		const minutes = date.getMinutes()
		const amPM = date.getHours() >= 12 ? 'PM' : 'AM'
		return `${hour}:${minutes} ${amPM}`
	}

	React.useEffect(() => {
		const interval = setInterval(() => setTime(getFormattedTime()), 500)
		setTime(getFormattedTime())
		return () => clearInterval(interval)
	}, [])

	const handleMute = () => {
		const success = window.utils.toggleMute()
		if (success) setMuted(!muted)
	}

	React.useEffect(() => {
		const interval = setInterval(() => {
			const battery = window.utils.getBatteryPercentage()
			if (battery >= 75) setBattery(<Fa6.FaBatteryFull className='icon' title={`${battery}%`} />)
			else if (battery >= 50) setBattery(<Fa6.FaBatteryThreeQuarters className='icon' title={`${battery}%`} />)
			else if (battery >= 25) setBattery(<Fa6.FaBatteryHalf className='icon' title={`${battery}%`} />)
			else if (battery >= 10) setBattery(<Fa6.FaBatteryQuarter className='icon' title={`${battery}%`} />)
			else setBattery(<Fa6.FaBatteryEmpty className='icon' title={`${battery}%`} />)
		}, 500)
		return () => clearInterval(interval)
	}, [])

	return (
		<nav className='navbar'>
			<Link to='/profile' className={`user-info ${pathname == '/profile' ? 'active' : ''}`}>
				<img src='https://avatars.githubusercontent.com/u/61505071?v=4' alt='User Avatar' className='avatar' />
				<div className='user-details'>
					<h2>{user.username} <span className='status'>{getRankForGamerscore(user.gamerscore)}</span></h2>
					<p className='gamerscore'>{user.gamerscore.toLocaleString()}</p>
				</div>
			</Link>

			<nav className='nav-links'>
				<Link to='/'><Fa6.FaHouse className={`icon ${pathname == '/' ? 'active' : ''}`} /></Link>
				<Link to='/library'><Fa6.FaGamepad className={`icon ${pathname == '/library' ? 'active' : ''}`} /></Link>
				<Link to='/about'><Fa6.FaXbox className={`icon ${pathname == '/about' ? 'active' : ''}`} /></Link>
				<Fa6.FaMagnifyingGlass className='icon' />
				<Link to='/settings'><Fa6.FaGear className={`icon ${pathname == '/settings' ? 'active' : ''}`} /></Link>
			</nav>

			<div className='system-status'>
				{muted ? <Fa6.FaVolumeXmark className='icon' onClick={handleMute} /> : <Fa6.FaVolumeHigh className='icon' onClick={handleMute} />}
				{battery}
				<span className='time'>{time}</span>
			</div>
		</nav>
	)
}
