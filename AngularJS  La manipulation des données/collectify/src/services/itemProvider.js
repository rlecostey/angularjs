'use strict';


app.service('itemProvider', function (firebaseApp, $firebase, $firebaseArray) {


  var rootRef = firebase.database().ref()

  // var sync = $firebase(rootRef);
  var itemsRef = rootRef.child("items");
  // itemsRef.set(items);
  var items = $firebaseArray(itemsRef);

    this.getItems = function () {
        return items;
    }

    this.create = function (item) {
        items.$add(item);
        return items;
    }

    this.remove = function (item) {
        items.$remove(item);
        return items;
    }

    this.update = function(item) {
        items.$save(item);
        return items;
    }
});
