(function() {
  'use strict';

  angular
    .module('espot.institution', [
      'ui.router',
       'ngAnimate'])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('InstitutionCtrl', InstitutionCtrl);

  InstitutionCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http'];

  function InstitutionCtrl($scope, $rootScope, $timeout, $http) {
    $('.institution-content').height($(window).height() - 110);


    $timeout(function(){
      $rootScope.pageTitle = "О ЗАВЕДЕНИИ";
      $('.nav-2').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');
      }, 500);


    $rootScope.$on('$locationChangeStart', function(evt) {
      $('.page-title').removeClass('active');

    });

    $rootScope.$on('$locationChangeSuccess', function(evt) {
      $timeout(function(){
      $('.nav-2').addClass('nav-show');
      $('.logo').addClass('start-page-logo');
      $('.page-title').addClass('active');

      }, 500);
    });



    // $scope.dataKitchen = [];

//     $http({
//       method: 'get',
//       url: '../data/kitchen.php'
//     }).then(function(response) {
//       $scope.dataKitchen = response.data;
// // console.log($scope.dataKitchen[0]);
// // console.log($scope.dataKitchen[$index].items);
//     }, function(error) {
//       console.log(error);
//     });

    // $scope.getTimes = function(n) {
    //   return new Array(n);
    // };


  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('institution', {
        url: '/institution',
        templateUrl: '../views/pages/institution.html',
        controller: InstitutionCtrl
      })
  };
})();