/* ===== EDIT YOUR PROJECTS HERE =====
   Replace text in [brackets] with real results. status: "Academic project" | "Team project" */
const PROJECTS = [
  {
    title: "Customer Segmentation Analysis Using K-Means Clustering",
    cat: "Data Analytics",
    tools: "RapidMiner, Altair AI Studio",
    status: "Academic project",
    cover: "assets/projects/customer-segmentation/workflow.jpeg",
    desc: "A data analytics project focused on identifying customer segments using the K-Means clustering method.",
    facts: [
      ["Dataset", "Mall Customers"],
      ["Records", "200"],
      ["Method", "K-Means (k = 5)"],
      ["Tool", "RapidMiner (Altair AI Studio)"],
    ],
    detail: {
      overview:
        "This project segments mall customers with K-Means clustering in RapidMiner (Altair AI Studio). Using age, annual income, and spending score, it groups 200 customers into five segments and examines how each segment differs.",
      objective:
        "To identify distinct customer segments from the Mall Customers dataset and interpret the characteristics of each segment, so the results can support a better understanding of customer behavior.",
      dataset:
        "Mall Customers dataset with 200 records. The attributes used for clustering are Age, Annual Income (k$), and Spending Score (1–100).",
      steps: [
        "Data Selection",
        "Attribute Selection",
        "Data Normalization",
        "K-Means Clustering (k = 5)",
        "Cluster Performance Evaluation",
      ],
      workflowNote:
        "The RapidMiner process retrieves the Mall Customers data, selects the attributes, normalizes them, applies clustering, and evaluates cluster performance.",
      clusters: [
        ["Cluster 0", 30],
        ["Cluster 1", 40],
        ["Cluster 2", 49],
        ["Cluster 3", 58],
        ["Cluster 4", 23],
      ],
      centroidNote:
        "Centroid values are shown on a normalized scale (0 to 1), after the Normalize step. Reading the table:",
      observations: [
        "Cluster 4 has the lowest income value (0.093) alongside a high spending score (0.791).",
        "Cluster 0 has a relatively high income value (0.616) but the lowest spending score (0.173).",
        "Cluster 1 pairs a mid-to-high income value (0.583) with the highest spending score (0.822).",
      ],
      findings: [
        "Identified five customer segments based on age, annual income, and spending score.",
        "Higher annual income does not necessarily correspond to higher spending scores.",
        "Identified a customer segment with relatively low annual income but high spending scores.",
      ],
      implications:
        "The results may help businesses better understand customer behavior and develop more targeted marketing strategies.",
      tools: ["RapidMiner (Altair AI Studio)"],
    },
    background: "",
    objectives: [],
    process: [],
    visuals: [],
    findings: "",
    outcomes: "",
  },
  {
    title: "Sleep Health &amp; Lifestyle Analysis",
    cat: "Data Analysis &amp; Data Visualization",
    tools: "Tableau, Microsoft Excel",
    status: "Academic project",
    desc: "An exploratory data analysis project focusing on sleep health and lifestyle patterns using Tableau. The analysis examines sleep duration, sleep quality, stress levels, physical activity, BMI, blood pressure, and other health indicators through data visualization to identify patterns within the dataset.",
    cover: "assets/projects/sleep-health/dashboard-overview.png",
    facts: [
      ["Dataset", "Sleep Health and Lifestyle Dataset"],
      ["Records", "374"],
      ["Tools", "Tableau, Microsoft Excel"],
      [
        "Context",
        "Course project: Gudang Data dan Kecerdasan Bisnis (Data Warehouse and Business Intelligence)",
      ],
    ],
    detail: {
      render: sleepHTML,
      scope: [
        "BMI Category vs Sleep Disorder",
        "Occupation vs Stress Level",
        "Sleep Duration by Gender",
        "Steps vs Sleep Quality",
        "Stress Level vs Heart Rate",
        "Blood Pressure vs Sleep Duration",
      ],
      observations: [
        "Sleep disorder mix differs by BMI category. In the dashboard, the Sleep Apnea share is 43.92% for Overweight and 60.00% for Obese, while the Normal category is mostly “None” (92.59%).",
        "Average stress level by occupation is highest for Sales Representative (8.000), followed by Scientist (7.000), Doctor (6.732), Software Engineer (6.000), Lawyer (5.064), and Accountant (4.595).",
        "Average sleep duration is 7.23 for female and 7.04 for male records.",
        "Average heart rate rises from 67.10 at stress level 3 to 74.10 at stress level 8. It is not strictly increasing: stress level 4 averages 66.83.",
        "Higher step counts do not map to uniformly higher sleep quality. At 10,000 steps, for example, the plotted points show quality scores of 6 and 9.",
        "Across the blood pressure readings shown, average sleep duration ranges from 5.80 to 8.20.",
      ],
      caveat:
        "These are descriptive readings of the visualizations. No statistical testing was applied, so they show patterns in this dataset, not causes.",
      notes: [
        "Hypothesis written in the dashboard: physical activity above 8,000 steps does not guarantee high sleep quality because of occupational stress.",
        "Recommendations written in the dashboard: for insomnia risk, a Step-Up Challenge program (6,500 steps per day); for sleep apnea risk, a focus on diet and calorie-deficit programs.",
      ],
    },
  },
  {
    title: "SERANI – Zero Food Waste Platform",
    cat: "Product & Business Analysis",
    tools: "Figma, Canva, Documentation Tools",
    status: "Team project",
    cover: "assets/projects/serani/product-strategy.png",
    desc: "A collaborative product development project focused on connecting F&B businesses with consumers to help reduce food waste.",
    facts: [
      ["Type", "Team project"],
      ["Focus", "Product & Business Analysis"],
      ["Team", "Group 11"],
      ["Tools", "Figma, Canva, Documentation Tools"],
    ],
    detail: {
      render: seraniHTML,
      overview:
        "SERANI is a food surplus platform designed to connect F&B businesses with consumers through discounted surplus food while supporting a more sustainable food waste management ecosystem.",
      contribution:
        "Contributed to product development through user persona development, competitor analysis, product positioning, and PRD development.",
      roles: [
        "User Persona Development",
        "Competitor Analysis",
        "Product Positioning",
        "Product Requirements Document (PRD)",
      ],
    },
  },
  {
    title: "Sissy Beauty Store",
    cat: "Web Development",
    tools: "HTML, CSS, JavaScript",
    cover: "assets/projects/sissy-beauty/website-preview.png",
    desc: "A web development project: an online makeup store website with a product catalog, cart, and WhatsApp checkout.",
    detail: {
      render: sissyHTML,
      /* A section is shown only when it has content. */
      overview:
        "Sissy Beauty Store is an online beauty store website that presents makeup products with images, prices, and short descriptions. Visitors can browse the catalog, add items to a cart, and use a Checkout via WhatsApp option.",
      goals: [
        "Present makeup products in a clear, browsable catalog.",
        "Help visitors find products quickly through category filtering and search.",
        "Let visitors collect items in a cart or wishlist and place an order through WhatsApp.",
        "Keep the shopping experience usable on both desktop and mobile screens.",
      ],
      previewNote:
        "The home page opens with the store navigation and a promotional banner, followed by the product catalog.",
      /* Key Features: [title, explanation] */
      features: [
        [
          "Product catalog",
          "Each product card shows an image, name, price, and short description. A “NEW” badge highlights new products.",
        ],
        [
          "Category filter and search",
          "A category filter and a product search field help visitors narrow the catalog.",
        ],
        [
          "Wishlist",
          "Every product card has a Wishlist button next to Buy, and the navigation includes a Wishlist link.",
        ],
        [
          "Shopping cart",
          "The cart lists the selected items with their options (for example, Cushion Sissy – Medium), a remove option, the total, and a Clear Cart button. A cart counter in the navigation bar shows the current items.",
        ],
        [
          "Checkout via WhatsApp",
          "The cart ends with a Checkout via WhatsApp button, so an order is placed by messaging the store.",
        ],
        [
          "Promotional banner",
          "A banner highlights the current offer (Today’s Sale: 20% discount on concealer products).",
        ],
        [
          "Site navigation",
          "Links to Home Page, Product, About Us, Cart, Wishlist, and Login.",
        ],
        [
          "Responsive layout",
          "The layout adapts to mobile screens, including the cart view.",
        ],
      ],
      /* Interface Showcase: [file in assets/projects/sissy-beauty/, alt text, caption, optional class, short explanation] */
      shots: [
        [
          "product-page.png",
          "Sissy Beauty Store product page with product cards showing image, price, description, Buy and Wishlist buttons",
          "Figure 2. Product page",
          "",
          "Product cards with image, price, description, and Buy and Wishlist buttons.",
        ],
        [
          "website-features.png",
          "Shopping cart window on desktop listing two items with a total and Checkout via WhatsApp and Clear Cart buttons",
          "Figure 3. Shopping cart (desktop)",
          "",
          "Cart with item list, total, Clear Cart, and Checkout via WhatsApp.",
        ],
        [
          "responsive-view.jpeg",
          "Shopping cart window on a mobile phone listing three items with a total",
          "Figure 4. Responsive mobile view",
          "narrow",
          "The cart on a phone-sized screen.",
        ],
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      contribution:
        "Built the Sissy Beauty Store website as a web development project, covering the product catalog layout, the cart and wishlist interface, the WhatsApp checkout option, and the mobile-friendly layout.",
      reflection:
        "This project showed me how a storefront depends on small details: clear product information, a cart that is easy to review, and a checkout path that fits how customers already talk to a store. Making the layout work on a phone as well as a desktop taught me to design for the smaller screen early.",
    },
  },
];

const $ = (s, r = document) => r.querySelector(s);
const li = (a) => a.map((x) => `<li>${x}</li>`).join("");
const cls = (p) => (p.status === "Planned" ? "planned" : "");

// Project cards
const grid = $("#project-grid");
grid.innerHTML = PROJECTS.map(
  (p, i) => `
  <button class="card" data-i="${i}" aria-haspopup="dialog">
    <div class="fig" aria-hidden="true">${p.cover ? `<img src="${p.cover}" alt="" loading="lazy" onerror="this.remove()">` : ""}</div>
    <div class="card-body">
      <div class="tags"><span>${p.cat}</span>${p.status ? `<span class="status ${cls(p)}">${p.status}</span>` : ""}</div>
      <h3>${p.title}</h3><p>${p.desc}</p>
      ${
        p.tools
          ? `<div class="chips">${p.tools
              .split(", ")
              .map((t) => `<span>${t}</span>`)
              .join("")}</div>`
          : ""
      }
      <span class="more">View project details</span>
    </div>
  </button>`,
).join("");

// Modal
const modal = $("#modal"),
  body = $("#modal-body");
grid.addEventListener("click", (e) => {
  const c = e.target.closest(".card");
  if (!c) return;
  const p = PROJECTS[c.dataset.i];
  if (p.detail) {
    body.innerHTML = (p.detail.render || detailHTML)(p);
    modal.showModal();
    modal.scrollTop = 0;
    return;
  }
  body.innerHTML = `
    <div class="tags"><span>${p.cat}</span><span class="status ${cls(p)}">${p.status}</span></div>
    <h2 id="m-title">${p.title}</h2>
    <p class="lead">${p.desc}</p>
    <dl class="mfacts">${p.facts.map((f) => `<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join("")}</dl>
    <section><h3>Background</h3><p>${p.background}</p></section>
    <section><h3>Objectives</h3><ul>${li(p.objectives)}</ul></section>
    <section><h3>Process</h3><ol class="steps">${li(p.process)}</ol></section>
    <section><h3>Visuals</h3><div class="figs">${p.visuals.map((v, n) => `<figure><div class="ph">Insert: ${v}</div><figcaption>Figure ${n + 1}. ${v}</figcaption></figure>`).join("")}</div></section>
    <section><h3>Findings</h3><p class="note">${p.findings}</p></section>
    <section><h3>Outcomes</h3><p class="note">${p.outcomes}</p></section>`;
  modal.showModal();
  modal.scrollTop = 0;
});
$(".close").onclick = () => modal.close();
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

// Mobile menu
const burger = $(".burger"),
  menu = $("#menu");
burger.onclick = () =>
  burger.setAttribute("aria-expanded", menu.classList.toggle("open"));
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});

addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.classList.contains("open")) {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    burger.focus();
  }
});

// Header border on scroll, active link, gentle section reveal
const nav = $(".nav");
addEventListener("scroll", () => nav.classList.toggle("stuck", scrollY > 10), {
  passive: true,
});
const links = [...menu.querySelectorAll("a")];
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        links.forEach((a) =>
          a.classList.toggle("on", a.hash === "#" + e.target.id),
        );
      }
    }),
  { threshold: 0.15 },
);
document.querySelectorAll("main section.wrap:not(.hero)").forEach((s) => {
  s.classList.add("rv");
  io.observe(s);
});

$("#yr").textContent = new Date().getFullYear();

// Detailed case-study layout (used by projects that have a `detail` object)
const IMG = "assets/projects/customer-segmentation/";
function detailHTML(p) {
  const d = p.detail,
    total = d.clusters.reduce((a, c) => a + c[1], 0);
  const nav = [
    ["Overview", "ov"],
    ["Objective", "ob"],
    ["Dataset", "ds"],
    ["Methodology", "me"],
    ["Clusters", "cl"],
    ["Centroids", "ce"],
    ["Findings", "fi"],
    ["Implications", "im"],
    ["Tools", "to"],
  ];
  const fig = (f, alt, cap) =>
    `<figure class="shot"><img src="${IMG}${f}" alt="${alt}" loading="lazy"><figcaption>${cap}</figcaption></figure>`;
  return `
    <div class="tags"><span>${p.cat}</span><span class="status">${p.status}</span></div>
    <h2 id="m-title">${p.title}</h2>
    <nav class="mnav" aria-label="Project sections">${nav.map((n) => `<button type="button" data-go="${n[1]}">${n[0]}</button>`).join("")}</nav>
    <dl class="mfacts">${p.facts.map((f) => `<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join("")}</dl>
    <section id="ov"><h3>Project Overview</h3><p>${d.overview}</p></section>
    <section id="ob"><h3>Objective</h3><p>${d.objective}</p></section>
    <section id="ds"><h3>Dataset</h3><p>${d.dataset}</p></section>
    <section id="me"><h3>Methodology</h3><ol class="steps">${li(d.steps)}</ol>
      <p class="muted" style="margin:1.2rem 0 1rem">${d.workflowNote}</p>
      ${fig("workflow.jpeg", "RapidMiner process: Retrieve Mall_Customers, Select Attributes, Normalize, Clustering, Performance", "Figure 1. RapidMiner analysis workflow")}</section>
    <section id="cl"><h3>Cluster Distribution</h3>
      <table class="ctable"><thead><tr><th>Cluster</th><th>Customers</th></tr></thead><tbody>${d.clusters.map((c) => `<tr><td>${c[0]}</td><td>${c[1]}</td></tr>`).join("")}</tbody><tfoot><tr><td>Total</td><td>${total}</td></tr></tfoot></table>
      ${fig("cluster-result.jpeg", "RapidMiner Cluster Model output listing the number of items in each cluster", "Figure 2. Cluster model output")}</section>
    <section id="ce"><h3>Centroid Table and Analysis</h3><p class="muted" style="margin-bottom:1rem">${d.centroidNote}</p>
      ${fig("centroid-table.jpeg", "RapidMiner centroid table with normalized Age, Annual Income, and Spending Score values for clusters 0 to 4", "Figure 3. Centroid table (normalized values)")}
      <ul class="obs">${li(d.observations)}</ul></section>
    <section id="fi"><h3>Key Findings</h3><ul>${li(d.findings)}</ul></section>
    <section id="im"><h3>Business Implications</h3><p class="note">${d.implications}</p></section>
    <section id="to"><h3>Tools Used</h3><div class="chips">${d.tools.map((t) => `<span>${t}</span>`).join("")}</div></section>`;
}
body.addEventListener("click", (e) => {
  const b = e.target.closest("[data-go]");
  if (!b) return;
  const t = document.getElementById(b.dataset.go);
  if (t)
    t.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion:reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
});

// Detail layout for the Sleep Health & Lifestyle project
function sleepHTML(p) {
  const d = p.detail,
    IMGS = "assets/projects/sleep-health/";
  const fig = (f, alt, cap) =>
    `<figure class="shot"><img src="${IMGS}${f}" alt="${alt}" loading="lazy"><figcaption>${cap}</figcaption></figure>`;
  const nav = [
    ["Dashboard", "db"],
    ["Overview", "ov"],
    ["Scope", "sc"],
    ["Diagnostic", "dg"],
    ["Worksheets", "ws"],
    ["Observations", "ob"],
    ["Tools", "to"],
  ];
  return `
    <div class="tags"><span>${p.cat}</span><span class="status">${p.status}</span></div>
    <h2 id="m-title">${p.title}</h2>
    <nav class="mnav" aria-label="Project sections">${nav.map((n) => `<button type="button" data-go="${n[1]}">${n[0]}</button>`).join("")}</nav>
    <section id="db">${fig("dashboard-overview.png", "Tableau dashboard, descriptive analysis: BMI category vs sleep disorder, average stress level by occupation, and average sleep duration by gender", "Figure 1. Tableau dashboard: Descriptive Analysis, Health and Sleep Profile (labels in Indonesian)")}</section>
    <dl class="mfacts">${p.facts.map((f) => `<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join("")}</dl>
    <section id="ov"><h3>Project Overview</h3><p>${p.desc}</p></section>
    <section id="sc"><h3>Analysis Scope</h3><ol class="steps">${li(d.scope)}</ol></section>
    <section id="dg"><h3>Diagnostic Dashboard</h3>${fig("dashboard-analysis.png", "Tableau dashboard, diagnostic analysis: steps vs sleep quality, stress level vs heart rate, and blood pressure vs sleep duration", "Figure 2. Tableau dashboard: Diagnostic Analysis and Sleep Factor Correlation (labels in Indonesian)")}</section>
    <section id="ws"><h3>Individual Worksheets</h3><div class="figs">
      ${fig("steps-vs-quality.png", "Scatter plot of steps against quality of sleep", "Figure 3. Steps vs Sleep Quality")}
      ${fig("stress-vs-heart-rate.png", "Line chart of average heart rate by stress level", "Figure 4. Stress Level vs Heart Rate")}
      ${fig("bmi-vs-disorder.png", "Stacked bar of sleep disorder share for the Overweight BMI category", "Figure 5. BMI Category vs Sleep Disorder (worksheet view)")}</div></section>
    <section id="ob"><h3>Observations from the Visualizations</h3><ul class="obs">${li(d.observations)}</ul><p class="note" style="margin-top:1rem">${d.caveat}</p>
      <h3 style="margin-top:1.8rem">Notes from the Dashboard</h3><ul class="obs">${li(d.notes)}</ul></section>
    <section id="to"><h3>Tools Used</h3><div class="chips">${p.tools
      .split(", ")
      .map((t) => `<span>${t}</span>`)
      .join("")}</div></section>`;
}

// Detail layout for SERANI
function seraniHTML(p) {
  const d = p.detail,
    B = "assets/projects/serani/";
  const fig = (f, alt, cap) =>
    `<figure class="shot"><a href="${B}${f}" target="_blank" rel="noopener" aria-label="Open full-size image: ${cap}"><img src="${B}${f}" alt="${alt}" loading="lazy"></a><figcaption>${cap}. Select the image to open it full size.</figcaption></figure>`;
  const nav = [
    ["Overview", "ov"],
    ["User Persona", "up"],
    ["Competitors", "ca"],
    ["Lean Canvas", "lc"],
    ["Objectives", "po"],
    ["Requirements", "rq"],
    ["Contribution", "mc"],
  ];
  const sec = (id, h, intro, f) =>
    `<section id="${id}"><h3>${h}</h3><p class="muted" style="margin-bottom:1rem">${intro}</p>${f}</section>`;
  return `
    <div class="tags"><span>${p.cat}</span><span class="status">${p.status}</span></div>
    <h2 id="m-title">${p.title}</h2>
    <nav class="mnav" aria-label="Project sections">${nav.map((n) => `<button type="button" data-go="${n[1]}">${n[0]}</button>`).join("")}</nav>
    <dl class="mfacts">${p.facts.map((f) => `<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join("")}</dl>
    <section id="ov"><h3>Project Overview</h3><p>${d.overview}</p><p class="note" style="margin-top:1rem">The project materials below are in Indonesian, as they were prepared for the course team.</p></section>
    ${sec("up", "User Persona", "Persona for a final-year student in Jakarta, covering goals, needs, pain points, and behavior.", fig("user-persona.png", "SERANI user persona: Fina Fufina, 22, final-year student in Jakarta, with goals, expectations, pain points, and behavior", "Figure 1. User persona"))}
    ${sec("ca", "Competitor Analysis &amp; Product Positioning", "SERANI compared with Surplus (local competitor) and Too Good To Go (global competitor) on value proposition, UI/UX and app flow, payment system, and target audience.", fig("competitor-analysis.png", "Comparison table of SERANI, Surplus, and Too Good To Go across four aspects", "Figure 2. Competitor analysis"))}
    ${sec("lc", "Lean Canvas", "Lean Canvas prepared by Group 11, covering problem, solution, unique value proposition, channels, customer segments, key metrics, cost structure, and revenue streams.", fig("product-strategy.png", "SERANI Lean Canvas with nine sections from problem to revenue streams", "Figure 3. Lean Canvas"))}
    ${sec("po", "Product Objectives &amp; Success Metrics", "The objective and success metrics defined in the PRD. The metrics are targets set in the document.", fig("prd-objective.png", "PRD objective statement and a table of goals with success metrics", "Figure 4. PRD objective and success metrics"))}
    ${sec("rq", "Product Requirements", "Requirements table with three epics, each listing a user story, priority, and acceptance criteria.", fig("prd-requirements.png", "PRD requirements table with epics, user stories, priority, and acceptance criteria", "Figure 5. PRD requirements"))}
    <section id="mc"><h3>My Contribution</h3><p>${d.contribution}</p><ol class="steps" style="margin-top:1.2rem">${li(d.roles)}</ol></section>`;
}

// Detail layout for Sissy Beauty Store. Sections without content (or without an image file) are left out.
function sissyHTML(p) {
  const d = p.detail,
    B = "assets/projects/sissy-beauty/";
  const list = (a) => (a && a.length ? `<ul>${li(a)}</ul>` : "");
  const gone = (id) =>
    `this.closest('section').remove();document.querySelector('[data-go=${id}]')?.remove()`;
  const feats =
    d.features && d.features.length
      ? `<ul class="feat">${d.features.map((f) => `<li><strong>${f[0]}</strong><span>${f[1]}</span></li>`).join("")}</ul>`
      : "";
  const shots = (d.shots || [])
    .map(
      (x) =>
        `<figure class="shot${x[3] ? " " + x[3] : ""}"><img src="${B}${x[0]}" alt="${x[1]}" loading="lazy" onerror="this.closest('figure').remove()"><figcaption><strong>${x[2]}</strong>${x[4] ? `<br>${x[4]}` : ""}</figcaption></figure>`,
    )
    .join("");
  const parts = [
    ["ov", "Project Overview", d.overview ? `<p>${d.overview}</p>` : ""],
    ["go", "Project Goals", list(d.goals)],
    [
      "pv",
      "Website Preview",
      `<figure class="shot"><img src="${B}website-preview.png" alt="Sissy Beauty Store website preview" loading="lazy" onerror="${gone("pv")}"><figcaption><strong>Figure 1. Website preview</strong>${d.previewNote ? `<br>${d.previewNote}` : ""}</figcaption></figure>`,
    ],
    ["kf", "Key Features", feats],
    [
      "is",
      "Interface Showcase",
      shots ? `<div class="figs">${shots}</div>` : "",
    ],
    [
      "tt",
      "Tools &amp; Technologies",
      d.tech && d.tech.length
        ? `<div class="chips">${d.tech.map((t) => `<span>${t}</span>`).join("")}</div>`
        : "",
    ],
    ["mc", "My Contribution", d.contribution ? `<p>${d.contribution}</p>` : ""],
    [
      "pr",
      "Project Reflection",
      d.reflection ? `<p class="note">${d.reflection}</p>` : "",
    ],
  ].filter((x) => x[2]);
  const label = (t) => t.replace("Project ", "").replace("&amp;", "&");
  return `
    <div class="tags"><span>${p.cat}</span></div>
    <h2 id="m-title">${p.title}</h2>
    <nav class="mnav" aria-label="Project sections">${parts.map((x) => `<button type="button" data-go="${x[0]}">${label(x[1])}</button>`).join("")}</nav>
    ${parts.map((x) => `<section id="${x[0]}"><h3>${x[1]}</h3>${x[2]}</section>`).join("")}`;
}
