import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdUhtBnMyHTIVBR3lZnHbuOu_tiNRWzAQ",
    authDomain: "rt-task-d98e8.firebaseapp.com",
    projectId: "rt-task-d98e8",
    storageBucket: "rt-task-d98e8.firebasestorage.app",
    messagingSenderId: "420008024227",
    appId: "1:420008024227:web:85b4ee594f25b0c11f8716"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
