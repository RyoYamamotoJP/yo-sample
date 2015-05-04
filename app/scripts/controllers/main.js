'use strict';

/**
 * @ngdoc function
 * @name yoSampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoSampleApp
 */
angular.module('yoSampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
