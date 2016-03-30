(function(){
	var app = angular.module('choosen', ['panel']);
	app.controller('choosenCtrl', function(){
		this.games = games;
	});

	app.controller('stryktipsCtrl', ['$http', function($http){
		var stryk = this;

		/*Should be something to update this*/
		$http.get('scraping/stryk.json').success(function(data){
			console.log(data);

			stryk.games = data;
			
		});
	}]);

	var tabs = [{name:'Choose yourself'}, { name:'Stryktipset' }, { name:'Europatipset' }, { name:'Topptipset'}];

	var stryket = [{
		score: '5-1',
		teamhome: 'Arsenal FC',
		teamaway: 'Liverpool FC',
		teamawaywinner:false,
		teamhomewinner:true,
		goalscorer: [
			'Ramsey',
			'Giroud',
			'Sanchez'
		]
	}, {
		score: '5-5',
		teamhome: 'Manchester City FC',
		teamaway: 'Manchester United FC',
		teamawaywinner:false,
		teamhomewinner:false,
		goalscorer: [
			'Rooney',
			'Aguero'
		]
	}];



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
		teamawaywinner:false,
		teamhomewinner:false,
		goalscorer: [
			'Rooney',
			'Aguero'
		]
	}];

})();



