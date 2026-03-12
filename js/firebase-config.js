// 🔥 FIREBASE KONFİQURASİYA
// Firebase Console-dan öz məlumatlarınızı buraya yapışdırın
// https://console.firebase.google.com

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase başlat
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// Admin email-ləri (bunları dəyişin)
const ADMIN_EMAILS = [
  "admin@sizinsayt.com",
  // əlavə admin email-lər buraya
];

function isAdmin(email) {
  return ADMIN_EMAILS.includes(email);
}
