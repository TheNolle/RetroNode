import React from 'react'
import { useGameContext } from '../contexts/games.ctx'

import '../styles/pages/home.scss'

// Components
import Navbar from '../components/Navbar'
import GameCard from '../components/GameCard'

export default function Home(): React.ReactElement {
	const [activeIndex, setActiveIndex] = React.useState<number>(0)
	const HomeRef = React.useRef<HTMLDivElement>(null)
	const { state: { games } } = useGameContext()

	React.useEffect(() => {
		if (!HomeRef.current) return
		const element = HomeRef.current
		if (games[activeIndex]?.cover) element.style.backgroundImage = `url(${games[activeIndex].cover})`
		else element.style.backgroundImage = ''
	}, [activeIndex, games])

	return (
		<div className='home page' ref={HomeRef}>
			<Navbar />

			<div className='game-cards'>
				{games.map((game, index) => <GameCard key={index} className={`game-card ${index === activeIndex ? 'active' : ''}`} game={game} index={index} setActiveIndex={setActiveIndex} />)}
			</div>
		</div>
	)
}
