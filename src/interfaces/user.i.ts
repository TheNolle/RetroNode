export interface User {
	id: string
	username: string
	avatar: string
	// Account and Profile Information
	createdAt: Date
	lastLogin: Date
	gamerscore: number
	bio?: string
	country: string
	language: string
	achievementsUnlocked: number
	playStyle?: 'Casual' | 'Competitive' | 'Professional' | 'Completionist' | 'Speedrunner'
	// User Preferences
	preferredGameView: 'Grid' | 'List'
	preferredSortingMethod: 'Alphabetical' | 'Recently Played' | 'Most Played' | 'Highest Rated'
	// Customizable Profile Attributes
	profileThemeColor?: string
	avatarBorderStyle?: 'Solid' | 'Dashed' | 'Double' | 'Groove'
	backgroundCover?: string
}
