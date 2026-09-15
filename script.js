// ============================================================
// Data
// ============================================================

// simple original glyphs (not brand logos) paired with each tool name
const TOOLS = [
  { name: "Claude", glyph: '<path d="M12 4l2.2 5.8L20 12l-5.8 2.2L12 20l-2.2-5.8L4 12l5.8-2.2z" fill="currentColor"/>' },
  { name: "ComfyUI", glyph: '<circle cx="7" cy="12" r="2.6" fill="currentColor"/><circle cx="17" cy="7" r="2.2" fill="currentColor"/><circle cx="17" cy="17" r="2.2" fill="currentColor"/><path d="M9 12h6M11 10l4-2M11 14l4 2" stroke="currentColor" stroke-width="1.3"/>' },
  { name: "Stable Diffusion", glyph: '<path d="M12 3c3 4-3 5-3 9a3 3 0 006 0c0-2-1-3-1-5" stroke="currentColor" stroke-width="1.4" fill="none"/>' },
  { name: "Magnific", glyph: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" stroke="currentColor" stroke-width="1.4"/>' },
  { name: "Higgsfield", glyph: '<path d="M4 16l4-8 4 5 3-4 5 7" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/>' },
  { name: "RunPod", glyph: '<rect x="6" y="6" width="12" height="12" rx="4" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="12" cy="12" r="2" fill="currentColor"/>' },
  { name: "Photoshop", glyph: '<rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.4" fill="none"/><path d="M8 16V8h2.4a2.4 2.4 0 010 4.8H8" stroke="currentColor" stroke-width="1.3" fill="none"/>' },
  { name: "Figma", glyph: '<circle cx="12" cy="7" r="2.6" fill="currentColor"/><circle cx="12" cy="17" r="2.6" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="16" cy="12" r="2.6" fill="currentColor" opacity="0.55"/>' },
  { name: "Kling", glyph: '<path d="M6 4v16M6 12l7-8M6 12l7 8" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/>' }
];

const EXPERIENCE = [
  {
    name: "Brainrocket",
    date: "08/2025 — present",
    text: "Creating AI-generated promotional visuals and motion content across multiple digital projects and visual styles, from stylized illustration to photorealistic imagery. Building visuals both from sketches and from scratch, translating concepts and moodboards into polished, campaign-ready assets. Maintaining character and visual consistency across image sets, and training custom LoRA models for project-specific styles and characters."
  }
];

// These five were all projects run by one and the same employer —
// not five separate jobs. Shown as one continuous role with its projects nested inside.
const ONE_COMPANY = {
  range: "10/2023 — 08/2025",
  note: "One employer the whole way through — the five projects below all ran under the same company.",
  projects: [
    {
      name: "Neurodesign",
      date: "12/2024 — 08/2025",
      text: "AI-generated visual campaigns for architecture, real estate and large-scale developments across Saudi Arabia, the UAE, Belarus and other markets — storyboards, architectural visualizations and promotional videos from concept to final post-production, including work for NEOM The Line, DEYAAR and RAK Real Estate / Fairmont Residences Al Marjan Island."
    },
    {
      name: "Blockchain Sport Drift",
      date: "08/2024 — 12/2024",
      text: "Produced 30+ AI-generated advertising videos, developing visuals and motion content for large-scale promotional campaigns."
    },
    {
      name: "Arteki Studio",
      date: "05/2024 — 08/2024",
      text: "Developed 20+ scripts and storyboards for AI-generated animated films and cartoons. Created visual concepts, characters and 3D-style imagery for commercial animation projects."
    },
    {
      name: "Imba Label / JGGL",
      date: "04/2024 — 05/2024",
      text: "Created AI-generated promotional videos for music artists, from concept and storyboard to final animated content. Developed AI avatars and visual campaigns that grew social engagement and audience."
    },
    {
      name: "Blockchain Sport (Soccer)",
      date: "10/2023 — 04/2024",
      text: "Created AI-generated social media and advertising content for football projects — static visuals and animated campaigns that contributed to a 60% increase in Instagram engagement."
    }
  ]
};

// gallery card definitions
const WORKS = [
  {
    id: "sketch",
    title: "Sketch to Image",
    tag: "01 — process",
    thumb: "assets/work/sketch_after.jpg",
    kind: "compare",
    modalNote: "Drag the divider to move between the pencil sketch and the finished, fully rendered image."
  },
  {
    id: "video",
    title: "Video",
    tag: "02 — motion",
    thumb: null,
    video: "assets/work/showreel.mp4",
    kind: "video",
    modalNote: "A short reel of animated, AI-generated campaign content."
  },
  {
    id: "realism",
    title: "Realism",
    tag: "03 — case study",
    thumb: "assets/work/realism/realism_00.jpg",
    kind: "realism",
    modalNote: "A conceptual members-only \u201cChrome Hearts House Private\u201d, built on the real Crosby Estate in Northern California \u2014 imagined through architecture, hospitality and lifestyle with the help of AI (ComfyUI). The bar, archive, atelier and club details are AI-generated; a few real Chrome Hearts / Baccarat pieces were used as reference.",
    image: [
      "assets/work/realism/Slide 16_9 - 1.jpg"
    ]
  },
  {
    id: "character",
    title: "Character Sheet",
    tag: "04 — design",
    thumb: "assets/work/character_sheet.jpg",
    kind: "image",
    images: ["assets/work/character_sheet.jpg"],
    modalNote: "A full character turnaround \u2014 front, back and three-quarter views built for consistency across a single design."
  },
  {
    id: "other",
    title: "Other Works",
    tag: "05 — range",
    thumb: "assets/work/art_333.jpg",
    kind: "other-grouped",
    badge: "11 pieces / 7 styles",
    modalNote: "A wider range of styles \u2014 grouped below so it's clear how differently each one was built.",
    groups: [
      {
        style: "Painterly Game Cinematics",
        desc: "Stylized 3D game-cinematic scenes, built for fantasy world-building and RPG storytelling.",
        images: ["assets/work/art_333.jpg", "assets/work/art_222.jpg", "assets/work/art_gamestyle.jpg", "assets/work/art_aaa_gamestyle.jpg"]
      },
      {
        style: "3D Character Renders",
        desc: "Pixar / Disney-style stylized 3D mascot characters, designed for brand and product concepts.",
        images: ["assets/work/other_grillmaster.jpg", "assets/work/other_vikingchef.jpg"]
      },
      {
        style: "Realist Fantasy Painting",
        desc: "A painterly, semi-realistic fantasy illustration, closer to traditional concept art than 3D render.",
        images: ["assets/work/other_cloudsmith.jpg"]
      },
      {
        style: "Anime / Manga",
        desc: "An anime-style action illustration with dynamic linework and lighting.",
        images: ["assets/work/other_animesmith.jpg"]
      },
      {
        style: "Storybook Watercolor",
        desc: "A warm, hand-painted children's-book illustration style.",
        images: ["assets/work/other_storybook.jpg"]
      },
      {
        style: "Flat Vector Illustration",
        desc: "A flat-color, graphic illustration style with clean shapes and no gradients.",
        images: ["assets/work/other_wizard.jpg"]
      },
      {
        style: "Game UI / Asset Design",
        desc: "A jackpot-board frame and UI asset built for a slot-game environment.",
        images: ["assets/work/other_frostbound.jpg"]
      }
    ]
  },
  {
    id: "brand",
    title: "Brand Content",
    tag: "06 — campaign",
    thumb: "assets/work/brand_content.jpg",
    kind: "image",
    images: ["assets/work/brand_content.jpg"],
    modalNote: "A small case built around a real product line — reimagined visuals in a Y2K mood."
  }
];

// ============================================================
// Marquee
// ============================================================

const track = document.getElementById("marqueeTrack");
const loopTools = [...TOOLS, ...TOOLS]; // duplicate for seamless loop
track.innerHTML = loopTools.map(t => `
  <span class="marquee-item">
    <span class="ico"><svg viewBox="0 0 24 24" fill="none">${t.glyph}</svg></span>
    ${t.name}
  </span>
`).join("");

// ============================================================
// Experience timeline
// ============================================================

const timeline = document.getElementById("timeline");

const brainrocketHTML = EXPERIENCE.map(role => `
  <div class="role">
    <div class="role-top">
      <span class="role-name">${role.name}</span>
      <span class="role-date">${role.date}</span>
    </div>
    <p>${role.text}</p>
  </div>
`).join("");

const groupHTML = `
  <div class="role role--group">
    <div class="role-top">
      <span class="role-name">One company, five projects</span>
      <span class="role-date">${ONE_COMPANY.range}</span>
    </div>
    <p class="group-note">${ONE_COMPANY.note}</p>
    <div class="sub-projects">
      ${ONE_COMPANY.projects.map(p => `
        <div class="sub-role">
          <div class="role-top">
            <span class="sub-name">${p.name}</span>
            <span class="role-date">${p.date}</span>
          </div>
          <p>${p.text}</p>
        </div>
      `).join("")}
    </div>
  </div>
`;

timeline.innerHTML = brainrocketHTML + groupHTML;

// ============================================================
// Gallery cards
// ============================================================

const gallery = document.getElementById("gallery");

function cardMediaHTML(work){
  if(work.kind === "video"){
    return `<div class="card-media">
      <video src="${work.video}" muted loop playsinline preload="metadata"></video>
    </div>
    <div class="card-play">
      <svg viewBox="0 0 24 24" fill="none" stroke="#EFE8D8" stroke-width="1.2">
        <circle cx="12" cy="12" r="10.3" fill="rgba(16,15,13,0.55)"/>
        <path d="M10 8.3v7.4l6.2-3.7z" fill="#EFE8D8"/>
      </svg>
    </div>`;
  }
  if(work.kind === "pending"){
    return `<div class="card-media empty"><span>Not yet added —<br>let's fill this one in together</span></div>`;
  }
  return `<div class="card-media"><img src="${work.thumb}" alt="${work.title}" loading="lazy"></div>`;
}

gallery.innerHTML = WORKS.map(w => `
  <article class="card${w.badge ? ' card--stack' : ''}" data-id="${w.id}" tabindex="0" role="button" aria-label="Open ${w.title}">
    <div class="card-tab"><span>${w.tag}</span><span class="dot"></span></div>
    ${cardMediaHTML(w)}
    ${w.badge ? `<span class="card-badge">${w.badge}</span>` : ""}
    <div class="card-title">${w.title}</div>
  </article>
`).join("");

// autoplay muted video preview on hover (desktop) / just leave paused poster on touch
gallery.querySelectorAll('.card video').forEach(v => {
  const card = v.closest('.card');
  card.addEventListener('mouseenter', () => v.play().catch(()=>{}));
  card.addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0; });
});

