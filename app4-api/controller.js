angular.module('app').controller('mainCtrl', function ($scope, mainSvc){
$scope.getData = function(){
    mainSvc.getData().then(function(planet){
        
        console.log(planet.data)
        $scope.nerdWars = planet.data.results

        
    })
}
$scope.getData()
})