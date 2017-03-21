'use strict'

app.service('userProvider', function(firebaseUser, $firebase, $firebaseAuth){
  // var rootRef = firebase.userref()
  var auth = $firebaseAuth();

  this.create = function(user, firebaseUser) {
    auth.$createUserWithEmailAndPassword(user.email, user.password);
  }

  this.auth = function(user, firebaseUser) {
    return auth.$signInWithEmailAndPassword(user.email, user.password).then(function(user) {
      console.log(user.uid)
      return user.uid;
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  }

  this.getAuth = function(firebaseUser) {
    return auth
  }
});
