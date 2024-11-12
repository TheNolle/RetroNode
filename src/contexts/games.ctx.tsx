import React from 'react'
import { Game } from '../interfaces/game.i'
import { PegiDescriptor } from '../interfaces/pegi.e'

type GameAction =
	| { type: 'ADD_GAME'; payload: Game }
	| { type: 'REMOVE_GAME'; payload: string }
	| { type: 'UPDATE_GAME'; payload: Game }
	| { type: 'SET_FAVORITE'; payload: { id: string; isFavorite: boolean } }
	| { type: 'UPDATE_PLAYTIME'; payload: { id: string; playtime: number } }

interface GameState {
	games: Game[]
}

const initialState: GameState = {
	games: [
		{
			id: 'df2d1c2d-1d37-59ee-be39-06a97109df8d',
			name: 'Starfield',
			icon: 'https://cdn.wccftech.com/wp-content/uploads/2022/02/Starfield-game-HD-scaled.jpg',
			cover: 'https://xboxsquad.fr/wp-content/uploads/2021/06/starfield.jpg',
			path: '/path/to/starfield',
			platform: 'Windows',
			playHistory: [
				{ sessionId: 'a84df50a-765e-5b1f-9a9f-c73a4d0438a9', startTime: new Date(2024, 11, 12, 10, 30), endTime: new Date(2024, 11, 12, 12, 30), },
				{ sessionId: '92940027-3fbf-59fd-8543-879cdcff4ee4', startTime: new Date(2024, 11, 12, 12, 40), endTime: new Date(2024, 11, 12, 13, 20), },
			],
			releaseDate: new Date('2022-11-11'),
			developer: 'Bethesda Game Studios',
			publisher: 'Bethesda Softworks',
			description: 'Starfield is an upcoming action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the first new franchise created by Bethesda in 25 years, after The Elder Scrolls in 1994.',
			tags: ['Action', 'RPG', 'Space'],
			isFavorite: false,
			achievements: [],
			pegiDescriptor: [PegiDescriptor.ViolenceRealistic, PegiDescriptor.BadLanguage],
			media: [
				{ id: '179c45fd-4053-5795-bac3-0d4874efa354', type: 'image', url: 'https://via.placeholder.com/400' },
				{ id: 'ced8b035-2dee-56ed-80c5-90b4cebd0cc0', type: 'youtube', url: 'https://www.youtube.com/embed/VIDEO_ID' },
			]
		},
		{
			id: 'd4129fc4-8346-5b08-9917-db44f0d5afbc',
			name: 'Fortnite',
			icon: 'https://i.redd.it/itgj2qgcxmic1.jpeg',
			cover: 'https://wallpapercave.com/wp/wp6967838.jpg',
			path: '/path/to/fortnite',
			platform: 'Windows',
			playHistory: [],
			releaseDate: new Date('2017-07-25'),
			developer: 'Epic Games',
			publisher: 'Epic Games',
			description: 'Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative hybrid-tower defense-shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with traps and fortifications they can build; Fortnite Battle Royale, a free-to-play battle royale game where up to 100 players fight to be the last person standing; and Fortnite Creative, where players are given complete freedom to create worlds and battle arenas.',
			tags: ['Battle Royale', 'Shooter', 'Survival'],
			isFavorite: false,
			achievements: [],
			pegiDescriptor: [PegiDescriptor.ViolenceMild, PegiDescriptor.BadLanguage],
			media: []
		},
		{
			id: '94f2ac44-8455-5deb-bf56-7d45e840b1fc',
			name: 'Diablo IV',
			icon: 'https://assets-prd.ignimgs.com/2021/12/17/diablo-iv-button-2021-1639768661633.jpg',
			cover: 'https://www.psu.com/wp/wp-content/uploads/2021/02/Diablo-IV-PS4-PS5-Wallpapers-04.png',
			path: '/path/to/diablo-iv',
			platform: 'Windows',
			playHistory: [],
			releaseDate: new Date('2023-12-31'),
			developer: 'Blizzard Entertainment',
			publisher: 'Activision Blizzard',
			description: 'Diablo IV is an upcoming online dungeon crawler action role-playing game developed and published by Blizzard Entertainment. It is the fourth title in the main Diablo series and was announced at BlizzCon 2019 on November 1, 2019 for PC, PlayStation 4 and Xbox One.',
			tags: ['Action', 'RPG', 'Dungeon Crawler'],
			isFavorite: false,
			achievements: [],
			pegiDescriptor: [PegiDescriptor.ViolenceRealistic, PegiDescriptor.BadLanguage],
			media: []
		},
		{
			id: '05494686-74eb-5a7a-b27d-2a4dec248c7e',
			name: 'Assasin\'s Creed',
			icon: 'https://m.media-amazon.com/images/I/51aSyFn7paL.jpg',
			cover: 'https://i.redd.it/1yingsop7u5b1.png',
			path: '/path/to/asassins-creed',
			platform: 'Windows',
			playHistory: [],
			releaseDate: new Date('2007-11-13'),
			developer: 'Ubisoft Montreal',
			publisher: 'Ubisoft',
			description: 'Assassin\'s Creed is an action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. It is the first installment in the Assassin\'s Creed series. The game was released for PlayStation 3 and Xbox 360 in November 2007 and was made available on Microsoft Windows in April 2008.',
			tags: ['Action', 'Adventure', 'Stealth'],
			isFavorite: false,
			achievements: [],
			pegiDescriptor: [PegiDescriptor.ViolenceRealistic, PegiDescriptor.BadLanguage],
			media: []
		},
		{
			id: 'f437d388-53fc-5c71-9f21-78be42a26265',
			name: 'Ghostwire',
			icon: 'https://image.api.playstation.com/vulcan/ap/rnd/202202/1522/n6qx9GWCjkivDuCDsHhBwzhF.png',
			cover: 'https://wallpapers.com/images/hd/ghostwire-tokyo-city-torii-oiphhoq63wbivgsb.jpg',
			path: '/path/to/ghostwire',
			platform: 'Windows',
			playHistory: [],
			releaseDate: new Date('2023-03-25'),
			developer: 'Tango Gameworks',
			publisher: 'Bethesda Softworks',
			description: 'Ghostwire: Tokyo is an upcoming action-adventure video game developed by Tango Gameworks and published by Bethesda Softworks. It is set to be released for Windows and PlayStation 5 in March 2023.',
			tags: ['Action', 'Adventure', 'Horror'],
			isFavorite: false,
			achievements: [],
			pegiDescriptor: [PegiDescriptor.ViolenceRealistic, PegiDescriptor.FearHorror],
			media: []
		}
	]
}

const gameReducer = (state: GameState, action: GameAction): GameState => {
	switch (action.type) {
		case 'ADD_GAME': return { games: [...state.games, action.payload] }
		case 'REMOVE_GAME': return { games: state.games.filter(game => game.id !== action.payload) }
		case 'UPDATE_GAME': return { games: state.games.map(game => game.id === action.payload.id ? action.payload : game) }
		case 'SET_FAVORITE': return { games: state.games.map(game => game.id === action.payload.id ? { ...game, isFavorite: action.payload.isFavorite } : game) }
		case 'UPDATE_PLAYTIME': return { games: state.games.map(game => game.id === action.payload.id ? { ...game, playtime: action.payload.playtime } : game) }
		default: return state
	}
}

const GameContext = React.createContext<{ state: GameState; dispatch: React.Dispatch<GameAction> }>({ state: initialState, dispatch: () => null })

export const GameProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
	const [state, dispatch] = React.useReducer(gameReducer, initialState)

	return (
		<GameContext.Provider value={{ state, dispatch }}>
			{children}
		</GameContext.Provider>
	)
}

export const useGameContext = () => {
	const context = React.useContext(GameContext)
	if (!context) throw new Error('useGameContext must be used within a GameProvider')
	return context
}
