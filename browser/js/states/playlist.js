app.config(function ($stateProvider) {
	$stateProvider.state('newPlaylist', {
		url: '/playlists/new',
		templateUrl: '/templates/playlist-form.html',
		controller: 'NewPlayListCtrl'
		// resolve: {
		// 	allAlbums: function (AlbumFactory) {
		// 		return AlbumFactory.fetchAll();
		// 	}
		// }
	});
	$stateProvider.state('specificPlaylist', {
		url: '/playlists/:id',
		templateUrl: '/templates/specificPlaylist.html',
		controller: 'PlayListCtrl'
	});

	// $stateProvider.state('addSong')
});