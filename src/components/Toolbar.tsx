import React from 'react'

import * as Fa6 from 'react-icons/fa6'

import '../styles/components/toolbar.scss'

export default function Toolbar(): React.ReactElement {
	return (
		<nav className='toolbar'>
			<span className='title'>RetroNode</span>

			<div className='buttons'>
				<button onClick={() => window.utils.toolbar('minimize')}><Fa6.FaWindowMinimize /></button>
				<button onClick={() => window.utils.toolbar('maximize')}><Fa6.FaWindowMaximize /></button>
				<button onClick={() => window.utils.toolbar('close')}><Fa6.FaXmark /></button>
			</div>
		</nav>
	)
}
