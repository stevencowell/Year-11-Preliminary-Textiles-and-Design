const TEXTILES_STORAGE_PREFIX = 'y11textiles-foundation-v1';

const TEXTILES_VIDEO_MANIFEST = {
  version: '1.0',
  course: 'Year 11 Preliminary Textiles and Design',
  buildId: 'TAD-Y11-PRELIM-2026-08-18-v1',
  sourceContract: 'sha256:6eb217541bb1c10f2076d50fae78e03e37c253921a62b45a5ccfec0536e1fbd3',
  checked: '18 August 2026',
  videos: {
    'm01-s01': {
      id: 'uhmW2EHp0L8',
      title: 'video 2 design brief and specification',
      creator: 'Mr Gilbert - DT',
      duration: '5:49',
      published: '21 May 2024',
      watchFor: 'Listen for the difference between a design brief and a specification. Note how a designer turns the intended user, purpose and research into requirements that can guide later decisions.',
      relevance: 'A concise secondary D&T lesson that supports the section’s user, purpose and requirement thinking. It does not set this course’s project brief or assessment requirements.'
    },
    'm01-s02': {
      id: 'khojoRvZ-DY',
      title: 'The Elements of Fashion Design',
      creator: 'Catherine Sews',
      duration: '8:51',
      published: '21 October 2020',
      watchFor: 'Track each element—line, shape, colour, texture and pattern—and pause when the presenter explains how a visible choice changes the effect of a garment.',
      relevance: 'A fashion-specific overview that broadens the former line-only clip and directly supports identifying and explaining design elements.'
    },
    'm01-s03': {
      id: 'YxeFR0ToXhM',
      title: 'The Principles of Fashion Design',
      creator: 'Catherine Sews',
      duration: '8:28',
      published: '25 October 2020',
      watchFor: 'Notice how emphasis, proportion, balance, rhythm and harmony organise visible elements. At the final gown example, name the evidence before accepting the judgement.',
      relevance: 'A fashion-specific principles overview with an applied garment analysis. The section theory remains the authority for the course’s full seven-principle set.'
    }
  }
};

const check = (question, options, answer, returnTo) => ({
  question, options, answer,
  correctFeedback: 'Correct. That choice uses the idea accurately.',
  retryFeedback: `Not yet. Return to ${returnTo} and check the relationship described there.`
});

