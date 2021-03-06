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
        $rootScope.$on('$viewContentLoading',
      function(event, viewConfig) {
        $('.spinner').fadeIn(1);
      });


    $scope.$on('$viewContentLoaded',
      function(event) {
        $('.spinner').fadeOut(1);
      });
    // $('.institution-content').height($(window).height() - 110);
    // console.log(CafeIdService.getId());


    // $timeout(function(){
      // $rootScope.pageTitle = "О ЗАВЕДЕНИИ";
      // $('.nav-1').removeClass('nav-show');
      // $('.nav-2').addClass('nav-show');
      // $('.logo').addClass('start-page-logo');
      // $('.page-title').addClass('active');
      // }, 100);


    // $rootScope.$on('$locationChangeStart', function(evt) {
    //   $('.page-title').removeClass('active');

    // });

    // $rootScope.$on('$locationChangeSuccess', function(evt) {
    //   $timeout(function(){
    //     $('.nav-1').removeClass('nav-show');
    //   $('.nav-2').addClass('nav-show');
    //   $('.logo').addClass('start-page-logo');
    //   $('.page-title').addClass('active');

    //   }, 100);
    // });


// $http({
//       method: 'post',
//       data: '{"id":'+CafeIdService.getId()+'}',
//       url: 'https://api.icreations.agency/cafe'
//     }).then(function(response) {
//       $scope.dataCafeInfo = response.data;
//       console.log($scope.dataCafeInfo);
//       $scope.getStarsCafeArr = Array;
//       $scope.starsNum = +response.data.placeRate;
//     }, function(error) {
//       console.log(error);
//     });


  };

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cafe', {
        url: '/cafe',
        template: '<div ui-view class="view-content"></div>',
        controller: InstitutionCtrl,
        redirectTo: 'info'
      });
    $urlRouterProvider.otherwise('/');
  };
})();