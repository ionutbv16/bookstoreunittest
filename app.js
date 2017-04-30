var myApp = angular.module('myApp', []);

myApp.controller('BooksController', ['$scope', '$http',   function($scope, $http ){

	console.log('BooksController loaded...');

	var getData = function getData() {
				$http.get('books.json').success(function(response){
					$scope.books = response;
					console.log("response ",JSON.stringify(response));
				}).error(function(data, status, headers, config) {
						console.log("error ",data);
				});
			};

	getData();


}]);
