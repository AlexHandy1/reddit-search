subRedditSearch.factory('SearchTerm', ['$http', function($http) {
  var url = "/searchtermsdb"

  return {
    query: function(searchTerm) {
      return $http({
        url: url,
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        params: {"searchterm" : searchTerm}
      })
    }
  }
}])