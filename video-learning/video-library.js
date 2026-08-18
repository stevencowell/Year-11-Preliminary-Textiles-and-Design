(() => {
  const mount=document.querySelector('[data-video-library]');
  const moduleOne=COURSE_MODULES.find(item=>item.id===1);
  const inherited=Object.entries(TEXTILES_VIDEO_MANIFEST.videos).map(([sectionId,video],index)=>({
    module:1,
    sectionId,
    sectionTitle:moduleOne.sections[index].title,
    video
  }));
  const moduleClips=TEXTILES_MODULE_VIDEOS.map(item=>({
    module:item.module,
    sectionId:`module-${item.module}`,
    sectionTitle:COURSE_MODULES.find(module=>module.id===item.module).title,
    video:{...item,duration:'Short learning clip'}
  }));
  const videos=[...inherited,...moduleClips];
  document.querySelector('[data-video-count]').textContent=`${videos.length} validated learning clips across 15 modules`;
  mount.innerHTML=videos.map(({module,sectionId,sectionTitle,video})=>`<article class="video-library-card" id="${sectionId}"><div class="video-card-copy"><p class="module-area">Module ${module} · ${sectionTitle}</p><h2>${video.title}</h2><p class="video-meta">${video.creator} · ${video.duration||'Short learning clip'} · validated 19 August 2026</p><p><strong>Watch for:</strong> ${video.watchFor}</p><p class="fine">${video.relevance}</p><div class="video-card-links"><a class="button secondary compact" href="../modules/module-${String(module).padStart(2,'0')}.html${module===1?'#'+sectionId:''}">Read the matching theory</a><a href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener">Open in YouTube ↗</a></div></div><div class="video-frame" data-video-frame><button class="video-launch" type="button" data-video-load="${video.id}" data-video-title="${video.title}" aria-label="Play ${video.title}"><img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="Thumbnail for ${video.title}" loading="lazy"><span class="video-play" aria-hidden="true">▶</span></button></div></article>`).join('');
  TextilesVideoPlayer.bind(mount);
})();
