describe('factory: Search', function(){
  var search;

  beforeEach(module('SubRedditSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .expectGET("http://www.reddit.com/r/bitcoin/new.json?sort=new")
        .respond(
            {items: items}
        )
  }));

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function(){
    search.query('hello')
    .then(function(response){
      expect(response.data).toEqual(items)
  });
});