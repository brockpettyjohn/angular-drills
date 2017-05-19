angular.module('app').service('mainSvc', function($http){
this.getData = function(){
    return $http.get("http://swapi.co/api/planets")
}
})