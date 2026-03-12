// ═══════════════════════════════════════
//  TESTHUB — THEME & FONT SİSTEMİ
// ═══════════════════════════════════════

const THEMES = {
  nature: {
    name: 'Təbiət', emoji: '🌿',
    vars: {
      '--bg':'#f8f9f4','--bg2':'#eff4ec','--surface':'#ffffff','--surface2':'#f4f7f2',
      '--border':'#dde8d8','--border2':'#c8d8c0',
      '--accent':'#2d6a4f','--accent2':'#40916c','--accent3':'#74c69d',
      '--accent-light':'#d8f3dc','--accent-pale':'#edf7f0',
      '--text':'#1a2615','--text2':'#2e4228','--muted':'#7a8c74',
      '--nav-bg':'rgba(248,249,244,0.96)','--card-shadow':'rgba(45,106,79,0.10)',
      '--btn-text':'#ffffff','--gold':'#c9a84c','--danger':'#c0392b',
    }
  },
  midnight: {
    name: 'Gecə', emoji: '🌙',
    vars: {
      '--bg':'#08080e','--bg2':'#101018','--surface':'#111119','--surface2':'#181826',
      '--border':'#242436','--border2':'#30304a',
      '--accent':'#7b6fff','--accent2':'#9d94ff','--accent3':'#43e97b',
      '--accent-light':'#1e1a40','--accent-pale':'#13112a',
      '--text':'#eeeeff','--text2':'#c0c0e0','--muted':'#7878a0',
      '--nav-bg':'rgba(8,8,14,0.97)','--card-shadow':'rgba(123,111,255,0.15)',
      '--btn-text':'#ffffff','--gold':'#ffd700','--danger':'#ff4757',
    }
  },
  ocean: {
    name: 'Okean', emoji: '🌊',
    vars: {
      '--bg':'#f0f6ff','--bg2':'#e5effb','--surface':'#ffffff','--surface2':'#f2f7ff',
      '--border':'#d0e4f7','--border2':'#b8d4f0',
      '--accent':'#1558a8','--accent2':'#1e72cc','--accent3':'#0dc5c1',
      '--accent-light':'#c8e0f5','--accent-pale':'#e8f4fd',
      '--text':'#0a1e36','--text2':'#16345e','--muted':'#5a80a8',
      '--nav-bg':'rgba(240,246,255,0.96)','--card-shadow':'rgba(21,88,168,0.10)',
      '--btn-text':'#ffffff','--gold':'#d4870a','--danger':'#c0392b',
    }
  },
  ember: {
    name: 'Alov', emoji: '🔥',
    vars: {
      '--bg':'#fff8f5','--bg2':'#fef0e8','--surface':'#ffffff','--surface2':'#fff3ee',
      '--border':'#f2d8cc','--border2':'#e8c4b4',
      '--accent':'#b83220','--accent2':'#d44234','--accent3':'#f0803a',
      '--accent-light':'#f8d0c4','--accent-pale':'#fff0ea',
      '--text':'#2a0e08','--text2':'#4a1a0c','--muted':'#9a5840',
      '--nav-bg':'rgba(255,248,245,0.96)','--card-shadow':'rgba(184,50,32,0.10)',
      '--btn-text':'#ffffff','--gold':'#c8940a','--danger':'#a83228',
    }
  },
  pearl: {
    name: 'Mirvari', emoji: '🤍',
    vars: {
      '--bg':'#fafafa','--bg2':'#f2f2f2','--surface':'#ffffff','--surface2':'#f8f8f8',
      '--border':'#e4e4e4','--border2':'#d0d0d0',
      '--accent':'#1a1a1a','--accent2':'#333333','--accent3':'#666666',
      '--accent-light':'#e0e0e0','--accent-pale':'#f4f4f4',
      '--text':'#0a0a0a','--text2':'#2a2a2a','--muted':'#888888',
      '--nav-bg':'rgba(250,250,250,0.97)','--card-shadow':'rgba(0,0,0,0.08)',
      '--btn-text':'#ffffff','--gold':'#9a7c10','--danger':'#c0392b',
    }
  }
};

