app.controller('ArtistsCtrl', function ($scope, allArtists) {
	$scope.artists = allArtists;

	$scope.toFrequency = function (str) {
    str = str || '';
    return str.split('').reduce(function (freq, char) {
        char = char.toLowerCase();
        freq[char] = (freq[char] || 0);
        freq[char]++;
        return freq;
    }, {});
};
$scope.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
});