// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0jhRmaw8WPi0gh4Fexjn8zPkPcWMst90",
  authDomain: "medi-search-service.firebaseapp.com",
  projectId: "medi-search-service",
  storageBucket: "medi-search-service.appspot.com",
  messagingSenderId: "907909435469",
  appId: "1:907909435469:web:1066b95106fbd252aacc04",
  measurementId: "G-ZZYBQLE0ME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const Auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { provider };
