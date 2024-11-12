import React from 'react'
import { User } from '../interfaces/user.i'

interface UserProps {
	user: User
	setUser: React.Dispatch<React.SetStateAction<User>>
}

const UserContext = React.createContext<UserProps>({} as UserProps)

export const UserProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
	const [user, setUser] = React.useState<User>({
		id: '951ec592-1e94-59c6-bfba-d0bdba73e09e',
		username: 'Default User',
		avatar: '',
		createdAt: new Date(),
		lastLogin: new Date(),
		gamerscore: 0,
		country: 'France',
		language: 'en_GB',
		achievementsUnlocked: 0,
		preferredGameView: 'Grid',
		preferredSortingMethod: 'Alphabetical'
	})

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUserContext = () => {
	const context = React.useContext(UserContext)
	if (!context) throw new Error('useUserContext must be used within a UserProvider')
	return context
}
