describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('remove all vowels from string', function () {
        var results = $filter('removeAllVowels')('word');
        expect(results).toEqual('wrd');
        var results = $filter('removeAllVowels')('vowel');
        expect(results).toEqual('vwl');
    });

});
