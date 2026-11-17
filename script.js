// ============================================================
// Maria Zhaldak — portfolio
// The work section is one scrolling feed: projects are shown open,
// videos loop on their own (muted), only "Collections" open in a window.
// ============================================================

const W = "assets/work/";

// ============================================================
// Experience
// ============================================================

const EXPERIENCE = [
  {
    name: "Brainrocket",
    role: "Senior Designer",
    date: "08/2025 — 08/2026",
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

// ============================================================
// Featured project — right after the "What I use" showreel (normal size, tap to open larger)
// ============================================================

const FEATURE = {
  tag: "Photorealism · Fashion campaign",
  title: "Every Girl Has a Stage",
  desc: "A photoreal AI fashion campaign built around one idea: every girl is unique, and every girl can make it onto the stage. From a crowded backstage to the runway lights.",
  video: W + "fashion_campaign.mp4",
  poster: W + "fashion_campaign_poster.jpg",
  ratio: "16/9"
};

// ============================================================
// The feed — top to bottom, in this order
//   kind "reel"        one video with a description panel on it (+ optional extras below)
//   kind "row"         a few videos / images side by side, description above
//   kind "case"        long case study, opens to full length on the page
//   kind "sketch"      before / after sliders
//   kind "gallery"     open image gallery
//   kind "split"       text on one side, image on the other
//   kind "collections" cards that open in a window (Different Styles, Music Covers)
// ============================================================

const FEED = [
  {
    id: "video",
    label: "Video",
    items: [
      {
        kind: "reel", id: "diesel",
        tag: "Brand film",
        title: "Diesel",
        desc: "A concept brand film for Diesel — a courier, an oversized red box and a surprise inside. Photoreal, AI-generated, built as a short commercial.",
        video: W + "diesel_video.mp4", poster: W + "diesel_poster.jpg", ratio: "16/9"
      },
      {
        kind: "reel", id: "realism-reel",
        tag: "Showreel",
        title: "Realism",
        desc: "Photoreal AI footage — natural light, real textures and camera movement that reads like a live-action shoot.",
        video: W + "realism_showreel.mp4", poster: W + "realism_showreel_poster.jpg", ratio: "16/9",
        extras: [
          { type: "video", src: W + "realism_clip_2.mp4", poster: W + "realism_clip_2_poster.jpg", ratio: "16/9" },
          { type: "image", src: W + "realism_1.jpg", ratio: "16/9" },
          { type: "image", src: W + "realism_2.jpg", ratio: "16/9" }
        ]
      },
      {
        kind: "row", id: "ugc",
        tag: "UGC for brands",
        title: "UGC Videos",
        desc: "AI-generated UGC-style videos for beauty, haircare and fashion brands — conversational, filmed-on-a-phone look, made to sit naturally in a social feed.",
        media: [
          { type: "video", src: W + "ugc_hair.mp4", poster: W + "ugc_hair_poster.jpg", ratio: "9/16", label: "Haircare" },
          { type: "video", src: W + "ugc_makeup.mp4", poster: W + "ugc_makeup_poster.jpg", ratio: "9/16", label: "Makeup" },
          { type: "video", src: W + "ugc_outfits.mp4", poster: W + "ugc_outfits_poster.jpg", ratio: "9/16", label: "Outfits" }
        ]
      },
      {
        kind: "row", id: "packaging",
        tag: "Packaging · Product commercial",
        title: "Pocky Product Concept",
        desc: "A packaging concept for a fictional “Pocky — Licorice” flavour: deep purple pack, green type, white elements and a silver border, with a pistachio-cinnamon stick under a liquorice glaze. Built from an original idea in Seedream, then refined and animated into a short product commercial.",
        media: [
          { type: "video", src: W + "packaging_reel.mp4", poster: W + "packaging_poster.jpg", ratio: "1/1" },
          { type: "image", src: W + "packaging_concept.jpg", ratio: "16/9" }
        ],
        cols: "2fr 3fr"
      },
      {
        kind: "reel", id: "tallink",
        tag: "Short reel",
        title: "Tallink Short Reel",
        desc: "A short AI-generated reel about a restaurant.",
        video: W + "tallink_reel.mp4", poster: "", ratio: "16/9"
      },
      {
        kind: "reel", id: "explainer",
        tag: "Animation · Client brief",
        title: "Animated Explainer for YouTube",
        desc: "A watercolor-style animated explainer made from a client brief — visual style, scenes and animation — about how the brain learns to recognise scents.",
        video: W + "explainer.mp4", poster: W + "explainer_poster.jpg", ratio: "16/9"
      }
    ]
  },
  {
    id: "images",
    label: "Images",
    items: [
      {
        kind: "case", id: "realism",
        tag: "Case study",
        title: "Realism Architecture: Chrome Hearts",
        desc: "A conceptual members-only “Chrome Hearts House Private”, built on the real Crosby Estate in Northern California — imagined through architecture, hospitality and lifestyle with the help of AI (ComfyUI). The bar, archive, atelier and club details are AI-generated; a few real Chrome Hearts / Baccarat pieces were used as reference.",
        pages: [1,2,3,4,5,6,7,8,9].map(n => W + "realism_case_0" + n + ".jpg"),
        pdf: W + "realism/portfolio-zm.pdf"
      },
      {
        kind: "sketch", id: "sketch",
        tag: "Process",
        title: "Sketch to Image",
        desc: "Drag the divider to move between the pencil sketch and the finished image. Below is a test task: the same sketch taken into many styles, keeping the pose and proportions.",
        wide: { before: W + "sketch_before.jpg", after: W + "sketch_after.jpg", ratio: "1400/593" },
        sets: [
          {
            title: "Character 1 — one sketch, ten styles",
            before: W + "s2i_man_sketch.jpg", after: W + "s2i_man_result.jpg", ratio: "2/3", afterLabel: "Photo-realism",
            styles: [
              ["s2i_m_semi_1.jpg", "Semi-realism"], ["s2i_m_semi_2.jpg", "Semi-realism · v2"],
              ["s2i_m_3d_1.jpg", "Stylized 3D"], ["s2i_m_3d_2.jpg", "Stylized 3D · v2"],
              ["s2i_m_game_1.jpg", "Premium game art"], ["s2i_m_game_2.jpg", "Premium game art · v2"],
              ["s2i_m_rex_1.jpg", "Rex Crowle-inspired"], ["s2i_m_rex_2.jpg", "Less line, more style"],
              ["s2i_m_azevedo.jpg", "Mike Azevedo-inspired"], ["s2i_m_marlet.jpg", "Nico Marlet-inspired"]
            ]
          },
          {
            title: "Character 2",
            before: W + "s2i_woman_sketch.jpg", after: W + "s2i_woman_result.jpg", ratio: "9/16", afterLabel: "Photo-realism",
            styles: [
              ["s2i_w_semi_1.jpg", "Semi-realism"], ["s2i_w_semi_2.jpg", "Semi-realism · v2"],
              ["s2i_w_3d_1.jpg", "Stylized 3D"], ["s2i_w_3d_2.jpg", "Stylized 3D · v2"],
              ["s2i_w_photo_2.jpg", "Photo-realism · v2"], ["s2i_w_game.jpg", "Premium game art"],
              ["s2i_w_art_1.jpg", "Artist style I"], ["s2i_w_art_2.jpg", "Artist style II"],
              ["s2i_w_art_3.jpg", "Artist style III"]
            ]
          },
          {
            title: "Location",
            before: W + "s2i_place_sketch.jpg", after: W + "s2i_place_result.jpg", ratio: "4/3", afterLabel: "Night",
            side: { src: W + "s2i_place_variations.jpg", label: "Day & night variations" }
          }
        ]
      },
      {
        kind: "gallery", id: "characters",
        tag: "Character design",
        title: "Characters",
        desc: "Character design across styles — fashion casts, turnaround and face sheets for consistent characters, studio portraits on orange and illustrated heroes.",
        wide: [W + "char_lineup_1.jpg", W + "char_lineup_2.jpg"],
        images: [
          W + "character_sheet.jpg", W + "char_face_sheet.jpg", W + "char_orange_1.jpg",
          W + "char_orange_2.jpg", W + "char_powerup.jpg", W + "char_prince.jpg",
          W + "char_timewarp.jpg", W + "char_new_1.jpg", W + "char_new_2.jpg"
        ]
      },
      {
        kind: "split", id: "brand",
        tag: "Campaign",
        title: "Jaded London Products",
        desc: "A small case built around a real product line — reimagined visuals in a Y2K mood.",
        image: W + "brand_content.jpg"
      }
    ]
  },
  {
    id: "collections",
    label: "Collections",
    intro: "Two bigger sets — open them to browse.",
    items: [ { kind: "collections", ids: ["other", "music"] } ]
  },
  {
    id: "archive",
    label: "Archive 2023–2024",
    intro: "Earlier projects. The loops are short previews — open any film to watch it in full with sound.",
    items: [
      {
        kind: "archive", id: "archive-films",
        title: "Films",
        videos: [
          ["arch_dubai_tower", "Architecture film · Dubai", "Dubai Residential Tower", "An AI-generated film for a residential tower in Dubai — skyline, facade, rooftop pool and interiors."],
          ["marjan_island", "Real estate film · Ras Al Khaimah", "Al Marjan Island", "Branded residences and hotel on Al Marjan Island — masterplan, sea and lifestyle shots."],
          ["paradise_residences", "Real estate film", "Paradise Residences", "Interiors and amenities of a residential project — materials, light and calm everyday moments."],
          ["saudi_stadium", "Architecture film", "Saudi Stadium", "A stadium concept seen from the city, the concourse and the air, with fans arriving at night."],
          ["king_salman_stadium", "Stadium film", "King Salman Stadium", "Fans, flags and match-day atmosphere around King Salman Stadium."],
          ["king_abdullah", "Sports film", "King Abdullah Sports City", "Fans, fighters and the stadium at sunset — produced fully with AI."],
          ["ar_glasses", "Concept film", "AR Glasses", "A fan in a stadium box uses AR glasses to see live player stats over the pitch."],
          ["sportlab", "Concept film", "SportLab", "An interactive sports venue — smart kiosks, food spots and a batting simulator."],
          ["desert_drift", "Ad · Blockchain Sport Drift", "Desert Drift", "Drift cars tearing through desert dunes — a high-energy promo."],
          ["gaming_city", "Promo film", "Esports & Gaming", "Gamers, an esports arena, glowing karts and a city lit up at night."],
          ["al_sanadiqiyah", "Heritage film", "Al-Sanadiqiyah", "A cinematic walk through an old district in warm, dusty light."],
          ["animated_ad", "3D animation · Brand story", "X-Labs Animated Story", "A playful animated story for X-Labs — a fluffy hero, an office adventure and a holiday twist."]
        ],
        imagesTitle: "Images",
        images: [
          "arc_city_1", "arc_city_2", "arc_drift_1", "arc_drift_2", "arc_fjord", "arc_sun",
          "arc_lizard_guitar", "arc_lizard_desert", "arc_bison_mascot", "arc_skull_1", "arc_skull_2",
          "arc_blocks_1", "arc_blocks_2"
        ]
      }
    ]
  }
];

// Collections — these two open in a window
const COLLECTIONS = {
  other: {
    title: "Different Styles",
    tag: "Range",
    cover: W + "art_333.jpg",
    badge: "16 pieces · 9 styles",
    note: "A wider range of styles — grouped so it's clear how differently each one was built.",
    groups: [
      {
        style: "Painterly Game Cinematics",
        desc: "Stylized 3D game-cinematic scenes, built for fantasy world-building and RPG storytelling.",
        images: [W + "art_333.jpg", W + "art_222.jpg", W + "art_gamestyle.jpg", W + "art_aaa_gamestyle.jpg"]
      },
      {
        style: "Cinematic Environments",
        desc: "Moody, low-key environment renders with dramatic lighting and shallow depth of field.",
        images: [W + "other_env_1.jpg", W + "other_env_2.jpg"]
      },
      {
        style: "Stylized 2D Illustration",
        desc: "Bright, stylized 2D scenes — a game-ready market street and a playful outdoor illustration.",
        images: [W + "other_market_day.jpg", W + "other_fisherman.jpg"]
      },
      {
        style: "3D Character Renders",
        desc: "Pixar / Disney-style stylized 3D mascot characters, designed for brand and product concepts.",
        images: [W + "other_grillmaster.jpg", W + "other_vikingchef.jpg"]
      },
      {
        style: "Realist Fantasy Painting",
        desc: "Painterly, semi-realistic fantasy illustration, closer to traditional concept art than 3D render.",
        images: [W + "other_cloudsmith.jpg", W + "other_castle_map.jpg"]
      },
      {
        style: "Anime / Manga",
        desc: "An anime-style action illustration with dynamic linework and lighting.",
        images: [W + "other_animesmith.jpg"]
      },
      {
        style: "Storybook Watercolor",
        desc: "A warm, hand-painted children's-book illustration style.",
        images: [W + "other_storybook.jpg"]
      },
      {
        style: "Flat Vector Illustration",
        desc: "A flat-color, graphic illustration style with clean shapes and no gradients.",
        images: [W + "other_wizard.jpg"]
      },
      {
        style: "Game UI / Asset Design",
        desc: "A jackpot-board frame and UI asset built for a slot-game environment.",
        images: [W + "other_frostbound.jpg"]
      }
    ]
  },
  music: {
    title: "Music Covers",
    tag: "Music",
    cover: W + "music_thumb.jpg",
    badge: "11 covers",
    note: "Cover art for tracks and singles. Tap a cover to listen on Spotify.",
    tracks: [
      { title: "obsession", img: W + "music_obsession.jpg", url: "https://open.spotify.com/track/2Y4o7IgjNDlk2QLJcNimSb" },
      { title: "On your mind", img: W + "music_on_your_mind.jpg", url: "https://open.spotify.com/track/6ew8P3ETwJN0oJl0Don6rL" },
      { title: "how you feel", img: W + "music_how_you_feel.jpg", url: "https://open.spotify.com/album/1m0QvZumpqWViRVIi1qkaK" },
      { title: "APATHY", img: W + "music_apathy.jpg", url: "https://open.spotify.com/track/3i5KbajCeCpYS2dMPgudEV" },
      { title: "FADED", img: W + "music_faded.jpg", url: "https://open.spotify.com/track/3oWywV30qTdscwiAvay7Kx" },
      { title: "OXYGEN", img: W + "music_oxygen.jpg", url: "https://open.spotify.com/track/6xWPKivHIRCkDtQAPDm0GZ" },
      { title: "POENIA", img: W + "music_poenia.jpg", url: "https://open.spotify.com/track/2aXKAhSWPgFMePt4maaHfF", video: W + "music_poenia.mp4" },
      { title: "FIND", img: W + "music_find.jpg", url: "https://open.spotify.com/track/1HNlixSgxNfAHKHMaiJb6B" },
      { title: "eyes", img: W + "music_eyes.jpg", url: "https://open.spotify.com/track/2di298vPxGClvO5bd6dH1z" },
      { title: "can i ?", img: W + "music_can_i.jpg", url: "https://open.spotify.com/track/5gvQKJ4Po7K6GYnvZ14wgo" },
      { title: "Мало", img: W + "music_malo.jpg", url: "https://open.spotify.com/track/5Z9xJob4UmOlLgIe6anCAJ" }
    ]
  }
};

// ============================================================
// Small helpers
// ============================================================

const ICON_SOUND_OFF = '<svg class="ico-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="m17 9 4 6M21 9l-4 6"/></svg>';
const ICON_SOUND_ON = '<svg class="ico-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12"/></svg>';
const ICON_EXPAND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"/></svg>';
const ICON_PLAY = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>';
const ICON_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

const esc = s => String(s).replace(/"/g, "&quot;");

// a looping, muted video with a sound button and an "open larger" button
// m.full = a separate full-length file to open (the loop on the page is then a short silent preview)
function vidHTML(m, title){
  return `
    <div class="vid" style="aspect-ratio:${m.ratio || "16/9"}">
      <video data-src="${m.src}" ${m.full ? `data-full="${m.full}"` : ""} ${m.poster ? `poster="${m.poster}"` : ""} muted loop playsinline preload="none" data-title="${esc(title || "")}"></video>
      ${m.full ? "" : `<button class="vid-sound" type="button" aria-label="Turn sound on" aria-pressed="false">${ICON_SOUND_OFF}${ICON_SOUND_ON}</button>`}
      <button class="vid-open" type="button" aria-label="Open larger">${ICON_EXPAND}</button>
      ${m.full ? `<span class="vid-watch">${ICON_PLAY} Watch with sound</span>` : ""}
    </div>`;
}

function imgHTML(m, title){
  return `<figure class="pic" style="aspect-ratio:${m.ratio || "auto"}">
      <img src="${m.src}" alt="${esc(title || "")}" loading="lazy" class="zoomable">
    </figure>`;
}

const mediaHTML = (m, title) => (m.type === "video" ? vidHTML(m, title) : imgHTML(m, title)) + (m.label ? `<span class="media-label">${m.label}</span>` : "");

const headHTML = it => `
  <header class="project-head">
    <span class="project-tag">${it.tag}</span>
    <h3 class="project-title">${it.title}</h3>
    ${it.desc ? `<p class="project-desc">${it.desc}</p>` : ""}
  </header>`;

const panelHTML = it => `
  <div class="reel-panel">
    <span class="project-tag">${it.tag}</span>
    <h3 class="project-title">${it.title}</h3>
    ${it.desc ? `<p class="project-desc">${it.desc}</p>` : ""}
  </div>`;

function compareHTML(c, labelAfter = "Result", labelBefore = "Sketch"){
  return `
    <div class="cmp" style="aspect-ratio:${c.ratio}">
      <img class="cmp-before" src="${c.before}" alt="Sketch" loading="lazy" draggable="false">
      <img class="cmp-after" src="${c.after}" alt="${esc(labelAfter)}" loading="lazy" draggable="false">
      <span class="cmp-line"></span>
      <span class="cmp-label l">${labelAfter}</span>
      <span class="cmp-label r">${labelBefore}</span>
      <input type="range" min="0" max="100" value="50" aria-label="Move between sketch and result">
    </div>`;
}

// ============================================================
// Render: featured project
// ============================================================

document.getElementById("feature").innerHTML = `
  <div class="wrap">
    <div class="reel feature-reel">
      ${vidHTML({ src: FEATURE.video, poster: FEATURE.poster, ratio: FEATURE.ratio }, FEATURE.title)}
      ${panelHTML(FEATURE)}
    </div>
  </div>`;

// ============================================================
// Render: the feed
// ============================================================

function itemHTML(it){
  switch(it.kind){
    case "reel":
      return `
        <article class="project project--reel" id="p-${it.id}">
          <div class="wrap">
            <div class="reel">
              ${vidHTML({ src: it.video, poster: it.poster, ratio: it.ratio }, it.title)}
              ${panelHTML(it)}
            </div>
            ${it.extras ? `<div class="media-row cols-${it.extras.length}">${it.extras.map(m => `<div class="media-cell">${mediaHTML(m, it.title)}</div>`).join("")}</div>` : ""}
          </div>
        </article>`;

    case "row":
      return `
        <article class="project" id="p-${it.id}">
          <div class="wrap">
            ${headHTML(it)}
            <div class="media-row cols-${it.media.length}" ${it.cols ? `style="grid-template-columns:${it.cols}"` : ""}>
              ${it.media.map(m => `<div class="media-cell">${mediaHTML(m, it.title)}</div>`).join("")}
            </div>
          </div>
        </article>`;

    case "case":
      return `
        <article class="project" id="p-${it.id}">
          <div class="wrap">
            ${headHTML(it)}
            <div class="case" data-case>
              <div class="case-pages">
                ${it.pages.map(src => `<img src="${src}" alt="${esc(it.title)}" loading="lazy">`).join("")}
              </div>
              <div class="case-fade"></div>
            </div>
            <div class="case-actions">
              <button class="btn" type="button" data-case-toggle>Show the full case study</button>
              <a class="btn btn--ghost" href="${it.pdf}" target="_blank" rel="noopener">Open PDF</a>
            </div>
          </div>
        </article>`;

    case "sketch":
      return `
        <article class="project" id="p-${it.id}">
          <div class="wrap">
            ${headHTML(it)}
            ${compareHTML(it.wide, "Rendered")}
            ${it.sets.map(s => `
              <div class="s2i-set ${s.side ? "s2i-set--place" : ""}">
                <h4 class="s2i-title">${s.title}</h4>
                <div class="s2i-body">
                  <div class="s2i-main">${compareHTML(s, s.afterLabel)}</div>
                  ${s.styles ? `
                    <div class="s2i-styles">
                      ${s.styles.map(([src, label]) => `
                        <figure>
                          <img src="${W + src}" alt="${esc(label)}" loading="lazy" class="zoomable">
                          <figcaption>${label}</figcaption>
                        </figure>`).join("")}
                    </div>` : ""}
                  ${s.side ? `
                    <figure class="s2i-side">
                      <img src="${s.side.src}" alt="${esc(s.side.label)}" loading="lazy" class="zoomable">
                      <figcaption>${s.side.label}</figcaption>
                    </figure>` : ""}
                </div>
              </div>`).join("")}
          </div>
        </article>`;

    case "gallery":
      return `
        <article class="project" id="p-${it.id}">
          <div class="wrap">
            ${headHTML(it)}
            ${it.wide ? `<div class="gallery-wide">${it.wide.map(src => `<img src="${src}" alt="${esc(it.title)}" loading="lazy" class="zoomable">`).join("")}</div>` : ""}
            <div class="masonry">
              ${it.images.map(src => `<img src="${src}" alt="${esc(it.title)}" loading="lazy" class="zoomable">`).join("")}
            </div>
          </div>
        </article>`;

    case "split":
      return `
        <article class="project" id="p-${it.id}">
          <div class="wrap split">
            ${headHTML(it)}
            <div class="split-media"><img src="${it.image}" alt="${esc(it.title)}" loading="lazy" class="zoomable"></div>
          </div>
        </article>`;

    case "archive":
      return `
        <article class="project" id="p-${it.id}">
          <div class="wrap">
            <h3 class="archive-sub">${it.title}</h3>
            <div class="archive-grid">
              ${it.videos.map(([base, tag, title, desc]) => `
                <div class="archive-tile">
                  ${vidHTML({ src: W + base + "_preview.mp4", full: W + base + ".mp4", poster: W + base + "_poster.jpg", ratio: "16/9" }, title)}
                  <span class="project-tag">${tag}</span>
                  <h4 class="archive-title">${title}</h4>
                  <p class="archive-desc">${desc}</p>
                </div>`).join("")}
            </div>
            <h3 class="archive-sub">${it.imagesTitle}</h3>
            <div class="masonry">
              ${it.images.map(n => `<img src="${W + n}.jpg" alt="Archive work" loading="lazy" class="zoomable">`).join("")}
            </div>
          </div>
        </article>`;

    case "collections":
      return `
        <div class="wrap">
          <div class="collections">
            ${it.ids.map(id => {
              const c = COLLECTIONS[id];
              return `
                <button class="collection" type="button" data-collection="${id}" aria-label="Open ${esc(c.title)}">
                  <span class="collection-cover"><img src="${c.cover}" alt="" loading="lazy"></span>
                  <span class="collection-badge">${c.badge}</span>
                  <span class="collection-info">
                    <span class="project-tag">${c.tag}</span>
                    <span class="collection-title">${c.title}</span>
                    <span class="collection-cta">Open collection ${ICON_ARROW}</span>
                  </span>
                </button>`;
            }).join("")}
          </div>
        </div>`;
  }
  return "";
}

document.getElementById("feed").innerHTML = FEED.map(sec => `
  <section class="feed-section" id="${sec.id}">
    <div class="wrap">
      <div class="feed-section-head">
        <h2 class="feed-section-title">${sec.label}</h2>
        ${sec.intro ? `<p class="feed-section-intro">${sec.intro}</p>` : ""}
      </div>
    </div>
    ${sec.items.map(itemHTML).join("")}
  </section>`).join("");

document.getElementById("feedNav").innerHTML = FEED.map(sec =>
  `<a href="#${sec.id}">${sec.label}</a>`).join("");

// ============================================================
// "What I use" showreel — starts by itself when scrolled into view
// ============================================================

const allVideos = () => [...document.querySelectorAll("video")];

function muteAllExcept(keep){
  allVideos().forEach(v => {
    if(v === keep || v.muted) return;
    v.muted = true;
    const btn = v.parentElement.querySelector(".vid-sound, .intro-sound");
    if(btn){ btn.classList.remove("on"); btn.setAttribute("aria-pressed", "false"); btn.setAttribute("aria-label", "Turn sound on"); }
  });
}

(function(){
  const section = document.getElementById("intro");
  const v = document.getElementById("introVideo");
  if(!section || !v) return;
  const soundBtn = document.getElementById("introSound");
  const playBtn = document.getElementById("introPlay");
  const bg = document.getElementById("introBg");
  const ctx = bg && bg.getContext ? bg.getContext("2d") : null;

  v.muted = true;
  const tryPlay = () => {
    const p = v.play();
    if(p && p.catch) p.catch(() => section.classList.add("needs-tap"));
  };
  v.addEventListener("playing", () => section.classList.remove("needs-tap"));
  playBtn.addEventListener("click", () => { section.classList.remove("needs-tap"); v.play(); });

  soundBtn.addEventListener("click", () => {
    v.muted = !v.muted;
    if(!v.muted){ muteAllExcept(v); v.play(); }
    soundBtn.classList.toggle("on", !v.muted);
    soundBtn.setAttribute("aria-pressed", String(!v.muted));
    soundBtn.setAttribute("aria-label", v.muted ? "Turn sound on" : "Turn sound off");
  });

  // blurred copy of the video behind it, fills the sides on wide screens
  let visible = true, last = 0;
  if(ctx){
    bg.width = 36; bg.height = 64;
    const poster = new Image();
    poster.onload = () => { if(v.readyState < 2) ctx.drawImage(poster, 0, 0, bg.width, bg.height); };
    poster.src = v.poster;
    const draw = (t) => {
      if(visible && v.readyState >= 2 && t - last > 80){
        try{ ctx.drawImage(v, 0, 0, bg.width, bg.height); }catch(e){}
        last = t;
      }
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }

  if("IntersectionObserver" in window){
    let started = false;
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if(visible){
        if(!started){ started = true; try{ v.currentTime = 0; }catch(e){} }
        if(!section.classList.contains("needs-tap")) tryPlay();
      } else v.pause();
    }, { threshold: 0.25 }).observe(section);
  } else {
    tryPlay();
  }
})();

// ============================================================
// Feed videos — load when close, play muted when on screen,
// pause when off screen; sound button; tap to open larger
// ============================================================

(function(){
  const vids = [...document.querySelectorAll(".vid video")];

  // a video file that isn't on the site yet (e.g. not uploaded) hides its whole block
  const hide = v => {
    const block = v.closest(".media-cell") || v.closest(".project") || v.closest(".feature");
    if(block) block.style.display = "none";
  };

  const load = v => {
    if(!v.getAttribute("src") && v.dataset.src){
      v.src = v.dataset.src;
      v.preload = "auto";
      if(location.protocol.startsWith("http")){
        fetch(v.dataset.src, { method: "HEAD" }).then(r => { if(!r.ok) hide(v); }).catch(() => {});
      }
    }
  };

  vids.forEach(v => {
    const box = v.parentElement;
    const sound = box.querySelector(".vid-sound");
    if(sound) sound.addEventListener("click", e => {
      e.stopPropagation();
      load(v);
      v.muted = !v.muted;
      if(!v.muted){ muteAllExcept(v); v.play().catch(() => {}); }
      sound.classList.toggle("on", !v.muted);
      sound.setAttribute("aria-pressed", String(!v.muted));
      sound.setAttribute("aria-label", v.muted ? "Turn sound on" : "Turn sound off");
    });
    const open = () => openVideo(v);
    box.querySelector(".vid-open").addEventListener("click", e => { e.stopPropagation(); open(); });
    v.addEventListener("click", open);
  });

  if(!("IntersectionObserver" in window)){
    vids.forEach(v => { load(v); v.play().catch(() => {}); });
    return;
  }

  const nearIO = new IntersectionObserver(entries => entries.forEach(e => {
    if(e.isIntersecting){ load(e.target); nearIO.unobserve(e.target); }
  }), { rootMargin: "500px 0px" });

  const playIO = new IntersectionObserver(entries => entries.forEach(e => {
    const v = e.target;
    if(e.isIntersecting && e.intersectionRatio >= 0.35){
      if(document.body.classList.contains("modal-open")) return;
      load(v); v.play().catch(() => {});
    } else {
      v.pause();
    }
  }), { threshold: [0, 0.35] });

  vids.forEach(v => { nearIO.observe(v); playIO.observe(v); });
})();

// ============================================================
// Before / after sliders — drag anywhere on the image
// ============================================================

document.querySelectorAll(".cmp").forEach(cmp => {
  const range = cmp.querySelector("input");
  const set = val => { cmp.style.setProperty("--pos", val + "%"); range.value = val; };
  set(50);

  let dragging = false;
  const fromEvent = e => {
    const r = cmp.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - r.left, 0), r.width);
    set(Math.round(x / r.width * 1000) / 10);
  };
  cmp.addEventListener("pointerdown", e => { dragging = true; fromEvent(e); try{ cmp.setPointerCapture(e.pointerId); }catch(_){} });
  cmp.addEventListener("pointermove", e => { if(dragging) fromEvent(e); });
  ["pointerup", "pointercancel", "lostpointercapture"].forEach(t => cmp.addEventListener(t, () => { dragging = false; }));
  range.addEventListener("input", e => set(e.target.value));
});

