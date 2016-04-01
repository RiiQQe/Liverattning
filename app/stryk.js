(function(){

	var app = angular.module('stryket', []);

	app.directive('strykDir', ['$http', '$filter', function($http, $filter){
		return {
			restrict: 'E',
			templateUrl: 'stryk.html',
			controller: function(){
				//this.vals = [{'1':false, 'X':false, '2':false}];
				//this.vals = [];
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
				
				this.selectTab = function(setTab){
					this.tab = setTab;
				}

				this.isSelected = function(val, gamenr){

					var found = $filter('filter')(this.vals, {gamenr:gamenr}, true);

					return found[0][val];
				}

				this.setTab = function(val, gamenr){
					var found = $filter('filter')(this.vals, {gamenr:gamenr}, true);

					if(found[0][val]) found[0][val] = false;
					else found[0][val] = true;
				}



			},
			controllerAs: 'stryketCtrl'
		};
	}]);

})();
