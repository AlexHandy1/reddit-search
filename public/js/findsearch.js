subRedditSearch.factory('FindSearch', ['$http', function($http) {
  var url = "/searchtermsdb"

  return {
    query: function() {
      return $http({
        url: url,
        method: 'GET'
      })
    }
  }
}])