// angular.module('app', ['ngRoute'])
// .config(function($routeProvider, $locationProvider) {
// 	$locationProvider.html5Mode(true);
//
// 	$routeProvider
// 	.when('/', {
// 		templateUrl: myLocalized.partials + 'main.html',
// 		controller: 'Main'
// 	});
// })
// .controller('Main', function() {
// 	console.log('Main file loaded.');
// });


angular.module('app', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/main', {
		templateUrl: myLocalized.partials + 'main.html',
		controller: 'Main'
	})
	.when('/content/:id', {
		templateUrl: myLocalized.partials + 'content.html',
		controller: 'Content'
	});
})
.controller('Main', function($scope, $http, $routeParams) {
	$http.get('wp-json/wp/v2/posts').then(function(res){
		$scope.posts = res.data;
	});
})
.controller('Content', function($scope, $http,$routeParams) {
	$http.get('wp-json/wp/v2/posts'+$routeParams.id).then(function(res){
		$scope.post = res.data;
	});
});
