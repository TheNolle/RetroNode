import React from 'react'
import { PegiDescriptor, getPegiDescriptorDetails, determinePegi } from '../interfaces/pegi.e'

import '../styles/components/pegi.scss'

interface PegiProps {
	contentDescriptor: Array<PegiDescriptor>
}

export default function Pegi(props: PegiProps): React.ReactElement {
	const descriptors = props.contentDescriptor.filter((descriptor, index) => props.contentDescriptor.indexOf(descriptor) === index)
	const pegi = determinePegi(descriptors)

	return (
		<div className={`pegi pegi-${pegi}`}>
			<div className='descriptors'>
				<span className='content-rating'>
					PEGI {pegi}
				</span>
				<span className='content-descriptors'>
					{descriptors.map((descriptor, index) => {
						const contentDescriptor = getPegiDescriptorDetails(descriptor)
						return (
							<span key={descriptor} className='descriptor' title={contentDescriptor.description}>
								{contentDescriptor.name}{index < descriptors.length - 1 ? ' & ' : ''}
							</span>
						)
					})}
				</span>
			</div>

			<div className='icon'>
				<span className='rating'>
					{pegi}
				</span>
				<span className='text'>
					PEGI
				</span>
			</div>
		</div>
	)
}
