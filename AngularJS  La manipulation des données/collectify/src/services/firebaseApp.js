'use strict'

app.service('firebaseApp', function($firebase) {
  var config = {
    apiKey: 'AAAAfQvyNl8:APA91bE0ryUJNZd_MniqguFxemczc92_omZBWVnEoqx2D_IdWZyAbxSCvg4SHi6uC78HyExpnE1kBTFrx0RGsxrksoqXWLDlwoU1vPprarqxDVKMeSqfO0enwOpNm_9lcx93ZlmhriA9',
    authDomain: 'https://collectify-540cf.firebaseapp.com/',
    databaseURL: 'https://collectify-540cf.firebaseio.com/'
  };

  var fbApp = firebase.initializeApp(config);
});
