export interface PlaySession {
	sessionId: string
	startTime: Date
	endTime: Date
	notes?: string
}

export interface Achievement {
	id: string
	title: string
	description: string
	unlocked: boolean
	dateUnlocked?: Date
}

export interface Platform {
	id: string
	name: string
	icon: string
	emulatorRequired: boolean
	defaultEmulatorId?: string
}

export interface Media {
	id: string
	type: 'image' | 'video' | 'youtube'
	url: string
}
