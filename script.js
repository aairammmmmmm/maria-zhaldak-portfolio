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
    role: "Senior Designer",
    date: "08/2025 — present",
    bullets: [
      "Took part in 90 different brands that ranked among the company's top.",
      "Onboarded new designers and trained teammates to work with production pipelines.",
      "Developed brand ideas and creative concepts, and worked on project launches.",
      "Created AI-generated promotional visuals and motion content across digital projects and visual styles, from stylized illustration to photorealistic imagery, building from sketches and from scratch and turning concepts and moodboards into campaign-ready assets.",
      "Maintained character and visual consistency across image sets, animated advertising content, and trained custom LoRA models for project-specific styles and characters."
    ]
  }
];

// These five were all projects run by one and the same employer —
// not five separate jobs. Shown as one continuous role with its projects nested inside.
const ONE_COMPANY = {
  title: "One Company, Five Projects",
  range: "10/2023 — 08/2025",
  note: "Worked across five projects under one employer, helping scale AI content production, improve creative workflows, and deliver high-volume visual campaigns for international brands.",
  projects: [
    {
      name: "Neurodesign",
      date: "12/2024 — 08/2025",
      bullets: [
        "Delivered AI-generated visual campaigns for major real estate and architecture brands, including NEOM The Line, DEYAAR, and RAK Real Estate / Fairmont Residences Al Marjan Island.",
        "Improved production efficiency by developing AI workflows for architectural visualization, storyboarding, and image/video generation.",
        "Helped reduce reliance on traditional 3D rendering and video production through AI-powered creative pipelines."
      ]
    },
    {
      name: "Blockchain Sport Drift",
      date: "08/2024 — 12/2024",
      bullets: [
        "Produced 30+ AI-generated advertising videos, supporting large-scale marketing campaigns.",
        "Increased creative output by building reusable AI workflows for visual and motion content.",
        "Helped streamline video production, animation and generation, enabling faster development of promotional materials."
      ]
    },
    {
      name: "Arteki Studio",
      date: "05/2024 — 08/2024",
      bullets: [
        "Developed 90+ scripts and storyboards for AI-generated animated films and commercial projects.",
        "Accelerated pre-production by using AI for character development, generation and animation, visual concepts, and 3D-style imagery.",
        "Improved creative consistency across projects through structured visual development."
      ]
    },
    {
      name: "Imba Label / JGGL",
      date: "04/2024 — 05/2024",
      bullets: [
        "Created AI-generated music videos, promotional content, and digital avatars for recording artists.",
        "Supported audience growth and social media engagement through distinctive AI-powered visual campaigns.",
        "Streamlined content creation from initial concepts to finished animated videos."
      ]
    },
    {
      name: "Blockchain Sport (Soccer)",
      date: "10/2023 — 04/2024",
      bullets: [
        "Contributed to a 90% increase in Instagram engagement through AI-generated visual content and animated campaigns.",
        "Produced scalable advertising and social media assets to support brand visibility and audience engagement.",
        "Improved content production efficiency using AI-driven creative workflows."
      ]
    }
  ]
};

