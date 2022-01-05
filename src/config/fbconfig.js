import firebase from "firebase/app";
import "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6_JBG3zyTYlzDBtnuW3h8gpkMrRvL1fg",
  authDomain: "notes-d7554.firebaseapp.com",
  projectId: "notes-d7554",
  storageBucket: "notes-d7554.appspot.com",
  messagingSenderId: "808172977756",
  appId: "1:808172977756:web:9619a6d0f7e54cc2703099"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;