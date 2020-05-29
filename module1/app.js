(function() {
  'use strict';

  angular.module('nameCalculator', [])

    /*.controller('nameCalculatorController', function($scope){
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
    });*/

    .controller('DIcontroller', DIcontroller)
    .filter('replace', ReplaceFilter)
    .filter('reps', SecondReplace);
  DIcontroller.$inject = ['$scope', '$filter', 'replaceFilter'];

  function DIcontroller($scope, $filter, replaceFilter) {
    $scope.name = "Shrinath";
    $scope.cost = 0.4;
    $scope.simple = 'Your Name';
    $scope.msg = "hello there how are? are you fine";
    $scope.upper = function() {
      var upCase = $filter('uppercase')($scope.name);
      $scope.name = upCase;
      $scope.simple = replaceFilter($scope.simple);
    };
  };

  function ReplaceFilter() {
    return function(input) {
      input = input || "";
      input = input.replace("Name", "Lovely Name");
      return input;
    };
  }

  function SecondReplace() {
    return function(input, tar, repp) {
      input = input || "";
      input = input.replace(tar, repp);
      return input;
    };
  }

})();
