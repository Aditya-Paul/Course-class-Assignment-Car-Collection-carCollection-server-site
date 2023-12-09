// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// there is some problem on carcollection firebase 

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDn4fovgdyXi6faUIjXnzlObV3fg47GnZA",
//   authDomain: "carcollection-268e1.firebaseapp.com",
//   projectId: "carcollection-268e1",
//   storageBucket: "carcollection-268e1.appspot.com",
//   messagingSenderId: "936759142609",
//   appId: "1:936759142609:web:db0c427a0c882a60a9fdf0"
// };

// there is some problem on carcollection firebase thats why we use event management project firebase config( support session told me to do this)

const firebaseConfig = {
  apiKey: "AIzaSyCDsV90WlZYUagft0pdTqbr9vR5IMUW1Ko",
  authDomain: "event-management-project-2b28e.firebaseapp.com",
  projectId: "event-management-project-2b28e",
  storageBucket: "event-management-project-2b28e.appspot.com",
  messagingSenderId: "366669237407",
  appId: "1:366669237407:web:1e5b05b13eb38edba1e6aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;