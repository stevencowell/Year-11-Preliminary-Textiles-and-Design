(() => {
  const COURSE_ID='y11-textiles-preliminary';
  const COURSE_NAME='Year 11 Preliminary Textiles and Design';
  const FOLIO_PREFIX='y11textiles-folio-v2';
  const SCHEMA=2;
  const SOURCE_CONTRACT='sha256:6eb217541bb1c10f2076d50fae78e03e37c253921a62b45a5ccfec0536e1fbd3';
  const DB_NAME='y11-textiles-folio-v2';
  const DB_STORE='photos';
  const MAX_PHOTO_BYTES=5*1024*1024;
  const own=(card,field)=>`${FOLIO_PREFIX}:${card}:${field}`;
  const activity=suffix=>`${TEXTILES_STORAGE_PREFIX}:activity:m01:${suffix}`;

  const cards=[
    {
      id:'folio-u1-01', groupId:'folio-project-1', group:'FOLIO-U1 · Project 1 pathway', title:'User, purpose and design requirements', number:1,
      action:'Turn your comparison into a clear record of the user, end use and requirements.',
      why:'A justified textile decision begins with what the item must do and communicate—not with decoration alone.',
      evidence:'A user-and-end-use statement, one functional comparison, one aesthetic comparison and a caption explaining what the evidence proves.',
      source:'Module 1 · Section 1.1 and Design-analysis studio', sourceUrl:'modules/module-01.html#m01-s01', state:'Ready now',
      visuals:[{src:'assets/design-lens-v2.svg',mobile:'assets/design-lens-mobile.svg',alt:'A design lens connects user and end use, functional and aesthetic requirements, design factors and a supported decision.',caption:'Use the design lens to connect the user and purpose to evidence—not to invent a current project brief.'}],
      fields:[
        {id:'user-use',label:'User and end use',key:activity('user-use'),placeholder:'The intended user and end use are…',required:true},
        {id:'function',label:'Functional evidence',key:activity('function'),placeholder:'One functional requirement is… The evidence shows…',required:true},
        {id:'aesthetic',label:'Aesthetic evidence',key:activity('aesthetic'),placeholder:'One aesthetic requirement is… The evidence shows…',required:true},
        {id:'caption',label:'Evidence caption',key:own('folio-u1-01','caption'),placeholder:'This evidence proves…',required:true}
      ],
      starters:['The intended user needs… because…','A functional requirement is… and the evidence is…','An aesthetic requirement is… and this supports the purpose by…']
    },
    {
      id:'folio-u1-02', groupId:'folio-project-1', group:'FOLIO-U1 · Project 1 pathway', title:'Elements, principles and supported judgement', number:2,
      action:'Use visible evidence to explain how design choices work together, then make a supported judgement.',
      why:'Naming an element or principle is not enough; analysis identifies its location, effect and relationship to purpose.',
      evidence:'Two element observations, one principle analysis, a supported judgement and an evidence caption.',
      source:'Module 1 · Sections 1.2–1.3 and Design-analysis studio', sourceUrl:'modules/module-01.html#m01-s02', state:'Ready now',
      visuals:[
        {src:'assets/elements.svg',mobile:'assets/elements-mobile.svg',alt:'Panels demonstrate line and direction, shape and size, texture, and colour and value.',caption:'Elements are the visible ingredients to identify and locate.'},
        {src:'assets/principles-v2.svg',mobile:'assets/principles-mobile.svg',alt:'Panels demonstrate balance, rhythm, emphasis, contrast, harmony, proportion and unity.',caption:'Principles explain how the elements are organised.'}
      ],
      fields:[
        {id:'elements',label:'Two elements and their effects',key:activity('elements'),placeholder:'The designer uses… through… This affects…',required:true},
        {id:'principle',label:'One organising principle',key:activity('principle'),placeholder:'The principle of… is created by… Its effect is…',required:true},
        {id:'judgement',label:'Supported judgement',key:activity('judgement'),placeholder:'The stronger design is… because the visible evidence…',required:true},
        {id:'caption',label:'Evidence caption',key:own('folio-u1-02','caption'),placeholder:'This analysis proves…',required:true}
      ],
      starters:['The element of… appears in… and creates…','The principle of… organises… by…','This is effective for the user because…']
    },
    {
      id:'folio-u1-03', groupId:'folio-project-1', group:'FOLIO-U1 · Project 1 pathway', title:'Design development and communication', number:3,
      action:'Add one design-development record and explain how feedback or requirements changed the idea.',
      why:'Development evidence shows reasoning between an early idea and a clearer design direction.',
      evidence:'An annotated sketch or communication sample, the change made, the reason and a useful caption.',
      source:'Mapped Modules 2 and 4 · complete theory pending', sourceUrl:'modules/module-04.html', state:'Source mapped',
      boundary:'The current formal Project 1 deliverables and rubric are Teacher to confirm. Do not infer a required number of concepts or drawing format.',
      fields:[
        {id:'response',label:'Development decision',key:own('folio-u1-03','response'),placeholder:'My earlier idea showed… I changed… because… The revised direction better responds to…',required:true},
        {id:'caption',label:'Sketch or evidence caption',key:own('folio-u1-03','caption'),placeholder:'This sketch or communication sample proves…',required:true},
        {id:'source',label:'Source or teacher checkpoint',key:own('folio-u1-03','source'),placeholder:'Module, source, feedback or teacher checkpoint used…'}
      ], photo:true,
      starters:['My earlier idea…','Feedback or a requirement showed…','I changed… so that…']
    },
    {
      id:'folio-u1-04', groupId:'folio-project-1', group:'FOLIO-U1 · Project 1 pathway', title:'Technique and sample evidence', number:4,
      action:'Record one teacher-authorised technique sample and explain what its evidence shows.',
      why:'A labelled sample links practical work to quality, purpose and later project decisions.',
      evidence:'A sample or authorised photo, a description of the visible result, a teacher checkpoint and a caption.',
      source:'Mapped Module 6 · exact process and WHS pending', sourceUrl:'modules/module-06.html', state:'Teacher-guided later',
      boundary:'Use only the technique, equipment and safe procedure demonstrated by your teacher. This folio cannot certify practical competence.',
      fields:[
        {id:'response',label:'Technique evidence record',key:own('folio-u1-04','response'),placeholder:'The authorised technique was… The visible result shows… One quality point is…',required:true},
        {id:'caption',label:'Sample or photo caption',key:own('folio-u1-04','caption'),placeholder:'This sample or photo proves…',required:true},
        {id:'source',label:'Teacher checkpoint',key:own('folio-u1-04','source'),placeholder:'Demonstration, feedback or checkpoint used…'}
      ], photo:true,
      starters:['The sample demonstrates…','The visible evidence of quality is…','My teacher’s feedback was…']
    },
    {
      id:'folio-u1-05', groupId:'folio-project-1', group:'FOLIO-U1 · Project 1 pathway', title:'Process, quality and an approved change', number:5,
      action:'Record one useful project checkpoint, problem or approved change and explain the result.',
      why:'A credible process record shows decisions and quality control rather than a decorative sequence of photos.',
      evidence:'A progress record or authorised photo showing the issue, action, result and next quality check.',
      source:'Mapped Modules 6–7 · project details pending', sourceUrl:'modules/module-07.html', state:'Teacher-guided later',
      boundary:'Do not add unverified construction steps, pattern instructions or machine settings. Record what was actually approved and observed.',
      fields:[
        {id:'response',label:'Checkpoint or change record',key:own('folio-u1-05','response'),placeholder:'At this checkpoint… The issue or decision was… I responded by… The result was…',required:true},
        {id:'caption',label:'Progress evidence caption',key:own('folio-u1-05','caption'),placeholder:'This evidence proves…',required:true},
        {id:'source',label:'Teacher checkpoint',key:own('folio-u1-05','source'),placeholder:'Approval, feedback or demonstration used…'}
      ], photo:true,
      starters:['The checkpoint showed…','The cause or decision was…','After the approved change…']
    },
    {
      id:'folio-u1-06', groupId:'folio-project-1', group:'FOLIO-U1 · Project 1 pathway', title:'Product evidence and evaluation', number:6,
      action:'Judge the result against confirmed requirements using specific evidence and one realistic improvement.',
      why:'Evaluation closes the design process by comparing the result with its intended user, purpose and criteria.',
      evidence:'Final evidence, two supported strengths, one limitation and one realistic improvement.',
      source:'Mapped Module 7 · current assessment criteria pending', sourceUrl:'modules/module-07.html', state:'Source mapped',
      boundary:'Evaluate against requirements confirmed by your teacher. Do not copy historical task weights, criteria or submission instructions into this record.',
      fields:[
        {id:'response',label:'Evaluation',key:own('folio-u1-06','response'),placeholder:'The result met… because… It was less successful in… because… A realistic improvement is…',required:true},
        {id:'caption',label:'Final evidence caption',key:own('folio-u1-06','caption'),placeholder:'This final evidence shows…',required:true},
        {id:'source',label:'Confirmed requirements used',key:own('folio-u1-06','source'),placeholder:'Teacher-confirmed brief, criteria or feedback used…'}
      ], photo:true,
      starters:['The result met the requirement for… because…','A limitation shown by the evidence is…','A realistic improvement would be…']
    },
    {
      id:'folio-u2-01', groupId:'folio-properties', group:'FOLIO-U2 · Properties and Project 2', title:'Fibre, yarn and fabric selection rationale', number:7,
      action:'Use structure–property evidence to justify one textile choice for an end use.',
      why:'Material selection is stronger when it links fibre, yarn and fabric structure to performance rather than preference.',
      evidence:'A sample, labelled observation or source record plus a justified end-use selection.',
      source:'Mapped Modules 6–12 · complete theory pending', sourceUrl:'modules/module-12.html', state:'Source mapped',
      boundary:'Use verified course sources before making technical property claims. Exact Project 2 materials remain Teacher to confirm.',
      fields:[
        {id:'response',label:'Selection rationale',key:own('folio-u2-01','response'),placeholder:'The textile evidence shows… Its fibre, yarn or fabric structure contributes… This suits the end use because…',required:true},
        {id:'caption',label:'Sample or source caption',key:own('folio-u2-01','caption'),placeholder:'This evidence supports the selection because…',required:true},
        {id:'source',label:'Verified source used',key:own('folio-u2-01','source'),placeholder:'Module, booklet, sample label or teacher source…'}
      ], photo:true,
      starters:['The structure is…','This contributes to the property of…','For the intended end use, this matters because…']
    },
    {
      id:'folio-u2-tests-01', groupId:'folio-properties', group:'FOLIO-U2-TESTS · Comparative investigation', title:'Plan, results and conclusion from one fair test', number:8,
      action:'Record one teacher-authorised comparative textile investigation from aim to supported conclusion.',
      why:'A fair comparison controls variables, records observable results and connects the conclusion to textile selection.',
      evidence:'Aim, independent/dependent/controlled variables, approved method reference, results, analysis and conclusion.',
      source:'Mapped Modules 11 and 14 · local procedure pending', sourceUrl:'modules/module-11.html', state:'Teacher-guided later',
      boundary:'The teacher must provide the current safe method, equipment, quantities and controls. Do not invent or follow a procedure from this folio.',
      fields:[
        {id:'plan',label:'Aim and variables',key:own('folio-u2-tests-01','plan'),placeholder:'The aim was… The independent variable was… The dependent variable was… Controlled variables included…',required:true},
        {id:'results',label:'Results and analysis',key:own('folio-u2-tests-01','results'),placeholder:'The recorded results were… The pattern or difference suggests…',required:true},
        {id:'conclusion',label:'Conclusion and selection link',key:own('folio-u2-tests-01','conclusion'),placeholder:'The evidence supports… A limitation was… This informs selection by…',required:true},
        {id:'caption',label:'Results evidence caption',key:own('folio-u2-tests-01','caption'),placeholder:'This table, graph or photo proves…',required:true},
        {id:'source',label:'Teacher-authorised method reference',key:own('folio-u2-tests-01','source'),placeholder:'Demonstration, worksheet or approved method used…'}
      ], photo:true,
      starters:['The aim was to compare…','To keep the test fair…','The results indicate…','A limitation of this evidence is…']
    },
    {
      id:'folio-u2-02', groupId:'folio-properties', group:'FOLIO-U2 · Properties and Project 2', title:'Project 2 design, material choice and result', number:9,
      action:'Connect a teacher-confirmed Project 2 design decision to material evidence, process evidence and evaluation.',
      why:'A connected record shows how textile knowledge informed the designed and manufactured result.',
      evidence:'Confirmed project identity, design decision, material rationale, process or product evidence and evaluation.',
      source:'Mapped Module 14 · exact Project 2 brief and plan pending', sourceUrl:'modules/module-14.html', state:'Teacher to confirm',
      boundary:'Bustier/Vest is the intended learning pathway, but the exact formal project choice, pattern, size, materials, procedures and assessment status remain Teacher to confirm.',
      fields:[
        {id:'response',label:'Connected Project 2 evidence',key:own('folio-u2-02','response'),placeholder:'My teacher-confirmed project was… The design decision… The textile evidence supported… The result…',required:true},
        {id:'caption',label:'Project evidence caption',key:own('folio-u2-02','caption'),placeholder:'This evidence proves…',required:true},
        {id:'source',label:'Confirmed brief or teacher checkpoint',key:own('folio-u2-02','source'),placeholder:'Current project brief, pattern pack or feedback reference…'}
      ], photo:true,
      starters:['The confirmed project requirement was…','I selected… because the evidence…','The result met… but could improve…']
    },
    {
      id:'folio-u3-01', groupId:'folio-industry', group:'FOLIO-U3 · Industry, quality and value', title:'Industry, quality and value case analysis', number:10,
      action:'Use verified evidence to analyse one textile case through industry, quality or value.',
      why:'Senior Textiles learning connects designed products with production systems, people, quality and different forms of value.',
      evidence:'A current verified source, a concise case explanation, one supported implication and a source caption.',
      source:'Mapped Modules 13–15 · current claims require verification', sourceUrl:'modules/module-13.html', state:'Source mapped',
      boundary:'Use current, teacher-approved or primary sources. Do not treat an old trend, job pathway, market claim or regulation as current without verification.',
      fields:[
        {id:'response',label:'Case analysis',key:own('folio-u3-01','response'),placeholder:'The verified case shows… This connects with industry, quality or value because… One implication is…',required:true},
        {id:'caption',label:'Source evidence caption',key:own('folio-u3-01','caption'),placeholder:'This source proves…',required:true},
        {id:'source',label:'Source record',key:own('folio-u3-01','source'),placeholder:'Title, organisation, date and URL or teacher source…'}
      ],
      starters:['The source shows…','This matters to the textile industry because…','The value or quality judgement is supported by…']
    }
  ];

  const legacyBackupKeys=[
    ...COURSE_MODULES[0].sections.map(section=>`${TEXTILES_STORAGE_PREFIX}:response:${section.id}`),
    ...['item-a','item-b','user-use','function','aesthetic','elements','principle','judgement'].map(activity)
  ];
  const detailKeys=['student-name','class','date-started'].map(name=>`${FOLIO_PREFIX}:detail:${name}`);
  const evidenceKeys=[...new Set(cards.flatMap(card=>card.fields.map(field=>field.key)).concat(legacyBackupKeys))];
  const allowedKeys=new Set([...detailKeys,...evidenceKeys]);
  const grid=document.querySelector('[data-folio-grid]');

  function renderCard(card,index){
    const groupHeading=index===0||cards[index-1].groupId!==card.groupId?`<div class="folio-group-heading" id="${card.groupId}"><p class="eyebrow">Evidence group</p><h2>${card.group}</h2></div>`:'';
    const visuals=card.visuals?`<div class="folio-visual-grid${card.visuals.length>1?' is-pair':''}">${card.visuals.map(visual=>`<figure class="folio-card-visual"><a href="${visual.src}" target="_blank" rel="noopener">${visual.mobile?`<picture><source media="(max-width: 680px)" srcset="${visual.mobile}"><img src="${visual.src}" alt="${visual.alt}"></picture>`:`<img src="${visual.src}" alt="${visual.alt}">`}</a><figcaption>${visual.caption} <a href="${visual.src}" target="_blank" rel="noopener">Open larger</a></figcaption></figure>`).join('')}</div>`:'';
    const fields=card.fields.map(field=>`<div class="folio-field"><label for="${card.id}-${field.id}"><strong>${field.label}</strong>${field.required?'<span class="required-note">Evidence field</span>':''}</label><textarea id="${card.id}-${field.id}" data-evidence-key="${field.key}" data-card-id="${card.id}"${field.required?' data-required="true"':''} placeholder="${field.placeholder}"></textarea></div>`).join('');
    const boundary=card.boundary?`<div class="folio-source-boundary"><strong>Evidence boundary:</strong> ${card.boundary}</div>`:'';
    const photo=card.photo?`<section class="folio-photo screen-control" aria-labelledby="${card.id}-photo-title"><h3 id="${card.id}-photo-title">Add one purposeful photo or sketch</h3><p>Use your own authorised evidence. Maximum 5 MB; the editable backup includes the stored image.</p><label class="button secondary compact" for="${card.id}-photo">Choose or replace image</label><input class="sr-only" id="${card.id}-photo" type="file" accept="image/*" data-photo-input="${card.id}"><button class="button secondary compact" type="button" data-photo-remove="${card.id}" hidden>Remove image</button><div class="folio-photo-preview" data-photo-preview="${card.id}"></div></section>`:'';
    return `${groupHeading}<article class="folio-stage" id="${card.id}" data-card="${card.id}"><header class="folio-stage-head"><div class="folio-number" aria-hidden="true">${String(card.number).padStart(2,'0')}</div><div><p class="module-area">${card.group}</p><h2>${card.title}</h2><p class="folio-card-state">${card.state}</p></div><span class="folio-status" data-card-status="${card.id}">Blank</span></header>${visuals}<div class="folio-purpose"><article><h3>Your action</h3><p>${card.action}</p></article><article><h3>Why this matters</h3><p>${card.why}</p></article><article><h3>Evidence to collect</h3><p>${card.evidence}</p></article></div>${boundary}<div class="folio-fields">${fields}</div><details class="response-guide"><summary>Sentence starters</summary><ul>${card.starters.map(starter=>`<li>${starter}</li>`).join('')}</ul></details>${photo}<footer class="folio-stage-footer"><p><strong>Return to learning:</strong> <a href="${card.sourceUrl}">${card.source}</a></p><p class="save-status" data-card-save="${card.id}" aria-live="polite"></p></footer></article>`;
  }

  function bindText(){
    document.querySelectorAll('[data-detail]').forEach(input=>{const key=`${FOLIO_PREFIX}:detail:${input.dataset.detail}`;input.value=localStorage.getItem(key)||'';input.addEventListener('input',()=>{localStorage.setItem(key,input.value);announce('Saved on this device.');updateProgress()})});
    const dateInput=document.querySelector('[data-detail="date-started"]');
    if(!dateInput.value){dateInput.value=new Date().toISOString().slice(0,10);localStorage.setItem(`${FOLIO_PREFIX}:detail:date-started`,dateInput.value)}
    document.querySelectorAll('[data-evidence-key]').forEach(area=>{area.value=localStorage.getItem(area.dataset.evidenceKey)||'';let timer;area.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>{localStorage.setItem(area.dataset.evidenceKey,area.value);const status=document.querySelector(`[data-card-save="${area.dataset.cardId}"]`);status.textContent='Saved on this device';setTimeout(()=>status.textContent='',1300);updateProgress()},220)})});
  }

  function bindControls(){
    document.querySelector('[data-backup]').addEventListener('click',downloadBackup);
    document.getElementById('restore-file').addEventListener('change',restoreBackup);
    document.querySelector('[data-print]').addEventListener('click',()=>window.print());
    document.querySelector('[data-reset]').addEventListener('click',resetFolio);
    document.querySelectorAll('[data-photo-input]').forEach(input=>input.addEventListener('change',addPhoto));
    document.querySelectorAll('[data-photo-remove]').forEach(button=>button.addEventListener('click',()=>removePhoto(button.dataset.photoRemove)));
  }

  function statusFor(card){
    const values=card.fields.filter(field=>field.required).map(field=>(localStorage.getItem(field.key)||'').trim());
    const started=values.some(Boolean);
    const substantial=values.length>0&&values.every(value=>value.length>=20);
    return substantial?'Evidence added':started?'Started':'Blank';
  }

  function updateProgress(){
    const states=cards.map(statusFor),added=states.filter(state=>state==='Evidence added').length,started=states.filter(state=>state==='Started').length,blank=states.filter(state=>state==='Blank').length;
    cards.forEach((card,index)=>{const badge=document.querySelector(`[data-card-status="${card.id}"]`);badge.textContent=states[index];badge.dataset.state=states[index].toLowerCase().replaceAll(' ','-')});
    document.querySelector('[data-progress-summary]').textContent=`${added} of ${cards.length} evidence records added`;
    document.querySelector('[data-progress-detail]').textContent=`${added} evidence added · ${started} started · ${blank} blank.`;
    const nextIndex=states.findIndex(state=>state!=='Evidence added'),next=cards[nextIndex<0?cards.length-1:nextIndex],nextLink=document.querySelector('[data-next-action]');
    nextLink.href=`#${next.id}`;nextLink.textContent=nextIndex<0?'Review your evidence captions':`Next: ${next.title}`;
    const record=[localStorage.getItem(`${FOLIO_PREFIX}:detail:student-name`),localStorage.getItem(`${FOLIO_PREFIX}:detail:class`)].filter(Boolean).join(' · ');
    document.querySelector('[data-record-id]').textContent=record||'No student details entered';
  }

  function announce(message){const node=document.querySelector('[data-global-status]');node.textContent=message;clearTimeout(announce.timer);announce.timer=setTimeout(()=>node.textContent='',1500)}

  function openDb(){
    return new Promise((resolve,reject)=>{const request=indexedDB.open(DB_NAME,1);request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains(DB_STORE))request.result.createObjectStore(DB_STORE,{keyPath:'id'})};request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)});
  }
  async function storeRequest(mode,action){
    const db=await openDb();
    return new Promise((resolve,reject)=>{let result;const tx=db.transaction(DB_STORE,mode),store=tx.objectStore(DB_STORE),request=action(store);request.onsuccess=()=>{result=request.result};request.onerror=()=>reject(request.error);tx.oncomplete=()=>{db.close();resolve(result)};tx.onerror=()=>{db.close();reject(tx.error)};tx.onabort=()=>{db.close();reject(tx.error)}})
  }
  const photoKey=id=>`${FOLIO_PREFIX}:photo:${id}`;
  async function getPhoto(id){
    const stored=localStorage.getItem(photoKey(id));
    if(stored){try{return JSON.parse(stored)}catch(error){localStorage.removeItem(photoKey(id))}}
    try{return await storeRequest('readonly',store=>store.get(id))}catch(error){return undefined}
  }
  async function getAllPhotos(){const records=[];for(const card of cards.filter(item=>item.photo)){const record=await getPhoto(card.id);if(record)records.push(record)}return records}
  async function putPhoto(record){
    localStorage.setItem(photoKey(record.id),JSON.stringify(record));
    try{await storeRequest('readwrite',store=>store.put(record))}catch(error){}
  }
  async function deletePhoto(id){localStorage.removeItem(photoKey(id));try{await storeRequest('readwrite',store=>store.delete(id))}catch(error){}}
  async function clearPhotos(){for(const card of cards.filter(item=>item.photo))localStorage.removeItem(photoKey(card.id));try{await storeRequest('readwrite',store=>store.clear())}catch(error){}}

  async function initialisePhotos(){try{for(const card of cards.filter(item=>item.photo))await renderPhoto(card.id)}catch(error){announce('Stored images are temporarily unavailable in this browser. Text evidence is still saved.')}}
  async function addPhoto(event){
    const file=event.target.files[0],cardId=event.target.dataset.photoInput,status=document.querySelector(`[data-card-save="${cardId}"]`);
    if(!file)return;
    if(!file.type.startsWith('image/')){status.textContent='Choose an image file.';event.target.value='';return}
    if(file.size>MAX_PHOTO_BYTES){status.textContent='That image is over 5 MB. Choose a smaller copy.';event.target.value='';return}
    try{const dataUrl=await preparePhoto(file);await putPhoto({id:cardId,name:file.name,type:'image/jpeg',size:Math.round(dataUrl.length*.75),originalSize:file.size,dataUrl,updated:new Date().toISOString()});await renderPhoto(cardId);status.textContent='Image optimised, saved on this device and included in the editable backup.'}catch(error){status.textContent=error?.name==='QuotaExceededError'?'This browser is out of local space. Download a backup, then replace or remove an older image.':'The image could not be prepared. Choose a different copy.'}event.target.value='';updateProgress()
  }
  async function removePhoto(cardId){if(!confirm('Remove this image from the folio on this device?'))return;await deletePhoto(cardId);await renderPhoto(cardId);announce('Image removed from this device.')}
  async function renderPhoto(cardId){
    const record=await getPhoto(cardId),preview=document.querySelector(`[data-photo-preview="${cardId}"]`),remove=document.querySelector(`[data-photo-remove="${cardId}"]`),card=cards.find(item=>item.id===cardId);
    if(!preview)return;
    if(!record){preview.innerHTML='<p class="fine">No image added.</p>';remove.hidden=true;return}
    preview.innerHTML=`<figure><img src="${record.dataUrl}" alt="Student evidence preview for ${card.title}"><figcaption>${escapeHtml(record.name)}</figcaption></figure>`;remove.hidden=false
  }
  function fileToDataUrl(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(reader.error);reader.readAsDataURL(file)})}
  async function preparePhoto(file){
    const source=await fileToDataUrl(file),image=new Image();
    await new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=reject;image.src=source});
    const limit=1200,scale=Math.min(1,limit/Math.max(image.naturalWidth,image.naturalHeight)),canvas=document.createElement('canvas');
    canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));
    const context=canvas.getContext('2d');context.fillStyle='#fff';context.fillRect(0,0,canvas.width,canvas.height);context.drawImage(image,0,0,canvas.width,canvas.height);
    return canvas.toDataURL('image/jpeg',.76)
  }

  async function downloadBackup(){
    const evidence={};evidenceKeys.forEach(key=>evidence[key]=localStorage.getItem(key)||'');
    const details={};['student-name','class','date-started'].forEach(name=>details[name]=localStorage.getItem(`${FOLIO_PREFIX}:detail:${name}`)||'');
    const photos=await getAllPhotos();
    const payload={courseId:COURSE_ID,course:COURSE_NAME,schema:SCHEMA,sourceContract:SOURCE_CONTRACT,exported:new Date().toISOString(),details,evidence,photos};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),link=document.createElement('a'),student=slug(details['student-name'])||'student';link.href=URL.createObjectURL(blob);link.download=`year-11-textiles-folio-${student}-editable-backup.json`;link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);announce(`Editable backup downloaded with ${photos.length} stored image${photos.length===1?'':'s'}.`)
  }

  async function restoreBackup(event){
    const file=event.target.files[0],status=document.querySelector('[data-global-status]');if(!file)return;
    try{
      if(file.size>25*1024*1024)throw new Error('The backup is too large to restore safely.');
      const data=JSON.parse(await file.text());
      if(data.courseId===COURSE_ID&&data.schema===SCHEMA){validateV2(data);Object.entries(data.details||{}).forEach(([name,value])=>{if(['student-name','class','date-started'].includes(name))localStorage.setItem(`${FOLIO_PREFIX}:detail:${name}`,value)});Object.entries(data.evidence||{}).forEach(([key,value])=>{if(allowedKeys.has(key)&&typeof value==='string')localStorage.setItem(key,value)});await clearPhotos();for(const photo of data.photos||[])await putPhoto(photo);status.textContent=`Backup restored with ${(data.photos||[]).length} image${(data.photos||[]).length===1?'':'s'}.`}
      else if(data.course===COURSE_NAME&&data.schema===1&&data.evidence&&typeof data.evidence==='object'){for(const key of legacyBackupKeys)if(typeof data.evidence[key]==='string')localStorage.setItem(key,data.evidence[key]);status.textContent='Earlier folio backup restored. Existing Module 1 and activity evidence was preserved in the new folio.'}
      else throw new Error('This is not a supported Year 11 Textiles folio backup.');
      refreshInputs();for(const card of cards.filter(item=>item.photo))await renderPhoto(card.id);updateProgress()
    }catch(error){status.textContent=error.message||'The backup could not be restored.'}
    event.target.value=''
  }

  function validateV2(data){
    if(!data.details||typeof data.details!=='object'||!data.evidence||typeof data.evidence!=='object'||!Array.isArray(data.photos))throw new Error('The backup is missing required folio data.');
    for(const [key,value] of Object.entries(data.evidence))if(!allowedKeys.has(key)||typeof value!=='string')throw new Error('The backup contains an unsupported evidence record.');
    for(const photo of data.photos){if(!cards.some(card=>card.photo&&card.id===photo.id)||typeof photo.dataUrl!=='string'||!/^data:image\//.test(photo.dataUrl))throw new Error('The backup contains an unsupported image record.')}
  }

  async function resetFolio(){
    if(!confirm('Reset student details, new folio fields and stored photos on this device? Linked Module 1 activity evidence will be preserved.'))return;
    [...Array(localStorage.length).keys()].map(index=>localStorage.key(index)).filter(key=>key&&key.startsWith(FOLIO_PREFIX)).forEach(key=>localStorage.removeItem(key));await clearPhotos();refreshInputs();for(const card of cards.filter(item=>item.photo))await renderPhoto(card.id);updateProgress();announce('New folio fields and photos reset. Linked Module 1 activity evidence was preserved.')
  }

  function refreshInputs(){
    document.querySelectorAll('[data-detail]').forEach(input=>input.value=localStorage.getItem(`${FOLIO_PREFIX}:detail:${input.dataset.detail}`)||'');
    const dateInput=document.querySelector('[data-detail="date-started"]');
    if(dateInput&&!dateInput.value){dateInput.value=new Date().toISOString().slice(0,10);localStorage.setItem(`${FOLIO_PREFIX}:detail:date-started`,dateInput.value)}
    document.querySelectorAll('[data-evidence-key]').forEach(area=>area.value=localStorage.getItem(area.dataset.evidenceKey)||'')
  }
  function slug(value){return String(value||'').trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40)}
  function escapeHtml(value){return String(value).replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]))}

  grid.innerHTML=cards.map((card,index)=>renderCard(card,index)).join('');
  bindText();
  bindControls();
  initialisePhotos();
  updateProgress();
})();
