/**
 * Created by sohamChakraborty on 4/30/16.
 */
angular
    .module('app')
.controller('mainController', mainController);

function mainController(){
    var vm = this;
    
    vm.cardNumber = "";
}