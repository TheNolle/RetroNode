export enum Ranks {
	Newcomer = 0,
	Beginner = 1000,
	Rookie = 2500,
	Apprentice = 5000,
	Enthusiast = 10000,
	Adventurer = 15000,
	Challenger = 25000,
	Skilled = 40000,
	Veteran = 60000,
	Proficient = 85000,
	Expert = 115000,
	Elite = 150000,
	Master = 190000,
	Legend = 235000,
	Champion = 285000,
	Epic = 340000,
	Mythic = 400000,
	Grandmaster = 465000,
	Ultimate = 535000,
	Immortal = 610000,
}

export const getRankForGamerscore = (gamerscore: number): string => {
	const rankEntries = Object.entries(Ranks).filter(([_, score]) => typeof score === 'number') as [keyof typeof Ranks, number][]
	let rankName = 'Newcomer'
	for (const [name, score] of rankEntries) {
		if (gamerscore >= score) rankName = name
		else break
	}
	return rankName
}
