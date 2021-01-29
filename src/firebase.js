// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDFQl4VLTdSxVtDsHVsTDPR994bVhQ7ggo",
    authDomain: "fbclone-b129b.firebaseapp.com",
    projectId: "fbclone-b129b",
    storageBucket: "fbclone-b129b.appspot.com",
    messagingSenderId: "372919848634",
    appId: "1:372919848634:web:a40d1cb6aabb278eb9fc83",
    measurementId: "G-C54013YMGH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
