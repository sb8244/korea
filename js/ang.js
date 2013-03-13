angular.module('project', ['ui.bootstrap']).
	config(function($routeProvider) {
		$routeProvider.
		when('/', {controller:MainCtrl, templateUrl:'main.html'}).
		when('/phrases-main', {controller: PhrasesCtrl, templateUrl:'phrases-main.html'}).
		when('/phrases-greeting', {controller: PhrasesCtrl, templateUrl:'phrases/greeting.html'}).
		when('/phrases-shopping', {controller: PhrasesCtrl, templateUrl:'phrases/shopping.html'}).
		when('/food-main', {controller: FoodCtrl, templateUrl: 'food-main.html'}).
		when('/ettiquette-main', {controller: EttCtrl, templateUrl: 'ettiquette-main.html'}).
		when('/around-main', {controller: AroundCtrl, templateUrl: 'around-main.html'}).
		when('/bulletin-main', {controller: BulletinCtrl, templateUrl: 'bulletin-main.html'})
	});
function MainCtrl($scope, $location) {
	if($scope.show == undefined)
	{
		$scope.show = {};
	}
	$scope.show.up = false;
	$scope.bulletin = function() {	
		var url = 'http://sgee.sch.ac.kr/board/list.php?db=asian1';
		window.plugins.childBrowser.showWebPage(url, {showLocationBar : false});
	}
	$scope.back = function () { 
		window.history.back();
	}
}
function PhrasesCtrl($scope, $location) {
	$scope.show.up = true;
}
function FoodCtrl($scope, $location) {	
	$scope.show.up = true;
}
function AroundCtrl($scope, $location) {	
	$scope.show.up = true;
}
function EttCtrl($scope, $location) {	
	$scope.show.up = true;
}
function BulletinCtrl($scope, $location, $http) {
	var url = 'http://sgee.sch.ac.kr/board/list.php?db=asian1';
	window.plugins.childBrowser.showWebPage(url, {showLocationBar : false}); 
}
window.getPhoneGapPath = function() {
    var path = window.location.pathname;
    path = path.substr( path, path.length - 10 );
    return 'file://' + path;
};