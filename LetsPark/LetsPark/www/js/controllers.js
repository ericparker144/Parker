angular.module('starter.controllers', ['ngMap'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MapController', function ($scope, $state) {

    //NgMap.getMap().then(function (map) {
    //    console.log(map.getCenter());
    //    console.log('markers', map.markers);
    //    console.log('shapes', map.shapes);
    //});

    //var map;
    //angular.element(document).ready(function initMap() {
    //    map = new google.maps.Map(document.getElementById('map'), {
    //        center: { lat: -34.397, lng: 150.644 },
    //        zoom: 10
    //    });
    //}
    //)

    //var options = { timeout: 10000, enableHighAccuracy: true };

    //$cordovaGeolocation.getCurrentPosition(options).then(function (position) {

    //    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    //    var mapOptions = {
    //        center: latLng,
    //        zoom: 15,
    //        mapTypeId: google.maps.MapTypeId.ROADMAP
    //    };

    //    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //}, function (error) {
    //    console.log("Could not get location");
    //});

    var latLng = new google.maps.LatLng(-34.397, 150.644);

    var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
