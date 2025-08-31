// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_Auth_Domain,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId:import.meta.env.VITE_MESSAGING_SENDERID,
//   appId: import.meta.env.VITE_APP_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);


// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 🔥 Add this for Firebase Auth

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBYtzwe5wzkvFFiZwb9kkK6EvxdS4s3DtA",
  authDomain: "book-store-3827f.firebaseapp.com",
  projectId: "book-store-3827f",
  storageBucket: "book-store-3827f.firebasestorage.app",
  messagingSenderId: "37733983381",
  appId: "1:37733983381:web:5ef95a0ad91be1288ea79c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app); // ✅ Now you're using auth

// Export both app and auth
export { app, auth };