// ============================================================
// Realism case study — open to full length on the page
// ============================================================

document.querySelectorAll("[data-case-toggle]").forEach(btn => {
  const box = btn.closest(".project").querySelector("[data-case]");
  btn.addEventListener("click", () => {
    const open = box.classList.toggle("open");
    btn.textContent = open ? "Collapse the case study" : "Show the full case study";
    if(!open) box.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ============================================================
// Experience timeline
// ============================================================

const bulletsHTML = list => `<ul class="bullets">${list.map(b => `<li>${b}</li>`).join("")}</ul>`;

document.getElementById("timeline").innerHTML = EXPERIENCE.map(role => `
  <div class="role">
    <div class="role-top">
      <span class="role-name">${role.name}</span>
      <span class="role-date">${role.date}</span>
    </div>
    ${role.role ? `<p class="role-title">${role.role}</p>` : ""}
    ${bulletsHTML(role.bullets)}
  </div>
`).join("") + `
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
  </div>`;

// ============================================================
// Window (modal): collections, larger video, larger image
// ============================================================

const modal = document.getElementById("modal");
const modalBox = document.getElementById("modalBox");
let resumeVideo = null;

function showModal(head, title, bodyHTML, extraClass = ""){
  modalBox.className = "modal-box " + extraClass;
  modalBox.innerHTML = `
    <button class="modal-close" id="modalClose" aria-label="Close">&times;</button>
    ${head ? `<div class="modal-head">${head}</div>` : ""}
    ${title ? `<h3 class="modal-title">${title}</h3>` : ""}
    <div class="modal-body">${bodyHTML}</div>`;
  modal.classList.add("open");
  document.body.classList.add("modal-open");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").addEventListener("click", closeModal);
}

function closeModal(){
  if(!modal.classList.contains("open")) return;
  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
  document.body.style.overflow = "";
  modalBox.querySelectorAll("video").forEach(v => v.pause());
  modalBox.innerHTML = "";
  if(resumeVideo){ resumeVideo.play().catch(() => {}); resumeVideo = null; }
}

modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

function openVideo(v){
  const src = v.dataset.full || v.dataset.src || v.currentSrc;
  const time = v.dataset.full ? 0 : (v.currentTime || 0);
  v.pause();
  muteAllExcept(null);
  resumeVideo = v;
  showModal("", v.dataset.title || "", `<video src="${src}" ${v.poster ? `poster="${v.poster}"` : ""} controls autoplay playsinline></video>`, "modal-box--media");
  const big = modalBox.querySelector("video");
  big.addEventListener("loadedmetadata", () => { try{ big.currentTime = time; }catch(_){} }, { once: true });
  big.muted = false;
}

document.addEventListener("click", e => {
  const img = e.target.closest("img.zoomable");
  if(!img) return;
  showModal("", "", `<img src="${img.currentSrc || img.src}" alt="${esc(img.alt)}">`, "modal-box--media");
});

function openCollection(id){
  const c = COLLECTIONS[id];
  if(!c) return;
  let body = `<p>${c.note}</p>`;
  if(c.groups){
    body += c.groups.map(g => `
      <div class="style-group">
        <h4 class="style-name">${g.style}</h4>
        <p class="style-desc">${g.desc}</p>
        ${g.images.length > 1
          ? `<div class="modal-grid style-imgs">${g.images.map(src => `<img src="${src}" alt="${esc(g.style)}" loading="lazy">`).join("")}</div>`
          : `<img src="${g.images[0]}" alt="${esc(g.style)}" loading="lazy">`}
      </div>`).join("");
  }
  if(c.tracks){
    body += `<div class="music-grid">${c.tracks.map(t => `
      <figure class="music-item">
        <a href="${t.url}" target="_blank" rel="noopener"><img src="${t.img}" alt="${esc(t.title)} cover" loading="lazy"></a>
        <figcaption>
          <span class="music-title">${t.title}</span>
          <a class="music-link" href="${t.url}" target="_blank" rel="noopener">Listen on Spotify</a>
        </figcaption>
      </figure>
      ${t.video ? `
      <figure class="music-item">
        <video src="${t.video}" controls playsinline preload="metadata"></video>
        <figcaption><span class="music-title">${t.title} video</span></figcaption>
      </figure>` : ""}`).join("")}</div>`;
  }
  muteAllExcept(null);
  showModal(c.tag, c.title, body);
}

document.querySelectorAll("[data-collection]").forEach(btn =>
  btn.addEventListener("click", () => openCollection(btn.dataset.collection)));
