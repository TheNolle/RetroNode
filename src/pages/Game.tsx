import React from 'react'
import { useLocation } from 'react-router-dom'
import { useGameContext } from '../contexts/games.ctx'
import { PlaySession } from '../interfaces/general.i'

import '../styles/pages/game.scss'

// Components
import * as Md from 'react-icons/md'
import Pegi from '../components/Pegi'

export default function Game(): React.ReactElement {
	const history = window.history
	const location = useLocation()

	const gameId = location.pathname.split('/').pop()
	const { state: { games }, dispatch } = useGameContext()
	const game = games.find(game => game.id === gameId)

	if (!game) return <div>Game not found</div>

	const playTime = (): string => {
		const { playHistory } = game
		if (!playHistory || playHistory.length <= 0) return 'Not played yet'
		const totalPlayTime = playHistory.reduce((totalPlayTime: number, playSession: PlaySession) => {
			const startTime = new Date(playSession.startTime)
			const endTime = new Date(playSession.endTime)
			const diff = endTime.getTime() - startTime.getTime()
			return totalPlayTime + diff
		}, 0)
		const years = Math.floor(totalPlayTime / (1000 * 60 * 60 * 24 * 30 * 12))
		const months = Math.floor(totalPlayTime % (1000 * 60 * 60 * 24 * 30 * 12) / (1000 * 60 * 60 * 24 * 30))
		const days = Math.floor((totalPlayTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
		const hours = Math.floor((totalPlayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		const minutes = Math.floor((totalPlayTime % (1000 * 60 * 60)) / (1000 * 60))
		const seconds = Math.floor((totalPlayTime % (1000 * 60)) / 1000)
		const str = []
		if (years > 0) str.push(`${years}y`)
		if (months > 0) str.push(`${months}m`)
		if (days > 0) str.push(`${days}d`)
		if (hours > 0) str.push(`${hours}h`)
		if (minutes > 0) str.push(`${minutes}m`)
		if (seconds > 0) str.push(`${seconds}s`)
		return str.join(' ')
	}

	const lastPlayed = (): string => {
		const { playHistory } = game
		if (!playHistory || playHistory.length <= 0) return 'Not played yet'
		const mostRecentSession = playHistory.reduce((mostRecentSession: Date | null, playSession: PlaySession) => {
			const endTime = new Date(playSession.endTime)
			return !mostRecentSession || endTime > mostRecentSession ? endTime : mostRecentSession
		}, null as Date | null)
		return mostRecentSession ? mostRecentSession.toLocaleDateString() : 'Not played yet'
	}

	const toggleFavorite = () => {
		dispatch({ type: 'SET_FAVORITE', payload: { id: game.id, isFavorite: !game.isFavorite } })
	}

	return (
		<div className='game page' style={{ backgroundImage: `url(${game.cover})` }}>
			<header>
				<button onClick={() => history.back()}>
					<Md.MdArrowBack /> Go Back
				</button>
			</header>

			<main>
				<h1>{game.name}</h1>

				<div className='meta'>
					<span className='developer'><small>Developer</small>{game.developer}</span>
					<i />
					<span className='date'><small>Release Date</small>{new Date(game.releaseDate).toLocaleDateString()}</span>
					<i />
					<span className='time-played' title={lastPlayed()}><small>Time Played</small>{playTime()}</span>
				</div>

				<p className='description'>
					{game.description}
				</p>

				<div className='media'>
					{game.media.length > 0 ? (
						game.media.map(media => {
							if (media.type === 'image') return <img key={media.id} src={media.url} alt={`${media.type} - ${media.id}`} />
							else if (media.type === 'video') return <div key={media.id} className='video'><video controls><source src={media.url} type='video/mp4' />An error occurred</video></div>
							else if (media.type === 'youtube') return <div key={media.id} className='video'><iframe src={media.url} title={`${game.name} - Gameplay Video`} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' /></div>
							else return <div className='media-placeholder' key={media.id}><span>Invalid media type</span></div>
						})
					) : (
						<div className='media-placeholder'>
							<span>No media available</span>
						</div>
					)}
				</div>
			</main>

			<footer>
				<div className='actions'>
					<button><span><Md.MdPlayArrow /> Play</span></button>
					<button onClick={toggleFavorite}><span>{game.isFavorite ? <Md.MdFavorite /> : <Md.MdFavoriteBorder />} Favorite</span></button>
				</div>

				<div className='tags'>
					{game.tags.length > 0 ? (
						game.tags.map((tag, index) => (
							<span key={index}>{tag}</span>
						))
					) : (
						<span>No tags</span>
					)}
				</div>

				<Pegi contentDescriptor={game.pegiDescriptor} />
			</footer>
		</div>
	)
}
