'use strict';

/**
 * @ngdoc function
 * @name yoSampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoSampleApp
 */
angular.module('yoSampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
