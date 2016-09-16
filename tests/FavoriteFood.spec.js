describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('filter food correctly', function () {
      var mockedList = [{
           name: 'bob',
           favoriteFood: 'pizza'
       }, {
           name: 'joe',
           favoriteFood: 'cheeseburgers'
       }, {
           name: 'sandy',
           favoriteFood: 'icecream'
       }];

        var results = $filter('favoriteFood')(mockedList, 'pizza');
        expect(results.length).toBe(1);
        expect(results[0].name).toBe('bob');
    });

	
});
