angular.module('project', []).
	config(function($routeProvider) {
		$routeProvider.
		when('/', {controller:MainCtrl, templateUrl:'main.html'}).
		when('/phrases-main', {controller: PhrasesCtrl, templateUrl:'phrases-main.html'}).
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
	$scope.phrases = function() {
		$location.path("/phrases-main");
	}
	$scope.food = function() {
		$location.path("/food-main");
	}
	$scope.ettiquette = function() {
		$location.path("/ettiquette-main");
	}
	$scope.around = function() {
		$location.path("/around-main");
	}
	$scope.bulletin = function() {	
		var url = 'http://sgee.sch.ac.kr/board/list.php?db=asian1';
		window.plugins.childBrowser.showWebPage(url, {showLocationBar : false}); 
		//$location.path("/bulletin-main");
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