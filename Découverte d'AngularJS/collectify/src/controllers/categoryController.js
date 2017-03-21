'use strict';



app
  .controller('categoryIndex', function($scope) {

  })

  .controller('categoryList', function($scope, categoryProvider) {
    $scope.categories = categoryProvider.getCategory();
  })

  .controller('categoryCreate', function($scope) {
  })

  .controller('categoryRemove', function($scope) {

  })
;
