const team = {
	_players: [
		{
			firstName: 'Tom', 
			lastName: 'Jones',
			age: 80
		}, 
		{
			firstName: 'Iggy', 
			lastName: 'Pop',
			age: 73
		}, 
		{
			firstName: 'Michael', 
			lastName: 'Nyman',
			age: 75
		}
	],
	_games: [
		{
			opponent: 'Cheezers',
			teamPoints: 18,
			opponentPoints: 2 
		},
		{
			opponent: 'Doggos',
			teamPoints: 8,
			opponentPoints: 16 
		},
		{
			opponent: 'Norm',
			teamPoints: 12,
			opponentPoints: 56 
		}
	],

	get players() {
		return this._players;
	},

	get games() {
		return this._games;
	},

	addPlayer(firstName, lastName, age) {
		const player = {
			firstName
			, lastName
			, age
		}

		this._players.push(player);
	},

	addGame(opponent, teamPoints, opponentPoints) {
		const game = {
			opponent,
			teamPoints,
			opponentPoints
		}

		this._games.push(game);
	}
}

// tests

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Engine', 22, 7);
team.addGame('Carrots', 9, 78);
team.addGame('Beatles', 3, 64);

console.log(team.players);
console.log(team.games);