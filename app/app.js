

(function(){
	var app = angular.module('choosen', []);
	app.controller('choosenCtrl', function(){
		this.games = games;
	});


	var games = [{
		teamhome: 'Liverpool FC',
		teamaway: 'Arsenal FC',
		score: '0-3',
		goalscorer: [
			'Ramsey',
			'Giroud',
			'Sanchez'
		]
	}, {
		teamhome: 'Manchester City FC',
		teamaway: 'Manchester United FC',
		score: '1-1',
		goalscorer: [
			'Rooney',
			'Aguero'
		]
	}];

})();



