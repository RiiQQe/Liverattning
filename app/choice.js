(function(){

	var app = angular.module('choice', []);

	app.directive('ownchoice', function(){
		return {
			restrict: 'E',
			templateUrl: 'choice.html'
		};
	});

})();