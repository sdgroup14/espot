(function() {
    'use strict';

    angular
        .module('icreations.mob_menu', ['ngAnimate'])
        .config([config])
        .controller('MmenuCtrl', MmenuCtrl);

    MmenuCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

    function MmenuCtrl($scope, $rootScope, $timeout) {
            $scope.toggleCheck = false;
            $scope.toggle = function() {
            $scope.toggleCheck = !$scope.toggleCheck;
            
            console.log('123');
 

    
    };
    };


    function config($routeProvider) {
    };
})();