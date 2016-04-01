(function(){

	var app = angular.module('stryket', []);

	app.directive('strykDir', ['$http', function($http){
		return {
			restrict: 'E',
			templateUrl: 'stryk.html',
			controller: function(){
				//this.vals = [{'1':false, 'X':false, '2':false}];

				var stryk = this;

				$http.get('scraping/stryk.json').success(function(data){
					console.log(data)
					stryk.games = data;
				});
				
				console.log("here")

				this.selectTab = function(setTab){
					this.tab = setTab;
				}

				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				}

				this.setTab = function(val){
					alert("wooorking");
					//this.vals[val] = true;
				}

			},
			controllerAs: 'stryketCtrl'
		};
	}]);

})();
