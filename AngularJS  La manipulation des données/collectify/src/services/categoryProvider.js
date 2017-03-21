'use strict';

app.service('categoryProvider', function (firebaseApp, $firebase, $firebaseArray) {

    var rootRef = firebase.database().ref()

    // var sync = $firebase(rootRef);
    var categoriesRef = rootRef.child("categories");
    // categoriesRef.set(categories);
    var categories = $firebaseArray(categoriesRef);

    this.getCategories = function () {
        return categories;
    }

    this.create = function (category) {
        category['id'] = categories.length + 1;
        categories.$add(category);

        return categories;
    }

    this.remove = function (category) {
      categories.$remove(category);
      return categories;
    }
});
