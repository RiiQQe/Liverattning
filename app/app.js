

(function(){
	var app = angular.module('choosen', []);
	app.controller('choosenCtrl', function(){
		this.games = games;
	});

	app.controller('stryktipsCtrl', function(){
		this.games = stryket;
	});

	/*app.controller('optionCtrl', function(){

		this.tab = 1;
		this.tabs = tabs;

		this.selectTab = function(setTab){
			this.tab = setTab;
		}
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}

	});*/

	app.directive('panelTabs', function(){
		return {
			restrict: 'E',
			templateUrl: 'panel-tabs.html',
			controller: function(){
				this.tab = 1;
				this.tabs = tabs;

				this.selectTab = function(setTab){
					this.tab = setTab;
				}
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				}
			},
			controllerAs:'options'
		};
	})

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



