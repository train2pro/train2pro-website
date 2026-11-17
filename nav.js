(function(){
const path=window.location.pathname.split('/').pop()||'index.html';
const pages=[
  {href:'index.html',label:'Home'},
  {href:'about.html',label:'About'},
  {href:'programmes.html',label:'Programmes'},
  {href:'assessment.html',label:'DISC Assessment'},
  {href:'csr.html',label:'CSR'},
  {href:'webinar.html',label:'Webinar'}
];
const LOGO='data:image/png;base64,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';
const css=`<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap');
:root{
  --navy:#1A3562;
  --navy-dark:#0e1f3d;
  --navy-mid:#1e3a6e;
  --orange:#F08030;
  --orange-dark:#d4651a;
  --white:#ffffff;
  --light:#f4f7fc;
  --gray:#6b7280;
  --text:#1a202c;
  --border:#e2e8f0;
  --lms:#2563EB;
  --lms-dark:#1d4ed8;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;color:var(--text);background:#fff;line-height:1.6;overflow-x:hidden}
h1,h2,h3,h4{font-family:'Playfair Display',serif;line-height:1.2}
a{text-decoration:none;color:inherit}
img{max-width:100%}
.container{max-width:1200px;margin:0 auto;padding:0 24px}

/* ===== NAVBAR ===== */
.navbar{position:sticky;top:0;z-index:1000;background:#fff;box-shadow:0 2px 20px rgba(0,0,0,0.08)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:110px;gap:20px}
.nav-logo a{display:flex;align-items:center}
.nav-logo img{height:88px;width:auto;display:block}
.nav-links{display:flex;align-items:center;gap:4px;list-style:none}
.nav-links li a{padding:8px 14px;border-radius:6px;font-size:15px;font-weight:500;color:var(--navy);transition:all .2s}
.nav-links li a:hover,.nav-links li a.active{color:var(--orange);background:rgba(240,128,48,.08)}
.nav-actions{display:flex;align-items:center;gap:10px;flex-shrink:0}
.btn-lms{padding:9px 18px;border-radius:6px;font-size:14px;font-weight:600;color:var(--lms);border:2px solid var(--lms);background:transparent;cursor:pointer;transition:all .2s;white-space:nowrap}
.btn-lms:hover{background:var(--lms);color:#fff}
.btn-contact{padding:10px 20px;border-radius:6px;font-size:14px;font-weight:600;color:#fff;background:var(--orange);border:none;cursor:pointer;transition:all .2s;white-space:nowrap}
.btn-contact:hover{background:var(--orange-dark)}
.nav-hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:8px}
.nav-hamburger span{display:block;width:24px;height:2px;background:var(--navy);border-radius:2px;transition:all .3s}
.nav-mobile-menu{display:none}
@media(max-width:900px){
  .nav-links,.nav-actions{display:none}
  .nav-links.open,.nav-actions.open{display:flex;flex-direction:column;align-items:flex-start;gap:4px}
  .nav-actions.open{flex-direction:row;flex-wrap:wrap;padding:0 0 16px 0}
  .nav-hamburger{display:flex}
  .nav-inner{flex-wrap:wrap;height:auto;padding:12px 0}
  .nav-logo img{height:64px}
  .nav-mobile-menu{width:100%;background:#fff;padding:0;display:flex;flex-direction:column;gap:4px}
  .nav-mobile-menu:not(.open){display:none}
}

/* ===== BUTTONS ===== */
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:8px;font-weight:600;font-size:16px;cursor:pointer;transition:all .25s;border:none}
.btn-primary{background:var(--orange);color:#fff}
.btn-primary:hover{background:var(--orange-dark);transform:translateY(-1px);box-shadow:0 6px 20px rgba(240,128,48,.35)}
.btn-secondary{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.7)}
.btn-secondary:hover{background:rgba(255,255,255,.1);border-color:#fff}
.btn-sm{padding:10px 20px;font-size:14px}

/* ===== HERO ===== */
.hero{background:linear-gradient(135deg,var(--navy-dark) 0%,var(--navy) 50%,#1e3a6e 100%);min-height:580px;display:flex;align-items:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}
.hero-inner{display:grid;grid-template-columns:1fr 420px;gap:60px;align-items:center;padding:60px 0}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(240,128,48,.15);border:1px solid rgba(240,128,48,.3);color:var(--orange);font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;padding:6px 14px;border-radius:20px;margin-bottom:20px}
.hero h1{font-size:clamp(2rem,4vw,3.2rem);color:#fff;margin-bottom:20px;font-weight:900}
.hero h1 span{color:var(--orange)}
.hero-sub{color:rgba(255,255,255,.8);font-size:17px;line-height:1.7;margin-bottom:32px;max-width:520px}
.hero-ctas{display:flex;gap:14px;flex-wrap:wrap}
.hero-form-card{background:#fff;border-radius:16px;padding:32px;box-shadow:0 20px 60px rgba(0,0,0,.3)}
.hero-form-card h3{font-size:1.4rem;color:var(--navy);margin-bottom:6px}
.hero-form-card p{font-size:14px;color:var(--gray);margin-bottom:20px}
.hero-form .form-group{margin-bottom:14px}
.hero-form .form-group label{display:block;font-size:13px;font-weight:600;color:var(--text);margin-bottom:5px}
.hero-form .form-group input,.hero-form .form-group select,.hero-form .form-group textarea{width:100%;padding:10px 14px;border:1.5px solid var(--border);border-radius:7px;font-size:14px;font-family:inherit;transition:border-color .2s}
.hero-form .form-group input:focus,.hero-form .form-group select:focus{outline:none;border-color:var(--orange)}
.hero-form .btn-submit{width:100%;padding:13px;background:var(--orange);color:#fff;border:none;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;transition:all .2s;margin-top:4px}
.hero-form .btn-submit:hover{background:var(--orange-dark)}
.hero-form-success{display:none;text-align:center;padding:20px 0}
.hero-form-success h4{color:var(--navy);font-size:1.2rem;margin-bottom:8px}
.hero-form-success p{color:var(--gray);font-size:14px}
@media(max-width:900px){
  .hero-inner{grid-template-columns:1fr;gap:36px}
  .hero-form-card{max-width:500px}
}

/* ===== CLIENTS ===== */
.clients{padding:28px 0;border-bottom:1px solid var(--border)}
.clients-label{font-size:13px;font-weight:600;color:var(--gray);text-transform:uppercase;letter-spacing:1px;text-align:center;margin-bottom:16px}
.clients-logos{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:32px 48px}
.clients-logos span{font-size:15px;font-weight:700;color:#94a3b8;letter-spacing:.5px;text-transform:uppercase}

/* ===== STATS ===== */
.stats{background:var(--navy-dark);padding:60px 0}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;text-align:center}
.stat-item{padding:20px}
.stat-num{font-size:clamp(2.2rem,4vw,3.5rem);font-weight:900;font-family:'Playfair Display',serif;color:var(--orange);line-height:1}
.stat-label{font-size:15px;color:rgba(255,255,255,.75);margin-top:8px;font-weight:400}
@media(max-width:768px){.stats-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:480px){.stats-grid{grid-template-columns:1fr;gap:20px}}

/* ===== SECTION HEADERS ===== */
.section-header{text-align:center;margin-bottom:48px}
.section-tag{display:inline-block;background:rgba(240,128,48,.1);color:var(--orange);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;padding:5px 14px;border-radius:20px;margin-bottom:12px}
.section-header h2{font-size:clamp(1.8rem,3.5vw,2.6rem);color:var(--navy);margin-bottom:14px}
.section-header p{font-size:16px;color:var(--gray);max-width:600px;margin:0 auto;line-height:1.7}

/* ===== SOLUTIONS ===== */
.solutions{padding:80px 0;background:var(--light)}
.solutions-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
.sol-card{background:#fff;border-radius:16px;padding:32px 24px;text-align:center;transition:all .3s;border:2px solid transparent;cursor:pointer}
.sol-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(26,53,98,.12);border-color:var(--orange)}
.sol-icon{width:64px;height:64px;border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:28px}
.sol-icon.blue{background:rgba(26,53,98,.08)}
.sol-icon.orange{background:rgba(240,128,48,.1)}
.sol-icon.green{background:rgba(16,185,129,.1)}
.sol-icon.purple{background:rgba(124,58,237,.1)}
.sol-card h3{font-size:1.1rem;color:var(--navy);margin-bottom:10px}
.sol-card p{font-size:14px;color:var(--gray);line-height:1.6}
@media(max-width:900px){.solutions-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:480px){.solutions-grid{grid-template-columns:1fr}}

/* ===== LMS PLATFORM SECTION ===== */
.lms-section{padding:80px 0;background:#fff}
.lms-inner{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.lms-content .section-tag{text-align:left}
.lms-content h2{font-size:clamp(1.8rem,3vw,2.4rem);color:var(--navy);margin-bottom:16px}
.lms-content p{font-size:16px;color:var(--gray);line-height:1.75;margin-bottom:24px}
.lms-features{list-style:none;margin-bottom:32px}
.lms-features li{display:flex;align-items:center;gap:12px;font-size:15px;color:var(--text);padding:8px 0;border-bottom:1px solid var(--border)}
.lms-features li:last-child{border-bottom:none}
.lms-features li::before{content:'✓';width:22px;height:22px;border-radius:50%;background:var(--orange);color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}
.lms-cta-buttons{display:flex;gap:14px;flex-wrap:wrap}
.btn-lms-primary{padding:13px 26px;background:var(--lms);color:#fff;border-radius:8px;font-weight:600;font-size:15px;transition:all .25s}
.btn-lms-primary:hover{background:var(--lms-dark);transform:translateY(-1px)}
.btn-lms-outline{padding:11px 24px;background:transparent;color:var(--lms);border:2px solid var(--lms);border-radius:8px;font-weight:600;font-size:15px;transition:all .25s}
.btn-lms-outline:hover{background:var(--lms);color:#fff}
.lms-mockup{background:linear-gradient(135deg,var(--navy-dark),var(--navy));border-radius:20px;overflow:hidden;box-shadow:0 24px 64px rgba(26,53,98,.25)}
.lms-mockup-bar{background:rgba(255,255,255,.1);padding:12px 16px;display:flex;align-items:center;gap:8px}
.lms-mockup-dot{width:10px;height:10px;border-radius:50%}
.lms-mockup-dot.r{background:#ff5f57}
.lms-mockup-dot.y{background:#febc2e}
.lms-mockup-dot.g{background:#28c840}
.lms-mockup-url{flex:1;background:rgba(255,255,255,.12);border-radius:4px;padding:4px 12px;font-size:12px;color:rgba(255,255,255,.6)}
.lms-mockup-body{padding:20px}
.lms-top-bar{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.lms-top-bar span{color:#fff;font-weight:600;font-size:13px}
.lms-top-bar .lms-badge{background:var(--orange);color:#fff;font-size:11px;padding:3px 8px;border-radius:4px}
.lms-cards{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}
.lms-mini-card{background:rgba(255,255,255,.1);border-radius:8px;padding:12px}
.lms-mini-card .lms-mini-icon{width:28px;height:28px;border-radius:6px;background:var(--orange);margin-bottom:8px;display:flex;align-items:center;justify-content:center;font-size:14px}
.lms-mini-card p{color:rgba(255,255,255,.9);font-size:11px;font-weight:600;margin-bottom:2px}
.lms-mini-card span{color:rgba(255,255,255,.5);font-size:10px}
.lms-progress-section{background:rgba(255,255,255,.07);border-radius:10px;padding:12px}
.lms-progress-section p{color:rgba(255,255,255,.8);font-size:12px;margin-bottom:8px;font-weight:500}
.lms-progress-bar{height:6px;background:rgba(255,255,255,.15);border-radius:3px;overflow:hidden;margin-bottom:6px}
.lms-progress-fill{height:100%;border-radius:3px;background:var(--orange)}
.lms-progress-label{color:rgba(255,255,255,.5);font-size:10px}
@media(max-width:900px){.lms-inner{grid-template-columns:1fr}}

/* ===== PROGRAMMES ===== */
.programmes-section{padding:80px 0;background:var(--light)}
.prog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.prog-card{background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.06);transition:all .3s}
.prog-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.12)}
.prog-header{padding:28px 24px 20px;position:relative}
.prog-header h3{font-size:1.15rem;color:#fff;margin-bottom:6px}
.prog-header p{font-size:13px;color:rgba(255,255,255,.8);line-height:1.5}
.prog-header.navy{background:linear-gradient(135deg,var(--navy-dark),var(--navy))}
.prog-header.orange{background:linear-gradient(135deg,#b55a1a,var(--orange))}
.prog-header.teal{background:linear-gradient(135deg,#0d6e6e,#14b8a6)}
.prog-header.purple{background:linear-gradient(135deg,#4c1d95,#7c3aed)}
.prog-header.red{background:linear-gradient(135deg,#991b1b,#ef4444)}
.prog-header.indigo{background:linear-gradient(135deg,#1e3a8a,#3b82f6)}
.prog-body{padding:20px 24px}
.prog-tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px}
.prog-tag{font-size:12px;padding:3px 10px;border-radius:12px;font-weight:500}
.prog-tag.d{background:rgba(239,68,68,.1);color:#b91c1c}
.prog-tag.i{background:rgba(245,158,11,.1);color:#92400e}
.prog-tag.s{background:rgba(16,185,129,.1);color:#065f46}
.prog-tag.c{background:rgba(59,130,246,.1);color:#1e40af}
.prog-tag.n{background:rgba(26,53,98,.08);color:var(--navy)}
.prog-cta{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:var(--orange)}
.prog-cta:hover{gap:10px}
@media(max-width:900px){.prog-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.prog-grid{grid-template-columns:1fr}}

/* ===== TESTIMONIALS ===== */
.testimonials{padding:80px 0;background:var(--navy-dark)}
.testi-container{position:relative;overflow:hidden}
.testi-track{display:flex;transition:transform .5s ease}
.testi-slide{min-width:100%;padding:0 40px}
.testi-card{max-width:800px;margin:0 auto;text-align:center}
.testi-quote{font-size:clamp(1.1rem,2vw,1.4rem);color:rgba(255,255,255,.9);line-height:1.7;font-style:italic;margin-bottom:28px;position:relative}
.testi-quote::before{content:'"';font-size:5rem;color:var(--orange);opacity:.4;position:absolute;top:-20px;left:-10px;font-family:'Playfair Display',serif;line-height:1}
.testi-author{display:flex;align-items:center;justify-content:center;gap:14px}
.testi-avatar{width:52px;height:52px;border-radius:50%;background:var(--orange);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;color:#fff;font-family:'Playfair Display',serif;flex-shrink:0}
.testi-name{font-weight:700;color:#fff;font-size:15px}
.testi-role{font-size:13px;color:rgba(255,255,255,.55)}
.testi-nav{display:flex;justify-content:center;gap:10px;margin-top:36px}
.testi-dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.25);cursor:pointer;transition:all .3s}
.testi-dot.active{background:var(--orange);width:28px;border-radius:5px}

/* ===== WHO WE SERVE ===== */
.serve-section{padding:80px 0;background:#fff}
.serve-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.serve-card{border:2px solid var(--border);border-radius:14px;padding:32px;transition:all .3s;text-align:center}
.serve-card:hover{border-color:var(--orange);box-shadow:0 8px 32px rgba(240,128,48,.12);transform:translateY(-4px)}
.serve-icon{font-size:40px;margin-bottom:16px}
.serve-card h3{font-size:1.15rem;color:var(--navy);margin-bottom:10px}
.serve-card p{font-size:14px;color:var(--gray);line-height:1.6}
@media(max-width:768px){.serve-grid{grid-template-columns:1fr;max-width:420px;margin:0 auto}}

/* ===== CTA SECTION ===== */
.cta-section{padding:80px 0;background:linear-gradient(135deg,var(--navy-dark),var(--navy))}
.cta-inner{display:grid;grid-template-columns:1fr 440px;gap:60px;align-items:center}
.cta-left h2{font-size:clamp(1.8rem,3vw,2.4rem);color:#fff;margin-bottom:16px}
.cta-left p{font-size:16px;color:rgba(255,255,255,.75);line-height:1.75;margin-bottom:28px}
.cta-contact-row{display:flex;flex-direction:column;gap:12px}
.cta-contact-item{display:flex;align-items:center;gap:12px;color:rgba(255,255,255,.8);font-size:15px}
.cta-contact-item .icon{width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.cta-form{background:#fff;border-radius:16px;padding:32px;box-shadow:0 20px 60px rgba(0,0,0,.2)}
.cta-form h3{font-size:1.3rem;color:var(--navy);margin-bottom:20px}
.cta-form .form-group{margin-bottom:14px}
.cta-form .form-group label{display:block;font-size:13px;font-weight:600;color:var(--text);margin-bottom:5px}
.cta-form .form-group input,.cta-form .form-group select,.cta-form .form-group textarea{width:100%;padding:10px 14px;border:1.5px solid var(--border);border-radius:7px;font-size:14px;font-family:inherit;transition:border-color .2s;resize:vertical}
.cta-form .form-group input:focus,.cta-form .form-group select:focus,.cta-form .form-group textarea:focus{outline:none;border-color:var(--orange)}
.cta-form .form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.cta-form .btn-submit{width:100%;padding:13px;background:var(--orange);color:#fff;border:none;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;transition:all .2s;margin-top:4px}
.cta-form .btn-submit:hover{background:var(--orange-dark)}
.form-success{display:none;text-align:center;padding:20px 0}
.form-success h4{color:var(--navy);font-size:1.2rem;margin-bottom:8px}
.form-success p{color:var(--gray);font-size:14px}
@media(max-width:900px){.cta-inner{grid-template-columns:1fr}}

/* ===== FOOTER ===== */
.footer{background:#060f1e;color:rgba(255,255,255,.75)}
.footer-top{padding:60px 0 40px;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px}
.footer-brand .footer-logo{height:84px;width:auto;background:#fff;padding:10px 16px;border-radius:12px;margin-bottom:16px;display:block}
.footer-brand p{font-size:14px;line-height:1.75;color:rgba(255,255,255,.55);max-width:280px;margin-bottom:20px}
.footer-social{display:flex;gap:10px}
.footer-social a{width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:15px;transition:background .2s}
.footer-social a:hover{background:var(--orange)}
.footer-col h4{font-size:14px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px}
.footer-col ul{list-style:none}
.footer-col ul li{margin-bottom:8px}
.footer-col ul li a{font-size:14px;color:rgba(255,255,255,.55);transition:color .2s}
.footer-col ul li a:hover{color:var(--orange)}
.footer-contact-item{display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;font-size:14px;color:rgba(255,255,255,.55)}
.footer-contact-item .fc-icon{color:var(--orange);flex-shrink:0;margin-top:2px}
.footer-bottom{border-top:1px solid rgba(255,255,255,.08);padding:20px 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.footer-bottom p{font-size:13px;color:rgba(255,255,255,.35)}
.footer-bottom-links{display:flex;gap:20px}
.footer-bottom-links a{font-size:13px;color:rgba(255,255,255,.35);transition:color .2s}
.footer-bottom-links a:hover{color:var(--orange)}
@media(max-width:900px){.footer-top{grid-template-columns:1fr 1fr}}
@media(max-width:600px){.footer-top{grid-template-columns:1fr}}

/* ===== INNER PAGE HERO ===== */
.page-hero{background:linear-gradient(135deg,var(--navy-dark),var(--navy));padding:60px 0;text-align:center}
.page-hero h1{font-size:clamp(2rem,4vw,2.8rem);color:#fff;margin-bottom:12px}
.page-hero p{font-size:17px;color:rgba(255,255,255,.75);max-width:600px;margin:0 auto}
.page-hero .breadcrumb{display:flex;justify-content:center;gap:8px;font-size:13px;color:rgba(255,255,255,.5);margin-top:14px}
.page-hero .breadcrumb a{color:rgba(255,255,255,.5);transition:color .2s}
.page-hero .breadcrumb a:hover{color:var(--orange)}
.page-hero .breadcrumb span{color:var(--orange)}

/* ===== ABOUT PAGE ===== */
.about-section{padding:80px 0}
.about-grid{display:grid;grid-template-columns:380px 1fr;gap:60px;align-items:start}
.about-card{background:linear-gradient(135deg,var(--navy-dark),var(--navy));border-radius:20px;padding:40px;text-align:center;position:sticky;top:130px}
.about-card .about-avatar{width:100px;height:100px;border-radius:50%;background:var(--orange);margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:900;color:#fff;font-family:'Playfair Display',serif}
.about-card h2{font-size:1.4rem;color:#fff;margin-bottom:4px}
.about-card .about-title{font-size:14px;color:var(--orange);font-weight:600;margin-bottom:16px}
.about-card .about-certbadges{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
.about-card .cert-badge{font-size:11px;padding:4px 10px;border-radius:12px;background:rgba(255,255,255,.12);color:rgba(255,255,255,.85);font-weight:600}
.about-content h2{font-size:1.8rem;color:var(--navy);margin-bottom:16px}
.about-content h3{font-size:1.3rem;color:var(--navy);margin:28px 0 12px}
.about-content p{font-size:16px;color:var(--gray);line-height:1.75;margin-bottom:16px}
.client-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}
.client-pill{padding:8px 14px;background:var(--light);border-radius:8px;font-size:14px;font-weight:500;color:var(--navy);text-align:center}
.cert-list{margin:0;padding:0;list-style:none}
.cert-list li{display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-bottom:1px solid var(--border);font-size:15px;color:var(--text)}
.cert-list li:last-child{border-bottom:none}
.cert-list li::before{content:'🏆';flex-shrink:0}
@media(max-width:900px){.about-grid{grid-template-columns:1fr}}

/* ===== PROGRAMMES PAGE ===== */
.prog-page{padding:60px 0}
.prog-nav{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:48px}
.prog-nav a{padding:9px 20px;border-radius:20px;border:2px solid var(--border);font-size:14px;font-weight:500;color:var(--navy);transition:all .2s}
.prog-nav a:hover,.prog-nav a.active{background:var(--navy);color:#fff;border-color:var(--navy)}
.prog-block{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;padding:48px 0;border-bottom:1px solid var(--border)}
.prog-block:last-child{border-bottom:none}
.prog-block:nth-child(even) .prog-block-visual{order:-1}
.prog-block-visual{border-radius:16px;overflow:hidden;aspect-ratio:4/3}
.prog-block-banner{height:100%;min-height:200px;display:flex;align-items:center;justify-content:center;font-size:3rem}
.prog-block-content h2{font-size:1.6rem;color:var(--navy);margin-bottom:12px}
.prog-block-content .prog-meta{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px}
.prog-meta-pill{font-size:12px;padding:4px 12px;border-radius:12px;font-weight:500}
.prog-meta-pill.mode{background:rgba(26,53,98,.08);color:var(--navy)}
.prog-meta-pill.dur{background:rgba(240,128,48,.1);color:var(--orange-dark)}
.prog-block-content p{font-size:15px;color:var(--gray);line-height:1.75;margin-bottom:20px}
.prog-outcomes h4{font-size:14px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px}
.prog-outcomes ul{list-style:none;padding:0;margin:0 0 20px}
.prog-outcomes ul li{font-size:14px;color:var(--text);padding:5px 0;display:flex;gap:8px}
.prog-outcomes ul li::before{content:'→';color:var(--orange);font-weight:700;flex-shrink:0}
@media(max-width:768px){.prog-block{grid-template-columns:1fr}.prog-block:nth-child(even) .prog-block-visual{order:0}}

/* ===== DISC PAGE ===== */
.disc-page{padding:80px 0}
.disc-styles-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-bottom:60px}
.disc-card{border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08)}
.disc-card-header{padding:32px;position:relative;overflow:hidden}
.disc-card-header .disc-letter{position:absolute;right:-10px;bottom:-20px;font-size:120px;font-weight:900;font-family:'Playfair Display',serif;opacity:.12;color:#fff;line-height:1}
.disc-card-header h3{font-size:1.6rem;font-weight:900;color:#fff;margin-bottom:4px;position:relative}
.disc-card-header p{font-size:14px;color:rgba(255,255,255,.8);position:relative}
.disc-card-header.d{background:linear-gradient(135deg,#991b1b,#dc2626)}
.disc-card-header.i{background:linear-gradient(135deg,#92400e,#d97706)}
.disc-card-header.s{background:linear-gradient(135deg,#065f46,#059669)}
.disc-card-header.c{background:linear-gradient(135deg,#1e3a8a,#2563eb)}
.disc-card-body{padding:24px 28px;background:#fff}
.disc-traits{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}
.disc-trait{font-size:12px;padding:3px 10px;border-radius:12px;font-weight:500;background:var(--light);color:var(--navy)}
.disc-card-body p{font-size:14px;color:var(--gray);line-height:1.6}
.disc-process{padding:60px 0;background:var(--light)}
.disc-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:40px}
.disc-step{text-align:center;padding:28px 20px}
.disc-step-num{width:52px;height:52px;border-radius:50%;background:var(--navy);color:#fff;font-size:1.3rem;font-weight:900;font-family:'Playfair Display',serif;display:flex;align-items:center;justify-content:center;margin:0 auto 16px}
.disc-step h3{font-size:1rem;color:var(--navy);margin-bottom:8px}
.disc-step p{font-size:14px;color:var(--gray)}
.disc-packages{padding:80px 0}
.disc-pkg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.disc-pkg{border-radius:14px;overflow:hidden;border:2px solid var(--border);transition:all .3s}
.disc-pkg:hover{border-color:var(--navy);transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.1)}
.disc-pkg.featured{border-color:var(--orange);position:relative}
.disc-pkg.featured::before{content:'Most Popular';position:absolute;top:0;right:24px;background:var(--orange);color:#fff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:0 0 8px 8px}
.disc-pkg-head{padding:28px 28px 20px;background:var(--light);text-align:center}
.disc-pkg-head h3{font-size:1.2rem;color:var(--navy);margin-bottom:4px}
.disc-pkg-head .disc-pkg-price{font-size:1.8rem;font-weight:900;color:var(--navy);font-family:'Playfair Display',serif}
.disc-pkg-head .disc-pkg-price span{font-size:14px;font-weight:400;color:var(--gray)}
.disc-pkg-body{padding:24px 28px}
.disc-pkg-features{list-style:none;padding:0;margin:0 0 20px}
.disc-pkg-features li{padding:7px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--text);display:flex;align-items:center;gap:8px}
.disc-pkg-features li::before{content:'✓';color:var(--orange);font-weight:700;flex-shrink:0}
.disc-pkg-features li:last-child{border-bottom:none}
@media(max-width:768px){.disc-styles-grid{grid-template-columns:1fr}.disc-steps{grid-template-columns:repeat(2,1fr)}.disc-pkg-grid{grid-template-columns:1fr}}

/* ===== CONTACT PAGE ===== */
.contact-page{padding:80px 0}
.contact-grid{display:grid;grid-template-columns:420px 1fr;gap:60px;align-items:start}
.contact-info h2{font-size:1.6rem;color:var(--navy);margin-bottom:14px}
.contact-info p{font-size:15px;color:var(--gray);line-height:1.75;margin-bottom:28px}
.contact-items{display:flex;flex-direction:column;gap:16px;margin-bottom:36px}
.contact-item{display:flex;gap:14px;align-items:flex-start}
.contact-item-icon{width:42px;height:42px;border-radius:10px;background:rgba(26,53,98,.08);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.contact-item-text h4{font-size:14px;font-weight:600;color:var(--navy);margin-bottom:3px}
.contact-item-text p{font-size:14px;color:var(--gray)}
.contact-form-box{background:#fff;border:2px solid var(--border);border-radius:16px;padding:36px}
.contact-form-box h3{font-size:1.4rem;color:var(--navy);margin-bottom:20px}
.contact-form .form-group{margin-bottom:16px}
.contact-form .form-group label{display:block;font-size:13px;font-weight:600;color:var(--text);margin-bottom:5px}
.contact-form .form-group input,.contact-form .form-group select,.contact-form .form-group textarea{width:100%;padding:11px 14px;border:1.5px solid var(--border);border-radius:7px;font-size:14px;font-family:inherit;transition:border-color .2s;resize:vertical}
.contact-form .form-group input:focus,.contact-form .form-group select:focus,.contact-form .form-group textarea:focus{outline:none;border-color:var(--orange)}
.contact-form .form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.contact-form .btn-submit{padding:13px 28px;background:var(--orange);color:#fff;border:none;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;transition:all .2s}
.contact-form .btn-submit:hover{background:var(--orange-dark)}
@media(max-width:900px){.contact-grid{grid-template-columns:1fr}}

/* ===== LMS LOGIN PAGE ===== */
.lms-login-page{min-height:100vh;background:linear-gradient(135deg,var(--navy-dark) 0%,var(--navy) 60%,#1e3a6e 100%);display:flex;align-items:center;justify-content:center;padding:40px 24px}
.lms-login-box{background:#fff;border-radius:20px;padding:48px 44px;width:100%;max-width:460px;box-shadow:0 24px 80px rgba(0,0,0,.35)}
.lms-login-logo{text-align:center;margin-bottom:28px}
.lms-login-logo img{height:60px}
.lms-login-box h2{font-size:1.6rem;color:var(--navy);text-align:center;margin-bottom:6px}
.lms-login-box .lms-subtitle{font-size:14px;color:var(--gray);text-align:center;margin-bottom:28px}
.lms-login-form .form-group{margin-bottom:16px}
.lms-login-form .form-group label{display:block;font-size:13px;font-weight:600;color:var(--text);margin-bottom:5px}
.lms-login-form .form-group input{width:100%;padding:12px 14px;border:1.5px solid var(--border);border-radius:8px;font-size:15px;font-family:inherit;transition:border-color .2s}
.lms-login-form .form-group input:focus{outline:none;border-color:var(--lms)}
.lms-login-form .forgot{text-align:right;margin-top:-10px;margin-bottom:16px}
.lms-login-form .forgot a{font-size:13px;color:var(--lms);font-weight:500}
.lms-login-form .btn-login{width:100%;padding:14px;background:var(--lms);color:#fff;border:none;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;transition:all .2s}
.lms-login-form .btn-login:hover{background:var(--lms-dark)}
.lms-divider{text-align:center;font-size:13px;color:var(--gray);margin:20px 0;position:relative}
.lms-divider::before{content:'';position:absolute;top:50%;left:0;right:0;height:1px;background:var(--border)}
.lms-divider span{position:relative;background:#fff;padding:0 12px}
.lms-register-link{text-align:center;font-size:14px;color:var(--gray);margin-top:20px}
.lms-register-link a{color:var(--lms);font-weight:600}
.lms-portal-features{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:28px;padding-top:24px;border-top:1px solid var(--border)}
.lms-portal-feat{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray)}
.lms-portal-feat .feat-dot{width:8px;height:8px;border-radius:50%;background:var(--lms);flex-shrink:0}
</style>`;
document.head.insertAdjacentHTML('beforeend',css);

// Active nav detection
const activePage=pages.find(p=>path===p.href||(path===''&&p.href==='index.html'));

// Build navbar
const navLinksHtml=pages.map(p=>`<li><a href="${p.href}"${p.href===activePage?.href?' class="active"':''}>${p.label}</a></li>`).join('');
const nav=`<nav class="navbar">
  <div class="container">
    <div class="nav-inner">
      <div class="nav-logo">
        <a href="index.html"><img src="${LOGO}" alt="Train2Pro Logo" /></a>
      </div>
      <ul class="nav-links" id="navLinks">${navLinksHtml}</ul>
      <div class="nav-actions" id="navActions">
        <a href="lms.html" class="btn-lms">LMS Login</a>
        <a href="contact.html" class="btn-contact">Get in Touch</a>
      </div>
      <div class="nav-hamburger" id="navHamburger" onclick="this.classList.toggle('open');document.getElementById('navMobileMenu').classList.toggle('open')">
        <span></span><span></span><span></span>
      </div>
    </div>
    <div class="nav-mobile-menu" id="navMobileMenu">
      <ul class="nav-links">${navLinksHtml}</ul>
      <div class="nav-actions" style="display:flex;flex-direction:row;flex-wrap:wrap;gap:10px;padding:8px 0 16px">
        <a href="lms.html" class="btn-lms">LMS Login</a>
        <a href="contact.html" class="btn-contact">Get in Touch</a>
      </div>
    </div>
  </div>
</nav>`;

// Build footer
const footer=`<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <img src="${LOGO}" alt="Train2Pro" class="footer-logo" />
        <p>Transforming organizations through expertly designed learning experiences, coaching, and assessments since 2012.</p>
        <div class="footer-social">
          <a href="#" title="LinkedIn">in</a>
          <a href="#" title="Twitter">𝕏</a>
          <a href="#" title="YouTube">▶</a>
          <a href="#" title="Instagram">◈</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Khanjan</a></li>
          <li><a href="programmes.html">Our Programmes</a></li>
          <li><a href="assessment.html">DISC Assessment</a></li>
          <li><a href="assessment.html#free">Free DISC Test</a></li>
          <li><a href="csr.html">CSR Programmes</a></li>
          <li><a href="webinar.html">Free Webinar</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="lms.html">LMS Login</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Programmes</h4>
        <ul>
          <li><a href="programmes.html#lead">Leadership & Management</a></li>
          <li><a href="programmes.html#people">People Skills</a></li>
          <li><a href="programmes.html#disc">DISC Profiling</a></li>
          <li><a href="programmes.html#lss">Lean Six Sigma</a></li>
          <li><a href="programmes.html#od">OD & Change Mgmt</a></li>
          <li><a href="programmes.html#campus">Campus to Corporate</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-item">
          <span class="fc-icon">📍</span>
          <span>India</span>
        </div>
        <div class="footer-contact-item">
          <span class="fc-icon">📧</span>
          <a href="mailto:train2pro@khanjankadi.com" style="color:inherit">train2pro@khanjankadi.com</a>
        </div>
        <div class="footer-contact-item">
          <span class="fc-icon">📞</span>
          <a href="tel:+919909965218" style="color:inherit">+91 99099 65218</a>
        </div>
        <div class="footer-contact-item">
          <span class="fc-icon">🌐</span>
          <a href="http://www.khanjankadi.com" style="color:inherit">khanjankadi.com</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Train2Pro | Khanjan Kadi. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="privacy.html">Privacy Policy</a>
        <a href="refund.html">Refund Policy</a>
      </div>
    </div>
  </div>
</footer>`;

// Inject
const firstEl=document.body.firstChild;
const navEl=document.createElement('div');
navEl.innerHTML=nav;
document.body.insertBefore(navEl.firstChild,firstEl);

const footerEl=document.createElement('div');
footerEl.innerHTML=footer;
document.body.appendChild(footerEl.firstChild);
})();