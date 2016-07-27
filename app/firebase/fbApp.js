import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAyYhIlh1gsi3xe8WUhlzXTu_8cTvoZ_zc",
    authDomain: "rnf-bee001.firebaseapp.com",
    databaseURL: "https://rnf-bee001.firebaseio.com",
    storageBucket: "rnf-bee001.appspot.com",
};

const firebaseApp2 = firebase.initializeApp(firebaseConfig);


module.exports = firebaseApp2;