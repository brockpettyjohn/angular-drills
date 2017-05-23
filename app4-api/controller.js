angular.module('app').controller('mainCtrl', function ($scope, mainSvc){
$scope.test = mainSvc.test


$scope.redFerns = function(){
    mainSvc.dataFiles().then(function(response){
        $scope.planets = response.data.results
    })
}
$scope.redFerns()
})