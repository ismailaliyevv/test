// Auth köməkçi funksiyalar

// ── Path köməkçisi (GitHub Pages /repo-name/ üçün) ──
function getBasePath() {
  // /test/pages/login.html → /test
  // /test/index.html → /test
  const parts = window.location.pathname.split('/');
  // İlk boş element + repo adı
  return '/' + parts[1];
}

// Qeydiyyat
async function registerUser(name, email, password) {
  const cred = await auth.createUserWithEmailAndPassword(email, password);
  await cred.user.updateProfile({ displayName: name });
  await db.collection('users').doc(cred.user.uid).set({
    name, email,
    role: isAdmin(email) ? 'admin' : 'user',
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    completedTests: [],
    purchasedTests: []
  });
  return cred.user;
}

// Giriş
async function loginUser(email, password) {
  const cred = await auth.signInWithEmailAndPassword(email, password);
  return cred.user;
}

// Çıxış — GitHub Pages üçün düzgün path
async function logoutUser() {
  await auth.signOut();
  const base = getBasePath();
  window.location.href = base + '/index.html';
}

// Cari istifadəçi məlumatları
async function getCurrentUserData() {
  const user = auth.currentUser;
  if (!user) return null;
  const doc = await db.collection('users').doc(user.uid).get();
  return { uid: user.uid, ...doc.data() };
}

// Auth vəziyyəti izlə
function onAuthChange(callback) {
  return auth.onAuthStateChanged(callback);
}
