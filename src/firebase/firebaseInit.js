import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArHClbDI5B-BHkeuG-RVWZgHMyMct0v2g",
  authDomain: "fireblogsyt-4ea2f.firebaseapp.com",
  projectId: "fireblogsyt-4ea2f",
  storageBucket: "fireblogsyt-4ea2f.firebasestorage.app",
  messagingSenderId: "830654839178",
  appId: "1:830654839178:web:2562e8c3517b0efb74b073",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();

// // Import Firebase Modules
// import { initializeApp } from "firebase/app";
// import { getFirestore, serverTimestamp } from "firebase/firestore";

// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyArHClbDI5B-BHkeuG-RVWZgHMyMct0v2g",
//   authDomain: "fireblogsyt-4ea2f.firebaseapp.com",
//   projectId: "fireblogsyt-4ea2f",
//   storageBucket: "fireblogsyt-4ea2f.firebasestorage.app",
//   messagingSenderId: "830654839178",
//   appId: "1:830654839178:web:2562e8c3517b0efb74b073",
// };

// // Initialize Firebase App
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore
// const db = getFirestore(app);

// // Export the timestamp utility for Firestore
// export { serverTimestamp };
// export default db;
