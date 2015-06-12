subRedditSearch.controller('subRedditSearchController', ['Search', 'SearchTerm', function(Search, SearchTerm) {
  var self = this;

  self.doSearch = function() {
    Search.query(self.searchTerm)
    .then(function(response) {
      self.searchResult = response.data.data.children
    })
    SearchTerm.query(self.searchTerm)
    .then(function(response) {
      console.log(response)
    })
  };
}]);