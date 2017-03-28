import * as Firebase from 'firebase'
script src = "https://www.gstatic.com/firebasejs/3.6.10/firebase.js"

var config = {
    apiKey: "AIzaSyDV9ha8vPlNraqOVTWhs9uNFxdC5l4r-YM",
    authDomain: "walltap-f8489.firebaseapp.com",
    databaseURL: "https://walltap-f8489.firebaseio.com",
    storageBucket: "walltap-f8489.appspot.com",
    messagingSenderId: "331388725629"
};

export const firebaseRef = firebase.initializeApp(config);

// firebase.initializeApp(config);
