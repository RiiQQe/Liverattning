

(function(){
	var app = angular.module('choosen', []);
	app.controller('choosenCtrl', function(){
		this.games = games;
	});


	var games = [{
		score: '0-3',
		teamhome: 'Liverpool FC',
		teamaway: 'Arsenal FC',
		teamawaywinner:true,
		teamhomewinner:false,
		goalscorer: [
			'Ramsey',
			'Giroud',
			'Sanchez'
		]
	}, {
		score: '1-1',
		teamhome: 'Manchester City FC',
		teamaway: 'Manchester United FC',
		teamawaywinner:true,
		teamhomewinner:false,
		goalscorer: [
			'Rooney',
			'Aguero'
		]
	}];

})();



