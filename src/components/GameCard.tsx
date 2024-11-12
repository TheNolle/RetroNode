import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Game } from '../interfaces/game.i'

import '../styles/components/game-card.scss'

interface GameCardProps {
	className: React.HTMLAttributes<HTMLDivElement>['className']
	game: Game
	index: number
	setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

export default function GameCard(props: GameCardProps): React.ReactElement {
	const navigate = useNavigate()

	return (
		<div className={props.className} onMouseEnter={() => props.setActiveIndex(props.index)} onClick={() => navigate(`/game/${props.game.id}`)}>
			<img src={props.game.icon} alt={props.game.name} />
			<div className='game-title-overlay'>
				<p>{props.game.name}</p>
			</div>
		</div>
	)
}
