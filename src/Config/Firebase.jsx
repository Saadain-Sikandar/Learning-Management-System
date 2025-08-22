import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD37Tu0331I4wBm8x4zMZog4PB3HZvhMAU",
  authDomain: "learning-management-syst-e8137.firebaseapp.com",
  projectId: "learning-management-syst-e8137",
  storageBucket: "learning-management-syst-e8137.firebasestorage.app",
  messagingSenderId: "1040289893481",
  appId: "1:1040289893481:web:c5ecb63d7c2beda16d26f8",
  measurementId: "G-55ZZQRY8KQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); 
const storage = getStorage(app);

export { auth, db, storage };

