import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAFBEAvcZxggb22jvQc32cBSTh7Qxd6ieA",
    authDomain: "reactfirebasedemo-c6131.firebaseapp.com",
    databaseURL: "https://reactfirebasedemo-c6131.firebaseio.com",
    projectId: "reactfirebasedemo-c6131",
    storageBucket: "reactfirebasedemo-c6131.appspot.com",
    messagingSenderId: "420700939611"
  };
  firebase.initializeApp(config);


  export const googleProvider = new firebase.auth.GoogleAuthProvider()
  export const ref = firebase.database().ref()
  export const firebaseAuth = firebase.auth