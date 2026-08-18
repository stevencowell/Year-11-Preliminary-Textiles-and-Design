(() => {
  const body=document.body,root=body.dataset.root||'',active=body.dataset.active||'course';
  const destinations=[['course',`${root}index.html`,'Course'],['modules',`${root}index.html#modules`,'Modules'],['videos',`${root}video-learning/index.html`,'Video learning'],['busy',`${root}busy-work/index.html`,'Busy Work'],['folio',`${root}folio.html`,'My folio'],['assessment',`${root}assessment.html`,'Assessment'],['teacher',`${root}teacher-resources.html`,'Teacher resources'],['main','https://stevencowell.github.io/Main-Page/','Main Menu']];
  const mount=document.querySelector('[data-site-nav]');
  if(mount) mount.innerHTML=`<div class="site-nav"><div class="wrap nav-inner"><a class="brand" href="${root}index.html"><span class="brand-mark">T&amp;D</span><span>Year 11 Textiles and Design</span></a><nav class="nav-links" aria-label="Course navigation">${destinations.map(([key,url,label])=>`<a href="${url}"${key===active?' aria-current="page"':''}>${label}</a>`).join('')}</nav></div></div>`;

  window.TextilesVideoPlayer={
    version:'1.1',
    bind(scope=document){scope.querySelectorAll('[data-video-frame]').forEach(bindFrame)},
  };

  function bindFrame(frame){
    const launcher=frame.querySelector('[data-video-load]');
    if(!launcher||launcher.dataset.videoBound==='true')return;
    launcher.dataset.videoBound='true';
    launcher.addEventListener('click',()=>activate(frame,launcher));
  }
  function activate(frame,launcher){
    const id=launcher.dataset.videoLoad,title=launcher.dataset.videoTitle||launcher.getAttribute('aria-label').replace(/^Play /,'');
    const player=document.createElement('div');
    player.className='video-player-wrap';
    player.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><button class="video-close" type="button" data-video-close>Close video</button>`;
    frame.classList.add('is-playing');
    frame.replaceChildren(player);
    const close=frame.querySelector('[data-video-close]');
    const restore=()=>{frame.classList.remove('is-playing');frame.replaceChildren(launcher);launcher.focus()};
    close.addEventListener('click',restore);
    close.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();restore()}});
    close.focus();
  }
})();
