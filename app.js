dynServices = angular.module("dynServices",[]);
dynServices.controller("BaseController",function($scope){
    $scope.userData = {};
}).directive("custSelect",function(DataService){
    return {
        restrict : "E",
        scope : true,
        template : "<select ng-model='userData[model]' ng-options='list.id as list.id for list in list'>",
        link : function(scope, element, attrs){
            scope.list = $.extend({},DataService.getData(attrs.type));
            scope.model = attrs.modelObj;
        }
    };
}).service("DataService",function(){
    var serviceList = this;
    function getNames(){
        return [{"id":"Vicktor"},{"id":"Erik"},{"id":"Jim"}];
    }
    function getCountries(){
        return [{"id":"India"},{"id":"South Africa"},{"id":"Brazil"}];
    }
    function getBool(){
        return [{"id":"Yes"},{"id":"No"}];
    }
    function getData(name){
        return this[name]();
    }
    return {
       getData : getData,
       bool : getBool,
       names : getNames,
       countries : getCountries
    };
});