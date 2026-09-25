(async function(){
  try {
    const r=await fetch('/api/auth/me');
    if(!r.ok){ location.replace('login.html'); return; }
    const data=await r.json();
    document.querySelectorAll('[data-user-email]').forEach(el=>el.textContent=data.username);
  } catch(e){ location.replace('login.html'); }
})();
function logout(){fetch('/api/auth/logout',{method:'POST'}).finally(()=>location.href='login.html');}
