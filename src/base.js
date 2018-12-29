import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD9VWPmDJ-BA8hvCZCif5pjQu8iP_oBVeo",
  authDomain: "catch-of-the-day-course-939e2.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-course-939e2.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

//This is a named export
export { firebaseApp };

//This is a default export
export default base;
