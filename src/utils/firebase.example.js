import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "###################################",
    authDomain: "###################################",
    projectId: "###################################",
    storageBucket: "###################################",
    messagingSenderId: "###################################",
    appId: "###################################",
};

const firebaseApp =
    !firebase.apps.length ?
        firebase.initializeApp(firebaseConfig) :
        firebase.app();

const db = firebaseApp.firestore()
export default db;
