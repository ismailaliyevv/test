# TestHub — Fiziki Tərbiyə Test Platforması

## 🚀 Qurulum

### 1. Firebase Qurulumu
1. [Firebase Console](https://console.firebase.google.com) açın
2. "New Project" → layihə adı (məsələn: `testhub-az`)
3. **Authentication** → "Get Started" → **Email/Password** aktivləşdir
4. **Firestore Database** → "Create Database" → **Production mode**
5. **Project Settings** → "Your apps" → **Web app** `</>` → konfiqurasiya kodu kopyala

### 2. Firebase Konfiqurasiya
`js/firebase-config.js` faylını açın və öz məlumatlarınızı yazın:
```javascript
const firebaseConfig = {
  apiKey: "...",           // Project Settings > General
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const ADMIN_EMAILS = ["sizin_email@gmail.com"];
```

### 3. Firestore Qaydaları
Firebase Console → Firestore → **Rules** tabında bu qaydaları yapışdırın:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /tests/{testId} {
      allow read: if true;
      allow write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      allow read, write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    match /results/{resultId} {
      allow read, write: if request.auth != null;
    }
    match /purchases/{purchId} {
      allow read, write: if request.auth != null;
    }
    match /settings/{doc} {
      allow read: if true;
      allow write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

### 4. GitHub Pages
1. GitHub-da yeni repo yaradın (məsələn: `testhub`)
2. Bütün faylları upload edin
3. **Settings** → **Pages** → **Source**: `main` branch, `/ (root)`
4. Linkiniz: `https://sizin_adınız.github.io/testhub`

---

## 📁 Fayl Strukturu
```
├── index.html              # Ana səhifə
├── js/
│   ├── firebase-config.js  # 🔥 BU FAYLIN İÇİNİ DEYİŞİN
│   └── auth.js             # Auth funksiyalar
├── pages/
│   ├── login.html          # Giriş
│   ├── register.html       # Qeydiyyat
│   ├── dashboard.html      # İstifadəçi paneli
│   ├── test.html           # Test işlədici
│   └── payment.html        # Ödəniş
└── admin/
    └── index.html          # Admin panel
```

## ⚙️ Admin Panel
Admin olmaq üçün:
1. `js/firebase-config.js`-də `ADMIN_EMAILS` siyahısına emailinizi əlavə edin
2. Həmin email ilə qeydiyyatdan keçin
3. `yourdomain.com/admin/` linki ilə admin panelə daxil olun

## 🧪 Test Əlavə Etmə (Admin Paneldən)
1. Admin panelə girin
2. **Testlər** → **+ Test Əlavə Et**
3. **Test Tipi** seçin:
   - **Inline** — sualları JSON olaraq yazın
   - **Google Forms** — forms linkini yapışdırın
   - **HTML Fayl** — hazır HTML faylın yolunu yazın

### Google Forms üçün URL
Forms → Send → `<>` embed → URL-dən `?embedded=true` əlavə edin

### Inline JSON Format
```json
[
  {"q": "Sual mətni?", "opts": ["A) Birinci", "B) İkinci", "C) Üçüncü"], "ans": 0},
  {"q": "Növbəti sual?", "opts": ["A) A", "B) B", "C) C", "D) D"], "ans": 2}
]
```
`ans` — düzgün cavabın indeksi (0-dan başlayır)
