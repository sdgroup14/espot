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


    $scope.toSerchTown = function () {
    var input = document.getElementById('findCity_input');
    var searchbox = new google.maps.places.SearchBox(input, { types: ['(cities)'] });
    //var autocomplete = new google.maps.places.Autocomplete(input);
    /*
    var searchbox = new google.maps.places.Autocomplete(input, {
        componentRestrictions: { country: 'fr' }
    });
    */


    google.maps.event.addListener(searchbox, 'places_changed', function() {
      var placeInfo = searchbox.getPlaces();

      var place = new Object;
      place.viewport = new Object;
      place.geometry = new Object;
      place.place_id = placeInfo[0].place_id;
      place.vicinity = placeInfo[0].vicinity;
      place.name = placeInfo[0].name;
      place.formatted_address = placeInfo[0].formatted_address;
      place.viewport.sw = { 'Lat': placeInfo[0].geometry.viewport.f.b, 'Lng': placeInfo[0].geometry.viewport.b.b };
      place.viewport.ne = { 'Lat': placeInfo[0].geometry.viewport.f.f, 'Lng': placeInfo[0].geometry.viewport.b.f };
      place.geometry.lat = placeInfo[0].geometry.location.lat();
      place.geometry.lng = placeInfo[0].geometry.location.lng();
      console.log(place);
      $('.btn-place-s-txt').text(place.name);
      $('.btn-place-next').addClass('active');
      $('.btn-place-txt-before').hide();
      $('#findCity_input').blur();
      $('.search_field').removeClass('show-search_field');
      /*
      var service = new google.maps.places.PlacesService(input);
      var request = {
        placeId: place.place_id
      };

      service.getDetails(request, getDetails);

      function getDetails (place, status) {
          console.log(place);
      }
      */
    });



    /*var viewport = new google.maps.LatLngBounds(
        new google.maps.LatLng(southLat, westLng),
        new google.maps.LatLng(northLat, eastLng)
    );*/
  }




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