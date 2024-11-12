import React from 'react'

interface ContextsProps {
	children: React.ReactNode
}

// Contexts
import { GameProvider } from '../contexts/games.ctx'
import { UserProvider } from '../contexts/user.ctx'
import { SettingsProvider } from '../contexts/settings.ctx'

function Contexts(props: ContextsProps): React.ReactElement {
	return (
		<GameProvider>
			<UserProvider>
				<SettingsProvider>
					{props.children}
				</SettingsProvider>
			</UserProvider>
		</GameProvider>
	)
}

export default React.memo(Contexts)
