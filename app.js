var app = angular.module('app', [])



app.controller('parentController', function($scope){
	$scope.$on('called', function(event, src){
		console.log('Im the parent controller and heard the function called from',src);
	})

	$scope.downClick = function(origin){
		$scope.$broadcast('called', origin);
	}
	$scope.upClick = function(origin){
		$scope.$emit('called', origin);
	}

})


app.controller('kidController', function($scope){
	$scope.$on('called', function(event, src){
		console.log('Im the kid controller and heard the function called from',src);
	})

	$scope.downClick = function(origin){
		$scope.$broadcast('called', origin);
	}
	$scope.upClick = function(origin){
		$scope.$emit('called', origin);
	}


})

app.controller('grandkidController', function($scope){
	$scope.$on('called', function(event, src){
		console.log('Im the grandkid controller and heard the function called from',src);
	})

	$scope.downClick = function(origin){
		$scope.$broadcast('called', origin);
	}
	$scope.upClick = function(origin){
		$scope.$emit('called', origin);
	}


})