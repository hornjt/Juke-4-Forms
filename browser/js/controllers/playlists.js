app.controller('PlayListsCtrl', function ($scope, PlaylistFactory) {

	$scope.playlists;

	PlaylistFactory.fetchAll()
		.then(function(playlists){
			$scope.playlists = playlists;
			
		});

	

});