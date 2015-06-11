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