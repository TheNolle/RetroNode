import React from 'react'

import '../styles/pages/error.scss'

// Components
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

interface ErrorProps {
	errorCode: number
	errorMessage: string
	description?: string
}

export default function Error(props: ErrorProps): React.ReactElement {
	return (
		<div className='error page'>
			<Navbar />

			<div className='error-message'>
				<h1>{props.errorCode}</h1>
				<span>{props.errorMessage}</span>
				<p>{props.description}</p>

				<div className='buttons'>
					<Link to='/'>Home</Link>
				</div>
			</div>
		</div>
	)
}
