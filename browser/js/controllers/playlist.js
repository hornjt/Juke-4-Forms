app.controller('PlayListCtrl', function ($scope, PlaylistFactory, $stateParams, SongFactory, SpecificPlaylist) {


	PlaylistFactory.fetchById($stateParams.id)
		.then(function(playlist){
			$scope.playlist = playlist;
		});
		
	$scope.allSongs;
	SongFactory.fetchAllSongs()
		.then(function(allSongs) {
			$scope.allSongs = allSongs;
		});

	$scope.addSong = function(song) {
		console.log(song, "hereee");
		// SpecificPlaylist.addSong(song)
		// 	.then(function(foundSong) {
		// 		console.log(foundSong, "this is in the playlist controller")
		// 	})
		// 	.then(null, function(err) {
		// 		console.error(err);
		// 	})
	};

	// SpecificPlaylist.addSong()
	// SpecificPlaylist.addSong(song)
	// 	.then(function(song) {
			
	// 	});


	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.album.songs);
	};

	$scope.generateMailTo = function () {
		if (!$scope.album) return;
		var link = 'Check out this groovy album: http://localhost:1337/#/albums/' + $scope.album._id;
		return 'mailto:?subject=' + $scope.album.name + '&body=' + link;
	};
	

});