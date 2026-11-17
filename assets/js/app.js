/* IMA Engineering — comportamiento del sitio */
(function () {
  "use strict";

  var CONTACT_EMAIL = "contacto@imaengineering.com.mx";

  /* ------------------------------------------------------------------
   * Textos en inglés. El español vive en el HTML y se captura al cargar.
   * ------------------------------------------------------------------ */
  var EN = {
    "skip": "Skip to content",
    "nav.services": "Services",
    "nav.method": "Method",
    "nav.assessment": "Self-assessment",
    "nav.faq": "FAQ",
    "nav.contact": "Book an assessment",
    "hero.eyebrow": "Cybersecurity &amp; IT infrastructure · Mexico City",
    "hero.title": "Know where you're exposed <em>before an attacker does.</em>",
    "hero.lead": "We measure your real posture against NIST CSF 2.0, prioritize what removes the most risk from your business and stay with you until every fix is verified.",
    "hero.cta1": "Measure my posture in 5 min",
    "hero.cta2": "Talk to a specialist",
    "hero.incident": "Active incident? Write to us now",
    "card.label": "Maturity map · NIST CSF 2.0",
    "card.example": "Example",
    "card.level": "Level",
    "card.levelv": "Developing",
    "card.weak": "Weakest",
    "card.findings": "Findings",
    "card.note": "Illustrative example: manufacturing company, 180 employees. Your real map comes from the assessment.",
    "card.privacy": "Your answers stay in your browser. Nothing is sent.",
    "fn.GV": "Govern", "fn.ID": "Identify", "fn.PR": "Protect", "fn.DE": "Detect", "fn.RS": "Respond", "fn.RC": "Recover",
    "fw.title": "We work with",
    "svc.eyebrow": "Services",
    "svc.title": "Every layer of your security, with deliverables you can audit.",
    "svc.lead": "No generic packages. We scope each engagement around your operation, your industry and your regulatory obligations.",
    "svc.dur": "Typical duration:",
    "svc.cont": "Ongoing service",
    "svc.quote": "Get a quote",
    "svc.1.t": "Penetration testing",
    "svc.1.d": "We simulate real attacks against your perimeter, web applications and internal network to find what an adversary would find first.",
    "svc.1.a": "Executive and technical report with reproducible evidence",
    "svc.1.b": "Findings rated by severity (CVSS)",
    "svc.1.c": "Retesting to verify remediation",
    "svc.1.dur": "2 to 4 weeks",
    "svc.2.t": "SOC &amp; 24/7 monitoring",
    "svc.2.d": "Continuous detection and response. We correlate events from your systems, triage alerts and contain incidents before they escalate.",
    "svc.2.a": "Log centralization and detection use cases",
    "svc.2.b": "Alert handling and incident response, after hours too",
    "svc.2.c": "Periodic activity and trend reports",
    "svc.3.t": "Cloud security",
    "svc.3.d": "Configuration, identity and architecture reviews on AWS, Azure and Google Cloud. Migrations that scale without opening new doors.",
    "svc.3.a": "Configuration review against best practices",
    "svc.3.b": "Identity and permission hardening (IAM)",
    "svc.3.c": "Secure architecture and migration",
    "svc.3.dur": "1 to 3 weeks",
    "svc.4.t": "Managed IT",
    "svc.4.d": "We run your infrastructure with security in mind: networks, servers, endpoints and accounts, with documented processes.",
    "svc.4.a": "Patch and update management",
    "svc.4.b": "Backups with restore testing",
    "svc.4.c": "User support and access management",
    "svc.5.t": "Regulatory compliance",
    "svc.5.d": "We prepare you for ISO/IEC 27001, SOC 2 and PCI DSS, and for your personal data protection obligations in Mexico.",
    "svc.5.a": "Gap analysis against the standard",
    "svc.5.b": "Policies, procedures and evidence",
    "svc.5.c": "Support throughout the audit",
    "svc.5.dur": "3 to 6 months",
    "svc.6.t": "Security awareness",
    "svc.6.d": "People are still the most common way in. We train your team to recognize and report threats.",
    "svc.6.a": "Training tailored to each team",
    "svc.6.b": "Controlled phishing simulations",
    "svc.6.c": "Progress indicators for leadership",
    "svc.6.dur": "Quarterly program",
    "m.eyebrow": "Method",
    "m.title": "From uncertainty to a measurable plan.",
    "m.lead": "Leadership understands the risk in business terms. Your technical team knows exactly what to do on Monday.",
    "m.out": "Deliverable:",
    "m.1.t": "Assess", "m.1.d": "Interviews, document review and technical testing to understand your actual exposure, not the assumed one.", "m.1.o": "maturity map",
    "m.2.t": "Prioritize", "m.2.d": "We rank findings by business impact and likelihood, not by alert volume.", "m.2.o": "roadmap",
    "m.3.t": "Remediate", "m.3.d": "We guide your team, or do the work ourselves, and verify that every fix holds.", "m.3.o": "verification with evidence",
    "m.4.t": "Monitor", "m.4.d": "We track how your posture evolves and adjust the plan as your business and the threats change.", "m.4.o": "periodic report",
    "a.eyebrow": "Self-assessment",
    "a.title": "Twelve questions. Six functions. Your starting point.",
    "a.lead": "Answer honestly: the goal is to find priorities, not to get a perfect score. The radar draws itself as you answer, and nothing is sent to any server.",
    "a.posture": "Your posture",
    "a.prev": "Back",
    "a.next": "Next",
    "d.eyebrow": "Starting point",
    "d.title": "Security posture assessment.",
    "d.lead": "The most direct way to know where you stand and what to do first. Interviews with your team, documentation review and non-intrusive technical testing.",
    "d.cta": "Request an assessment",
    "d.1.t": "Executive summary.", "d.1.d": "Your risk level explained in business terms, for leadership.",
    "d.2.t": "Maturity map.", "d.2.d": "Your level on each NIST CSF 2.0 function, with supporting evidence.",
    "d.3.t": "Prioritized findings.", "d.3.d": "Each finding with CVSS severity, impact and a concrete recommendation.",
    "d.4.t": "Roadmap.", "d.4.d": "Short, medium and long-term actions, with suggested owners.",
    "d.5.t": "Results session.", "d.5.d": "We walk your team through the report and answer questions.",
    "r.title": "Technical report · Findings",
    "r.conf": "Confidential",
    "r.cap": "Sample report format",
    "r.1.s": "CRITICAL · CVSS 9.1", "r.1.t": "VPN access without multi-factor authentication", "r.1.d": "Leaked credentials allow remote access to the internal network without a second factor.", "r.1.r": "ATT&amp;CK T1133 · Remediate within 7 days",
    "r.2.s": "HIGH · CVSS 7.5", "r.2.t": "Backups in the same domain as production", "r.2.d": "Ransomware with domain privileges could encrypt the backups too.", "r.2.r": "ATT&amp;CK T1490 · Remediate within 30 days",
    "r.3.s": "MEDIUM · CVSS 5.3", "r.3.t": "Firewall logs without centralized retention", "r.3.d": "Without logs older than 7 days, an incident can't be reconstructed.", "r.3.r": "CIS Control 8 · Remediate within 90 days",
    "p.eyebrow": "How we work",
    "p.title": "Engineering in service of your security.",
    "p.lead": "Four commitments that apply to every project, whatever its size.",
    "p.1.t": "Verifiable findings", "p.1.d": "Every finding includes evidence and steps to reproduce it. No unsupported alarms.",
    "p.2.t": "Two languages, one plan", "p.2.d": "Executive reports for leadership and technical reports for IT, aligned to the same roadmap.",
    "p.3.t": "Confidential from day one", "p.3.d": "Non-disclosure agreements and encrypted handling of your organization's information.",
    "p.4.t": "Scoped to you", "p.4.d": "We recommend what your operation needs, in the order that reduces your risk the most.",
    "f.eyebrow": "FAQ",
    "f.title": "What people usually ask us.",
    "f.lead": "Don't see your question? Write to us and we'll reply within one business day.",
    "f.1.q": "We don't know our security level. Where do we start?",
    "f.1.a": "The self-assessment on this page gives you a first idea. The next step is the posture assessment: it confirms that idea with evidence and gives you a prioritized roadmap.",
    "f.2.q": "What is the difference between a vulnerability assessment and a penetration test?",
    "f.2.a": "A vulnerability assessment identifies known weaknesses broadly and with automation. A penetration test goes further: a specialist tries to exploit and chain them to demonstrate real impact.",
    "f.3.q": "Can a penetration test disrupt our operations?",
    "f.3.a": "We agree in writing on scope, testing windows and escalation contacts. Higher-risk tests are coordinated with you and can run outside business hours.",
    "f.4.q": "Do you work with mid-sized companies or only large enterprises?",
    "f.4.a": "Both. Scope is adjusted to the size and complexity of your organization so the investment is proportional to the risk.",
    "f.5.q": "How do you protect the information you obtain during an engagement?",
    "f.5.a": "We sign non-disclosure agreements, limit access to the people on the project, encrypt information in transit and at rest, and delete it at project close as agreed.",
    "f.6.q": "We're under attack right now. What should we do?",
    "f.6.a": "Don't power off affected machines: isolate them from the network to preserve evidence. Write to us right away choosing “Active incident” as the topic and we'll get back to you as a priority.",
    "c.eyebrow": "Contact",
    "c.title": "Let's talk about your security.",
    "c.lead": "Tell us about your situation. The first conversation is free and helps define the next step.",
    "c.email": "Email",
    "c.copy": "Copy",
    "c.loc": "Location",
    "c.locv": "Mexico City, Mexico",
    "c.inc.t": "Active incident?",
    "c.inc.d": "Choose “Active incident” as the topic. These requests are handled first.",
    "c.f.name": "Full name",
    "c.f.company": "Company",
    "c.f.email": "Work email",
    "c.f.topic": "Topic",
    "c.t.diag": "Posture assessment", "c.t.pentest": "Penetration testing", "c.t.soc": "SOC &amp; monitoring",
    "c.t.cloud": "Cloud security", "c.t.it": "Managed IT", "c.t.comp": "Regulatory compliance",
    "c.t.train": "Security awareness", "c.t.inc": "Active incident", "c.t.other": "Other",
    "c.f.msg": "Message",
    "c.f.msgph": "What would you like to solve? Please don't include passwords or sensitive data.",
    "c.f.consent": "I have read the <a href=\"/aviso-de-privacidad\">privacy notice</a> (Spanish) and agree to my data being used to handle this request.",
    "c.f.send": "Send message",
    "ft.tag": "Cybersecurity &amp; IT infrastructure.",
    "ft.contact": "Contact",
    "ft.privacy": "Privacy notice",
    "ft.disclosure": "Report a vulnerability",
    "ft.rights": "All rights reserved."
  };

  var META = {
    es: {
      title: "IMA Engineering — Ciberseguridad e infraestructura TI",
      desc: "Consultoría de ciberseguridad en México: diagnóstico de postura, pruebas de penetración, SOC y monitoreo, seguridad en la nube y cumplimiento. Evalúa tu postura de seguridad en minutos."
    },
    en: {
      title: "IMA Engineering — Cybersecurity & IT infrastructure",
      desc: "Cybersecurity consulting in Mexico: posture assessments, penetration testing, SOC and monitoring, cloud security and compliance. Assess your security posture in minutes."
    }
  };

  /* Mensajes generados por JS */
  var UI = {
    es: {
      menuOpen: "Abrir menú", menuClose: "Cerrar menú",
      qOf: "Pregunta {n} de {t}",
      pick: "Elige una opción para continuar.",
      seeResults: "Ver resultados",
      start: "Comenzar",
      overall: "Nivel general de madurez",
      priorities: "Por dónde empezar",
      allGood: "Tu postura es sólida en todas las funciones. El siguiente paso es validarla con pruebas técnicas y mantenerla con monitoreo continuo.",
      discuss: "Revisar resultados con un especialista",
      restart: "Repetir autoevaluación",
      note: "Resultado orientativo basado en tus respuestas. No sustituye un diagnóstico con evidencia técnica.",
      summaryIntro: "Resultados de mi autoevaluación (NIST CSF 2.0):",
      summaryOutro: "Me gustaría revisarlos con un especialista.",
      required: "Revisa los campos marcados.",
      badEmail: "Escribe un correo válido.",
      consent: "Necesitamos tu consentimiento para responderte.",
      sending: "Enviando…",
      sent: "Gracias. Recibimos tu mensaje y te responderemos pronto.",
      sendErr: "No pudimos enviar el mensaje. Escríbenos directamente a " + CONTACT_EMAIL + ".",
      mailto: "Abrimos tu aplicación de correo con el mensaje listo; solo falta enviarlo. Si no se abrió, escríbenos a " + CONTACT_EMAIL + ".",
      captcha: "Completa la verificación de seguridad antes de enviar.",
      captchaFail: "No pudimos confirmar la verificación de seguridad. Inténtalo de nuevo.",
      subject: "Solicitud desde el sitio web",
      answered: "{n} / {t} respondidas", noData: "Sin datos", startHint: "Responde la primera pregunta para empezar a ver tu mapa.",
      partial: "Resultado parcial: faltan {n} preguntas.", priority: "PRIORIDAD", copied: "Copiado", selected: "Selecciónalo"
    },
    en: {
      menuOpen: "Open menu", menuClose: "Close menu",
      qOf: "Question {n} of {t}",
      pick: "Choose an option to continue.",
      seeResults: "See results",
      start: "Start",
      overall: "Overall maturity level",
      priorities: "Where to start",
      allGood: "Your posture is solid across every function. The next step is to validate it with technical testing and sustain it with continuous monitoring.",
      discuss: "Review results with a specialist",
      restart: "Retake self-assessment",
      note: "Indicative result based on your answers. It does not replace an evidence-based assessment.",
      summaryIntro: "My self-assessment results (NIST CSF 2.0):",
      summaryOutro: "I'd like to review them with a specialist.",
      required: "Please check the highlighted fields.",
      badEmail: "Enter a valid email address.",
      consent: "We need your consent to reply.",
      sending: "Sending…",
      sent: "Thank you. We received your message and will reply soon.",
      sendErr: "We couldn't send your message. Please write to us directly at " + CONTACT_EMAIL + ".",
      mailto: "We opened your email app with the message ready; you just need to send it. If it didn't open, write to us at " + CONTACT_EMAIL + ".",
      captcha: "Please complete the security check before sending.",
      captchaFail: "We couldn't confirm the security check. Please try again.",
      subject: "Website enquiry",
      answered: "{n} / {t} answered", noData: "No data yet", startHint: "Answer the first question to start drawing your map.",
      partial: "Partial result: {n} questions left.", priority: "PRIORITY", copied: "Copied", selected: "Select it"
    }
  };

  /* ------------------------------------------------------------------
   * Autoevaluación: dos preguntas por función de NIST CSF 2.0
   * ------------------------------------------------------------------ */
  var FUNCTIONS = ["GV", "ID", "PR", "DE", "RS", "RC"];
  var FN_NAMES = {
    es: { GV: "Gobernar", ID: "Identificar", PR: "Proteger", DE: "Detectar", RS: "Responder", RC: "Recuperar" },
    en: { GV: "Govern", ID: "Identify", PR: "Protect", DE: "Detect", RS: "Respond", RC: "Recover" }
  };

  var QUESTIONS = [
    { fn: "GV",
      es: ["¿Hay una persona o comité responsable de la ciberseguridad, con autoridad y presupuesto?", "Piensa en quién toma decisiones de seguridad y rinde cuentas a la dirección."],
      en: ["Is there a person or committee accountable for cybersecurity, with authority and budget?", "Think about who makes security decisions and reports to leadership."] },
    { fn: "GV",
      es: ["¿Tienen políticas de seguridad aprobadas por la dirección y comunicadas al personal?", "Por ejemplo: uso aceptable, contraseñas, clasificación de la información, proveedores."],
      en: ["Do you have security policies approved by leadership and communicated to staff?", "For example: acceptable use, passwords, data classification, vendors."] },
    { fn: "ID",
      es: ["¿Mantienen un inventario actualizado de equipos, sistemas, servicios en la nube y datos sensibles?", "No se puede proteger lo que no se conoce."],
      en: ["Do you keep an up-to-date inventory of devices, systems, cloud services and sensitive data?", "You can't protect what you don't know you have."] },
    { fn: "ID",
      es: ["¿Evalúan periódicamente riesgos y vulnerabilidades, por ejemplo con análisis o pruebas de penetración?", ""],
      en: ["Do you regularly assess risks and vulnerabilities, for example through scans or penetration tests?", ""] },
    { fn: "PR",
      es: ["¿La autenticación multifactor (MFA) está activa en correo, accesos remotos y cuentas administrativas?", ""],
      en: ["Is multi-factor authentication (MFA) enabled for email, remote access and admin accounts?", ""] },
    { fn: "PR",
      es: ["¿Aplican parches con un proceso definido y el personal recibe capacitación en seguridad?", ""],
      en: ["Do you patch through a defined process, and does staff receive security training?", ""] },
    { fn: "DE",
      es: ["¿Centralizan y revisan los registros (logs) de sus sistemas críticos?", ""],
      en: ["Do you centralize and review logs from your critical systems?", ""] },
    { fn: "DE",
      es: ["¿Tienen herramientas de detección (EDR/XDR) y alguien que atienda las alertas, también fuera de horario?", ""],
      en: ["Do you have detection tools (EDR/XDR) and someone handling alerts, including after hours?", ""] },
    { fn: "RS",
      es: ["¿Cuentan con un plan de respuesta a incidentes con roles, contactos y pasos definidos?", ""],
      en: ["Do you have an incident response plan with defined roles, contacts and steps?", ""] },
    { fn: "RS",
      es: ["¿Han practicado ese plan con un simulacro o ejercicio de mesa en el último año?", ""],
      en: ["Have you practiced that plan through a drill or tabletop exercise in the past year?", ""] },
    { fn: "RC",
      es: ["¿Sus respaldos críticos están aislados o son inmutables, fuera del alcance de un ransomware?", ""],
      en: ["Are your critical backups isolated or immutable, out of reach of ransomware?", ""] },
    { fn: "RC",
      es: ["¿Han probado restaurar sistemas críticos desde respaldo y saben cuánto tiempo toma?", ""],
      en: ["Have you tested restoring critical systems from backup, and do you know how long it takes?", ""] }
  ];

  var OPTIONS = {
    es: [
      ["No", "No existe o no lo sabemos."],
      ["Parcialmente", "Existe de manera informal o solo en algunas áreas."],
      ["Sí, documentado", "Está definido y se aplica de forma general."],
      ["Sí, y se mide", "Está definido, se aplica y se revisa periódicamente."]
    ],
    en: [
      ["No", "It doesn't exist, or we don't know."],
      ["Partially", "It exists informally or only in some areas."],
      ["Yes, documented", "It is defined and broadly applied."],
      ["Yes, and measured", "It is defined, applied and reviewed regularly."]
    ]
  };

  var LEVELS = {
    es: [["Inicial", "Las prácticas de seguridad son mínimas o reactivas. Hay riesgos importantes sin atender."],
         ["En desarrollo", "Existen controles, pero de forma desigual. Hay brechas que un atacante podría aprovechar."],
         ["Definido", "Tienes una base sólida. El reto es cerrar brechas puntuales y medir de forma continua."],
         ["Gestionado", "Tus prácticas están definidas, se aplican y se miden. Toca validarlas y sostenerlas."]],
    en: [["Initial", "Security practices are minimal or reactive. Significant risks remain unaddressed."],
         ["Developing", "Controls exist but unevenly. There are gaps an attacker could exploit."],
         ["Defined", "You have a solid foundation. The challenge is closing specific gaps and measuring continuously."],
         ["Managed", "Your practices are defined, applied and measured. Now validate and sustain them."]]
  };

  var RECS = {
    es: {
      GV: "Asigna un responsable de seguridad con respaldo de la dirección y formaliza un conjunto básico de políticas. Sin gobierno, el resto de los controles no se sostiene.",
      ID: "Construye un inventario de activos y datos sensibles, y programa una evaluación de vulnerabilidades para conocer tu exposición real.",
      PR: "Activa MFA en correo, accesos remotos y cuentas privilegiadas, y establece un ciclo de parches con fechas y responsables.",
      DE: "Centraliza los registros de tus sistemas críticos y define quién atiende las alertas y en cuánto tiempo, también fuera de horario.",
      RS: "Documenta un plan de respuesta a incidentes con roles y contactos, y practícalo con un ejercicio de mesa.",
      RC: "Aísla o haz inmutables tus respaldos críticos y prueba una restauración completa para conocer tu tiempo real de recuperación."
    },
    en: {
      GV: "Appoint a security owner backed by leadership and formalize a baseline set of policies. Without governance, other controls don't hold.",
      ID: "Build an inventory of assets and sensitive data, and schedule a vulnerability assessment to learn your real exposure.",
      PR: "Enable MFA for email, remote access and privileged accounts, and set up a patch cycle with dates and owners.",
      DE: "Centralize logs from critical systems and define who handles alerts and how fast, including after hours.",
      RS: "Document an incident response plan with roles and contacts, and practice it with a tabletop exercise.",
      RC: "Isolate or make your critical backups immutable and test a full restore to learn your real recovery time."
    }
  };

  /* ------------------------------------------------------------------ */

  var lang = "es";
  var ES = {};          // textos originales capturados del HTML
  var ES_ATTR = {};

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function ui(key) { return UI[lang][key]; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
    });
  }
  function store(key, val) {
    try { if (val === undefined) return window.localStorage.getItem(key); window.localStorage.setItem(key, val); }
    catch (e) { return null; }
    return null;
  }

  /* ---------- Idioma ---------- */
  function captureSpanish() {
    $all("[data-i18n]").forEach(function (el) { ES[el.getAttribute("data-i18n")] = el.innerHTML; });
    $all("[data-i18n-placeholder]").forEach(function (el) { ES_ATTR["ph:" + el.getAttribute("data-i18n-placeholder")] = el.getAttribute("placeholder"); });
  }

  function applyLang(next, persist) {
    lang = next === "en" ? "en" : "es";
    document.documentElement.lang = lang;
    $all("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      var v = lang === "en" ? EN[k] : ES[k];
      if (v !== undefined) el.innerHTML = v;
    });
    $all("[data-i18n-placeholder]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-placeholder");
      var v = lang === "en" ? EN[k] : ES_ATTR["ph:" + k];
      if (v) el.setAttribute("placeholder", v);
    });
    $all(".lang-btn").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    document.title = META[lang].title;
    var md = $('meta[name="description"]');
    if (md) md.setAttribute("content", META[lang].desc);
    syncMenuLabel();
    Assessment.render();
    if (persist) store("ima-lang", lang);
  }

  function initLang() {
    var fromUrl = /[?&]lang=(en|es)\b/.exec(window.location.search);
    var initial = fromUrl ? fromUrl[1] : (store("ima-lang") || "es");
    $all(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang"), true); });
    });
    applyLang(initial, false);
  }

  /* ---------- Menú móvil ---------- */
  var nav, toggle;
  function syncMenuLabel() {
    if (!toggle) return;
    var open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-label", open ? ui("menuClose") : ui("menuOpen"));
  }
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    syncMenuLabel();
  }
  function initMenu() {
    nav = $("#site-nav");
    toggle = $(".menu-toggle");
    if (!nav || !toggle) return;
    toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
    $all("a", nav).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); toggle.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") && !nav.contains(e.target) && !toggle.contains(e.target)) setMenu(false);
    });
    var mq = window.matchMedia ? window.matchMedia("(min-width: 921px)") : null;
    if (mq) {
      var onChange = function () { if (mq.matches) setMenu(false); };
      if (mq.addEventListener) mq.addEventListener("change", onChange); else if (mq.addListener) mq.addListener(onChange);
    }
  }

  /* ---------- Enlaces que preseleccionan un tema ---------- */
  function setTopic(value) {
    var sel = $("#cf-topic");
    if (sel && value) sel.value = value;
  }
  function initTopicLinks() {
    $all("[data-topic]").forEach(function (a) {
      a.addEventListener("click", function () { setTopic(a.getAttribute("data-topic")); });
    });
  }

  /* ---------- Servicios (pestañas) ---------- */
  function initServices() {
    var root = $("#svc");
    if (!root) return;
    var tabs = $all(".svc-tab", root);
    function show(i, focus) {
      tabs.forEach(function (t, k) {
        var on = k === i;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) panel.hidden = !on;
      });
      if (focus) tabs[i].focus();
      if (window.innerWidth <= 900) tabs[i].scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { show(i); });
      t.addEventListener("keydown", function (e) {
        var d = (e.key === "ArrowDown" || e.key === "ArrowRight") ? 1 : (e.key === "ArrowUp" || e.key === "ArrowLeft") ? -1 : 0;
        if (e.key === "Home") { e.preventDefault(); show(0, true); }
        else if (e.key === "End") { e.preventDefault(); show(tabs.length - 1, true); }
        else if (d) { e.preventDefault(); show((i + d + tabs.length) % tabs.length, true); }
      });
    });
    tabs.forEach(function (t, k) {
      var panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) { panel.hidden = k !== 0; }
      t.tabIndex = k === 0 ? 0 : -1;
    });
  }

  /* ---------- Radar NIST CSF ---------- */
  var SVGNS = "http://www.w3.org/2000/svg";
  function radarPoint(i, v) {
    var a = (-90 + i * 60) * Math.PI / 180, r = 140 * v / 3;
    return [200 + r * Math.cos(a), 200 + r * Math.sin(a)];
  }
  function svgEl(tag, attrs, parent) {
    var e = document.createElementNS(SVGNS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function buildRadar(svg) {
    var t, i, ring;
    for (t = 1; t <= 3; t++) {
      ring = [];
      for (i = 0; i < 6; i++) ring.push(radarPoint(i, t).join(","));
      svgEl("polygon", { points: ring.join(" "), "class": t === 3 ? "ring ring-outer" : "ring" }, svg);
      var tp = radarPoint(0, t);
      svgEl("text", { x: tp[0] + 6, y: tp[1] + 12, "class": "tier" }, svg).textContent = String(t);
    }
    var labels = [];
    for (i = 0; i < 6; i++) {
      var p = radarPoint(i, 3);
      svgEl("line", { x1: 200, y1: 200, x2: p[0], y2: p[1], "class": "axis" }, svg);
      var lp = radarPoint(i, 3.62);
      var anchor = Math.abs(lp[0] - 200) < 5 ? "middle" : (lp[0] > 200 ? "start" : "end");
      var dy = i === 0 ? -8 : (i === 3 ? 14 : 0);
      svgEl("text", { x: lp[0], y: lp[1] + dy, "text-anchor": anchor, "class": "lbl-code" }, svg).textContent = FUNCTIONS[i];
      labels.push(svgEl("text", { x: lp[0], y: lp[1] + dy + 15, "text-anchor": anchor, "class": "lbl" }, svg));
    }
    var center = [];
    for (i = 0; i < 6; i++) center.push("200,200");
    var shape = svgEl("polygon", { "class": "shape", points: center.join(" ") }, svg);
    var dots = [];
    for (i = 0; i < 6; i++) dots.push(svgEl("circle", { r: 4, cx: 200, cy: 200, "class": "dot" }, svg));
    return {
      labels: function () { labels.forEach(function (l, k) { l.textContent = FN_NAMES[lang][FUNCTIONS[k]]; }); },
      draw: function (vals) {
        var pts = vals.map(function (v, k) { return radarPoint(k, Math.max(v, 0.08)); });
        shape.setAttribute("points", pts.map(function (q) { return q[0].toFixed(1) + "," + q[1].toFixed(1); }).join(" "));
        dots.forEach(function (c, k) { c.setAttribute("cx", pts[k][0].toFixed(1)); c.setAttribute("cy", pts[k][1].toFixed(1)); });
      }
    };
  }

  /* ---------- Autoevaluación ---------- */
  var Assessment = (function () {
    var form, legend, hint, optionsBox, prevBtn, nextBtn, bar, fnLabel, countLabel, result, err, radar;
    var answers = [];
    var step = 0;
    var ready = false;
    var advanceTimer = null;

    function init() {
    document.documentElement.classList.add("js");
      if (!$("#assess")) return;
      form = $("#assess-form");
      legend = $("#assess-q");
      hint = $("#assess-hint");
      optionsBox = $("#assess-options");
      prevBtn = $("#assess-prev");
      nextBtn = $("#assess-next");
      bar = $("#assess-bar");
      fnLabel = $("#assess-fn");
      countLabel = $("#assess-count");
      result = $("#assess-result");
      err = document.createElement("p");
      err.className = "assess-error";
      err.setAttribute("role", "alert");
      form.appendChild(err);
      radar = buildRadar($("#assess-radar"));
      $("#r-bars").innerHTML = FUNCTIONS.map(function (f) {
        return '<div class="bar"><span class="n" data-fn="' + f + '"></span><span class="track" aria-hidden="true"><i id="bar-' + f + '"></i></span><span class="v" id="val-' + f + '">—</span></div>';
      }).join("");

      form.hidden = false;
      result.hidden = false;

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (answers[step] === undefined) { err.textContent = ui("pick"); return; }
        if (step < QUESTIONS.length - 1) { step++; render(true); }
        else { scrollIntoViewIfNeeded(result); result.focus({ preventScroll: true }); }
      });
      prevBtn.addEventListener("click", function () { if (step > 0) { clearTimeout(advanceTimer); step--; render(true); } });
      optionsBox.addEventListener("change", function (e) {
        if (!e.target || e.target.name !== "assess-opt") return;
        answers[step] = Number(e.target.value);
        err.textContent = "";
        $all(".opt", optionsBox).forEach(function (o) { o.classList.toggle("is-checked", $("input", o).checked); });
        renderResult();
        clearTimeout(advanceTimer);
        if (step < QUESTIONS.length - 1) {
          var at = step;
          advanceTimer = setTimeout(function () { if (step === at) { step++; render(true); } }, 320);
        }
      });
      $("#assess-discuss").addEventListener("click", function () {
        setTopic("diagnostico");
        var msg = $("#cf-msg");
        if (!msg) return;
        var s = scores();
        var lines = [ui("summaryIntro")];
        FUNCTIONS.forEach(function (f) { lines.push("- " + FN_NAMES[lang][f] + ": " + LEVELS[lang][levelIndex(s.byFn[f].ratio)][0]); });
        lines.push(ui("overall") + ": " + LEVELS[lang][levelIndex(s.overall)][0]);
        lines.push("", ui("summaryOutro"));
        msg.value = lines.join("\n");
      });
      $("#assess-restart").addEventListener("click", function () {
        answers = []; step = 0; render(true);
        scrollIntoViewIfNeeded(form);
      });
      result.tabIndex = -1;
      ready = true;
      render();
    }

    function scrollIntoViewIfNeeded(el) {
      var r = el.getBoundingClientRect();
      if (r.top < 0 || r.top > window.innerHeight * 0.6) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function render(focusFirst) {
      if (!ready) return;
      err.textContent = "";
      var q = QUESTIONS[step];
      var txt = q[lang];
      fnLabel.textContent = q.fn + " · " + FN_NAMES[lang][q.fn];
      countLabel.textContent = ui("qOf").replace("{n}", step + 1).replace("{t}", QUESTIONS.length);
      bar.style.width = ((step + 1) / QUESTIONS.length * 100) + "%";
      legend.textContent = txt[0];
      hint.textContent = txt[1];
      hint.hidden = !txt[1];

      var html = "";
      OPTIONS[lang].forEach(function (o, i) {
        var checked = answers[step] === i;
        html += '<label class="opt' + (checked ? " is-checked" : "") + '">' +
          '<input type="radio" name="assess-opt" value="' + i + '"' + (checked ? " checked" : "") + ">" +
          '<span class="box" aria-hidden="true"></span>' +
          '<span><strong>' + esc(o[0]) + '</strong><span class="d">' + esc(o[1]) + "</span></span></label>";
      });
      optionsBox.innerHTML = html;

      var dict = lang === "en" ? EN : ES;
      prevBtn.disabled = step === 0;
      prevBtn.textContent = dict["a.prev"];
      nextBtn.textContent = step === QUESTIONS.length - 1 ? ui("seeResults") : dict["a.next"];
      if (focusFirst) {
        var target = $("input:checked", optionsBox) || $("input", optionsBox);
        if (target) target.focus({ preventScroll: true });
      }
      renderResult();
    }

    function levelIndex(ratio) {
      if (ratio < 0.34) return 0;
      if (ratio < 0.6) return 1;
      if (ratio < 0.85) return 2;
      return 3;
    }

    /* Promedio por función solo con las preguntas respondidas. */
    function scores() {
      var byFn = {}, total = 0, counted = 0;
      FUNCTIONS.forEach(function (f) { byFn[f] = { sum: 0, max: 0, ratio: null }; });
      QUESTIONS.forEach(function (q, i) {
        if (answers[i] === undefined) return;
        byFn[q.fn].sum += answers[i]; byFn[q.fn].max += 3;
      });
      FUNCTIONS.forEach(function (f) {
        if (byFn[f].max) { byFn[f].ratio = byFn[f].sum / byFn[f].max; total += byFn[f].ratio; counted++; }
      });
      return { byFn: byFn, overall: counted ? total / counted : null };
    }

    function renderResult() {
      var s = scores();
      var n = answers.filter(function (a) { return a !== undefined; }).length;
      radar.labels();
      radar.draw(FUNCTIONS.map(function (f) { return s.byFn[f].ratio === null ? 0 : s.byFn[f].ratio * 3; }));
      $("#r-answered").textContent = ui("answered").replace("{n}", n).replace("{t}", QUESTIONS.length);
      FUNCTIONS.forEach(function (f) {
        var r = s.byFn[f].ratio, fill = $("#bar-" + f);
        $('[data-fn="' + f + '"]', result).textContent = FN_NAMES[lang][f];
        fill.style.width = r === null ? "0" : Math.max(4, Math.round(r * 100)) + "%";
        fill.style.background = r === null ? "" : (r < 0.34 ? "var(--alert)" : r < 0.6 ? "var(--warn)" : "var(--ok)");
        $("#val-" + f).textContent = r === null ? "—" : (r * 3).toFixed(1);
      });

      var levelEl = $("#r-level"), desc = $("#r-desc"), recs = $("#r-recs"), actions = $("#r-actions");
      $("#assess-discuss").textContent = ui("discuss");
      $("#assess-restart").textContent = ui("restart");
      if (s.overall === null) {
        levelEl.textContent = ui("noData");
        levelEl.style.color = "";
        $("#r-score").textContent = "— / 3.0";
        desc.textContent = ui("startHint");
        recs.innerHTML = "";
        actions.hidden = true;
        return;
      }
      var li = levelIndex(s.overall);
      levelEl.textContent = LEVELS[lang][li][0];
      levelEl.style.color = ["var(--alert)", "var(--warn)", "var(--accent)", "var(--ok)"][li];
      $("#r-score").textContent = (s.overall * 3).toFixed(1) + " / 3.0";
      desc.textContent = LEVELS[lang][li][1] + (n < QUESTIONS.length ? " " + ui("partial").replace("{n}", QUESTIONS.length - n) : "");

      var weakest = FUNCTIONS
        .filter(function (f) { return s.byFn[f].ratio !== null && s.byFn[f].ratio < 0.85; })
        .sort(function (a, b) { return s.byFn[a].ratio - s.byFn[b].ratio || FUNCTIONS.indexOf(a) - FUNCTIONS.indexOf(b); })
        .slice(0, 2);
      if (weakest.length) {
        recs.innerHTML = weakest.map(function (f) {
          return '<div class="rec"><b>' + esc(ui("priority")) + " · " + f + " " + esc(FN_NAMES[lang][f].toUpperCase()) + "</b>" + esc(RECS[lang][f]) + "</div>";
        }).join("");
      } else {
        recs.innerHTML = n === QUESTIONS.length ? '<div class="rec">' + esc(ui("allGood")) + "</div>" : "";
      }
      actions.hidden = n < QUESTIONS.length;
    }

    return { init: init, render: render };
  })();

  /* ---------- Copiar correo ---------- */
  function initCopy() {
    var btn = $("#copy-email"), val = $("#email-val");
    if (!btn || !val) return;
    function flash(key) {
      btn.textContent = ui(key);
      setTimeout(function () { btn.textContent = lang === "en" ? EN["c.copy"] : ES["c.copy"]; }, 1600);
    }
    function selectText() {
      var r = document.createRange(); r.selectNodeContents(val);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    }
    btn.addEventListener("click", function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(CONTACT_EMAIL).then(function () { flash("copied"); }, function () { selectText(); flash("selected"); });
      } else { selectText(); flash("selected"); }
    });
  }

  /* ---------- Formulario de contacto ---------- */
  function initContactForm() {
    var form = $("#contact-form");
    if (!form) return;
    var status = $("#form-status");
    var submitBtn = $('button[type="submit"]', form);
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var endpoint = (form.getAttribute("data-endpoint") || "").trim();

    /* Cloudflare Turnstile: solo cuando hay endpoint y clave del sitio. El script se
       carga desde aquí (no con <script> en el HTML) para que el callback ya exista. */
    var tsBox = $("#cf-turnstile", form);
    var tsSitekey = tsBox ? (tsBox.getAttribute("data-sitekey") || "").trim() : "";
    var tsId = null;
    var tsBroken = false;
    if (endpoint && tsSitekey) {
      window.imaTurnstileReady = function () {
        try {
          tsId = window.turnstile.render(tsBox, {
            sitekey: tsSitekey,
            action: "contact",
            theme: "dark",
            language: lang,
            "error-callback": function () { tsBroken = true; }
          });
        } catch (e) { tsBroken = true; }
      };
      var tsScript = document.createElement("script");
      tsScript.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=imaTurnstileReady";
      tsScript.async = true;
      tsScript.onerror = function () { tsBroken = true; };
      document.head.appendChild(tsScript);
    }
    function turnstileToken() {
      if (tsId === null || !window.turnstile) return "";
      return window.turnstile.getResponse(tsId) || "";
    }
    function resetTurnstile() {
      if (tsId !== null && window.turnstile) window.turnstile.reset(tsId);
    }

    function setStatus(text, kind) {
      status.textContent = text;
      status.className = "form-status" + (kind ? " is-" + kind : "");
    }

    $all("input, textarea, select", form).forEach(function (el) {
      el.addEventListener("input", function () { el.removeAttribute("aria-invalid"); });
      el.addEventListener("change", function () { el.removeAttribute("aria-invalid"); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements["nombre"];
      var email = form.elements["correo"];
      var msg = form.elements["mensaje"];
      var consent = form.elements["consentimiento"];
      var invalid = [];

      [name, msg].forEach(function (el) { if (!el.value.trim()) invalid.push(el); });
      if (!emailRe.test(email.value.trim())) invalid.push(email);
      if (!consent.checked) invalid.push(consent);
      $all("[aria-invalid]", form).forEach(function (el) { el.removeAttribute("aria-invalid"); });

      if (invalid.length) {
        invalid.forEach(function (el) { el.setAttribute("aria-invalid", "true"); });
        var text = ui("required");
        if (invalid.length === 1 && invalid[0] === email) text = ui("badEmail");
        if (invalid.length === 1 && invalid[0] === consent) text = ui("consent");
        setStatus(text, "error");
        invalid[0].focus();
        return;
      }

      // Trampa para bots: si el campo oculto tiene contenido, se descarta en silencio.
      if (form.elements["sitio_web"].value) { setStatus(ui("sent"), "ok"); form.reset(); return; }

      var topicSel = form.elements["tema"];
      var topicText = topicSel.options[topicSel.selectedIndex].text;

      if (endpoint) {
        // El token de Turnstile viaja en el campo oculto cf-turnstile-response que el
        // propio widget agrega dentro del formulario.
        if (tsSitekey && !turnstileToken()) {
          setStatus(tsBroken ? ui("sendErr") : ui("captcha"), "error");
          return;
        }
        submitBtn.disabled = true;
        setStatus(ui("sending"));
        // URLSearchParams se envía como x-www-form-urlencoded: no requiere preflight CORS
        // y Google Apps Script lo recibe en e.parameter.
        var data = new URLSearchParams();
        new FormData(form).forEach(function (v, k) { data.append(k, v); });
        data.append("idioma", lang);
        fetch(endpoint, { method: "POST", body: data, redirect: "follow" })
          .then(function (res) {
            if (!res.ok) throw new Error("HTTP " + res.status);
            return res.json();
          })
          .then(function (json) {
            if (!json || json.ok !== true) throw new Error((json && json.error) || "error");
            setStatus(ui("sent"), "ok");
            form.reset();
          })
          .catch(function (err) {
            setStatus(err && err.message === "captcha" ? ui("captchaFail") : ui("sendErr"), "error");
          })
          .then(function () {
            // Los tokens son de un solo uso: siempre se pide uno nuevo tras cada intento.
            resetTurnstile();
            submitBtn.disabled = false;
          });
        return;
      }

      // Sin servicio de envío configurado: se abre el cliente de correo con el mensaje listo.
      var company = form.elements["empresa"].value.trim();
      var body = [
        (lang === "en" ? "Name: " : "Nombre: ") + name.value.trim(),
        (lang === "en" ? "Company: " : "Empresa: ") + (company || "—"),
        (lang === "en" ? "Email: " : "Correo: ") + email.value.trim(),
        (lang === "en" ? "Topic: " : "Tema: ") + topicText,
        "",
        msg.value.trim().slice(0, 1500)
      ].join("\n");
      var subject = "[Web] " + topicText + " — " + ui("subject");
      window.location.href = "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      setStatus(ui("mailto"), "ok");
    });
  }

  /* ---------- Arranque ---------- */
  function init() {
    var y = $("#year");
    if (y) y.textContent = String(new Date().getFullYear());
    initMenu();
    initTopicLinks();
    captureSpanish();
    Assessment.init();
    initLang();
    initContactForm();
    initServices();
    initCopy();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
