import {initializeApp} from 'firebase/app';
import 'firebase/auth';
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';


const config = {
    apiKey: "AIzaSyC_aI7Sxqf-jlHF6_XPOVxThPjtv3c9kzc",
    authDomain: "ticket-sale-app.firebaseapp.com",
    projectId: "ticket-sale-app",
    storageBucket: "ticket-sale-app.appspot.com",
    messagingSenderId: "266905389039",
    appId: "1:266905389039:web:8753891bf57d7538d4181a",
    measurementId: "G-7FWJQ91MDE"
  };

  const app = initializeApp(config);
  const database = getFirestore(app);
  // export default firebase.firestore();

  export {database};
  