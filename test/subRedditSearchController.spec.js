describe('SubRedditSearchController', function(){
  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('SubRedditSearchController');
  }));

  it('starts with an empty result', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  it('displays search results', function() {
    expect(ctrl.searchResults.children).toEqual(children)
  });
});