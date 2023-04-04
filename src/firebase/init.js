import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase
var config = firebaseConfig;

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
