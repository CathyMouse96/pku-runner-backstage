'use strict';

/**
 * @ngdoc function
 * @name pkuRunnerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pkuRunnerApp
 */
angular.module('pkuRunnerApp')
    .controller('AdminCtrl', ['$scope', 'recordFactory', 'userFactory', function ($scope, recordFactory, userFactory) {
        
        $scope.itemsByPage = 10;
        $scope.tab = 1;
        
        $scope.select = function (setTab) {
            $scope.tab = setTab;
        };

        $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        };
        
        $scope.showTable = false;
        $scope.message='Loading ...';
        
        recordFactory.get().$promise.then(
            function (response) {
                $scope.records = response.data;
                $scope.showTable = true;
            },
            function (response) {
                $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
                console.log($scope.message);
            });
        
        $scope.showTableB = false;
        $scope.messageB='Loading ...';
        
        userFactory.get().$promise.then(
            function (response) {
                $scope.users = response.data;
                $scope.showTableB = true;
            },
            function (response) {
                $scope.messageB = 'Error: ' + response.status + ' ' + response.statusText;
                console.log($scope.messageB);
            });

    }]);
