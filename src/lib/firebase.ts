import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBdkdp0bafKM9COuByGsa5chLGwlkoaNGw",
  authDomain: "skill-tree-game.firebaseapp.com",
  projectId: "skill-tree-game",
  storageBucket: "skill-tree-game.firebasestorage.app",
  messagingSenderId: "55143752777",
  appId: "1:55143752777:web:68cb047c9b40bb1e890b98",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };