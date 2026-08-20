<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vinetaide</title>
<style>
  :root{
    --green:#0F6E56;
    --green-dark:#085041;
    --bg:#F7F6F2;
    --card:#FFFFFF;
    --border:#E4E2D8;
    --text:#2C2C2A;
    --text-2:#5F5E5A;
    --text-3:#8a8a86;
    --accent-tag-bg:#E1F5EE;
    --accent-tag-text:#085041;
    --danger:#A32D2D;
    --badge:#D85A30;
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Segoe UI',-apple-system,Roboto,Arial,sans-serif;background:var(--bg);color:var(--text);}
  img{object-fit:cover;}
  button{font-family:inherit;cursor:pointer;}
  input,select,textarea{font-family:inherit;}

  /* ---------- SPLASH ---------- */
  #splash{
    position:fixed;inset:0;background:var(--green);color:#fff;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    text-align:center;z-index:1000;padding:24px;
  }
  #splash .logo{width:84px;height:84px;border-radius:22px;background:#fff;color:var(--green);
    font-size:38px;font-weight:700;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
  #splash h1{font-size:34px;font-weight:700;margin-bottom:6px;}
  #splash .sub{font-size:15px;opacity:.85;margin-bottom:26px;}
  #splash .credit{font-size:13px;opacity:.7;margin-bottom:30px;font-style:italic;}
  #splash button{background:#fff;color:var(--green);border:none;border-radius:12px;
    padding:14px 52px;font-size:16px;font-weight:700;}

  /* ---------- LAYOUT ---------- */
  #app{display:none;min-height:100vh;flex-direction:column;}
  header{background:var(--card);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100;}
  .header-inner{max-width:1100px;margin:0 auto;padding:14px 20px;display:flex;align-items:center;gap:20px;}
  .logo-mini{display:flex;align-items:center;gap:8px;cursor:pointer;flex-shrink:0;}
  .logo-mark{width:32px;height:32px;border-radius:8px;background:var(--green);color:#fff;
    display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;}
  .logo-text{font-size:18px;font-weight:700;letter-spacing:-.3px;}
  .search-bar{flex:1;display:flex;align-items:center;gap:8px;background:#F1EFE8;border-radius:20px;padding:9px 16px;max-width:480px;}
  .search-bar input{border:none;outline:none;background:transparent;font-size:14px;width:100%;}
  .nav-icons{display:flex;align-items:center;gap:4px;}
  .icon-btn{position:relative;border:none;background:transparent;padding:9px;border-radius:8px;
    display:flex;align-items:center;justify-content:center;}
  .icon-btn:hover{background:#F1EFE8;}
  .badge{position:absolute;top:2px;right:2px;background:var(--badge);color:#fff;font-size:10px;font-weight:700;
    border-radius:10px;min-width:15px;height:15px;display:flex;align-items:center;justify-content:center;padding:0 3px;}
  .mini-avatar{width:30px;height:30px;border-radius:50%;color:#fff;font-size:12px;font-weight:700;
    display:flex;align-items:center;justify-content:center;}

  main{flex:1;max-width:1100px;margin:0 auto;width:100%;padding:28px 20px 100px;}
  .narrow{max-width:640px;}

  .hero{margin-bottom:26px;max-width:640px;}
  .hero h1{font-size:30px;font-weight:700;margin-bottom:8px;letter-spacing:-.5px;line-height:1.15;}
  .hero p{font-size:15px;color:var(--text-2);line-height:1.5;}

  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:18px;}
  .card{background:var(--card);border-radius:14px;border:1px solid var(--border);overflow:hidden;cursor:pointer;
    transition:transform .12s, box-shadow .12s;}
  .card:hover{transform:translateY(-2px);box-shadow:0 6px 16px rgba(0,0,0,.06);}
  .card-img{position:relative;height:170px;background:#EFEDE4;overflow:hidden;}
  .card-img img{width:100%;height:100%;}
  .heart-btn{position:absolute;top:10px;right:10px;background:#fff;border:none;border-radius:50%;
    width:32px;height:32px;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 4px rgba(0,0,0,.15);}
  .card-body{padding:12px 14px;}
  .card-name{font-size:14px;font-weight:600;margin-bottom:4px;line-height:1.3;min-height:36px;}
  .card-etat{font-size:12px;color:var(--text-2);margin-bottom:8px;}
  .card-bottom{display:flex;align-items:center;justify-content:space-between;}
  .card-prix{font-size:16px;font-weight:700;}
  .card-ville{font-size:11px;color:var(--text-3);}

  .empty{color:var(--text-3);font-size:14px;text-align:center;padding:30px 0;line-height:1.5;}

  .back-btn{display:flex;align-items:center;gap:4px;background:none;border:none;color:var(--text-2);
    font-size:14px;padding:6px 0;margin-bottom:16px;}

  .detail-grid{display:grid;grid-template-columns:1fr;gap:20px;}
  @media(min-width:640px){.detail-grid{grid-template-columns:280px 1fr;}}
  .detail-img{border-radius:14px;overflow:hidden;height:280px;background:#EFEDE4;}
  .detail-img img{width:100%;height:100%;}
  .detail-name{font-size:22px;font-weight:700;margin-bottom:6px;}
  .detail-prix{font-size:26px;font-weight:700;margin-bottom:4px;}
  .detail-etat{font-size:13px;color:var(--text-2);margin-bottom:14px;}
  .tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;}
  .tag{background:var(--accent-tag-bg);color:var(--accent-tag-text);font-size:12px;padding:5px 12px;border-radius:20px;}
  .detail-desc{font-size:14px;line-height:1.65;color:#3a3a38;margin-bottom:18px;}
  .seller-box{display:flex;align-items:center;gap:10px;padding:12px 14px;background:var(--card);
    border:1px solid var(--border);border-radius:12px;margin-bottom:18px;}
  .seller-name{font-size:14px;font-weight:600;}
  .seller-rating{font-size:12px;color:var(--text-2);margin-top:2px;}
  .detail-actions{display:flex;gap:10px;}

  .btn-primary{flex:1;background:var(--green);color:#fff;border:none;border-radius:10px;
    padding:13px 20px;font-size:14px;font-weight:600;}
  .btn-primary:hover{background:var(--green-dark);}
  .btn-primary-full{width:100%;background:var(--green);color:#fff;border:none;border-radius:10px;
    padding:13px 20px;font-size:14px;font-weight:600;margin-top:10px;}
  .btn-primary-full:hover{background:var(--green-dark);}
  .btn-secondary{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:13px 16px;
    display:flex;align-items:center;}
  .btn-secondary:hover{background:#F1EFE8;}
  .btn-secondary-full{width:100%;background:var(--card);border:1px solid var(--border);border-radius:10px;
    padding:13px 20px;font-size:14px;font-weight:600;margin-top:20px;}
  .btn-secondary-full:hover{background:#F1EFE8;}

  .section-title{font-size:20px;font-weight:700;margin-bottom:16px;}
  .list{display:flex;flex-direction:column;gap:8px;}
  .list-row{display:flex;align-items:center;gap:12px;background:var(--card);border:1px solid var(--border);
    border-radius:12px;padding:10px 14px;cursor:pointer;}
  .list-row:hover{background:#FBFAF7;}
  .list-thumb{width:44px;height:44px;border-radius:10px;overflow:hidden;flex-shrink:0;background:#EFEDE4;}
  .list-thumb img{width:100%;height:100%;}
  .list-name{font-size:14px;font-weight:600;}
  .list-sub{font-size:12px;color:var(--text-3);margin-top:2px;}
  .list-prix{font-size:14px;font-weight:700;}
  .icon-btn-plain{border:none;background:none;color:var(--text-3);padding:6px;flex-shrink:0;}

  .total-row{display:flex;justify-content:space-between;align-items:center;margin-top:16px;padding:14px 0;
    border-top:1px solid var(--border);font-size:14px;font-weight:600;}
  .total-amount{font-size:20px;font-weight:700;}

  .success-box{text-align:center;background:var(--card);border:1px solid var(--border);border-radius:14px;
    padding:40px 24px;display:flex;flex-direction:column;align-items:center;gap:8px;}
  .success-title{font-size:18px;font-weight:700;margin-top:4px;}

  .form-box{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:22px;}
  .form-box label{font-size:13px;font-weight:600;display:block;margin-bottom:6px;margin-top:12px;}
  .form-box label:first-child{margin-top:0;}
  .form-box input,.form-box select,.form-box textarea{width:100%;border:1px solid #D3D1C7;border-radius:8px;
    padding:10px 12px;font-size:14px;outline:none;}
  .form-box input:focus,.form-box select:focus,.form-box textarea:focus{border-color:var(--green);}
  .form-box textarea{min-height:80px;resize:vertical;}
  .disclaimer{font-size:11px;color:var(--text-3);margin-top:12px;text-align:center;}
  .disclaimer-banner{font-size:12px;color:var(--text-2);background:#F1EFE8;padding:10px 14px;border-radius:8px;margin-bottom:14px;}
  .err-text{color:var(--danger);font-size:12px;margin-top:8px;}
  .row2{display:flex;gap:10px;}
  .row2 > div{flex:1;}
  .card-with-icon{display:flex;align-items:center;gap:8px;border:1px solid #D3D1C7;border-radius:8px;padding:0 12px;}
  .card-with-icon input{border:none;padding:10px 0;}
  .upload-box{border:1.5px dashed #D3D1C7;border-radius:10px;padding:26px 10px;text-align:center;margin-bottom:6px;}
  .upload-box p{font-size:12px;color:var(--text-3);margin-top:8px;}
  .avatar-picker{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;}
  .avatar-picker img{width:52px;height:52px;border-radius:10px;cursor:pointer;border:2px solid transparent;}
  .avatar-picker img.selected{border-color:var(--green);}

  .account-header{display:flex;align-items:center;gap:14px;margin-bottom:22px;}
  .avatar-big{width:60px;height:60px;border-radius:50%;color:#fff;font-size:22px;font-weight:700;
    display:flex;align-items:center;justify-content:center;}
  .account-name{font-size:18px;font-weight:700;}

  .chat-box{background:var(--card);border:1px solid var(--border);border-radius:14px;overflow:hidden;
    display:flex;flex-direction:column;height:500px;}
  .chat-header{display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid var(--border);}
  .chat-sub{font-size:12px;color:var(--text-3);margin-top:2px;}
  .chat-messages{flex:1;padding:16px;display:flex;flex-direction:column;gap:8px;overflow-y:auto;}
  .bubble-moi{align-self:flex-end;background:var(--green);color:#fff;padding:9px 13px;
    border-radius:14px 14px 2px 14px;font-size:13px;max-width:75%;}
  .bubble-vendeur{align-self:flex-start;background:#F1EFE8;color:var(--text);padding:9px 13px;
    border-radius:14px 14px 14px 2px;font-size:13px;max-width:75%;}
  .chat-input-row{display:flex;gap:8px;padding:12px;border-top:1px solid var(--border);}
  .chat-input-row input{flex:1;border:1px solid #D3D1C7;border-radius:20px;padding:10px 16px;font-size:13px;outline:none;}
  .send-btn{background:var(--green);color:#fff;border:none;border-radius:50%;width:38px;height:38px;
    display:flex;align-items:center;justify-content:center;flex-shrink:0;}

  .toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--text);color:#fff;
    padding:11px 20px;border-radius:20px;font-size:13px;display:flex;align-items:center;gap:6px;z-index:500;
    box-shadow:0 6px 20px rgba(0,0,0,.2);}

  /* bottom nav mobile only */
  .bottom-nav{display:none;}
  @media(max-width:720px){
    .search-bar{display:none;}
    .header-inner{padding:12px 16px;}
    main{padding:14px 14px 90px;}
    .grid{grid-template-columns:1fr 1fr;gap:12px;}
    .card-img{height:130px;}
    .bottom-nav{display:flex;align-items:center;justify-content:space-around;background:var(--card);
      border-top:1px solid var(--border);padding:8px 4px 12px;position:fixed;bottom:0;left:0;right:0;z-index:100;}
    .nav-btn{display:flex;flex-direction:column;align-items:center;gap:2px;background:none;border:none;
      padding:4px 6px;position:relative;color:var(--text-3);}
    .nav-btn.active{color:var(--green);}
    .nav-label{font-size:9.5px;font-weight:600;}
    .nav-center{width:44px;height:44px;border-radius:50%;background:var(--green);border:none;
      display:flex;align-items:center;justify-content:center;margin-top:-16px;color:#fff;}
    .nav-badge{position:absolute;top:-2px;right:0;background:var(--badge);color:#fff;font-size:9px;font-weight:700;
      border-radius:8px;min-width:14px;height:14px;display:flex;align-items:center;justify-content:center;}
    .desktop-only{display:none !important;}
  }
  @media(min-width:721px){.mobile-only{display:none !important;}}

  svg{display:block;}
</style>
</head>
<body>

<div id="splash">
  <div class="logo">V</div>
  <h1>Vinetaide</h1>
  <p class="sub">Le marché des parents d'occasion</p>
  <p class="credit">créée par Tom</p>
  <button onclick="enterSite()">OK</button>
</div>

<div id="app">
  <header>
    <div class="header-inner">
      <div class="logo-mini" onclick="goHome()">
        <div class="logo-mark">V</div>
        <div class="logo-text">Vinetaide</div>
      </div>
      <div class="search-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8a8a86" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
        <input id="searchInput" placeholder="Rechercher un parent..." oninput="renderHome()">
      </div>
      <div class="nav-icons desktop-only">
        <button class="icon-btn" onclick="showPage('favoris')" aria-label="Favoris">
          <svg id="favIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2C2C2A" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
          <span class="badge" id="favBadge" style="display:none">0</span>
        </button>
        <button class="icon-btn" onclick="showPage('panier')" aria-label="Panier">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2C2C2A" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span class="badge" id="panierBadge" style="display:none">0</span>
        </button>
        <button class="icon-btn" onclick="showPage('messages')" aria-label="Messages">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2C2C2A" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </button>
        <button class="icon-btn" onclick="onAccountClick()" aria-label="Compte" id="accountBtn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2C2C2A" stroke-width="2"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>
        </button>
      </div>
    </div>
  </header>

  <main id="mainArea"></main>

  <nav class="bottom-nav">
    <button class="nav-btn" id="navHome" onclick="showPage('home')">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
      <span class="nav-label">Rechercher</span>
    </button>
    <button class="nav-btn" id="navFav" onclick="showPage('favoris')">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
      <span class="nav-label">Favoris</span>
    </button>
    <button class="nav-center" onclick="showPage('vendre')">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
    </button>
    <button class="nav-btn" id="navPanier" onclick="showPage('panier')" style="position:relative">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <span class="nav-badge" id="navPanierBadge" style="display:none">0</span>
      <span class="nav-label">Panier</span>
    </button>
    <button class="nav-btn" id="navMsg" onclick="showPage('messages')">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <span class="nav-label">Messages</span>
    </button>
  </nav>
</div>

<div id="toast" class="toast" style="display:none"></div>

<script>
/* ---------- DONNÉES ---------- */
// Portraits générés par IA (randomuser.me sert des visages générés, pas de vraies personnes identifiables)
const PORTRAITS = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/41.jpg",
  "https://randomuser.me/api/portraits/women/89.jpg",
  "https://randomuser.me/api/portraits/men/22.jpg",
  "https://randomuser.me/api/portraits/women/56.jpg",
  "https://randomuser.me/api/portraits/men/91.jpg",
  "https://randomuser.me/api/portraits/women/23.jpg",
];

let PARENTS = [
  {id:1,photo:0,nom:"Papa modèle Gérard 1968",prix:45,etat:"Bon état",ville:"Fontenay-sous-Bois",
   desc:"Papa vintage en bon état général. Quelques signes d'usure au niveau des genoux (montée d'escaliers difficile). Fonction \"blagues nulles au dîner\" toujours opérationnelle, voire même trop. Fourni avec télécommande télé qu'il refuse de lâcher.",
   tags:["Grincheux","Bricoleur","Ronfle"],vendeur:"Maman_Sylvie",avis:4.2,nbAvis:17},
  {id:2,photo:1,nom:"Maman édition \"Range ta chambre\"",prix:60,etat:"Très bon état",ville:"Vincennes",
   desc:"Modèle increvable, tourne 7j/7 sans recharge. Répète en boucle la même phrase depuis 2015, fonctionnalité non désactivable. Excellent pour la cuisine et les devoirs.",
   tags:["Organisée","Cuisine niveau expert","Voix qui porte"],vendeur:"Kevin_2010",avis:4.8,nbAvis:32},
  {id:3,photo:2,nom:"Beau-père collection \"Silence radio\"",prix:20,etat:"État correct",ville:"Saint-Mandé",
   desc:"Parle peu, regarde le foot beaucoup. Idéal pour ceux qui veulent un parent discret. Petite fuite au niveau des yeux pendant les matchs de l'OM. Le fauteuil n'est pas négociable, il vient avec.",
   tags:["Silencieux","Fan de foot","Increvable"],vendeur:"Léa.dupont",avis:3.9,nbAvis:8},
  {id:4,photo:3,nom:"Mamie édition Collector \"Bonbons illimités\"",prix:90,etat:"Comme neuf",ville:"Paris 12e",
   desc:"Rare sur le marché ! Distribue des bonbons sans limite ni demande d'autorisation parentale. Compatible avec câlins longue durée. Léger défaut : raconte la même histoire de guerre 4 fois par visite.",
   tags:["Généreuse","Câlins inclus","Répète les histoires"],vendeur:"TeamCousins",avis:5.0,nbAvis:41},
  {id:5,photo:4,nom:"Papy modèle \"Bricole tout, répare rien\"",prix:15,etat:"Usure visible",ville:"Nogent-sur-Marne",
   desc:"Passionné de bricolage, résultat non garanti. A démonté la machine à laver \"juste pour voir\", toujours en pièces détachées. Vendu avec 40 ans de visserie non triée.",
   tags:["Bricoleur (théorique)","Sieste 14h-16h","Vis en vrac"],vendeur:"Marc_B",avis:4.1,nbAvis:12},
  {id:6,photo:5,nom:"Tata édition \"Photos gênantes garanties\"",prix:10,etat:"Bon état",ville:"Fontenay-sous-Bois",
   desc:"Sort systématiquement une photo de vous à 3 ans dans le bain à chaque réunion de famille. Fonction \"blague limite\" activée en continu depuis l'apéro. Attachante malgré tout.",
   tags:["Embarrassante","Apéro-compatible","Attachante"],vendeur:"FamilleReunie",avis:3.5,nbAvis:6},
  {id:7,photo:6,nom:"Belle-mère \"Toujours raison\"",prix:5,etat:"Pour pièces",ville:"Joinville-le-Pont",
   desc:"Chaque conversation se termine par \"je te l'avais bien dit\". Fonction câlin non installée mais peut être activée après négociation longue. Vendue avec sa liste de choses à ne pas faire.",
   tags:["A toujours raison","Sarcastique","Ne lâche rien"],vendeur:"GendreCourage",avis:2.8,nbAvis:4},
  {id:8,photo:7,nom:"Maman \"Doudou de secours 24/7\"",prix:75,etat:"Excellent état",ville:"Fontenay-sous-Bois",
   desc:"Sait toujours où sont les clés, les chaussettes et la télécommande. Guérit tous les bobos avec un bisou magique. Aucun bug connu à ce jour.",
   tags:["Fiable","Multi-tâches","Câlins garantis"],vendeur:"PetitFrère",avis:4.9,nbAvis:26},
  {id:9,photo:8,nom:"Papa \"Chauffeur Uber gratuit\"",prix:35,etat:"Bon état",ville:"Vincennes",
   desc:"Vous dépose et récupère partout, à toute heure, sans jamais rien dire — enfin presque. Playlist musicale bloquée sur les tubes des années 80. Fonction \"on en a pour 5 minutes\" peu fiable.",
   tags:["Disponible","Playlist rétro","Un peu lent"],vendeur:"Chloé19",avis:4.3,nbAvis:14},
  {id:10,photo:9,nom:"Marraine \"Cadeaux de Noël en avance\"",prix:55,etat:"Très bon état",ville:"Paris 12e",
   desc:"Craque toujours avant l'heure et offre les cadeaux 3 semaines avant Noël. Complice inconditionnelle contre les parents. Chaudement recommandée par tous les neveux et nièces testeurs.",
   tags:["Complice","Généreuse","Indiscrète"],vendeur:"NevueTop",avis:4.7,nbAvis:19},
  {id:11,photo:10,nom:"Papy \"Conteur de guerre en boucle\"",prix:8,etat:"Usure visible",ville:"Nogent-sur-Marne",
   desc:"Édition rare qui raconte 3 fois la même anecdote militaire par repas de famille. Résistant à toute interruption. Vendu avec médaille en carton et béret d'époque.",
   tags:["Nostalgique","Increvable","Répétitif"],vendeur:"PetiteFille22",avis:3.2,nbAvis:9},
  {id:12,photo:11,nom:"Maman \"Prof particulière gratuite\"",prix:70,etat:"Excellent état",ville:"Saint-Mandé",
   desc:"Aide aux devoirs jusqu'à 23h sans broncher, spécialiste des maths de 6e à la terminale. Légère tendance à corriger la grammaire même en dehors des devoirs.",
   tags:["Pédagogue","Patiente","Corrige tout"],vendeur:"Ethan.b",avis:4.9,nbAvis:37},
];

// avatars fictifs pour les vendeurs
const AVATAR_COLORS = ["#D4537E","#378ADD","#0F6E56","#BA7517","#7F77DD","#D85A30"];

/* ---------- ÉTAT ---------- */
let state = {
  page:"home", selected:null, favoris:[], panier:[], connecte:false,
  compte:{pseudo:"",email:""}, messages:{}, checkoutDone:false
};

/* ---------- UTILS ---------- */
function showToast(t){
  const el = document.getElementById('toast');
  el.textContent = t; el.style.display='flex';
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>el.style.display='none',1800);
}
function initials(name){
  return name.split(/[\s_.]/).filter(Boolean).slice(0,2).map(w=>w[0].toUpperCase()).join('');
}
function avatarColor(name){
  let s=0; for(const c of name) s+=c.charCodeAt(0);
  return AVATAR_COLORS[s%AVATAR_COLORS.length];
}
function emailValid(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function esc(s){ const d=document.createElement('div'); d.textContent=s; return d.innerHTML; }

function enterSite(){
  document.getElementById('splash').style.display='none';
  document.getElementById('app').style.display='flex';
  renderAll();
}

function updateBadges(){
  const fav = document.getElementById('favBadge');
  fav.style.display = state.favoris.length ? 'flex' : 'none';
  fav.textContent = state.favoris.length;
  const pan = document.getElementById('panierBadge');
  pan.style.display = state.panier.length ? 'flex' : 'none';
  pan.textContent = state.panier.length;
  const navPan = document.getElementById('navPanierBadge');
  navPan.style.display = state.panier.length ? 'flex' : 'none';
  navPan.textContent = state.panier.length;

  const acctBtn = document.getElementById('accountBtn');
  if(state.connecte){
    acctBtn.innerHTML = `<div class="mini-avatar" style="background:${avatarColor(state.compte.pseudo)}">${initials(state.compte.pseudo)}</div>`;
  } else {
    acctBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2C2C2A" stroke-width="2"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>`;
  }

  ['navHome','navFav','navPanier','navMsg'].forEach(id=>document.getElementById(id).classList.remove('active'));
  const map = {home:'navHome',favoris:'navFav',panier:'navPanier',messages:'navMsg'};
  if(map[state.page]) document.getElementById(map[state.page]).classList.add('active');
}

function onAccountClick(){ showPage(state.connecte ? 'compte' : 'connexion'); }
function goHome(){ showPage('home'); }
function toggleFavori(id){
  state.favoris = state.favoris.includes(id) ? state.favoris.filter(x=>x!==id) : [...state.favoris,id];
  updateBadges();
  renderAll();
}
function addPanier(p){
  if(state.panier.find(x=>x.id===p.id)){ showToast('Déjà dans le panier'); return; }
  state.panier.push(p);
  updateBadges();
  showToast(`${p.nom} ajouté au panier`);
}
function removePanier(id){
  state.panier = state.panier.filter(x=>x.id!==id);
  updateBadges();
  renderPage();
}
function openDetail(id){
  state.selected = PARENTS.find(p=>p.id===id);
  showPage('detail');
}

function showPage(page){
  state.page = page;
  updateBadges();
  renderPage();
  window.scrollTo(0,0);
}

function renderAll(){ updateBadges(); renderPage(); }

/* ---------- RENDER ROUTER ---------- */
function renderPage(){
  const main = document.getElementById('mainArea');
  switch(state.page){
    case 'home': renderHome(); break;
    case 'detail': renderDetail(); break;
    case 'messagerie': renderMessagerie(); break;
    case 'favoris': renderFavoris(); break;
    case 'panier': renderPanier(); break;
    case 'paiement': renderPaiement(); break;
    case 'vendre': renderVendre(); break;
    case 'messages': renderMessagesList(); break;
    case 'connexion': renderConnexion(); break;
    case 'compte': renderCompte(); break;
    default: renderHome();
  }
}

/* ---------- HOME ---------- */
function renderHome(){
  state.page='home';
  const search = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const filtered = PARENTS.filter(p => (p.nom+p.desc+p.tags.join(' ')).toLowerCase().includes(search));
  const main = document.getElementById('mainArea');
  main.innerHTML = `
    <div class="hero mobile-only" style="margin-bottom:16px">
      <input id="searchInputMobile" placeholder="Rechercher un parent..." oninput="syncMobileSearch(this.value)"
        style="width:100%;border:1px solid #D3D1C7;border-radius:20px;padding:10px 16px;font-size:14px;outline:none;">
    </div>
    <div class="hero desktop-only">
      <h1>Un parent d'occasion pour chaque famille.</h1>
      <p>Achetez, vendez et échangez des parents en bon état entre particuliers. Blague garantie, remboursement non garanti.</p>
    </div>
    <div class="grid">
      ${filtered.map(p=>`
        <div class="card" onclick="openDetail(${p.id})">
          <div class="card-img">
            <img src="${PORTRAITS[p.photo]}" alt="">
            <button class="heart-btn" onclick="event.stopPropagation();toggleFavori(${p.id})" aria-label="Favoris">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${state.favoris.includes(p.id)?'#D4537E':'none'}" stroke="${state.favoris.includes(p.id)?'#D4537E':'#2C2C2A'}" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
            </button>
          </div>
          <div class="card-body">
            <div class="card-name">${esc(p.nom)}</div>
            <div class="card-etat">${esc(p.etat)}</div>
            <div class="card-bottom">
              <span class="card-prix">${p.prix} €</span>
              <span class="card-ville">${esc(p.ville)}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
    ${filtered.length===0 ? `<p class="empty">Aucun parent ne correspond à cette recherche.</p>` : ''}
  `;
}
function syncMobileSearch(v){
  document.getElementById('searchInput').value = v;
  renderHome();
}

/* ---------- DETAIL ---------- */
function renderDetail(){
  const p = state.selected;
  const main = document.getElementById('mainArea');
  main.innerHTML = `
    <div class="narrow">
      <button class="back-btn" onclick="showPage('home')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        Retour
      </button>
      <div class="detail-grid">
        <div class="detail-img"><img src="${PORTRAITS[p.photo]}" alt=""></div>
        <div>
          <div class="detail-name">${esc(p.nom)}</div>
          <div class="detail-prix">${p.prix} €</div>
          <div class="detail-etat">${esc(p.etat)}</div>
          <div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
          <p class="detail-desc">${esc(p.desc)}</p>
          <div class="seller-box">
            <div class="mini-avatar" style="background:${avatarColor(p.vendeur)}">${initials(p.vendeur)}</div>
            <div>
              <div class="seller-name">${esc(p.vendeur)}</div>
              <div class="seller-rating">★ ${p.avis} (${p.nbAvis} avis) · ${esc(p.ville)}</div>
            </div>
          </div>
          <div class="detail-actions">
            <button class="btn-primary" onclick='addPanier(${JSON.stringify(p)})'>Ajouter au panier</button>
            <button class="btn-secondary" onclick="toggleFavori(${p.id})" aria-label="Favoris">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${state.favoris.includes(p.id)?'#D4537E':'none'}" stroke="${state.favoris.includes(p.id)?'#D4537E':'#2C2C2A'}" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
            </button>
            <button class="btn-secondary" onclick="showPage('messagerie')" aria-label="Message">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ---------- MESSAGERIE ---------- */
function renderMessagerie(){
  const p = state.selected;
  const main = document.getElementById('mainArea');
  const msgs = state.messages[p.id] || [];
  main.innerHTML = `
    <div class="narrow">
      <button class="back-btn" onclick="showPage('detail')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        Retour à l'annonce
      </button>
      <div class="chat-box">
        <div class="chat-header">
          <div class="mini-avatar" style="background:${avatarColor(p.vendeur)}">${initials(p.vendeur)}</div>
          <div>
            <div class="seller-name">${esc(p.vendeur)}</div>
            <div class="chat-sub">À propos de : ${esc(p.nom)}</div>
          </div>
        </div>
        <div class="chat-messages" id="chatMessages">
          ${msgs.length===0 ? `<p class="empty">Envoyez le premier message pour négocier.</p>` : ''}
          ${msgs.map(m=>`<div class="${m.from==='moi'?'bubble-moi':'bubble-vendeur'}">${esc(m.text)}</div>`).join('')}
        </div>
        <div class="chat-input-row">
          <input id="msgInput" placeholder="Écrire un message..." onkeydown="if(event.key==='Enter')sendMessage(${p.id})">
          <button class="send-btn" onclick="sendMessage(${p.id})" aria-label="Envoyer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
  const box = document.getElementById('chatMessages');
  box.scrollTop = box.scrollHeight;
}
function sendMessage(parentId){
  const input = document.getElementById('msgInput');
  const text = input.value.trim();
  if(!text) return;
  if(!state.messages[parentId]) state.messages[parentId]=[];
  state.messages[parentId].push({from:'moi',text});
  input.value='';
  renderMessagerie();
  setTimeout(()=>{
    state.messages[parentId].push({from:'vendeur',text:"Merci pour votre message ! On revient vers vous vite, beaucoup de demandes en ce moment 😅"});
    if(state.page==='messagerie' && state.selected.id===parentId) renderMessagerie();
  },900);
}

/* ---------- FAVORIS ---------- */
function renderFavoris(){
  const main = document.getElementById('mainArea');
  const favs = PARENTS.filter(p=>state.favoris.includes(p.id));
  main.innerHTML = `
    <div class="narrow">
      <div class="section-title">Mes favoris</div>
      ${favs.length===0 ? `<p class="empty">Aucun parent en favori pour l'instant.</p>` : `
        <div class="list">
          ${favs.map(p=>`
            <div class="list-row" onclick="openDetail(${p.id})">
              <div class="list-thumb"><img src="${PORTRAITS[p.photo]}" alt=""></div>
              <div style="flex:1">
                <div class="list-name">${esc(p.nom)}</div>
                <div class="list-sub">${p.prix} € · ${esc(p.ville)}</div>
              </div>
              <button class="icon-btn-plain" onclick="event.stopPropagation();toggleFavori(${p.id})" aria-label="Retirer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}

/* ---------- PANIER ---------- */
function renderPanier(){
  const main = document.getElementById('mainArea');
  const total = state.panier.reduce((s,p)=>s+p.prix,0);
  if(state.checkoutDone){
    main.innerHTML = `
      <div class="narrow">
        <div class="section-title">Mon panier</div>
        <div class="success-box">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3B6D11" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
          <div class="success-title">Commande confirmée !</div>
          <p class="empty">Ceci est un faux paiement à but humoristique — aucune donnée bancaire n'a été envoyée ni stockée. Vos parents arrivent dès qu'ils auront fini de râler sur le trajet.</p>
          <button class="btn-primary" onclick="state.checkoutDone=false;state.panier=[];updateBadges();showPage('home')">Retour à l'accueil</button>
        </div>
      </div>
    `;
    return;
  }
  if(state.panier.length===0){
    main.innerHTML = `<div class="narrow"><div class="section-title">Mon panier</div><p class="empty">Votre panier est vide.</p></div>`;
    return;
  }
  main.innerHTML = `
    <div class="narrow">
      <div class="section-title">Mon panier</div>
      <div class="list">
        ${state.panier.map(p=>`
          <div class="list-row">
            <div class="list-thumb"><img src="${PORTRAITS[p.photo]}" alt=""></div>
            <div style="flex:1">
              <div class="list-name">${esc(p.nom)}</div>
              <div class="list-sub">${esc(p.etat)}</div>
            </div>
            <span class="list-prix">${p.prix} €</span>
            <button class="icon-btn-plain" onclick="removePanier(${p.id})" aria-label="Retirer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
        `).join('')}
      </div>
      <div class="total-row"><span>Total</span><span class="total-amount">${total} €</span></div>
      <button class="btn-primary-full" onclick="goToPaiement()">Passer au paiement</button>
    </div>
  `;
}
function goToPaiement(){
  if(!state.connecte){ showToast('Connectez-vous pour valider'); showPage('connexion'); return; }
  showPage('paiement');
}

/* ---------- PAIEMENT ---------- */
function renderPaiement(){
  const main = document.getElementById('mainArea');
  const total = state.panier.reduce((s,p)=>s+p.prix,0);
  main.innerHTML = `
    <div class="narrow">
      <button class="back-btn" onclick="showPage('panier')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        Retour
      </button>
      <div class="section-title">Paiement</div>
      <p class="disclaimer-banner">🔒 Simulation uniquement — aucune donnée n'est envoyée ni conservée.</p>
      <div class="form-box">
        <label>Numéro de carte</label>
        <div class="card-with-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8a8a86" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>
          <input id="cardNum" placeholder="1234 5678 9012 3456" maxlength="19" oninput="formatCardNum(this)">
        </div>
        <div class="row2" style="margin-top:10px">
          <div>
            <label>Expiration</label>
            <input id="cardExp" placeholder="MM/AA" maxlength="5" oninput="formatCardExp(this)">
          </div>
          <div>
            <label>CVC</label>
            <input id="cardCvc" placeholder="123" maxlength="3" oninput="this.value=this.value.replace(/\\D/g,'').slice(0,3)">
          </div>
        </div>
        <div id="payErr"></div>
        <button class="btn-primary-full" onclick="doPay(${total})">Payer ${total} €</button>
      </div>
    </div>
  `;
}
function formatCardNum(el){
  let d = el.value.replace(/\D/g,'').slice(0,16);
  el.value = d.replace(/(.{4})/g,'$1 ').trim();
}
function formatCardExp(el){
  let v = el.value.replace(/\D/g,'').slice(0,4);
  if(v.length>2) v = v.slice(0,2)+'/'+v.slice(2);
  el.value = v;
}
function doPay(total){
  const num = document.getElementById('cardNum').value.replace(/\s/g,'');
  const exp = document.getElementById('cardExp').value;
  const cvc = document.getElementById('cardCvc').value;
  const err = document.getElementById('payErr');
  if(num.length!==16 || exp.length!==5 || cvc.length!==3){
    err.innerHTML = `<p class="err-text">Remplissez tous les champs correctement.</p>`;
    return;
  }
  err.innerHTML='';
  state.checkoutDone = true;
  showPage('panier');
}

/* ---------- VENDRE ---------- */
let selectedSellPhoto = 0;
function renderVendre(){
  const main = document.getElementById('mainArea');
  if(!state.connecte){
    main.innerHTML = `
      <div class="narrow">
        <button class="back-btn" onclick="showPage('home')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          Retour
        </button>
        <div class="section-title">Vendre un parent</div>
        <p class="empty">Connectez-vous pour publier une annonce.</p>
      </div>
    `;
    return;
  }
  selectedSellPhoto = Math.floor(Math.random()*PORTRAITS.length);
  main.innerHTML = `
    <div class="narrow">
      <button class="back-btn" onclick="showPage('home')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        Retour
      </button>
      <div class="section-title">Vendre un parent</div>
      <div class="form-box">
        <label>Photo</label>
        <div class="avatar-picker" id="avatarPicker">
          ${PORTRAITS.map((url,i)=>`<img src="${url}" class="${i===selectedSellPhoto?'selected':''}" onclick="pickSellPhoto(${i})">`).join('')}
        </div>
        <label>Nom de l'annonce</label>
        <input id="sellNom" placeholder="ex: Papa modèle increvable">
        <label>Prix (€)</label>
        <input id="sellPrix" type="number" placeholder="30">
        <label>État</label>
        <select id="sellEtat">
          <option>Comme neuf</option><option>Très bon état</option><option selected>Bon état</option><option>État correct</option><option>Pour pièces</option>
        </select>
        <label>Ville</label>
        <input id="sellVille" placeholder="ex: Fontenay-sous-Bois">
        <label>Description</label>
        <textarea id="sellDesc" placeholder="Décrivez votre parent avec humour..."></textarea>
        <label>Tags (séparés par des virgules)</label>
        <input id="sellTags" placeholder="ex: Grincheux, Bricoleur">
        <div id="sellErr"></div>
        <button class="btn-primary-full" onclick="publishAnnonce()">Publier l'annonce</button>
      </div>
    </div>
  `;
}
function pickSellPhoto(i){
  selectedSellPhoto = i;
  document.querySelectorAll('#avatarPicker img').forEach((img,idx)=>img.classList.toggle('selected', idx===i));
}
function publishAnnonce(){
  const nom = document.getElementById('sellNom').value.trim();
  const prix = document.getElementById('sellPrix').value;
  const etat = document.getElementById('sellEtat').value;
  const ville = document.getElementById('sellVille').value.trim();
  const desc = document.getElementById('sellDesc').value.trim();
  const tags = document.getElementById('sellTags').value;
  const err = document.getElementById('sellErr');
  if(!nom || !prix || !ville || !desc){
    err.innerHTML = `<p class="err-text">Remplissez au moins le nom, le prix, la ville et la description.</p>`;
    return;
  }
  err.innerHTML='';
  const newParent = {
    id: Date.now(), photo: selectedSellPhoto, nom, prix: Number(prix)||0, etat, ville, desc,
    tags: tags.split(',').map(t=>t.trim()).filter(Boolean),
    vendeur: state.compte.pseudo, avis: 5.0, nbAvis: 0
  };
  PARENTS = [newParent, ...PARENTS];
  showToast('Annonce publiée !');
  showPage('home');
}

/* ---------- MESSAGES LISTE ---------- */
function renderMessagesList(){
  const main = document.getElementById('mainArea');
  const ids = Object.keys(state.messages);
  main.innerHTML = `
    <div class="narrow">
      <div class="section-title">Messages</div>
      ${ids.length===0 ? `<p class="empty">Aucune conversation. Contactez un vendeur depuis une annonce.</p>` : `
        <div class="list">
          ${ids.map(id=>{
            const p = PARENTS.find(x=>x.id===Number(id));
            if(!p) return '';
            const msgs = state.messages[id];
            const last = msgs[msgs.length-1];
            return `
              <div class="list-row" onclick='openFromMessages(${id})'>
                <div class="mini-avatar" style="background:${avatarColor(p.vendeur)}">${initials(p.vendeur)}</div>
                <div style="flex:1">
                  <div class="list-name">${esc(p.vendeur)}</div>
                  <div class="list-sub">${esc(last.text.slice(0,40))}${last.text.length>40?'...':''}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}
function openFromMessages(id){
  state.selected = PARENTS.find(p=>p.id===id);
  showPage('messagerie');
}

/* ---------- CONNEXION ---------- */
function renderConnexion(){
  const main = document.getElementById('mainArea');
  main.innerHTML = `
    <div class="narrow">
      <div class="section-title">Créer un compte</div>
      <div class="form-box">
        <label>Pseudo</label>
        <input id="regPseudo" placeholder="ex: Kevin_2010">
        <label>Adresse e-mail</label>
        <input id="regEmail" type="email" placeholder="prenom@exemple.com">
        <label>Mot de passe</label>
        <input id="regMdp" type="password" placeholder="••••••••">
        <div id="regErr"></div>
        <button class="btn-primary-full" onclick="doRegister()">Créer mon compte</button>
        <p class="disclaimer">Compte fictif local — rien n'est envoyé sur internet.</p>
      </div>
    </div>
  `;
}
function doRegister(){
  const pseudo = document.getElementById('regPseudo').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const mdp = document.getElementById('regMdp').value;
  const err = document.getElementById('regErr');
  if(!pseudo){ err.innerHTML = `<p class="err-text">Entrez un pseudo.</p>`; return; }
  if(!emailValid(email)){ err.innerHTML = `<p class="err-text">Adresse e-mail invalide.</p>`; return; }
  if(mdp.length<4){ err.innerHTML = `<p class="err-text">Mot de passe trop court.</p>`; return; }
  err.innerHTML='';
  state.compte = {pseudo, email};
  state.connecte = true;
  updateBadges();
  showPage('compte');
  showToast('Compte créé');
}

/* ---------- COMPTE ---------- */
function renderCompte(){
  const main = document.getElementById('mainArea');
  main.innerHTML = `
    <div class="narrow">
      <div class="account-header">
        <div class="avatar-big" style="background:${avatarColor(state.compte.pseudo)}">${initials(state.compte.pseudo)}</div>
        <div>
          <div class="account-name">${esc(state.compte.pseudo)}</div>
          <div class="chat-sub">${esc(state.compte.email)}</div>
          <div class="seller-rating">★ 4.6 · Membre depuis 2026</div>
        </div>
      </div>
      <div class="list">
        <div class="list-row" onclick="showPage('favoris')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
          <span style="flex:1">Favoris</span><span class="list-sub">${state.favoris.length}</span>
        </div>
        <div class="list-row" onclick="showPage('panier')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span style="flex:1">Panier</span><span class="list-sub">${state.panier.length}</span>
        </div>
        <div class="list-row" onclick="showPage('vendre')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          <span style="flex:1">Vendre un parent</span>
        </div>
      </div>
      <button class="btn-secondary-full" onclick="doLogout()">Se déconnecter</button>
    </div>
  `;
}
function doLogout(){
  state.connecte = false;
  state.compte = {pseudo:'',email:''};
  updateBadges();
  showPage('home');
}
</script>
</body>
</html>
