/**
 * Created by sohamChakraborty on 5/1/16.
 */
describe('credit card directive tests', function(){

        var element, scope;

    beforeEach(module('app'));

    beforeEach(inject(function($templateCache){
        var templateUrl = 'templates/credit-card-directive.html';
        var async = false;
        var req = new XMLHttpRequest();
        req.onload = function () {
            $templateCache.put(templateUrl, this.responseText);
        };
        req.open('get', '/base', templateUrl, async);
        req.send();
    }));

    beforeEach(inject(function ($compile, $rootScope) {

        scope = $rootScope.$new();
        //scope.doIt = angular.noop;
        var html = '<credit-card-identifier ng-model="cardNumber"></credit-card-identifier>';
        element = $compile(html)(scope);
        scope.$apply();
    }))


    it('should have an image element and an input element', function(){
       // var dir_element =  angular.element('<credit-card-identifier ng-model="cardNumber"></credit-card-identifier>');
        //var element = compile(dir_element)(rootScope);
        //rootScope.$digest();
        var imageElement = element.find('img');
        var inputElement = element.find('input');
        expect(imageElement).toBeDefined();
        expect(inputElement).toBeDefined();
    });
    
    it('should load default card image if the card number is not being able to be recognized', function () {
        
    });
    
    it('should load visa card image for visa card number', function(){
        
    });

    it('should load amex card image for amex card number', function(){

    });

    it('should load discover card image for discover card number', function(){

    });

    it('should load master card image for master card number', function(){

    });
    
});