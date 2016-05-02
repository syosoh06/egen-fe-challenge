/**
 * Created by sohamChakraborty on 4/30/16.
 */
/* recommended */
/* credit-card-directive.js */

/**
 * @desc credit card directive that casn automatically detect the credit card type
 * @example <div credit-card-identifier></div>
 */
angular
    .module('app')
    .directive('creditCardIdentifier', creditCardIdentifier);

function creditCardIdentifier(creditCardFactory) {
    /* implementation details */

    var directive = {
        restrict: 'E',
        templateUrl: 'templates/credit-card-directive-template.html',
        /*template: '<textarea ng-model="foo"></textarea>',*/
        scope: {
            max: '='
        },
        require: 'ngModel',
        link: linkFunc/*,
        controller: 'ExampleController',
        // note: This would be 'ExampleController' (the exported controller name, as string)
        // if referring to a defined controller in its separate file.
        controllerAs: 'vm',
        bindToController: true // because the scope is isolated*/
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

        scope.cardType=creditCardFactory.getCardType();
        scope.logoUrl=creditCardFactory.getLogoUrl();

        el.on("input", function() { // (or use "change" if you don't need to check every single keystroke)
            console.log(scope.ccnumber);
            creditCardFactory.identifyCardTypeAndSetLogo(scope.ccnumber);
            scope.cardType = creditCardFactory.getCardType();
            scope.logoUrl = creditCardFactory.getLogoUrl();
        })
    }
    
    

}