(function(){

	var app = angular.module('stryket', []);

	app.directive('strykDir', ['$http', '$filter', function($http, $filter){
		return {
			restrict: 'E',
			templateUrl: 'stryk.html',
			controller: function(){
				//this.vals = [{'1':false, 'X':false, '2':false}];
				//this.vals = [];
				this.nrOfCorr = 0;
				var stryk = this;
				stryk.vals = [];

				$http.get('scraping/stryk.json').success(function(data){
					console.log(data)
					stryk.games = data;
					angular.forEach(stryk.games, function(d){
						var obj = {'gamenr':d.gamenr, '1':false, 'X':false, '2':false};
						stryk.vals.push(obj);
					});
				});
				
				this.isSelected = function(val, gamenr){

					var found = $filter('filter')(this.vals, {gamenr:gamenr}, true);
					var found2 = $filter('filter')(this.games, {gamenr:gamenr}, true);

					if(found[0][val] && found2[0].winner == val) {
						return 'green';
					}
					
					else if(found[0][val]) return 'red';
					else return 'white';
				};

				this.setTab = function(val, gamenr){
					console.log("here");
					var found = $filter('filter')(this.vals, {gamenr:gamenr}, true);
					var found2 = $filter('filter')(this.games, {gamenr:gamenr}, true);

					found[0][val] = !found[0][val];

					if(found[0][val] && found2[0].winner == val) {
						this.nrOfCorr++;
					}else if(!found[0][val] && found2[0].winner == val)this.nrOfCorr--;
				};
			},
			controllerAs: 'stryketCtrl'
		};
	}]);



})();
