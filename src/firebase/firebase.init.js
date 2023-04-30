// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

  // apiKey: "AIzaSyDUkviYE7KqE_Mw3cnF3MCJtbTaQaM_gIQ",
  // authDomain: "bangoli-bruse-kholifa.firebaseapp.com",
  // projectId: "bangoli-bruse-kholifa",
  // storageBucket: "bangoli-bruse-kholifa.appspot.com",
  // messagingSenderId: "967676597052",
  // appId: "1:967676597052:web:0e484f9782464920488439",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
