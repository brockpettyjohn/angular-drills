angular.module('app').service('mainSvc', function($http){
this.test = 'unicorn ninja'

    this.dataFiles = function(){
        return $http.get('http://swapi.co/api/planets')
    }
})