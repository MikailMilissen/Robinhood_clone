import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAbYQKeaEDzUvgLi1EEECX6SPlJngWlBLw",
    authDomain: "robinhood-2749e.firebaseapp.com",
    projectId: "robinhood-2749e",
    storageBucket: "robinhood-2749e.appspot.com",
    messagingSenderId: "468130053566",
    appId: "1:468130053566:web:2b60cca4fff355ddc94def"
  };
const firebaseApp = firebase.initializeApp;

const db = firebaseApp.firestore(firebaseConfig);

export { db };