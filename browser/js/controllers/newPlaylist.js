app.controller('NewPlayListCtrl', function ($scope, PlaylistFactory, $stateParams, $state) {


	$scope.buttonPressed = function(data){
		PlaylistFactory.create(data)
		.then(function(stuff){
			console.log("Inside the button pressed")
			$scope.playListInput.name = null;
			$scope.changeState();
		});
	};

	$scope.changeState = function(){
				$state.go('specificPlaylist');
			};


	

});