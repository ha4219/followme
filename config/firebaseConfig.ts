// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAuth } from "firebase/auth";
// import "firebase/auth";
// import * as firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
};

// export const firebase = initializeApp(firebaseConfig);
// export const firebaseAuth = getAuth(firebase);
// console.log(firebase.default);
// if (typeof window !== "undefined" && !firebase.default.apps.length) {
//   firebase.default.initializeApp(firebaseConfig);
//   firebase.default
//     .auth()
//     .setPersistence(firebase.default.auth.Auth.Persistence.SESSION);
// }

// export { firebase };

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();
