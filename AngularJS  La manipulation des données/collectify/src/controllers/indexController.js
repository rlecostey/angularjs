'use strict';

app
    .controller('index', function ($scope, userProvider) {
        $scope.session = userProvider.getAuth();

        $scope.auth = function (user) {
            $scope.session = userProvider.auth(user);
            console.log($scope.session);
            console.log($scope.session.$$state);
        }
    })
    .controller('indexCreateUser', function ($scope, userProvider) {
        $scope.create = function (user) {
            $scope.items = userProvider.create(user);
        }
    })
;
