import { initializeApp } from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDzgb7E03jx_aGv_vBj4pGcH7MfFfYppxM",
    authDomain: "snapshot-27cc1.firebaseapp.com",
    projectId: "snapshot-27cc1",
    storageBucket: "snapshot-27cc1.appspot.com",
    messagingSenderId: "138566190126",
    appId: "1:138566190126:web:006ef3ac65bc24a6bc8bbf"
};

const firebase = initializeApp(firebaseConfig);
const db = firebase.firestore();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();


export {
    db,
    facebookAuthProvider,
    firebase
}