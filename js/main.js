/* Nuvia Player — interações do site (demonstração com dados de exemplo) */
(() => {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const CFG = window.NUVIA_CONFIG || {};

  /* ---------------- Ícones ---------------- */
  const P = {
    image: '<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>',
    video: '<rect x="3" y="5" width="13" height="14" rx="3"/><path d="M16 10l5-3v10l-5-3"/>',
    play: '<path d="M7 4.5v15l12-7.5z"/>',
    store: '<path d="M3 10l2-6h14l2 6M4 10v10h16V10M3 10h18M9 20v-6h6v6"/>',
    gift: '<rect x="3" y="8" width="18" height="5" rx="1"/><path d="M5 13v8h14v-8M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zM12 8s2-5 4.5-3.5S15 8 12 8z"/>',
    tag: '<path d="M3 12V4h8l10 10-8 8L3 12z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
    paint: '<rect x="3" y="3" width="15" height="6" rx="2"/><path d="M18 6h3v5h-9v3"/><rect x="10.5" y="14" width="3" height="7" rx="1"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    helmet: '<path d="M4 16a8 8 0 0 1 16 0"/><path d="M2 16h20v3H2z"/><path d="M10 8.5V12M14 8.5V12"/>',
    glove: '<path d="M7 21v-5L4 12l1.5-1.5L8 13V5a1.5 1.5 0 0 1 3 0v6V4a1.5 1.5 0 0 1 3 0v7V5.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-2 4.5V21"/>',
    megaphone: '<path d="M3 11v3l12 5V6L3 11z"/><path d="M18 9.5a4 4 0 0 1 0 6"/><path d="M6 14l1 5h3l-1-4"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.4A5 5 0 0 1 21 19"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    truck: '<path d="M2 6h12v10H2zM14 10h4l3 3v3h-7"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    box: '<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/>',
    alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    zap: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
    heart: '<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>',
    coffee: '<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6V8z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2v3M12 2v3"/>',
    tv: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
    cloud: '<path d="M7 18a5 5 0 1 1 .9-9.9A6.5 6.5 0 0 1 20 10.5 4 4 0 0 1 18 18H7z"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
    check: '<path d="M5 12l5 5L20 7"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    up: '<path d="M6 15l6-6 6 6"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    expand: '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',
    send: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
    next: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    leaf: '<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',
    cart: '<path d="M3 4h2l2.5 11h11L21 7H6.5"/><circle cx="9" cy="19.5" r="1.5"/><circle cx="17" cy="19.5" r="1.5"/>',
    fire: '<path d="M12 22a7 7 0 0 0 7-7c0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-2 2-5 5-5 8a7 7 0 0 0 7 7z"/>',
    wifiOff: '<path d="M2 8.8a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/><path d="M3 3l18 18"/>',
    pill: '<rect x="2.5" y="8" width="19" height="8" rx="4" transform="rotate(-45 12 12)"/><path d="M8.5 8.5l7 7"/>',
    dumbbell: '<path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/>',
    factory: '<path d="M3 21V10l6 4V10l6 4V6h6v15z"/><path d="M7 17h2M12 17h2M17 17h2"/>',
    school: '<path d="M12 4L2 9l10 5 10-5-10-5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
    utensils: '<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 0-3 3-3 6s1 4 3 4v8"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/>',
    car: '<path d="M5 16V11l2-5h10l2 5v5"/><path d="M3 16h18v3H3z"/><circle cx="7.5" cy="13" r="1"/><circle cx="16.5" cy="13" r="1"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
    grid: '<rect x="3" y="4" width="8" height="6" rx="1.5"/><rect x="13" y="4" width="8" height="6" rx="1.5"/><rect x="3" y="14" width="8" height="6" rx="1.5"/><rect x="13" y="14" width="8" height="6" rx="1.5"/>',
    reset: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'
  };
  const icon = (n, cls = "i") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || P.tv}</svg>`;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------------- Movimento reduzido ---------------- */
  const motionBtn = $("#motionBtn");
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  let saved = null;
  try { saved = localStorage.getItem("nuvia-reduce-motion"); } catch (e) { /* sem storage */ }

  function setReduced(on, persist) {
    root.classList.toggle("reduce-motion", on);
    motionBtn.setAttribute("aria-pressed", String(on));
    const label = on ? "Ativar movimentos" : "Reduzir movimentos";
    motionBtn.title = label;
    $(".motion-btn__txt", motionBtn).textContent = label;
    if (persist) { try { localStorage.setItem("nuvia-reduce-motion", on ? "1" : "0"); } catch (e) { /* ok */ } }
  }
  const reduced = () => root.classList.contains("reduce-motion");
  setReduced(saved === null ? mq.matches : saved === "1", false);
  motionBtn.addEventListener("click", () => setReduced(!reduced(), true));
  mq.addEventListener?.("change", e => { if (saved === null) setReduced(e.matches, false); });

  /* ---------------- Toast ---------------- */
  const toastEl = $("#toast");
  let toastT;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => toastEl.classList.remove("show"), 3600);
  }

  /* ---------------- Slides / telas ---------------- */
  function slideHTML(s, extra = "") {
    return `<div class="slide ${s.theme}${extra}">
      <div class="s-deco"></div>
      <span class="s-tag">${esc(s.tag)}</span>
      <strong class="s-title">${esc(s.title)}</strong>
      ${s.price ? `<span class="s-price">${esc(s.price)}<small>${esc(s.unit || "")}</small></span>` : ""}
      ${s.sub ? `<span class="s-sub">${esc(s.sub)}</span>` : ""}
      <span class="s-ico">${icon(s.icon)}</span>
    </div>`;
  }

  // Um "rotator" alterna slides dentro de uma .screen
  const rotators = new Set();
  class Rotator {
    constructor(el, slides, { every = 4200, delay = 0, onChange } = {}) {
      this.el = el; this.every = every; this.delay = delay; this.onChange = onChange;
      this.i = 0; this.timer = null;
      this.set(slides);
      rotators.add(this);
    }
    set(slides, start = 0) {
      this.slides = slides;
      this.el.innerHTML = slides.map(s => slideHTML(s)).join("");
      this.show(start);
      this.restart();
    }
    show(i) {
      const n = this.slides.length;
      if (!n) return;
      this.i = ((i % n) + n) % n;
      $$(".slide", this.el).forEach((s, k) => s.classList.toggle("is-on", k === this.i));
      this.onChange && this.onChange(this.i);
    }
    next() { this.show(this.i + 1); }
    restart() {
      clearTimeout(this.timer); clearInterval(this.timer);
      if (this.slides.length < 2) return;
      this.timer = setTimeout(() => {
        this.next();
        this.timer = setInterval(() => !document.hidden && this.next(), this.every);
      }, this.every + this.delay);
    }
    stop() { clearTimeout(this.timer); clearInterval(this.timer); }
    destroy() { this.stop(); rotators.delete(this); }
  }

  /* ---------------- HERO ---------------- */
  const HERO = {
    hero1: [
      { tag: "Recepção", title: "Bem-vindo!", sub: "Sua empresa em movimento", theme: "t-brand", icon: "store" },
      { tag: "Agenda", title: "Treinamento às 14h", sub: "Sala 2", theme: "t-navy", icon: "calendar" }
    ],
    hero2: [
      { tag: "Oferta", title: "Destaque da semana", sub: "Confira na loja", theme: "t-orange", icon: "tag" },
      { tag: "Lançamento", title: "Novidade na vitrine", theme: "t-purple", icon: "star" },
      { tag: "Vídeo", title: "Conheça nossa história", theme: "t-cyan", icon: "play" }
    ],
    hero3: [
      { tag: "Segurança", title: "Use seu EPI", sub: "Sempre", theme: "t-yellow", icon: "helmet" },
      { tag: "Equipe", title: "Parabéns, aniversariantes!", theme: "t-pink", icon: "heart" }
    ]
  };
  $$("[data-rotator]").forEach((el, k) => new Rotator(el, HERO[el.dataset.rotator], { every: 3800, delay: k * 900 }));

  /* ---------------- Navegação ---------------- */
  const nav = $("#nav"), burger = $("#burger"), menu = $("#menu");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") !== "true";
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menu.classList.toggle("open", open);
  });
  $$("a", menu).forEach(a => a.addEventListener("click", () => {
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Abrir menu");
    menu.classList.remove("open");
  }));

  // link ativo
  const sections = ["plataforma", "como-funciona", "circuito", "segmentos", "beneficios"].map(id => document.getElementById(id));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      $$("a", menu).forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => s && spy.observe(s));

  // reveal
  const rev = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rev.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach(el => rev.observe(el));

  /* =========================================================
     2. COMO FUNCIONA
     ========================================================= */
  const DUR = [10, 15, 30];
  const LIB = [
    { id: 1, name: "Boas-vindas", type: "img", theme: "t-brand", icon: "store", dur: 10, title: "Bem-vindo!" },
    { id: 2, name: "Vídeo institucional", type: "video", theme: "t-purple", icon: "play", dur: 30, title: "Nossa história" },
    { id: 3, name: "Oferta da semana", type: "img", theme: "t-orange", icon: "tag", dur: 15, title: "Oferta da semana" },
    { id: 4, name: "Comunicado interno", type: "img", theme: "t-navy", icon: "megaphone", dur: 15, title: "Reunião às 9h" },
    { id: 5, name: "Dicas de segurança", type: "video", theme: "t-yellow", icon: "shield", dur: 30, title: "Segurança em 1º lugar" },
    { id: 6, name: "Aniversariantes", type: "img", theme: "t-pink", icon: "heart", dur: 10, title: "Parabéns!" }
  ];
  const POOL = [
    { name: "Lançamento", type: "video", theme: "t-cyan", icon: "zap", dur: 15, title: "Lançamento" },
    { name: "Horário especial", type: "img", theme: "t-green", icon: "clock", dur: 10, title: "Horário especial" },
    { name: "Campanha sazonal", type: "img", theme: "t-red", icon: "star", dur: 15, title: "Campanha sazonal" },
    { name: "Cardápio do dia", type: "img", theme: "t-teal", icon: "coffee", dur: 10, title: "Cardápio do dia" }
  ];
  const SCREENS = [
    { id: "recepcao", name: "Recepção", group: "Clientes", icon: "store" },
    { id: "salao", name: "Salão de vendas", group: "Clientes", icon: "tag" },
    { id: "balcao", name: "Balcão", group: "Clientes", icon: "star" },
    { id: "refeitorio", name: "Refeitório", group: "Equipe", icon: "coffee" },
    { id: "escritorio", name: "Escritório", group: "Equipe", icon: "users" },
    { id: "deposito", name: "Depósito", group: "Equipe", icon: "box" }
  ];
  const PERIODS = [
    { id: "manha", label: "Manhã", range: "08h–12h" },
    { id: "tarde", label: "Tarde", range: "12h–18h" },
    { id: "dia", label: "Dia todo", range: "08h–18h" }
  ];
  const DAYS = ["S", "T", "Q", "Q", "S", "S", "D"];
  const DAY_NAMES = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

  const how = {
    step: 0,
    filter: "all",
    lib: LIB.map(x => ({ ...x })),
    playlist: [1, 2, 3],
    pool: 0,
    nextId: 100,
    period: "dia",
    days: [true, true, true, true, true, true, false],
    screens: new Set(["recepcao", "salao", "balcao"]),
    published: false
  };

  const panel = $("#howPanel");
  const tabs = $$(".steps [role=tab]");
  const dots = $$(".app__dots i");
  let howCleanup = [];
  const cleanup = () => { howCleanup.forEach(f => f()); howCleanup = []; };

  const item = id => how.lib.find(x => x.id === id);
  const asSlide = it => ({ tag: it.type === "video" ? "Vídeo" : "Imagem", title: it.title, theme: it.theme, icon: it.icon });

  function goStep(n, focus) {
    how.step = Math.max(0, Math.min(3, n));
    tabs.forEach((t, k) => {
      const on = k === how.step;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
    });
    if (focus) tabs[how.step].focus();
    dots.forEach((d, k) => d.classList.toggle("on", k === how.step));
    panel.setAttribute("aria-labelledby", "tab-" + how.step);
    $("#howPrev").disabled = how.step === 0;
    const next = $("#howNext");
    next.innerHTML = how.step === 3 ? `Recomeçar ${icon("reset")}` : `Próximo ${icon("next")}`;
    renderHow();
  }

  tabs.forEach((t, k) => {
    t.addEventListener("click", () => goStep(k));
    t.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") { e.preventDefault(); goStep(how.step + 1, true); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goStep(how.step - 1, true); }
    });
  });
  $("#howPrev").addEventListener("click", () => goStep(how.step - 1));
  $("#howNext").addEventListener("click", () => {
    if (how.step === 3) { how.published = false; goStep(0); }
    else goStep(how.step + 1);
  });

  function renderHow() {
    cleanup();
    [viewUpload, viewSchedule, viewScreens, viewPublish][how.step]();
  }

  /* --- Etapa 1: Envie --- */
  function viewUpload() {
    const list = how.lib.filter(x => how.filter === "all" || x.type === how.filter);
    panel.innerHTML = `
      <div class="view">
        <div class="view__bar">
          <h3>Biblioteca</h3>
          <div class="seg" role="group" aria-label="Filtrar biblioteca">
            ${[["all", "Todos"], ["img", "Imagens"], ["video", "Vídeos"]].map(([v, l]) =>
              `<button type="button" data-f="${v}" aria-pressed="${how.filter === v}">${l}</button>`).join("")}
          </div>
        </div>
        <div class="drop">
          <span class="drop__ico">${icon("upload")}</span>
          <div><b>Arraste imagens e vídeos</b><span class="muted">Simulação · arquivos de exemplo</span></div>
          <button type="button" class="btn btn--sm btn--grad" id="fakeUpload">${icon("plus")} Simular envio</button>
        </div>
        <div class="lib" id="lib">
          ${list.map(cardHTML).join("")}
        </div>
        <p class="muted">${icon("layers").replace('class="i"', 'class="i" style="display:inline;vertical-align:-3px;margin-right:6px"')}<b>${how.playlist.length}</b> na sequência · toque em <b>+</b> para incluir</p>
      </div>`;

    $$(".seg button", panel).forEach(b => b.addEventListener("click", () => { how.filter = b.dataset.f; renderHow(); }));
    bindCards();

    $("#fakeUpload").addEventListener("click", () => {
      const tpl = POOL[how.pool % POOL.length];
      how.pool++;
      const it = { ...tpl, id: how.nextId++ };
      if (tpl.name && how.pool > POOL.length) it.name = tpl.name + " " + Math.ceil(how.pool / POOL.length);
      how.lib.unshift(it);
      if (how.filter !== "all" && how.filter !== it.type) how.filter = "all";
      renderHow();
      const card = $(`.card[data-id="${it.id}"]`, panel);
      if (!card) return;
      card.classList.add("card--uploading");
      $(".card__thumb", card).insertAdjacentHTML("beforeend", '<div class="card__bar"><span></span></div>');
      const t = setTimeout(() => {
        card.classList.remove("card--uploading");
        $(".card__bar", card)?.remove();
        toast(`“${it.name}” enviado para a biblioteca.`);
      }, reduced() ? 200 : 1450);
      howCleanup.push(() => clearTimeout(t));
    });
  }

  function cardHTML(it) {
    const on = how.playlist.includes(it.id);
    return `<div class="card" data-id="${it.id}">
      <div class="card__thumb ${it.theme}">
        <span class="card__type">${icon(it.type === "video" ? "play" : "image")}${it.type === "video" ? "Vídeo" : "Imagem"}</span>
        ${icon(it.icon)}
      </div>
      <div class="card__meta">
        <b title="${esc(it.name)}">${esc(it.name)}</b>
        <button type="button" class="card__add" aria-pressed="${on}" aria-label="${on ? "Remover da" : "Incluir na"} sequência: ${esc(it.name)}">${icon(on ? "check" : "plus")}</button>
      </div>
    </div>`;
  }
  function bindCards() {
    $$(".card__add", panel).forEach(b => b.addEventListener("click", () => {
      const id = +b.closest(".card").dataset.id;
      const k = how.playlist.indexOf(id);
      if (k >= 0) how.playlist.splice(k, 1); else how.playlist.push(id);
      how.published = false;
      renderHow();
    }));
  }

  /* --- Etapa 2: Programe --- */
  function viewSchedule() {
    const items = how.playlist.map(item).filter(Boolean);
    const total = items.reduce((a, x) => a + x.dur, 0);
    const per = PERIODS.find(p => p.id === how.period);
    panel.innerHTML = `
      <div class="view view--split">
        <div class="view">
          <div class="view__bar"><h3>Sequência</h3><span class="muted">Ciclo de <b id="loopTotal">${total}</b> s</span></div>
          ${items.length ? `<ol class="plist">${items.map((it, k) => `
            <li class="pitem" data-id="${it.id}">
              <span class="pitem__n">${k + 1}</span>
              <span class="pitem__thumb ${it.theme}">${icon(it.icon)}</span>
              <span class="pitem__name"><b>${esc(it.name)}</b><small>${it.type === "video" ? "Vídeo" : "Imagem"}</small></span>
              <label><span class="sr" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Duração de ${esc(it.name)}</span>
                <select data-dur>${DUR.map(d => `<option value="${d}" ${d === it.dur ? "selected" : ""}>${d} s</option>`).join("")}</select></label>
              <span class="pitem__ord">
                <button type="button" class="icon-btn" data-mv="-1" aria-label="Subir ${esc(it.name)}" ${k === 0 ? "disabled" : ""}>${icon("up")}</button>
                <button type="button" class="icon-btn" data-mv="1" aria-label="Descer ${esc(it.name)}" ${k === items.length - 1 ? "disabled" : ""}>${icon("down")}</button>
              </span>
            </li>`).join("")}</ol>`
          : `<div class="empty">Nenhum conteúdo na sequência. <button type="button" class="btn btn--sm btn--soft" data-go="0">Voltar à biblioteca</button></div>`}
        </div>
        <div class="sched">
          <div>
            <span class="sched__label">Prévia</span>
            <div class="mini-screen"><div class="screen" id="schedScreen"></div></div>
          </div>
          <div>
            <span class="sched__label">Linha do ciclo</span>
            <div class="tl" id="tl">${items.map(it => `<span class="${it.theme}" style="flex-grow:${it.dur}"></span>`).join("")}<i class="tl__head" id="tlHead"></i></div>
            <div class="tl-legend"><span>0 s</span><span>${total} s</span></div>
          </div>
          <div>
            <span class="sched__label">Horário</span>
            <div class="chips" role="radiogroup" aria-label="Período">
              ${PERIODS.map(p => `<button type="button" class="chip" role="radio" data-per="${p.id}" aria-checked="${p.id === how.period}">${p.label} · ${p.range}</button>`).join("")}
            </div>
          </div>
          <div>
            <span class="sched__label">Dias</span>
            <div class="chips" role="group" aria-label="Dias da semana">
              ${DAYS.map((d, k) => `<button type="button" class="chip chip--day" data-day="${k}" aria-pressed="${how.days[k]}" aria-label="${DAY_NAMES[k]}">${d}</button>`).join("")}
            </div>
          </div>
          <p class="muted">${per.label} · ${per.range} · ${how.days.filter(Boolean).length} dias</p>
        </div>
      </div>`;

    $$("[data-go]", panel).forEach(b => b.addEventListener("click", () => goStep(+b.dataset.go)));
    $$("[data-dur]", panel).forEach(s => s.addEventListener("change", () => {
      item(+s.closest(".pitem").dataset.id).dur = +s.value; how.published = false; renderHow();
    }));
    $$("[data-mv]", panel).forEach(b => b.addEventListener("click", () => {
      const id = +b.closest(".pitem").dataset.id, k = how.playlist.indexOf(id), j = k + +b.dataset.mv;
      [how.playlist[k], how.playlist[j]] = [how.playlist[j], how.playlist[k]];
      how.published = false; renderHow();
      $(`.pitem[data-id="${id}"] [data-mv="${b.dataset.mv}"]`, panel)?.focus();
    }));
    $$("[data-per]", panel).forEach(b => b.addEventListener("click", () => { how.period = b.dataset.per; renderHow(); }));
    $$("[data-day]", panel).forEach(b => b.addEventListener("click", () => {
      const k = +b.dataset.day;
      if (how.days[k] && how.days.filter(Boolean).length === 1) return toast("Mantenha ao menos um dia.");
      how.days[k] = !how.days[k]; renderHow();
    }));

    // Prévia tocando a sequência (tempo acelerado: 1 s = 100 ms)
    if (!items.length) return;
    const scr = $("#schedScreen"), head = $("#tlHead");
    const rot = new Rotator(scr, items.map(asSlide), { every: 1e9 });
    rot.stop();
    const SPEED = 100;
    let k = 0, elapsed = 0, timer;
    const lis = $$(".pitem", panel);
    const tick = () => {
      rot.show(k);
      lis.forEach((li, j) => li.classList.toggle("is-playing", j === k));
      const before = items.slice(0, k).reduce((a, x) => a + x.dur, 0);
      const step = () => {
        elapsed += 1;
        head.style.left = ((before + Math.min(elapsed, items[k].dur)) / total * 100) + "%";
        if (elapsed >= items[k].dur) { elapsed = 0; k = (k + 1) % items.length; tick(); }
        else timer = setTimeout(step, SPEED);
      };
      timer = setTimeout(step, SPEED);
    };
    tick();
    howCleanup.push(() => { clearTimeout(timer); rot.destroy(); });
  }

  /* --- Etapa 3: Selecione as TVs --- */
  function viewScreens() {
    panel.innerHTML = `
      <div class="view">
        <div class="view__bar">
          <h3>Telas e grupos</h3>
          <span class="count"><b id="selCount">${how.screens.size}</b> de ${SCREENS.length} telas</span>
        </div>
        <div class="chips" role="group" aria-label="Selecionar por grupo">
          <button type="button" class="chip chip--light" data-grp="all">Todas</button>
          <button type="button" class="chip chip--light" data-grp="Clientes">Grupo Clientes</button>
          <button type="button" class="chip chip--light" data-grp="Equipe">Grupo Equipe</button>
          <button type="button" class="chip chip--light" data-grp="none">Limpar</button>
        </div>
        <div class="picker">
          ${SCREENS.map(s => `
            <button type="button" class="pick" data-id="${s.id}" aria-pressed="${how.screens.has(s.id)}">
              <span class="pick__tv">${icon(s.icon)}</span>
              <span class="pick__check">${icon("check")}</span>
              <span class="pick__info"><b>${s.name}</b><small>${s.group}</small></span>
            </button>`).join("")}
        </div>
      </div>`;

    const sync = () => {
      $$(".pick", panel).forEach(b => b.setAttribute("aria-pressed", String(how.screens.has(b.dataset.id))));
      $("#selCount").textContent = how.screens.size;
      how.published = false;
    };
    $$(".pick", panel).forEach(b => b.addEventListener("click", () => {
      const id = b.dataset.id;
      how.screens.has(id) ? how.screens.delete(id) : how.screens.add(id);
      sync();
    }));
    $$("[data-grp]", panel).forEach(b => b.addEventListener("click", () => {
      const g = b.dataset.grp;
      if (g === "none") how.screens.clear();
      else if (g === "all") SCREENS.forEach(s => how.screens.add(s.id));
      else { how.screens.clear(); SCREENS.filter(s => s.group === g).forEach(s => how.screens.add(s.id)); }
      sync();
    }));
  }

  /* --- Etapa 4: Publique --- */
  function viewPublish() {
    const items = how.playlist.map(item).filter(Boolean);
    const per = PERIODS.find(p => p.id === how.period);
    const ready = items.length && how.screens.size;
    panel.innerHTML = `
      <div class="view pub" id="pub">
        <div class="pub__sum">
          <h3>Pronto para publicar</h3>
          <div class="pub__stat">${icon("layers")}<div><b>${items.length} conteúdos</b><small>Ciclo de ${items.reduce((a, x) => a + x.dur, 0)} s</small></div></div>
          <div class="pub__stat">${icon("clock")}<div><b>${per.label}</b><small>${per.range} · ${how.days.filter(Boolean).length} dias</small></div></div>
          <div class="pub__stat">${icon("tv")}<div><b>${how.screens.size} telas</b><small>${SCREENS.filter(s => how.screens.has(s.id)).map(s => s.name).join(", ") || "Nenhuma selecionada"}</small></div></div>
          <button type="button" class="btn btn--grad btn--lg pub__go" id="pubGo" ${ready ? "" : "disabled"}>${icon("send")} ${how.published ? "Publicar novamente" : "Publicar agora"}</button>
          ${!items.length ? `<span class="muted">Inclua conteúdos na etapa 1.</span>` : !how.screens.size ? `<span class="muted">Selecione telas na etapa 3.</span>` : ""}
        </div>
        <div class="pub__stage">
          <div class="pub__cloud">${icon("cloud")}</div>
          <div class="pub__grid">
            ${SCREENS.map(s => `
              <div class="pub__tv ${how.screens.has(s.id) ? "" : "is-off"}" data-id="${s.id}">
                <span class="beam"></span>
                <div class="tv"><div class="screen"></div></div>
                <div class="pub__lbl"><span>${s.name}</span><em>${how.screens.has(s.id) ? "Aguardando" : "—"}</em></div>
                <div class="pub__bar"><span></span></div>
              </div>`).join("")}
          </div>
          <p class="pub__note">Após sincronizar, cada TV segue exibindo mesmo sem internet.</p>
        </div>
      </div>`;

    const rots = [];
    const timers = [];
    howCleanup.push(() => { timers.forEach(clearTimeout); rots.forEach(r => r.destroy()); });

    const goLive = (tv, k) => {
      tv.classList.remove("is-sending"); tv.classList.add("is-live");
      $(".pub__lbl em", tv).textContent = "Sincronizado";
      rots.push(new Rotator($(".screen", tv), items.map(asSlide), { every: 2600, delay: k * 300 }));
    };

    const targets = $$(".pub__tv", panel).filter(t => how.screens.has(t.dataset.id));
    if (how.published) targets.forEach(goLive);

    $("#pubGo")?.addEventListener("click", () => {
      const pub = $("#pub");
      const btn = $("#pubGo");
      btn.disabled = true;
      rots.splice(0).forEach(r => r.destroy());
      targets.forEach(t => { t.classList.remove("is-live", "is-sending"); $(".screen", t).innerHTML = ""; $(".pub__lbl em", t).textContent = "Aguardando"; });
      pub.classList.add("is-sending");
      const gap = reduced() ? 60 : 420, sendT = reduced() ? 80 : 900;
      targets.forEach((tv, k) => {
        timers.push(setTimeout(() => {
          tv.classList.add("is-sending");
          $(".pub__lbl em", tv).textContent = "Sincronizando";
          timers.push(setTimeout(() => goLive(tv, k), sendT));
        }, k * gap));
      });
      timers.push(setTimeout(() => {
        pub.classList.remove("is-sending");
        how.published = true;
        btn.disabled = false;
        btn.innerHTML = `${icon("send")} Publicar novamente`;
        toast(`Publicado e sincronizado em ${targets.length} ${targets.length === 1 ? "tela" : "telas"}.`);
      }, (targets.length - 1) * gap + sendT + 100));
    });
  }

  goStep(0);

  /* =========================================================
     3. CIRCUITO DE TVs — Mercado Lumina (loja fictícia)
     ========================================================= */
  const CIRCUIT = [
    {
      id: "entrada", name: "Entrada", role: "Boas-vindas e ofertas", cat: "clientes", icon: "cart", side: "L",
      slides: [
        { tag: "Mercado Lumina", title: "Bem-vindo!", sub: "Ofertas da semana logo à frente", theme: "t-green", icon: "cart" },
        { tag: "Ofertas", title: "Semana do Economize", sub: "Confira nos corredores", theme: "t-red", icon: "tag" },
        { tag: "Horário", title: "Aberto todos os dias", sub: "07h às 22h", theme: "t-navy", icon: "clock" }
      ]
    },
    {
      id: "hortifruti", name: "Hortifrúti", role: "Frescos do dia", cat: "produtos", icon: "leaf", side: "L",
      slides: [
        { tag: "Hortifrúti", title: "Banana prata", price: "R$ 5,99", unit: "/kg", theme: "t-yellow", icon: "leaf" },
        { tag: "Hortifrúti", title: "Tomate italiano", price: "R$ 7,49", unit: "/kg", theme: "t-red", icon: "leaf" },
        { tag: "Fresquinho", title: "Chega toda manhã", sub: "Frutas, verduras e legumes", theme: "t-green", icon: "leaf" }
      ]
    },
    {
      id: "acougue", name: "Açougue", role: "Cortes e ofertas", cat: "produtos", icon: "tag", side: "L",
      slides: [
        { tag: "Açougue", title: "Picanha bovina", price: "R$ 69,90", unit: "/kg", theme: "t-red", icon: "fire" },
        { tag: "Açougue", title: "Frango inteiro", price: "R$ 12,99", unit: "/kg", theme: "t-orange", icon: "tag" },
        { tag: "Atendimento", title: "Cortes na hora", sub: "Peça ao nosso açougueiro", theme: "t-navy", icon: "users" }
      ]
    },
    {
      id: "caixas", name: "Caixas", role: "Fidelidade e avisos", cat: "clientes", icon: "gift", side: "R",
      slides: [
        { tag: "Clube Lumina", title: "Informe seu CPF e acumule pontos", theme: "t-purple", icon: "gift" },
        { tag: "Pagamento", title: "Pix, débito e crédito", theme: "t-cyan", icon: "star" },
        { tag: "Aviso", title: "Caixa rápido até 10 itens", theme: "t-brand", icon: "zap" }
      ]
    },
    {
      id: "equipe", name: "Área da equipe", role: "Comunicados internos", cat: "equipe", icon: "megaphone", side: "R",
      slides: [
        { tag: "Comunicado", title: "Reunião às 7h30", sub: "Sala de treinamento", theme: "t-navy", icon: "megaphone" },
        { tag: "Equipe", title: "Parabéns, aniversariantes do mês!", theme: "t-pink", icon: "heart" },
        { tag: "Lembrete", title: "Confira a escala da semana", sub: "Quadro da liderança", theme: "t-purple", icon: "calendar" }
      ]
    },
    {
      id: "deposito", name: "Depósito", role: "Prioridades de reposição", cat: "equipe", icon: "box", side: "R",
      slides: [
        { tag: "Prioridade", title: "Repor hortifrúti e laticínios", theme: "t-red", icon: "box" },
        { tag: "Recebimento", title: "Doca 1 · entrega às 14h", theme: "t-cyan", icon: "truck" },
        { tag: "Segurança", title: "Use EPI no depósito", theme: "t-yellow", icon: "helmet" }
      ]
    }
  ];
  const CAT_LABEL = { clientes: "Clientes", produtos: "Produtos", equipe: "Equipe" };
  const CAMPAIGNS = [
    {
      id: "ofertas", name: "Fim de semana de ofertas", desc: "Clientes e produtos", targets: ["entrada", "hortifruti", "acougue", "caixas"],
      slide: { camp: true, tag: "Campanha", title: "Fim de semana de ofertas", sub: "Sexta a domingo", theme: "t-rainbow", icon: "tag" }
    },
    {
      id: "churrasco", name: "Festival do Churrasco", desc: "Entrada e açougue", targets: ["entrada", "acougue"],
      slide: { camp: true, tag: "Campanha", title: "Festival do Churrasco", sub: "Cortes selecionados", theme: "t-orange", icon: "fire" }
    },
    {
      id: "inventario", name: "Aviso de inventário", desc: "Somente equipe", targets: ["equipe", "deposito"],
      slide: { camp: true, tag: "Equipe", title: "Inventário no domingo", sub: "Escala no quadro da liderança", theme: "t-navy", icon: "box" }
    }
  ];

  const circ = {
    filter: "todas", camp: CAMPAIGNS[0].id, targets: new Set(CAMPAIGNS[0].targets),
    applied: null, appliedTo: new Set(), offline: false, queued: null, busy: false
  };
  const stage = $("#stage"), colL = $("#colL"), colR = $("#colR"), hub = $("#hub"), svg = $("#stageLines");
  const tvRot = {};

  CIRCUIT.forEach((tv, k) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "ctv";
    b.dataset.id = tv.id;
    b.setAttribute("aria-label", `${tv.name}: ${tv.role}. Ampliar programação`);
    b.innerHTML = `
      <div class="tv"><div class="screen"></div><span class="ctv__sync"><i></i></span></div>
      <span class="ctv__flag">Campanha</span>
      <span class="ctv__net">${icon("wifiOff")}Offline · conteúdo local</span>
      <span class="ctv__zoom">${icon("expand")}</span>
      <span class="ctv__cap"><b>${icon(tv.icon)}${tv.name}</b><small>${tv.role}</small></span>`;
    (tv.side === "L" ? colL : colR).appendChild(b);
    tvRot[tv.id] = new Rotator($(".screen", b), tv.slides, { every: 4400, delay: k * 650 });
    b.addEventListener("click", () => openTV(tv.id));
  });

  // Painel central: status por tela
  const hubList = $("#hubList");
  hubList.innerHTML = CIRCUIT.map(tv => `<li data-id="${tv.id}"><i></i><span>${tv.name}</span><em>${esc(tv.slides[0].title)}</em></li>`).join("");
  const hubEm = id => $(`li[data-id="${id}"] em`, hubList);
  Object.entries(tvRot).forEach(([id, r]) => {
    r.onChange = i => {
      const li = $(`li[data-id="${id}"]`, hubList);
      if (li && !li.classList.contains("is-sync")) hubEm(id).textContent = r.slides[i].title;
    };
  });

  const hubClock = $("#hubClock");
  const tickClock = () => { hubClock.textContent = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }); };
  tickClock(); setInterval(tickClock, 15000);

  // Linhas painel → TVs
  function drawLines() {
    if (getComputedStyle(svg).display === "none") return;
    const sr = stage.getBoundingClientRect(), hr = hub.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${sr.width} ${sr.height}`);
    let html = `<defs><linearGradient id="g-line2" x1="0" x2="1"><stop offset="0" stop-color="#2BD3FF"/><stop offset="1" stop-color="#8B5CF6"/></linearGradient></defs>`;
    CIRCUIT.forEach((tv, k) => {
      const r = $(`.ctv[data-id="${tv.id}"] .tv`, stage).getBoundingClientRect();
      const left = tv.side === "L";
      const idx = left ? k : k - 3;
      const x1 = (left ? hr.left : hr.right) - sr.left;
      const y1 = hr.top - sr.top + hr.height * (0.3 + idx * 0.2);
      const x2 = (left ? r.right : r.left) - sr.left;
      const y2 = r.top - sr.top + r.height / 2;
      const mx = (x1 + x2) / 2;
      const d = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
      html += `<g data-id="${tv.id}"><path class="ln-base" d="${d}"/><path class="ln-flow idle" stroke="url(#g-line2)" pathLength="100" d="${d}" style="animation-delay:${k * .55}s"/>
        <circle cx="${x2}" cy="${y2}" r="3.5" class="ln-dot"/><circle cx="${x1}" cy="${y1}" r="3" fill="#8B5CF6"/></g>`;
    });
    svg.innerHTML = html;
    applyFilter();
  }
  new ResizeObserver(() => requestAnimationFrame(drawLines)).observe(stage);
  window.addEventListener("load", drawLines);

  // Filtros
  function applyFilter() {
    CIRCUIT.forEach(tv => {
      const dim = circ.filter !== "todas" && tv.cat !== circ.filter;
      $(`.ctv[data-id="${tv.id}"]`, stage).classList.toggle("is-dim", dim);
      $(`g[data-id="${tv.id}"]`, svg)?.classList.toggle("dim", dim);
      $(`li[data-id="${tv.id}"]`, hubList).classList.toggle("is-dim", dim);
    });
  }
  $$("[data-filter]").forEach(b => b.addEventListener("click", () => {
    circ.filter = b.dataset.filter;
    $$("[data-filter]").forEach(x => { const on = x === b; x.classList.toggle("is-on", on); x.setAttribute("aria-pressed", String(on)); });
    applyFilter();
  }));

  // Campanhas
  const campList = $("#campList"), campTargets = $("#campTargets");
  campList.innerHTML = CAMPAIGNS.map(c => `
    <button type="button" class="copt" role="radio" data-camp="${c.id}" aria-checked="${c.id === circ.camp}">
      <div class="screen"></div>
      <b>${c.name}</b><small>${c.desc}</small>
    </button>`).join("");
  $$(".copt", campList).forEach((b, k) => {
    const c = CAMPAIGNS[k];
    new Rotator($(".screen", b), [c.slide]);
    b.addEventListener("click", () => {
      circ.camp = c.id;
      circ.targets = new Set(c.targets);
      $$(".copt", campList).forEach(x => x.setAttribute("aria-checked", String(x === b)));
      renderTargets();
    });
    b.addEventListener("keydown", e => {
      if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(e.key)) return;
      e.preventDefault();
      const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
      const all = $$(".copt", campList), n = all[(k + dir + all.length) % all.length];
      n.focus(); n.click();
    });
  });

  function renderTargets() {
    campTargets.innerHTML = CIRCUIT.map(tv =>
      `<button type="button" class="chip" data-t="${tv.id}" aria-pressed="${circ.targets.has(tv.id)}">${tv.name}</button>`).join("");
    $$("[data-t]", campTargets).forEach(b => b.addEventListener("click", () => {
      const id = b.dataset.t;
      circ.targets.has(id) ? circ.targets.delete(id) : circ.targets.add(id);
      b.setAttribute("aria-pressed", String(circ.targets.has(id)));
    }));
  }
  renderTargets();

  const status = $("#campStatus"), hubCamp = $("#hubCampaign"), resetBtn = $("#campReset"), applyBtn = $("#campApply");
  const hubNet = $("#hubNet");
  const plural = n => `${n} ${n === 1 ? "tela" : "telas"}`;

  function restoreAll() {
    circ.appliedTo.forEach(id => {
      const tv = CIRCUIT.find(t => t.id === id);
      tvRot[id].set(tv.slides);
      $(`.ctv[data-id="${id}"]`, stage).classList.remove("has-camp");
      $(`li[data-id="${id}"]`, hubList).classList.remove("is-camp");
    });
    circ.appliedTo.clear();
    circ.applied = null;
  }

  function setHubNet() {
    hubNet.classList.toggle("is-off", circ.offline);
    hubNet.querySelector("span").innerHTML = circ.offline
      ? `Sem internet · telas exibindo conteúdo sincronizado`
      : `Online · <b>${CIRCUIT.length}/${CIRCUIT.length}</b> telas sincronizadas`;
  }

  // Distribui e sincroniza a campanha nas telas
  function deploy(c, ids) {
    circ.busy = true;
    applyBtn.disabled = true;
    restoreAll();
    circ.applied = c.id;
    hubCamp.textContent = c.name;
    const now = $(".hub__now");
    now.classList.remove("flash"); void now.offsetWidth; now.classList.add("flash");
    hubNet.querySelector("span").innerHTML = `Sincronizando · <b>0/${ids.length}</b> telas`;

    const syncT = reduced() ? 50 : 1300;
    let done = 0;
    ids.forEach((id, k) => {
      const el = $(`.ctv[data-id="${id}"]`, stage);
      const li = $(`li[data-id="${id}"]`, hubList);
      const flow = $(`g[data-id="${id}"] .ln-flow`, svg);
      setTimeout(() => {
        if (flow) { flow.classList.remove("idle", "go"); void flow.getBBox(); flow.classList.add("go"); }
        el.classList.add("is-syncing");
        li.classList.add("is-sync");
        hubEm(id).textContent = "Sincronizando…";
        setTimeout(() => {
          const tv = CIRCUIT.find(t => t.id === id);
          el.classList.remove("is-syncing");
          li.classList.remove("is-sync");
          tvRot[id].set([c.slide, ...tv.slides]);
          el.classList.add("has-camp");
          el.classList.remove("is-hit"); void el.offsetWidth; el.classList.add("is-hit");
          li.classList.add("is-camp");
          circ.appliedTo.add(id);
          done++;
          hubNet.querySelector("span").innerHTML = done < ids.length
            ? `Sincronizando · <b>${done}/${ids.length}</b> telas`
            : `Online · <b>${CIRCUIT.length}/${CIRCUIT.length}</b> telas sincronizadas`;
          if (flow) setTimeout(() => { flow.classList.remove("go"); flow.classList.add("idle"); }, 1200);
          if (done === ids.length) {
            circ.busy = false;
            applyBtn.disabled = false;
            status.textContent = `“${c.name}” sincronizada em ${plural(ids.length)}. Pronta para rodar offline.`;
          }
        }, syncT);
      }, reduced() ? 0 : 500 + k * 260);
    });
    status.textContent = `Sincronizando “${c.name}” em ${plural(ids.length)}…`;
    resetBtn.disabled = false;
  }

  applyBtn.addEventListener("click", () => {
    if (circ.busy) return;
    if (!circ.targets.size) { toast("Selecione ao menos uma tela."); return; }
    const c = CAMPAIGNS.find(x => x.id === circ.camp);
    const ids = CIRCUIT.map(t => t.id).filter(id => circ.targets.has(id));
    if (circ.offline) {
      circ.queued = { c, ids };
      status.textContent = `Sem internet: “${c.name}” ficou na fila e sincroniza quando a conexão voltar.`;
      hubCamp.textContent = `${c.name} · pendente`;
      return;
    }
    const target = window.matchMedia("(max-width: 920px)").matches ? hub : stage;
    if (target.getBoundingClientRect().top < 0) target.scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" });
    deploy(c, ids);
  });

  resetBtn.addEventListener("click", () => {
    if (circ.busy) return;
    restoreAll();
    circ.queued = null;
    hubCamp.textContent = "Programação padrão";
    status.textContent = "Programação padrão restaurada.";
    resetBtn.disabled = true;
  });

  // Simulação de queda de internet
  const netToggle = $("#netToggle");
  netToggle.addEventListener("click", () => {
    if (circ.busy) { toast("Aguarde a sincronização terminar."); return; }
    circ.offline = !circ.offline;
    netToggle.setAttribute("aria-pressed", String(circ.offline));
    stage.classList.toggle("is-offline", circ.offline);
    setHubNet();
    if (circ.offline) {
      status.textContent = "Internet desligada. As telas continuam exibindo o conteúdo já sincronizado.";
    } else if (circ.queued) {
      const { c, ids } = circ.queued;
      circ.queued = null;
      status.textContent = "Conexão restabelecida. Sincronizando pendências…";
      deploy(c, ids);
    } else {
      status.textContent = "Conexão restabelecida. Telas online.";
    }
  });

  /* ---------- Detalhe da TV ---------- */
  const dlg = $("#tvDialog"), dScreen = $("#tvdScreen"), dList = $("#tvdList"), dProg = $("#tvdProgress");
  let dRot = null, lastFocus = null;
  const D_EVERY = 4000;

  function openTV(id) {
    const tv = CIRCUIT.find(t => t.id === id);
    const slides = tvRot[id].slides;
    lastFocus = document.activeElement;
    $("#tvdTitle").textContent = tv.name;
    $("#tvdRole").textContent = tv.role;
    $("#tvdCat").textContent = CAT_LABEL[tv.cat];
    dProg.innerHTML = slides.map(() => "<span><i></i></span>").join("");
    dProg.style.setProperty("--dur", D_EVERY + "ms");
    dList.innerHTML = slides.map((s, k) => `
      <li><button type="button" data-k="${k}">
        <span class="sw ${s.theme}"></span>
        <span><b>${esc(s.title)}</b><small>${s.camp ? "Campanha" : esc(s.tag)}</small></span>
        <em>${s.camp ? "15 s" : (k % 2 ? "10 s" : "15 s")}</em>
      </button></li>`).join("");

    const mark = i => {
      $$("button", dList).forEach((b, k) => b.classList.toggle("is-on", k === i));
      $$("span", dProg).forEach((s, k) => {
        s.className = k < i ? "done" : "";
        const bar = s.firstElementChild; bar.style.animation = "none"; void bar.offsetWidth; bar.style.animation = "";
        if (k === i) s.className = reduced() ? "done" : "run";
      });
    };
    dRot?.destroy();
    dRot = new Rotator(dScreen, slides, { every: D_EVERY, onChange: mark });
    mark(0);
    $$("button", dList).forEach(b => b.addEventListener("click", () => { dRot.show(+b.dataset.k); dRot.restart(); }));

    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
    $("#tvdClose").focus();
  }
  function closeTV() {
    dRot?.destroy(); dRot = null;
    if (dlg.open) dlg.close();
    lastFocus?.focus?.();
  }
  $("#tvdClose").addEventListener("click", closeTV);
  dlg.addEventListener("click", e => { if (e.target === dlg) closeTV(); });
  dlg.addEventListener("close", () => { dRot?.destroy(); dRot = null; });

  /* =========================================================
     5. CTA — parede de telas + contato configurável
     ========================================================= */
  const wall = $("#ctaWall");
  wall.innerHTML = "<i></i>".repeat(90);
  const cells = $$("i", wall);
  setInterval(() => {
    if (document.hidden || reduced()) return;
    const c = cells[Math.floor(Math.random() * cells.length)];
    c.classList.add("lit");
    setTimeout(() => c.classList.remove("lit"), 2400);
  }, 260);

  function contactHref() {
    const c = CFG.contato || {};
    const msg = c.mensagem || "";
    if (c.url && c.url.trim()) return c.url.trim();
    if (c.whatsapp && c.whatsapp.replace(/\D/g, "")) return `https://wa.me/${c.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
    if (c.email && c.email.trim()) return `mailto:${c.email.trim()}?subject=${encodeURIComponent(msg || "Demonstração Nuvia Player")}`;
    return null;
  }
  const ctaBtn = $("#ctaBtn");
  const href = contactHref();
  if (href) {
    ctaBtn.href = href;
    if (/^https?:/.test(href)) { ctaBtn.target = "_blank"; ctaBtn.rel = "noopener"; }
  } else {
    ctaBtn.addEventListener("click", e => {
      e.preventDefault();
      toast("Contato comercial ainda não configurado (js/config.js).");
    });
  }

  // Link externo do painel de controle
  const panelUrl = ((CFG.painel || {}).url || "").trim();
  $$("[data-panel]").forEach(a => {
    if (panelUrl) { a.href = panelUrl; a.target = "_blank"; a.rel = "noopener"; }
    else a.addEventListener("click", e => { e.preventDefault(); toast("Link do painel ainda não configurado (js/config.js)."); });
  });

  /* =========================================================
     PLATAFORMA — mini demonstrações dos recursos
     ========================================================= */
  const FX = {
    pub1: [{ tag: "Recepção", title: "Bem-vindo!", theme: "t-brand", icon: "store" }, { tag: "Recepção", title: "Nova campanha", theme: "t-purple", icon: "star" }],
    pub2: [{ tag: "Loja", title: "Ofertas", theme: "t-orange", icon: "tag" }, { tag: "Loja", title: "Nova campanha", theme: "t-purple", icon: "star" }],
    pub3: [{ tag: "Equipe", title: "Comunicado", theme: "t-navy", icon: "megaphone" }, { tag: "Equipe", title: "Nova campanha", theme: "t-purple", icon: "star" }],
    off: [
      { tag: "Vídeo", title: "Institucional", theme: "t-brand", icon: "play" },
      { tag: "Oferta", title: "Destaque do dia", theme: "t-orange", icon: "tag" },
      { tag: "Aviso", title: "Horário especial", theme: "t-teal", icon: "clock" }
    ]
  };
  $$("[data-fx]").forEach((el, k) => new Rotator(el, FX[el.dataset.fx], { every: 3000, delay: el.dataset.fx.startsWith("pub") ? 0 : k * 200 }));

  // Sincronização: barras de progresso em loop
  const syncRows = $$("#fxSync li").map(li => ({ li, em: $("em", li), bar: $("b", li), p: 0, v: 0 }));
  const resetSync = () => syncRows.forEach((r, k) => { r.p = -k * 18; r.v = 2.2 + Math.random() * 2.5; r.li.classList.remove("ok"); });
  resetSync();
  let syncHold = 0;
  setInterval(() => {
    if (document.hidden) return;
    if (reduced()) { syncRows.forEach(r => { r.em.textContent = "100%"; r.bar.style.width = "100%"; r.li.classList.add("ok"); }); return; }
    if (syncHold > 0) { if (--syncHold === 0) resetSync(); return; }
    let all = true;
    syncRows.forEach(r => {
      r.p = Math.min(100, r.p + r.v);
      const p = Math.max(0, Math.round(r.p));
      r.em.textContent = p + "%";
      r.bar.style.width = p + "%";
      r.li.classList.toggle("ok", p >= 100);
      if (p < 100) all = false;
    });
    if (all) syncHold = 22;
  }, 110);

  // Offline: alterna a conexão, a tela não para
  const fxOff = $("#fxOff");
  setInterval(() => {
    if (document.hidden || reduced()) return;
    const off = !fxOff.classList.contains("is-off");
    fxOff.classList.toggle("is-off", off);
    $(".fx-off__net b", fxOff).textContent = off ? "Offline · reproduzindo local" : "Online";
  }, 3600);

  // Status das telas
  const ST = [
    { n: "Recepção", c: ["Boas-vindas", "Institucional", "Agenda do dia"] },
    { n: "Vitrine", c: ["Ofertas", "Lançamento", "Destaque do dia"] },
    { n: "Refeitório", c: ["Cardápio", "Comunicado", "Aniversariantes"] },
    { n: "Depósito", c: ["Prioridades", "Segurança", "Recebimento"] }
  ];
  const fxStatus = $("#fxStatus");
  fxStatus.innerHTML = ST.map(s => `<li><i></i><b>${s.n}</b><em>${s.c[0]}</em></li>`).join("");
  let stTick = 0;
  setInterval(() => {
    if (document.hidden || reduced()) return;
    stTick++;
    $$("li", fxStatus).forEach((li, k) => {
      const off = k === 3 && stTick % 4 >= 2;
      li.classList.toggle("is-off", off);
      $("em", li).textContent = off ? "Offline · conteúdo local" : ST[k].c[(stTick + k) % 3];
    });
  }, 2400);

  // Grupos
  const fxGrp = $("#fxGrp"), grps = ["a", "b", "c"];
  let gi = 0;
  const showGrp = () => {
    const g = grps[gi % 3];
    $$("[data-g]", fxGrp).forEach(el => el.classList.toggle("on", el.dataset.g === g));
  };
  showGrp();
  setInterval(() => { if (!document.hidden && !reduced()) { gi++; showGrp(); } }, 2200);

  /* =========================================================
     SEGMENTOS
     ========================================================= */
  const SEGS = [
    { id: "super", name: "Supermercados", icon: "cart", cap: "Ofertas por setor e avisos nos caixas.", slides: [
      { tag: "Ofertas", title: "Ofertas da semana", sub: "Confira nos corredores", theme: "t-red", icon: "tag" },
      { tag: "Hortifrúti", title: "Fresquinho todo dia", theme: "t-green", icon: "leaf" },
      { tag: "Caixas", title: "Caixa rápido até 10 itens", theme: "t-brand", icon: "cart" }] },
    { id: "varejo", name: "Lojas e varejo", icon: "tag", cap: "Vitrine viva, lançamentos e campanhas.", slides: [
      { tag: "Vitrine", title: "Nova coleção chegou", theme: "t-purple", icon: "star" },
      { tag: "Campanha", title: "Semana especial", sub: "Somente nesta loja", theme: "t-orange", icon: "tag" },
      { tag: "Atendimento", title: "Peça ajuda a um vendedor", theme: "t-navy", icon: "users" }] },
    { id: "saude", name: "Farmácias e clínicas", icon: "pill", cap: "Orientação na espera e campanhas de saúde.", slides: [
      { tag: "Recepção", title: "Aguarde ser chamado", sub: "Acompanhe pelo painel", theme: "t-teal", icon: "clock" },
      { tag: "Saúde", title: "Campanha de vacinação", sub: "Informe-se na recepção", theme: "t-cyan", icon: "shield" },
      { tag: "Bem-estar", title: "Beba água e cuide-se", theme: "t-green", icon: "heart" }] },
    { id: "food", name: "Restaurantes", icon: "utensils", cap: "Cardápio do dia direto na tela.", slides: [
      { tag: "Cardápio", title: "Prato do dia", sub: "Pergunte ao garçom", theme: "t-orange", icon: "utensils" },
      { tag: "Sobremesa", title: "Doce da casa", theme: "t-pink", icon: "heart" },
      { tag: "Pedidos", title: "Peça pelo balcão", theme: "t-navy", icon: "coffee" }] },
    { id: "fit", name: "Academias", icon: "dumbbell", cap: "Grade de aulas e avisos aos alunos.", slides: [
      { tag: "Aulas", title: "Funcional às 19h", sub: "Sala 2", theme: "t-red", icon: "dumbbell" },
      { tag: "Dica", title: "Hidrate-se durante o treino", theme: "t-cyan", icon: "drop" },
      { tag: "Aviso", title: "Horário de feriado", theme: "t-purple", icon: "calendar" }] },
    { id: "ind", name: "Indústrias", icon: "factory", cap: "Segurança, metas e comunicação no chão de fábrica.", slides: [
      { tag: "Segurança", title: "Use seu EPI", sub: "Sempre", theme: "t-safety", icon: "helmet" },
      { tag: "DDS", title: "Diálogo de segurança às 7h", theme: "t-yellow", icon: "megaphone" },
      { tag: "Turno", title: "Metas do turno no ar", theme: "t-navy", icon: "factory" }] },
    { id: "corp", name: "Escritórios", icon: "building", cap: "Comunicação interna em todos os andares.", slides: [
      { tag: "Recepção", title: "Bem-vindo, visitante", theme: "t-brand", icon: "building" },
      { tag: "Agenda", title: "Reunião geral às 10h", sub: "Auditório", theme: "t-navy", icon: "calendar" },
      { tag: "Equipe", title: "Aniversariantes do mês", theme: "t-pink", icon: "heart" }] },
    { id: "edu", name: "Escolas", icon: "school", cap: "Avisos, eventos e calendário para alunos.", slides: [
      { tag: "Avisos", title: "Semana de provas", sub: "Confira o calendário", theme: "t-purple", icon: "school" },
      { tag: "Matrículas", title: "Matrículas abertas", theme: "t-green", icon: "star" },
      { tag: "Biblioteca", title: "Aberta até as 21h", theme: "t-teal", icon: "clock" }] }
  ];
  const segList = $("#segList"), segCap = $("#segCap");
  const segRot = new Rotator($("#segScreen"), SEGS[0].slides, { every: 3200 });
  segList.innerHTML = SEGS.map((s, k) => `
    <button type="button" role="tab" class="seg-btn" data-k="${k}" aria-selected="${k === 0}" ${k ? 'tabindex="-1"' : ""}>
      <span class="seg-btn__ico">${icon(s.icon)}</span><b>${s.name}</b>
    </button>`).join("");
  const segBtns = $$(".seg-btn", segList);
  let segAuto = true, segI = 0;
  const selectSeg = (k, focus) => {
    segI = (k + SEGS.length) % SEGS.length;
    segBtns.forEach((b, j) => { b.setAttribute("aria-selected", String(j === segI)); b.tabIndex = j === segI ? 0 : -1; });
    if (focus) segBtns[segI].focus();
    segRot.set(SEGS[segI].slides);
    segCap.innerHTML = `<b>${SEGS[segI].name}</b> · ${SEGS[segI].cap}`;
  };
  segBtns.forEach((b, k) => {
    b.addEventListener("click", () => { segAuto = false; selectSeg(k); });
    b.addEventListener("keydown", e => {
      const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (d) { e.preventDefault(); segAuto = false; selectSeg(segI + d, true); }
    });
  });
  selectSeg(0);
  setInterval(() => { if (segAuto && !document.hidden && !reduced()) selectSeg(segI + 1); }, 9600);

  $("#year").textContent = new Date().getFullYear();
})();
