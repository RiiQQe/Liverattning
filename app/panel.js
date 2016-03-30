(function(){
	var app = angular.module('panel', []);

	app.directive('panelTabs', function(){
		return {
			restrict: 'E',
			templateUrl: 'panel-tabs.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab){
					this.tab = setTab;
				}
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				}
			},
			controllerAs:'options'
		};
	});

})();