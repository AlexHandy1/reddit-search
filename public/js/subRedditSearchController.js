subRedditSearch.controller('subRedditSearchController', ['Search', 'SearchTerm', 'FindSearch',function(Search, SearchTerm, FindSearch) {
  var self = this;

  self.doSearch = function() {
    Search.query(self.searchTerm)
    .then(function(response) {
      self.searchResult = response.data.data.children
    })
    SearchTerm.query(self.searchTerm)
    .then(function(response) {
    })
    FindSearch.query()
    .then(function(response) {
      console.log(response)
    })
  };
}]);