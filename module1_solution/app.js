(function(){
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$injector=['$scope', '$filter']
    function LunchCheckController($scope, $filter){
        $scope.list="";
        $scope.stage="";
        $scope.check=function(){
            var arrayLunch=$scope.list.split(', ');
            if(arrayLunch.length<=3){
                $scope.stage="Enjoy!";
            }else{
                $scope.stage="Too much!";
            }
        };
        
    };
})();