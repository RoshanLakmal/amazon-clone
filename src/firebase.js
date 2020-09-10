import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkZ-1soNdGPo_SkYPwqPlrUyfQCJYOcRs",
  authDomain: "challenge-82a76.firebaseapp.com",
  databaseURL: "https://challenge-82a76.firebaseio.com",
  projectId: "challenge-82a76",
  storageBucket: "challenge-82a76.appspot.com",
  messagingSenderId: "658482498013",
  appId: "1:658482498013:web:7fe3311e4e18c19c1c0e34",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
