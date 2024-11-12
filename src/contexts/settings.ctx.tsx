import React from 'react'

interface SettingsProps {
}

const SettingsContext = React.createContext<SettingsProps>({} as SettingsProps)

export const SettingsProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
	const [firstVisit, setFirstVisit] = React.useState<boolean>(true)

	return (
		<SettingsContext.Provider value={{ firstVisit, setFirstVisit }}>
			{children}
		</SettingsContext.Provider>
	)
}

export const useSettingsContext = () => {
	const context = React.useContext(SettingsContext)
	if (!context) throw new Error('useSettingsContext must be used within a SettingsProvider')
	return context
}
