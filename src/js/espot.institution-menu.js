(function() {
  'use strict';

  angular
    .module('espot.institution-menu', [
      'ui.router',
       'ngAnimate'])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('InstitutionMenuCtrl', InstitutionMenuCtrl);

  InstitutionMenuCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http'];

  function InstitutionMenuCtrl($scope, $rootScope, $timeout, $http) {
    $('.institution-content').height($(window).height() - 110);


    $timeout(function(){
      $rootScope.pageTitle = "Меню";
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

  //     $scope.isActive = false;
  // $scope.activeButton = function() {
  //   $scope.isActive = !$scope.isActive;
  // }  

  $('.inst-menu-item').on('click', function(){
    $(this).toggleClass('active');
  })



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
      .state('institution-menu', {
        url: '/institution-menu',
        templateUrl: '../views/pages/institution-menu.html',
        controller: InstitutionMenuCtrl
      })
  };
})();