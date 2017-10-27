// var states = ['AboutCtrl', 'CapabilitiesCtrl', 'ClientsCtrl', 'ContactsCtrl', 'PartnersCtrl', 'WorksCtrl'];
(function() {
    'use strict';

    angular
    .module('espot', [
        // 'ngRoute',
        // 'ngAnimate'
        // 'icreations.nav',
        // 'icreations.about',
        // 'icreations.capabilities',
        // 'icreations.clients',
        // 'icreations.contacts',
        // 'icreations.partners',
        // 'icreations.works',
        // 'icreations.mob_menu'
    ])
    .config(Config);

    // Config.$inject = ['$routeProvider', '$locationProvider'];

    // function Config($routeProvider, $locationProvider) {
    function Config() {
        // $routeProvider.
        // otherwise({ redirectTo: '/about' });

        // $locationProvider.html5Mode({
        //   enabled: true,
        //   requireBase: false
        // });

    };

})();