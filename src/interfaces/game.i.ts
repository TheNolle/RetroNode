import { Achievement, Media, PlaySession } from './general.i'
import { PegiDescriptor } from './pegi.e'

export interface Game {
	id: string
	name: string
	cover: string
	icon: string
	path: string
	platform: string
	emulatorId?: string
	playHistory: PlaySession[]
	releaseDate: Date
	developer: string
	publisher: string
	description: string
	tags: string[]
	isFavorite: boolean
	achievements: Achievement[]
	userRating?: number
	pegiDescriptor: PegiDescriptor[]
	media: Media[]
}
