videojs.registerPlugin('mostWatchedPlaylist', function() {
  var myPlayer = this,
    queryObject = {};

  // +++ Define the search parameters +++
  // For search, you must use a search-enabled policy key
  queryObject.policyKey = "BCpkADawqM1eifBpAkEr4aJrH9i950qErQCg8FvHXBCigF0JjC-zZyhN4T1XGGGBbB0hojevaABtp54BTvT9Er0KplSpC6tqm8YgyCtIzGl5sc77i23GLWYdpLdtF7Aei45EuLqlUznlkiXU";
  queryObject.q = '*';
  queryObject.sort = "-plays_total";
  queryObject.limit = 10;

  // +++ Get the video objects +++
  myPlayer.catalog.getSearch(queryObject,function(errorObj,videosReturned){
    // console.log('videosReturned',videosReturned);
    // console.log('errorObj',errorObj);
    // +++ Load the playlist +++
    myPlayer.playlist(videosReturned);
  });
});
