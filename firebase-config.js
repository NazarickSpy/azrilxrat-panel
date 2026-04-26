// ⚠️ GANTI DENGAN CONFIG FIREBASE LO!
const firebaseConfig = {
  apiKey: "AIzaSyADAGKqAUsUrXXY4K0v5FYTKkBV_009Jb8",
  authDomain: "oracle-market.firebaseapp.com",
  databaseURL: "https://oracle-market-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "oracle-market",
  storageBucket: "oracle-market.firebasestorage.app",
  messagingSenderId: "1011127482006",
  appId: "1:1011127482006:web:1bed17a08a66f52a0d34b7",
};

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.database();

// References
const devicesRef = db.ref('devices');
const commandsRef = db.ref('commands');
const dataRef = db.ref('collected_data');
