import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-ga6YDP54Jk10YMi4tydTyff8Z-KcDCI",
  authDomain: "egift-fc790.firebaseapp.com",
  databaseURL: "https://egift-fc790.firebaseio.com",
  projectId: "egift-fc790",
  storageBucket: "egift-fc790.appspot.com",
  messagingSenderId: "313469004549",
  appId: "1:313469004549:web:40c9805dee098de4e1e56c",
  measurementId: "G-WQM28HD5MQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