const COURSE_MODULES = [
  {
    id: 1, weeks: '1–2', area: 'Design', title: 'Design foundations',
    summary: 'Start with users, end use, design requirements, elements and principles.',
    nextAction: 'Learn how a textile idea becomes a reasoned design decision.',
    complete: true,
    presentation: {
      title: 'Module 1: Design foundations',
      url: '../presentations/Year-11-Textiles-Module-01-Design-Foundations.pptx',
      previewUrl: '../presentations/module-01.html'
    },
    activity: { title: 'Design-analysis studio', url: '../activities/module-01-design-analysis.html' },
    sections: [
      {
        id: 'm01-s01', title: 'Design purpose, users and requirements', visual: '../assets/design-lens-v2.svg', mobileVisual: '../assets/design-lens-mobile.svg',
        visualAlt: 'A design lens connecting user and end use with functional requirements, aesthetic requirements and design factors.',
        visualCaption: 'Use this lens before judging appearance: a sound textile decision connects the user, end use, requirements and relevant constraints.',
        video: TEXTILES_VIDEO_MANIFEST.videos['m01-s01'],
        theory: `<p>Textile design starts with a <strong>purpose</strong>. The designer needs to know who will use the item, where and how it will be used, and what a successful result must achieve. These facts create the design requirements.</p><p><strong>Functional requirements</strong> describe performance: fit, comfort, strength, movement, protection, care or durability. <strong>Aesthetic requirements</strong> describe the intended visual and sensory effect: colour, shape, texture, style and overall appearance. Strong design connects both. A garment may look striking but fail if it restricts movement; a durable item may still miss the brief if its appearance does not suit the user.</p><p>Design decisions are also shaped by factors such as available materials, time, cost, resources, technology, social expectations and environmental impact. These factors do not automatically decide the solution. They set conditions the designer must recognise, balance and justify.</p>`,
        questions: [
          check('Which statement best describes a design requirement?', ['A fact the final solution must respond to','A colour chosen after construction','A list of unrelated textile terms','A mark awarded by the teacher'], 0, 'the first paragraph'),
          check('Which is primarily a functional requirement for a sports garment?', ['A fashionable colour story','Freedom of movement','A symmetrical motif','A dramatic silhouette'], 1, 'the functional requirements paragraph'),
          check('Which is primarily an aesthetic requirement?', ['Resistance to abrasion','Ease of laundering','A calm, harmonious colour scheme','Strength at a stressed seam'], 2, 'the functional and aesthetic comparison'),
          check('Why should a designer identify the user?', ['To copy the user’s existing clothes','To avoid considering the end use','To select the most expensive fabric','To understand needs the solution must satisfy'], 3, 'the opening paragraph'),
          check('A school bag looks appealing but its straps fail under load. What has the design missed?', ['A functional requirement','A colour relationship','A drawing convention','An industry sector'], 0, 'the functional requirements paragraph'),
          check('Which pair includes one functional and one aesthetic requirement?', ['Durability and strength','Comfort and colour','Texture and style','Shape and visual emphasis'], 1, 'the functional and aesthetic comparison'),
          check('What is the best use of a design factor such as cost?', ['Treat it as the only measure of success','Ignore it until evaluation','Recognise it as a condition to balance with other requirements','Assume a higher cost always produces better design'], 2, 'the final paragraph'),
          check('Which decision shows the strongest link to end use?', ['Choosing a fabric because it is on trend','Repeating a class sample exactly','Selecting the first available colour','Choosing an abrasion-resistant fabric for a frequently used seat cover'], 3, 'the user and end-use explanation'),
          check('What makes a textile design decision justified?', ['It links a choice to evidence and requirements','It uses the greatest number of decorations','It avoids every constraint','It matches the designer’s first idea'], 0, 'the whole design-lens explanation'),
          check('A designer changes a closure so a user can operate it independently. Which focus is strongest?', ['Fashion trend forecasting','User-centred function','Colour symbolism','Surface texture'], 1, 'the opening and functional requirements paragraphs')
        ],
        written: { prompt: 'Explain how one textile item balances a functional requirement and an aesthetic requirement for its intended user.', clarify: 'Choose one real item, identify its user and end use, then explain one performance need and one appearance need.', steps: ['Name the textile item, user and end use.','Select one functional requirement and connect it to a feature or material.','Select one aesthetic requirement and connect it to a design choice.','Check that both parts answer the same user and purpose.'], starter: 'For a ___ used by ___, the functional requirement of ___ is supported by ___, while the aesthetic requirement of ___ is created through ___.', example: 'An appropriate response would name the item and user, link one feature to performance, link one visual choice to appearance, and finish by explaining why both matter together.' }
      },
      {
        id: 'm01-s02', title: 'Elements of design', visual: '../assets/elements.svg', mobileVisual: '../assets/elements-mobile.svg',
        visualAlt: 'Four panels demonstrate line and direction, shape and size, texture, and colour and value.',
        visualCaption: 'Elements are the designer’s visual ingredients. Describe what is present, then explain its effect in the textile item.',
        video: TEXTILES_VIDEO_MANIFEST.videos['m01-s02'],
        theory: `<p>The elements of design are the visual ingredients used to create and communicate a textile idea. In this course they include <strong>line and direction</strong>, <strong>shape and size</strong>, <strong>texture</strong>, and <strong>colour and value</strong>.</p><p>Line may be structural, such as a seam, or decorative, such as piping or print. Its direction can lead the eye vertically, horizontally, diagonally or around a contour. Shape describes a two-dimensional area; form is the three-dimensional result. Size affects scale and the relationship between parts.</p><p>Texture can be visual or tactile. Fibre, yarn, fabric structure and surface techniques all influence how a textile looks and feels. Colour includes hue, while value describes relative lightness and darkness. Designers apply these elements deliberately to meet the brief—not simply to add more detail.</p>`,
        questions: [
          check('Which list contains only elements of design used in this course?', ['Balance, rhythm, unity, emphasis','Line, shape, texture, colour','Cost, time, equipment, resources','Function, user, end use, evaluation'], 1, 'the opening paragraph'),
          check('Which is an example of a structural line in a textile item?', ['A care instruction','A fabric price','A seam joining two panels','A user profile'], 2, 'the line explanation'),
          check('What does direction help a designer control?', ['The legal ownership of a pattern','The exact assessment date','The fibre’s molecular structure','How the eye moves through a design'], 3, 'the line and direction explanation'),
          check('Which statement correctly distinguishes shape and form?', ['Shape is two-dimensional; form is three-dimensional','Shape is functional; form is aesthetic','Shape is a principle; form is a factor','Shape is measured only by colour'], 0, 'the shape and form explanation'),
          check('A very large pocket compared with a small garment mainly uses which element?', ['Texture','Size','Value','Direction'], 1, 'the size explanation'),
          check('Which choice is most likely to create tactile texture?', ['A pale blue hue','A diagonal sketch line','Raised embroidery','A written annotation'], 2, 'the texture paragraph'),
          check('What does value mean in colour use?', ['The retail price of the fabric','The cultural importance of an item','The number of colours used','The relative lightness or darkness'], 3, 'the colour and value explanation'),
          check('Which statement is the strongest design analysis?', ['Diagonal piping leads the eye towards the neckline','The garment has lines','The colour is nice','There is some texture'], 0, 'the explanation of deliberate effect'),
          check('Why might a designer repeat one texture across several areas?', ['To guarantee low cost','To create a connected visual effect','To remove every functional need','To change a woven fabric into a fibre'], 1, 'the texture and deliberate-application explanation'),
          check('Which sequence produces the clearest analysis of an element?', ['Name the principle, copy a definition, stop','State a preference, list colours, add a mark','Identify the element, locate evidence, explain its effect','Describe cost, ignore the item, predict a grade'], 2, 'the visual-caption instruction')
        ],
        written: { prompt: 'Analyse how two elements of design work together in one textile item.', clarify: 'Do more than name the elements. Locate each one and explain the combined visual or functional effect.', steps: ['Name the item and intended use.','Identify the first element and point to visible evidence.','Identify the second element and point to visible evidence.','Explain how the two choices work together.'], starter: 'In the ___, the designer uses ___ through ___ and combines it with ___ through ___. Together, these choices ___.', example: 'An appropriate response would locate two specific design choices and explain their combined effect, rather than listing definitions or personal likes.' }
      },
      {
        id: 'm01-s03', title: 'Principles of design', visual: '../assets/principles-v2.svg', mobileVisual: '../assets/principles-mobile.svg',
        visualAlt: 'Seven panels separately demonstrate balance, rhythm, emphasis, contrast, harmony, proportion and unity.',
        visualCaption: 'Principles describe how elements are organised. One design can use several principles at the same time.',
        video: TEXTILES_VIDEO_MANIFEST.videos['m01-s03'],
        theory: `<p>Principles organise the elements into a coherent design. <strong>Proportion</strong> considers the size relationship between parts. <strong>Balance</strong> distributes visual weight and may be symmetrical or asymmetrical. <strong>Rhythm</strong> creates movement through repetition, progression or alternation.</p><p><strong>Emphasis</strong> creates a focal point. <strong>Contrast</strong> makes differences noticeable, while <strong>harmony</strong> creates compatible relationships. <strong>Unity</strong> is the sense that the parts belong together. A design can be unified without every part being identical.</p><p>Analysis should connect a principle to evidence. Instead of writing “the design has balance”, identify what is distributed, where it appears and what effect it produces. Principles are not decorations added at the end; they help the designer organise choices to meet the intended purpose.</p>`,
        questions: [
          check('Which principle describes the size relationship between parts?', ['Proportion','Rhythm','Emphasis','Unity'], 0, 'the first paragraph'),
          check('A design has equal visual weight on both sides of a centre line. Which principle is clearest?', ['Contrast','Symmetrical balance','Progressive rhythm','Asymmetrical emphasis'], 1, 'the balance explanation'),
          check('Repeated bands that guide the eye down a garment mainly create what?', ['Proportion','Harmony','Rhythm','Value'], 2, 'the rhythm explanation'),
          check('A single bright panel against a dark garment is most likely to create what?', ['Uniform texture','Equal proportion','Hidden function','Emphasis through contrast'], 3, 'the emphasis and contrast explanation'),
          check('Which statement best describes harmony?', ['Elements form compatible relationships','Every part must be the same size','One part dominates all others','Visual weight is always symmetrical'], 0, 'the contrast and harmony explanation'),
          check('What does unity mean?', ['The item uses only one colour','The parts feel as though they belong together','The design contains no contrast','The user and designer are the same person'], 1, 'the unity explanation'),
          check('Which example shows asymmetrical balance?', ['Two identical pockets placed evenly','A repeated stripe of equal width','One large shape balanced by several smaller shapes','A centred motif mirrored exactly'], 2, 'the balance explanation'),
          check('What is the strongest evidence of proportion?', ['The item is fashionable','The surface feels rough','The colour is red','The collar size is visually related to the body of the garment'], 3, 'the proportion explanation'),
          check('Why can a design use contrast and unity together?', ['Differences can create interest while shared features connect the whole','The two terms mean exactly the same thing','Unity requires all contrast to be removed','Contrast applies only to function'], 0, 'the contrast and unity paragraph'),
          check('Which sentence is the clearest principle analysis?', ['The skirt looks balanced','Repeated pleats create rhythm and lead the eye around the hem','The designer used principles','I like the unity'], 1, 'the final analysis paragraph')
        ],
        written: { prompt: 'Judge how effectively one principle organises the elements in a textile item.', clarify: 'Choose one principle, identify the design evidence that creates it, explain the effect, then make a supported judgement.', steps: ['Name the item and principle.','Identify the elements and their placement.','Explain the effect on the whole design.','Judge effectiveness against the intended user or purpose.'], starter: 'The principle of ___ is created through ___. This organises the design by ___. It is effective for the intended ___ because ___.', example: 'An appropriate response would use visible evidence, explain the effect and link the judgement to purpose; it would not rely on “I like it”.' }
      }
    ]
  },
  { id:2, weeks:'3–4', area:'Design', title:'Applying design', summary:'Compare focus areas, analyse design factors and develop purposeful inspiration.', nextAction:'Apply elements and principles to a textile design direction.', sections:['Focus areas and design types','Factors affecting design','Inspiration and design development'] },
  { id:3, weeks:'5–6', area:'Design', title:'Manufacturing foundations', summary:'Interpret pattern information and plan safe, controlled manufacturing evidence.', nextAction:'Connect manufacturing choices to design intent.', sections:['Manufacturing methods','Commercial pattern information','Planning and quality checkpoints'] },
  { id:4, weeks:'7–8', area:'Design', title:'Communicating design', summary:'Use graphical, written, verbal and digital methods to explain textile decisions.', nextAction:'Choose a communication method for a specific audience and purpose.', sections:['Drawing and annotation','Production communication','Digital and presentation methods'] },
  { id:5, weeks:'9–10', area:'Design', title:'Textile Project 1 evidence', summary:'Refine, manage and evaluate the first Preliminary textile project evidence.', nextAction:'Bring design development, production evidence and evaluation together.', sections:['Design refinement','Project management','Evaluation and folio evidence'] },
  { id:6, weeks:'11–12', area:'Properties and Performance', title:'Fibre foundations', summary:'Connect fibre origin, classification and structure to textile behaviour.', nextAction:'Build an accurate fibre classification system.', sections:['Fibre classification','Molecular and morphological structure','From fibre to textile'] },
  { id:7, weeks:'13–14', area:'Properties and Performance', title:'Natural and manufactured fibres', summary:'Compare natural, regenerated and synthetic fibres for end use.', nextAction:'Use properties as evidence for selection.', sections:['Natural cellulosic fibres','Natural protein fibres','Regenerated, synthetic and blended fibres'] },
  { id:8, weeks:'15–16', area:'Properties and Performance', title:'Yarn structures', summary:'Investigate spun, filament, twist and novelty yarn structures.', nextAction:'Explain how yarn structure changes performance.', sections:['Staple-spun and filament yarns','Twist and spinning systems','Textured and novelty yarns'] },
  { id:9, weeks:'17–18', area:'Properties and Performance', title:'Yarn performance', summary:'Analyse yarn characteristics and justify yarn selection.', nextAction:'Link structure to property, performance and end use.', sections:['Yarn characteristics','Structure–property relationships','End-use justification'] },
  { id:10, weeks:'19–20', area:'Properties and Performance', title:'Fabric structures', summary:'Compare woven, knitted and non-woven construction.', nextAction:'Identify structure from evidence, not appearance alone.', sections:['Woven structures','Knitted structures','Non-woven structures'] },
  { id:11, weeks:'21–22', area:'Properties and Performance', title:'Textile properties and testing', summary:'Plan fair comparisons of aesthetic, durability, comfort, stability and care properties.', nextAction:'Turn a property question into a controlled investigation.', sections:['Properties and end use','Planning a fair textile test','Recording and interpreting results'] },
  { id:12, weeks:'23–24', area:'Properties and Performance', title:'Textile Project 2 evidence', summary:'Use experiment results to justify selection and evaluate project decisions.', nextAction:'Connect experimental evidence to a textile choice.', sections:['Analysing experimental evidence','Fabric selection and design','Project evidence and evaluation'] },
  { id:13, weeks:'25–26', area:'ATCFAI', title:'Industry and careers', summary:'Examine Australian textile-industry sectors in a global context.', nextAction:'Investigate a current sector and career pathway.', sections:['Industry development and sectors','Local and global context','Careers and training'] },
  { id:14, weeks:'27–28', area:'ATCFAI', title:'Quality and value', summary:'Analyse quality systems and the different ways textiles hold value.', nextAction:'Judge quality and value using evidence.', sections:['Quality assurance and control','Manufacturer and consumer roles','Perceived, cultural and economic value'] },
  { id:15, weeks:'29–30', area:'Course synthesis', title:'Preliminary revision', summary:'Retrieve, connect and communicate learning from all three course areas.', nextAction:'Practise explaining and justifying unfamiliar textile examples.', sections:['Knowledge retrieval','Command terms and response planning','Course synthesis'] }
];
