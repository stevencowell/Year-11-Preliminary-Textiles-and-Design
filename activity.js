(() => {
  const fields=[...document.querySelectorAll('[data-activity-key]')];
  const keyFor=field=>`${TEXTILES_STORAGE_PREFIX}:activity:m01:${field.dataset.activityKey}`;
  fields.forEach(field=>{field.value=localStorage.getItem(keyFor(field))||'';let timer;field.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>{localStorage.setItem(keyFor(field),field.value);const status=field.closest('.activity-card').querySelector('.save-status');status.textContent='Saved on this device';setTimeout(()=>status.textContent='',1300);update()},200)})});
  document.querySelector('[data-print]').addEventListener('click',()=>window.print());
  function update(){const complete=fields.filter(field=>field.value.trim().length>=12).length,pct=Math.round((complete/fields.length)*100);document.querySelector('[data-progress]').style.width=`${pct}%`;document.querySelector('[data-progress-text]').textContent=`${complete} of ${fields.length} evidence fields started`}
  update();
})();
