(function(){

	var app = angular.module('stryket', []);

	app.directive('strykDir', function(){
		return {
			restrict: 'E',
			templateUrl: 'stryk.html',
			//css: 'app/styletest.css',
			controller: function(){
				
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
