subRedditSearch.controller('subRedditSearchController', ['Search', function(Search) {
  var self = this;

  self.doSearch = function() {
    Search.query(self.searchTerm)
    .then(function(response) {
      self.searchResult = response.data.data.children;
      console.log(response.data.data.children)
    })
  };
}]);

subRedditSearch.factory('Search', ['$http', function($http) {
  var queryURLfront = "http://www.reddit.com/r/"
  var queryURLback = "/new.json?sort=new"

  return {
    query: function(searchTerm) {
      return $http({
        url: queryURLfront + searchTerm + queryURLback,
        method: 'GET'
      });
    }
  }
}]);