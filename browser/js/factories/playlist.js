app.factory('PlaylistFactory', function ($http) {

    var PlaylistFactory = {};
    var cachedPlaylists = [];

    PlaylistFactory.create = function (data) {
    	
        return $http.post('/api/playlists', data)
        .then(function (response) {
            var playlist = response.data;
            cachedPlaylists.push(playlist);
            return playlist;
        });
    };
    PlaylistFactory.fetchAll = function () {
		return $http.get('/api/playlists')
		.then(function (response) {
			angular.copy(response.data, cachedPlaylists);
			return cachedPlaylists;
		});
		
	};
	PlaylistFactory.fetchById = function (id) {
		return $http.get('/api/playlists/' + id)
		.then(function (response) {
			return response.data;
		})
		.then(function (playlist) {
			if(playlist.songs){
				playlist.songs = playlist.songs.map(function (s) {
				return SongFactory.convert(s, playlist.artists);
				});
			}
			
			return playlist;
		});
	};

	

    return PlaylistFactory;

});