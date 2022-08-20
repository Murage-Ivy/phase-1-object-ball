function gameObject() {
    const teams = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 15,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },

            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adriens': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,

                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,

                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,

                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,

                },

            },
        },
    }
    return teams
}




const homeTeam = () => {
    return gameObject().home
}

const awayTeam = () => {
    return gameObject().away;
}

const getPlayers = () => {
    return Object.assign({}, homeTeam().players, awayTeam().players);
}


const getArrayPlayersDetails = () => {
    return Object.entries(getPlayers())
};

const getPlayersNames = () => {
    return Object.keys(getPlayers())
}

const hometeamDetails = () => {
    const hometeamDetail = {}
    hometeamDetail[gameObject().home.teamName] = gameObject().home.colors;
    return hometeamDetail
}

const awayTeamDetails = () => {
    const awayTeamDetail = {}
    awayTeamDetail[gameObject().away.teamName] = gameObject().away.colors;
    return awayTeamDetail
}


// Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
const numPointsScored = (playerName) => {
    const playerPoints = getArrayPlayersDetails().find(player => player[0].toLowerCase() === playerName.toLowerCase());
    if (typeof playerPoints === 'object') {
        return playerPoints[1].points
    } else {
        return "Player was not found "
    }
}

const shoeSize = (playerName) => {
    const playerShoeSize = getArrayPlayersDetails().find(player => player[0].toLowerCase() === playerName.toLowerCase())
    if (typeof playerShoeSize === 'object') {
        return playerShoeSize[1].shoe
    } else {
        return "Player was not found "
    }
}


const teamColors = (teamName) => {
    const teamDetails = Object.entries(Object.assign({}, hometeamDetails(), awayTeamDetails()));
    const colors = teamDetails.find(team => team[0].toLowerCase() === teamName.toLowerCase())
    if (typeof colors === 'object') {
        return colors[1]

    } else {
        return 'The team name was not found';
    }
}

const teamNames = () => {
    const teams = Object.entries(Object.assign({}, gameObject()))
    const allTeamNames = teams.map(team => team[1].teamName);
    return allTeamNames;
}

const playerNumbers = (teamName) => {
    const teams = Object.entries(Object.assign({}, gameObject()));
    const allJerseysNumbers = teams.filter(team => team[1].teamName === teamName).map(team => team[1].players);
    const players = Object.entries(allJerseysNumbers[0])
    return players.map(player => player[1].number);
}

const playerStats = (playerName) => {
    const player = getArrayPlayersDetails().find(player => (player[0].toLowerCase() === playerName.toLowerCase()))[1];
    return player;
}

const bigShoeRebounds = () => {
    const players = getArrayPlayersDetails()
    const largestShoe = players.map(player => player[1].shoe);
    const rebounds = players.find(player => player[1].shoe === Math.max(...largestShoe))[1].rebounds;
    return rebounds;
}

const mostPointsScored = () => {
    const players = getArrayPlayersDetails();
    const mostPoints = players.map(player => player[1].points);
    const player = players.find(player => player[1].points === Math.max(...mostPoints))[0];
    return player;
}

const winningTeam = () => {
    const teams = Object.entries(Object.assign(gameObject()));
    const home = Object.entries(homeTeam().players);
    const away = Object.entries(awayTeam().players);
    const homePoints = home.reduce((initialValue, player) => player[1].points + initialValue, 0)
    const awayPoints = away.reduce((initialValue, player) => player[1].points + initialValue, 0)
    if (homePoints > awayPoints) {
        return teams[0][1].teamName;
    } else {
        return teams[1][1].teamName;
    }
}

const playerWithLongestName = () => {
    const players = getArrayPlayersDetails();
    const arrayName = players.map(player => player[0].length);
    const player = players.find(player => player[0].length === Math.max(...arrayName))[0]
    return player;
}

const doesLongNameStealATon = () => {
    const players = getArrayPlayersDetails();
    const mostSteals = Math.max(...players.map(player => player[1].steals));
    console.log(mostSteals)
    return players.find(player => player[0] === playerWithLongestName())[1].steals === mostSteals;
}
console.log(doesLongNameStealATon());