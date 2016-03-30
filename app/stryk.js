(function(){

	var app = angular.module('stryket', []);

	app.directive('stryk', function(){
		return {
			restrict: 'E',
			templateUrl: 'stryk.html'
		};
	});

})();