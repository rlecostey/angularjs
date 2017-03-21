'use strict'

app.service('firebaseUser', function($firebase) {
  var config = {
    apiKey: 'AIzaSyBUiNfkqlZt8vO4f7Iy5jlNfORCWfvQXlc',
    authDomain: 'https://collectify-540cf.firebaseapp.com/',
    databaseURL: 'https://collectify-540cf.firebaseio.com/'
  };

  var fbUser = firebase.initializeApp(config);
});
