import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase
var config = firebaseConfig;

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