// gallery card definitions — shown top to bottom in this order
const WORKS = [
  {
    id: "realism",
    title: "Realism Architecture: Chrome Hearts",
    tag: "case study",
    thumb: "assets/work/realism/realism_cover.jpg",
    kind: "pdf",
    pdf: "assets/work/realism/portfolio-zm.pdf",
    modalNote: "A conceptual members-only \u201cChrome Hearts House Private\u201d, built on the real Crosby Estate in Northern California \u2014 imagined through architecture, hospitality and lifestyle with the help of AI (ComfyUI). The bar, archive, atelier and club details are AI-generated; a few real Chrome Hearts / Baccarat pieces were used as reference. Full case study below."
  },
  {
    id: "diesel",
    title: "Diesel",
    tag: "brand film",
    thumb: "assets/work/diesel_preview.png",
    kind: "media",
    video: "assets/work/diesel_video.mp4",
    images: [],
    modalNote: "A concept brand film for Diesel \u2014 a courier, an oversized red box and a surprise inside. Photoreal, AI-generated, built as a short commercial."
  },
  {
    id: "tallink",
    title: "Tallink Short Reel",
    tag: "short reel",
    thumb: null,
    video: "assets/work/tallink_reel.mp4",
    kind: "video",
    modalNote: "A short AI-generated reel about a restaurant."
  },
  {
    id: "packaging",
    title: "Pocky Product Concept",
    tag: "packaging",
    thumb: "assets/work/packaging_concept.jpg",
    kind: "media",
    video: "assets/work/packaging_reel.mp4",
    images: ["assets/work/packaging_concept.jpg"],
    modalNote: "A packaging design concept for a fictional \u201cPocky \u2014 Licorice\u201d flavour: deep purple pack, green type, white elements and a silver border, with a subtle pistachio-cinnamon stick under a liquorice glaze. Built from an original idea in Seedream, then refined and animated into a short product commercial."
  },
  {
    id: "video",
    title: "Cartoon Animation",
    tag: "motion",
    thumb: null,
    video: "assets/work/showreel.mp4",
    kind: "video",
    modalNote: "A short reel of animated, AI-generated campaign content."
  },
  {
    id: "brand",
    title: "Jaded London Products",
    tag: "campaign",
    thumb: "assets/work/brand_content.jpg",
    kind: "image",
    images: ["assets/work/brand_content.jpg"],
    modalNote: "A small case built around a real product line \u2014 reimagined visuals in a Y2K mood."
  },
  {
    id: "music",
    title: "Music Covers",
    tag: "music",
    thumb: "assets/work/music_thumb.jpg",
    kind: "music",
    badge: "11 covers",
    modalNote: "Cover art for tracks and singles. Tap a cover to listen on Spotify.",
    tracks: [
      { title: "obsession", img: "assets/work/music_obsession.jpg", url: "https://open.spotify.com/track/2Y4o7IgjNDlk2QLJcNimSb" },
      { title: "On your mind", img: "assets/work/music_on_your_mind.jpg", url: "https://open.spotify.com/track/6ew8P3ETwJN0oJl0Don6rL" },
      { title: "how you feel", img: "assets/work/music_how_you_feel.jpg", url: "https://open.spotify.com/album/1m0QvZumpqWViRVIi1qkaK" },
      { title: "APATHY", img: "assets/work/music_apathy.jpg", url: "https://open.spotify.com/track/3i5KbajCeCpYS2dMPgudEV" },
      { title: "FADED", img: "assets/work/music_faded.jpg", url: "https://open.spotify.com/track/3oWywV30qTdscwiAvay7Kx" },
      { title: "OXYGEN", img: "assets/work/music_oxygen.jpg", url: "https://open.spotify.com/track/6xWPKivHIRCkDtQAPDm0GZ" },
      { title: "POENIA", img: "assets/work/music_poenia.jpg", url: "https://open.spotify.com/track/2aXKAhSWPgFMePt4maaHfF", video: "assets/work/music_poenia.mp4" },
      { title: "FIND", img: "assets/work/music_find.jpg", url: "https://open.spotify.com/track/1HNlixSgxNfAHKHMaiJb6B" },
      { title: "eyes", img: "assets/work/music_eyes.jpg", url: "https://open.spotify.com/track/2di298vPxGClvO5bd6dH1z" },
      { title: "can i ?", img: "assets/work/music_can_i.jpg", url: "https://open.spotify.com/track/5gvQKJ4Po7K6GYnvZ14wgo" },
      { title: "\u041c\u0430\u043b\u043e", img: "assets/work/music_malo.jpg", url: "https://open.spotify.com/track/5Z9xJob4UmOlLgIe6anCAJ" }
    ]
  },
  {
    id: "other",
    title: "Different Styles",
    tag: "range",
    thumb: "assets/work/art_333.jpg",
    kind: "other-grouped",
    badge: "13 pieces / 8 styles",
    modalNote: "A wider range of styles \u2014 grouped below so it's clear how differently each one was built.",
    groups: [
      {
        style: "Painterly Game Cinematics",
        desc: "Stylized 3D game-cinematic scenes, built for fantasy world-building and RPG storytelling.",
        images: ["assets/work/art_333.jpg", "assets/work/art_222.jpg", "assets/work/art_gamestyle.jpg", "assets/work/art_aaa_gamestyle.jpg"]
      },
      {
        style: "Cinematic Environments",
        desc: "Moody, low-key environment renders with dramatic lighting and shallow depth of field.",
        images: ["assets/work/other_env_1.jpg", "assets/work/other_env_2.jpg"]
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
    id: "sketch",
    title: "Sketch to Image",
    tag: "process",
    thumb: "assets/work/sketch_after.jpg",
    kind: "compare",
    modalNote: "Drag the divider to move between the pencil sketch and the finished, fully rendered image."
  },
  {
    id: "character",
    title: "Characters",
    tag: "design",
    thumb: "assets/work/char_orange_1.jpg",
    kind: "characters",
    images: ["assets/work/character_sheet.jpg", "assets/work/char_orange_1.jpg", "assets/work/char_orange_2.jpg", "assets/work/char_prince.jpg", "assets/work/char_timewarp.jpg"],
    modalNote: "Character design across different styles \u2014 a full turnaround sheet, studio portraits on orange, and illustrated heroes."
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

const bulletsHTML = list => `<ul class="bullets">${list.map(b => `<li>${b}</li>`).join("")}</ul>`;

const rolesHTML = EXPERIENCE.map(role => `
  <div class="role">
    <div class="role-top">
      <span class="role-name">${role.name}</span>
      <span class="role-date">${role.date}</span>
    </div>
    ${role.role ? `<p class="role-title">${role.role}</p>` : ""}
    ${bulletsHTML(role.bullets)}
  </div>
`).join("");

const groupHTML = `
  <div class="role role--group">
    <div class="role-top">
      <span class="role-name">${ONE_COMPANY.title}</span>
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
          ${bulletsHTML(p.bullets)}
        </div>
      `).join("")}
    </div>
  </div>
`;

timeline.innerHTML = rolesHTML + groupHTML;

// ============================================================
// Gallery cards
// ============================================================

const gallery = document.getElementById("gallery");

function cardMediaHTML(work){
  if(work.kind === "video"){
    return `<div class="card-media card-media--video">
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
  } else if(work.kind === "pdf"){
    body = `
      <div class="pdf-embed">
        <iframe src="${work.pdf}" title="${work.title} PDF"></iframe>
      </div>
      <a class="pdf-link" href="${work.pdf}" target="_blank" rel="noopener">Open full PDF in a new tab</a>
    `;
  } else if(work.kind === "media"){
    body = `
      <video src="${work.video}" controls playsinline style="margin-bottom:14px;"></video>
      ${work.images.map(src => `<img src="${src}" alt="${work.title}">`).join("")}
    `;
  } else if(work.kind === "characters"){
    const [first, ...rest] = work.images;
    body = `<img src="${first}" alt="${work.title}">
      <div class="modal-grid">${rest.map(src => `<img src="${src}" alt="${work.title}">`).join("")}</div>`;
  } else if(work.kind === "music"){
    body = `<div class="music-grid">${work.tracks.map(t => `
      <figure class="music-item">
        <a href="${t.url}" target="_blank" rel="noopener"><img src="${t.img}" alt="${t.title} cover"></a>
        <figcaption>
          <span class="music-title">${t.title}</span>
          <a class="music-link" href="${t.url}" target="_blank" rel="noopener">Listen on Spotify</a>
        </figcaption>
      </figure>
      ${t.video ? `
      <figure class="music-item">
        <video src="${t.video}" controls playsinline preload="metadata"></video>
        <figcaption><span class="music-title">${t.title} video</span></figcaption>
      </figure>` : ""}
    `).join("")}</div>`;
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
