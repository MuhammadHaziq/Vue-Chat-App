import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyATy_KKyRv266iZezBAWTBiEYFOf1ua-3E",
  authDomain: "vue-chat-app-ba83d.firebaseapp.com",
  databaseURL: "https://vue-chat-app-ba83d.firebaseio.com",
  projectId: "vue-chat-app-ba83d",
  storageBucket: "vue-chat-app-ba83d.appspot.com",
  messagingSenderId: "60731649563",
  appId: "1:60731649563:web:b01f1ac2236c4344a792be",
  measurementId: "G-7NRRCDZDJ2"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const settings = { /* your settings... */ timestampsInSnapshots: true };
firebaseApp.firestore().settings(settings);
export default firebaseApp.firestore();
