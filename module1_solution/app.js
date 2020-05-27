(function(){
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$injector=['$scope']
    function LunchCheckController($scope){
        $scope.list="";
        $scope.stage="";
        $scope.check=function(){
            var arrayLunch=$scope.list.split(', ');
            
            if(arrayLunch==false){
                $scope.stage="Please Enter data first!";
            }else{
                if(arrayLunch.length<=3){
                    $scope.stage="Enjoy!";
                }else{
                    $scope.stage="Too much!";
                }
            }
        };
        
    };
})();