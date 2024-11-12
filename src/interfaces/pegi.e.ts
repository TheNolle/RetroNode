export enum PegiDescriptor {
	ViolenceMild = 'violence_mild',
	ViolenceRealistic = 'violence_realistic',
	BadLanguage = 'bad_language',
	FearScary = 'fear_scary',
	FearHorror = 'fear_horror',
	SexInnuendo = 'sex_innuendo',
	SexExplicit = 'sex_explicit',
	Drugs = 'drugs',
	Discrimination = 'discrimination',
	Gambling = 'gambling',
	InGamePurchases = 'in_game_purchases',
}

export const getPegiDescriptorDetails = (descriptor: PegiDescriptor) => {
	switch (descriptor) {
		case PegiDescriptor.ViolenceMild: return { name: 'Violence', description: 'Mild violence, usually non-detailed and low impact.' }
		case PegiDescriptor.ViolenceRealistic: return { name: 'Realistic Violence', description: 'Realistic violence with potential for harm or distress.' }
		case PegiDescriptor.BadLanguage: return { name: 'Bad Language', description: 'Offensive or inappropriate language.' }
		case PegiDescriptor.FearScary: return { name: 'Scary', description: 'Content that may startle or create mild fear.' }
		case PegiDescriptor.FearHorror: return { name: 'Horror', description: 'Intense horror scenes likely to cause fear or distress.' }
		case PegiDescriptor.SexInnuendo: return { name: 'Nudity', description: 'Mild sexual references or innuendo.' }
		case PegiDescriptor.SexExplicit: return { name: 'Sex', description: 'Explicit sexual content or references.' }
		case PegiDescriptor.Drugs: return { name: 'Drugs', description: 'References to or depictions of drug use.' }
		case PegiDescriptor.Discrimination: return { name: 'Discrimination', description: 'Depictions or language supporting discrimination.' }
		case PegiDescriptor.Gambling: return { name: 'Gambling', description: 'Simulated gambling or betting activities.' }
		case PegiDescriptor.InGamePurchases: return { name: 'In-Game Purchases', description: 'Offers in-game purchases with real money.' }
		default: return { name: 'Unknown', description: 'Unknown descriptor.' }
	}
}

export const determinePegi = (descriptors: PegiDescriptor[]): number => {
	let pegi = 3
	descriptors.forEach(descriptor => {
		if (descriptor === PegiDescriptor.ViolenceMild || descriptor === PegiDescriptor.FearScary) pegi = Math.max(pegi, 7)
		else if (descriptor === PegiDescriptor.FearHorror || descriptor === PegiDescriptor.SexInnuendo) pegi = Math.max(pegi, 12)
		else if (descriptor === PegiDescriptor.ViolenceRealistic || descriptor === PegiDescriptor.Drugs) pegi = Math.max(pegi, 16)
		else if (descriptor === PegiDescriptor.SexExplicit || descriptor === PegiDescriptor.Discrimination || descriptor === PegiDescriptor.Gambling) pegi = Math.max(pegi, 18)
		else pegi = Math.max(pegi, 3)
	})
	return pegi
}
