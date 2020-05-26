(function (){
    'use strict';
    
    angular.module('nameCalculator', [])
    
    .controller('nameCalculatorController', function($scope){
        $scope.name="";
        $scope.totalValue=0;
        
        $scope.displaNumeric=function(){
            var totalNameValue=calculate($scope.name);
            $scope.totalValue=totalNameValue;
            
        };
        
        function calculate(string){
            var totalStringValue=0;
            for (var i=0;i<string.length;i++){
                totalStringValue+=string.charCodeAt(i);
            }
            return totalStringValue;
        }
    });
    
})();