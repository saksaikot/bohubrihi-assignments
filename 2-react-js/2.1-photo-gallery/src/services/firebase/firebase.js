import firebase from "firebase/app";
import "firebase/auth";
import dbActions from "./dbActions";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_WDS_AUTH_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_WDS_AUTH_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_WDS_AUTH_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_WDS_AUTH_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.REACT_APP_WDS_AUTH_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_WDS_AUTH_FIREBASE_APP_ID,
});
export const auth = app.auth();
export default app;
export const db = {
  comments: dbActions(app.database().ref("/comments")),
};