const FONTS = {
  playfair: {
    label:'Playfair Display', preview:'Aa',
    url:'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600;700&display=swap',
    heading:"'Playfair Display', serif", body:"'Outfit', sans-serif"
  },
  syne: {
    label:'Syne + DM Sans', preview:'Aa',
    url:'https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap',
    heading:"'Syne', sans-serif", body:"'DM Sans', sans-serif"
  },
  cormorant: {
    label:'Cormorant Garamond', preview:'Aa',
    url:'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Mulish:wght@300;400;500;600&display=swap',
    heading:"'Cormorant Garamond', serif", body:"'Mulish', sans-serif"
  },
  raleway: {
    label:'Raleway + Lato', preview:'Aa',
    url:'https://fonts.googleapis.com/css2?family=Raleway:wght@600;700;800&family=Lato:wght@300;400;700&display=swap',
    heading:"'Raleway', sans-serif", body:"'Lato', sans-serif"
  },
  merriweather: {
    label:'Merriweather', preview:'Aa',
    url:'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,700;0,900;1,700&family=Source+Sans+3:wght@300;400;600&display=swap',
    heading:"'Merriweather', serif", body:"'Source Sans 3', sans-serif"
  },
  nunito: {
    label:'Nunito', preview:'Aa',
    url:'https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Inter:wght@300;400;500;600&display=swap',
    heading:"'Nunito', sans-serif", body:"'Inter', sans-serif"
  },
  montserrat: {
    label:'Montserrat', preview:'Aa',
    url:'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@300;400;600&display=swap',
    heading:"'Montserrat', sans-serif", body:"'Open Sans', sans-serif"
  },
  crimson: {
    label:'Crimson Pro + Jost', preview:'Aa',
    url:'https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,600;0,700;1,600&family=Jost:wght@300;400;500;600&display=swap',
    heading:"'Crimson Pro', serif", body:"'Jost', sans-serif"
  }
};

function applyTheme(key) {
  const t = THEMES[key]; if(!t) return;
  Object.entries(t.vars).forEach(([k,v]) => document.documentElement.style.setProperty(k,v));
  document.documentElement.setAttribute('data-theme', key);
}

function applyFont(key) {
  const f = FONTS[key]; if(!f) return;
  let link = document.getElementById('_themeFont');
  if(!link){ link=document.createElement('link'); link.id='_themeFont'; link.rel='stylesheet'; document.head.appendChild(link); }
  link.href = f.url;
  document.documentElement.style.setProperty('--font-heading', f.heading);
  document.documentElement.style.setProperty('--font-body', f.body);
  document.body.style.fontFamily = f.body;
}

// sessionStorage cache ilə — hər səhifədə Firestore sorğusu getmir
async function loadSiteTheme() {
  try {
    // Əvvəlcə cache-dən tez yüklə
    const cached = sessionStorage.getItem('_siteTheme');
    if (cached) {
      const d = JSON.parse(cached);
      applyTheme(d.theme || 'nature');
      applyFont(d.font || 'playfair');
    } else {
      // Cache yoxdursa default tətbiq et, Firestore gözləmə
      applyTheme('nature');
      applyFont('playfair');
    }
    // Arxa planda Firestore-dan yüklə və cache-i yenilə (3 saniyə timeout)
    const timeout = new Promise((_, reject) => setTimeout(() => reject('timeout'), 3000));
    const fetchTheme = db.collection('settings').doc('theme').get();
    const doc = await Promise.race([fetchTheme, timeout]);
    if (doc && doc.exists) {
      const d = doc.data();
      sessionStorage.setItem('_siteTheme', JSON.stringify(d));
      applyTheme(d.theme || 'nature');
      applyFont(d.font || 'playfair');
    }
  } catch(e) {
    // Xəta olsa default mövzu qalır — səhifə açılır
    applyTheme('nature');
    applyFont('playfair');
  }
}
