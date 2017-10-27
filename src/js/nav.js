(function() {
    'use strict';

    angular
        .module('icreations.nav', ['ngAnimate'])
        .config([config])
        .controller('NavCtrl', NavCtrl);

    NavCtrl.$inject = ['$scope', '$rootScope', '$timeout'];

    function NavCtrl($scope, $rootScope, $timeout) {
        console.log('123');
     $rootScope.$on('$routeChangeSuccess',
      function(event, next, current) {
        // var states = ['AboutCtrl', 'CapabilitiesCtrl', 'ClientsCtrl', 'ContactsCtrl', 'PartnersCtrl', 'WorksCtrl'];
        // if (states.indexOf(current.$$route.controller) < states.indexOf(next.$$route.controller)) {
        //   $rootScope.back = false;
        // } else {
        //   $rootScope.back = true;
        // }
        $rootScope.loadder = false;
        $('#loader').attr('src', '');
      });

    
    };
    


    function config($routeProvider) {
    };
})();