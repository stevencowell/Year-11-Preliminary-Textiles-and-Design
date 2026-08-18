(() => {
  const grid=document.getElementById('module-pathway');
  grid.innerHTML=COURSE_MODULES.map(module=>`<article class="module-card" data-area="${module.area}"><div class="module-number">${String(module.id).padStart(2,'0')}</div><p class="module-area">${module.area} · Weeks ${module.weeks}</p><h3>${module.title}</h3><p>${module.summary}</p><a class="module-link" href="modules/module-${String(module.id).padStart(2,'0')}.html">${module.id===1?'Start Module 1':'Open Module '+module.id} →</a></article>`).join('');
})();
