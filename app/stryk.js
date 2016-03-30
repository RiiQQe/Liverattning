(function(){

	var app = angular.module('stryket', []);

	app.directive('stryk', function(){
		return {
			restrict: 'E',
			templateUrl: 'stryk.html',
			controller: function(){
				//this.tab = 0;

				this.selectTab = function(setTab){
					this.tab = setTab;
				}

				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				}
			},

			controllerAs: 'stryketCtrl'
		};
	});

})();