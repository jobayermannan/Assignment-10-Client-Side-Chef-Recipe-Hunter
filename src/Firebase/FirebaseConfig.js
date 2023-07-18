// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3e0_T_4HxVfoR1WP0IQnG9qaDDktmQQc",
  authDomain: "chef-recipe-client-project.firebaseapp.com",
  projectId: "chef-recipe-client-project",
  storageBucket: "chef-recipe-client-project.appspot.com",
  messagingSenderId: "46361189483",
  appId: "1:46361189483:web:91a84f8cf5b041c55ea52e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;