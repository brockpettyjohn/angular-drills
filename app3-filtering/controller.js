angular.module('app').controller('mainCtrl', function($scope, mainSvc){
    

    $scope.display = mainSvc.getData()


})