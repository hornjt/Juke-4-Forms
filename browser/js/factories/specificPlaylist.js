app.factory('SpecificPlaylist', function() {
	var SpecificPlaylist = {};
	var singlePlaylist = [];

	SpecificPlaylist.addSong = function(song) {
		console.log(song, "this is the specificPlaylist factory");
		singlePlaylist.push(song);
		// console.log(singlePlaylist);
	};
	return SpecificPlaylist;
});