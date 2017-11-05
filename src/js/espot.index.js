(function() {
  'use strict';

  angular
    .module('espot.index', [
      'ui.router',
      'ngAnimate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('IndexCtrl', IndexCtrl);

  IndexCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http'];

  function IndexCtrl($scope, $rootScope, $timeout, $http) {
        $rootScope.$on('$viewContentLoading',
      function(event, viewConfig) {
        $('.spinner').fadeIn(1);
      });


    $scope.$on('$viewContentLoaded',
      function(event) {
        $('.spinner').fadeOut(1);
      });

    $('#findCity_input').val('');

    document.body.style.height = window.outerHeight + 'px';

    $timeout(function() {
      $('.page-title').removeClass('active');
      $('.nav-1').removeClass('nav-show');
      $('.nav-2').removeClass('nav-show');
      $('.logo').removeClass('start-page-logo');
    }, 100);


    // $rootScope.$on('$locationChangeStart', function(evt) {
    //   $('nav').removeClass('nav-show');
    //   $('.logo').removeClass('start-page-logo');
    //   $('.page-title').removeClass('active');
    // });

    $rootScope.$on('$locationChangeSuccess', function(evt) {
      $timeout(function() {
        $('.page-title').removeClass('active');
        $('.nav-1').removeClass('nav-show');
        $('.nav-2').removeClass('nav-show');
        $('.logo').removeClass('start-page-logo');
      }, 100);
    });

    // $rootScope.$on('$locationChangeSuccess', function(evt) {});

    $(document).on('click', function(e) {
      if (!$(e.target).closest(".search_field").length && $('.search_field').hasClass('show-search_field')) {
        $('#findCity_input').blur();
        $('.search_field').removeClass('show-search_field');
      }
    });

    $('body').on('click', '.btn-place-search', function() {
      setTimeout(function() {
        $('.search_field').addClass('show-search_field');
        setTimeout(function() {
          $('#findCity_input').focus();
        }, 333)
      }, 1)
    });

    $('body').on('click', '.btn-place-next', function() {
      $('.first-step-auth, .second-step-auth').addClass('active');
      $('.back-link').fadeIn();
    });


    $('.back-link').on('click', function() {
      $(this).fadeOut();
      $('.first-step-auth, .second-step-auth').removeClass('active');
    });




  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: '../views/pages/index.html',
        controller: IndexCtrl,

      })
  };
})();