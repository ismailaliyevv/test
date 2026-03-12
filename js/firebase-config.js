const firebaseConfig = {
  apiKey: "AIzaSyBZ6l3woo-GnN2V1E_4TiURDwbxobGP_To",
  authDomain: "testsayt-e0c20.firebaseapp.com",
  projectId: "testsayt-e0c20",
  storageBucket: "testsayt-e0c20.firebasestorage.app",
  messagingSenderId: "916000619767",
  appId: "1:916000619767:web:ec864e9b2cbf865ebee7f2"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Offline cache — ilk yükləmə sürətlənir, internet olmadan da işləyir
db.enablePersistence({ synchronizeTabs: true }).catch(err => {
  if(err.code === 'failed-precondition'){
    // Birdən çox tab açıqdırsa — normal davam edir
  } else if(err.code === 'unimplemented'){
    // Brauzer dəstəkləmir — normal davam edir
  }
});

const ADMIN_EMAILS = ["ismayilzzz54@gmail.com"];
function isAdmin(email){ return ADMIN_EMAILS.includes(email); }