// ============================================================
// Modal
// ============================================================

const modal = document.getElementById("modal");
const modalBox = document.getElementById("modalBox");

function compareHTML(work){
  return `
    <div class="compare" id="compareEl">
      <img src="assets/work/sketch_before.jpg" alt="Sketch">
      <div class="after-layer" id="afterLayer"><img src="assets/work/sketch_after.jpg" alt="Rendered"></div>
      <div class="compare-handle" id="compareHandle"></div>
      <span class="compare-label l">Rendered</span>
      <span class="compare-label r">Sketch</span>
      <input type="range" min="0" max="100" value="50" id="compareRange" aria-label="Compare sketch and rendered image">
    </div>`;
}

function openModal(id){
  const work = WORKS.find(w => w.id === id);
  if(!work) return;

  let body = "";
  if(work.kind === "compare"){
    body = compareHTML(work);
  } else if(work.kind === "video"){
    body = `<video src="${work.video}" controls autoplay playsinline></video>`;
  } else if(work.kind === "grid"){
    body = `<div class="modal-grid">${work.images.map(src => `<img src="${src}" alt="${work.title}">`).join("")}</div>`;
  } else if(work.kind === "other-grouped"){
    body = work.groups.map(g => `
      <div class="style-group">
        <h4 class="style-name">${g.style}</h4>
        <p class="style-desc">${g.desc}</p>
        ${g.images.length > 1
          ? `<div class="modal-grid style-imgs">${g.images.map(src => `<img src="${src}" alt="${g.style}">`).join("")}</div>`
          : `<img src="${g.images[0]}" alt="${g.style}">`}
      </div>
    `).join("");
  } else if(work.kind === "realism"){
    body = `<div class="realism-grid">${work.images.map(src => `<img src="${src}" alt="${work.title}">`).join("")}</div>`;
  } else if(work.kind === "image"){
    body = `<div>${work.images.map(src => `<img src="${src}" alt="${work.title}">`).join("")}</div>`;
  } else if(work.kind === "pending"){
    body = `<div class="card-media empty" style="position:relative;aspect-ratio:16/9;"><span>Not yet added —<br>let's fill this one in together</span></div>`;
  }

  modalBox.innerHTML = `
    <button class="modal-close" id="modalClose" aria-label="Close">&times;</button>
    <div class="modal-head">${work.tag}</div>
    <h3 class="modal-title">${work.title}</h3>
    <div class="modal-body">
      <p>${work.modalNote}</p>
      ${body}
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  document.getElementById("modalClose").addEventListener("click", closeModal);

  if(work.kind === "compare"){
    initCompare();
  }
}

function closeModal(){
  modal.classList.remove("open");
  document.body.style.overflow = "";
  modalBox.querySelectorAll("video").forEach(v => v.pause());
  modalBox.innerHTML = "";
}

modal.addEventListener("click", (e) => { if(e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });

gallery.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => openModal(card.dataset.id));
  card.addEventListener("keydown", (e) => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); openModal(card.dataset.id); } });
});

// ============================================================
// Before / after compare slider
// ============================================================

function initCompare(){
  const range = document.getElementById("compareRange");
  const after = document.getElementById("afterLayer");
  const handle = document.getElementById("compareHandle");

  function update(val){
    after.style.width = val + "%";
    handle.style.left = val + "%";
  }
  update(50);
  range.addEventListener("input", (e) => update(e.target.value));
}
