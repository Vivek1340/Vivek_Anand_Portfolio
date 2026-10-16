import {
  javascript,
  typescript,
  nodejs,
  mongodb,
  docker,
  git,
  reactjs,
} from "../assets";

export const profile = {
  name: "Vivek Anand",
  role: "SDE II @ FarMart",
  location: "Gurugram, India",
  tagline: "Backend & platform engineer.",
  pitch: "I design reliable systems that move money.",
  email: "vivekanand1340@gmail.com",
  linkedin: "https://www.linkedin.com/in/vivek-anandaab0b9189/",
  github: "https://github.com/Vivek1340",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "experience", title: "Experience" },
  { id: "stack", title: "Stack" },
  { id: "contact", title: "Contact" },
];

export const stats = [
  { value: "3 yrs", label: "on FarmartOS core" },
  { value: "225+", label: "PRs shipped last year" },
  { value: "400+", label: "code reviews last year" },
];

export const about = {
  paragraphs: [
    "I build backend systems where correctness isn't optional — the ones that create invoices, pay suppliers, reconcile bank transactions and decide who can see what.",
    "At FarMart, an agri-supply-chain platform, I've spent three years on the core of FarmartOS: the services that run procurement, sales, finance and logistics for a business moving physical goods across India. My work sits where fintech meets platform engineering.",
    "Beyond my own code, I run releases, lead production RCAs, review most of what ships to the backend and mentor engineers on the team — from local setup and debugging to writing their first HLD.",
    "Mechanical engineer by degree, backend engineer by choice.",
  ],
  principles: [
    {
      title: "Fail loudly",
      body: "A system that errors visibly beats one that quietly writes the wrong number.",
    },
    {
      title: "Stay consistent",
      body: "Transactions that commit together, side effects after commit, no half-written state.",
    },
    {
      title: "Design for the next engineer",
      body: "HLDs, LLDs and code someone else can own in six months.",
    },
  ],
};

export const caseStudies = [
  {
    title: "Buyer finance automation",
    domain: "Fintech",
    problem:
      "Finance matched bank transactions to invoices and raised buyer credit notes by hand.",
    did: "Built a reconciliation rule engine that auto-maps roughly 80% of incoming bank transactions, with a suspense flow for unmatched money — and automated credit notes that validate each delivery order against data-science deduction extraction.",
    tags: ["Node.js", "MySQL", "Zoho", "Crons"],
  },
  {
    title: "Attribute-based access control",
    domain: "Platform",
    problem:
      "Role checks alone couldn't express who may see which buyer, region or record.",
    did: "Did the discovery, wrote the HLD/LLD and shipped ABAC on top of RBAC across ~20 dispatch APIs. My contributor guide let another team adopt ABAC on their own, without help.",
    tags: ["RBAC/ABAC", "Express", "System design"],
  },
  {
    title: "Real-time Notification Center",
    domain: "Platform",
    problem:
      "Notifications were scattered across direct push calls with no inbox or history.",
    did: "Wrote the RFC, decision record and HLD; proved real-time delivery with an AWS AppSync POC across four scenarios at a fraction of self-hosted cost, then co-built and shipped it to production.",
    tags: ["AWS AppSync", "Events", "FCM"],
  },
  {
    title: "Vehicle tracking platform",
    domain: "Platform",
    problem:
      "Truck-trip tracking lived inside a mobile-app monolith, so other products couldn't use it.",
    did: "Built and spun out a standalone tracking microservice — driver consent, SIM-based location polling, ETAs, encrypted shareable links — then rewrote its scheduled jobs in Go on the shared cron platform with Slack alerting.",
    tags: ["Node.js", "Go", "MongoDB", "AWS"],
  },
  {
    title: "Production reliability",
    domain: "Reliability",
    problem:
      "Prod containers were crashing, payments could race, and one API was exhausting the DB pool.",
    did: "Root-caused the ECS crash and added an unhandled-rejection safety net; fixed a payment-ledger race with a fail-open Redis lock; removed the N+1 behind recurring 504s. Usually same-day from RCA to fix.",
    tags: ["AWS ECS", "Redis", "RCA", "MySQL"],
  },
  {
    title: "Codebase health & AI-ready tooling",
    domain: "Developer productivity",
    problem:
      "Years of dead code and conventions that lived only in people's heads slowed every change and review.",
    did: "Led dead-code and tech-debt cleanups, added pre-commit and pre-merge CI checks, upgraded Node 20 → 22, and built agent skills that encode our backend and tech-spec conventions.",
    tags: ["CI", "Node 22", "Agent skills"],
  },
];

export const experiences = [
  {
    title: "SDE II",
    company: "FarMart",
    date: "Oct 2025 — Present",
    location: "Gurugram",
    summary:
      "Backend & platform engineer on FarmartOS, owning finance, access-control and notification systems end to end — from HLD to production.",
    points: [
      "Designed and shipped ABAC across ~20 dispatch APIs and a real-time Notification Center.",
      "Owned buyer payment reconciliation, automated credit notes and supplier payables v1/v2.",
      "Story owner for buyer onboarding via API data: approvals, credit, bank verification and accounting sync.",
      "Led production RCAs for my systems and others' — ECS crash, payment-ledger race, N+1 timeouts.",
      "Led dead-code and tech-debt cleanups, CI quality gates and the Node 20 → 22 upgrade.",
      "Run releases, review 400+ PRs a year and mentor engineers across the team.",
    ],
  },
  {
    title: "SDE I",
    company: "FarMart",
    date: "Nov 2023 — Oct 2025",
    location: "Gurugram",
    summary:
      "Backend engineer (with some frontend) across FarmartOS, the vehicle-tracking platform and a farmer & trader mobile app.",
    points: [
      "Built and spun out a standalone vehicle-tracking microservice for live truck trips, then rewrote its cron jobs in Go.",
      "Connected live tracking to procurement: automatic arrival marking, supplier document uploads and in-transit visibility for ops.",
      "Automated invoice, credit-note and debit-note generation with e-way bills and accounting-system sync.",
      "Built a shared payment-ledger service and supplier payables sync with configurable tax handling.",
      "Shipped policy-based access control with full unit-test coverage, and supplier KYC (tax-ID, business and bank verification).",
      "Built backend APIs for a farmer & trader app: live market prices, trade listings, deals, dispatch and CDN-served CMS content.",
      "450+ PRs and ~300 code reviews; promoted to SDE II in under two years.",
    ],
  },
  {
    title: "SDE Intern",
    company: "basys.ai",
    date: "May 2023 — Jul 2023",
    location: "Remote",
    summary: "Built and maintained React web applications with a cross-functional team.",
    points: [],
  },
];

export const stack = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Go", "Python", "SQL"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Sequelize", "Socket.io"] },
  { group: "Data", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { group: "Cloud", items: ["AWS ECS", "SQS", "AppSync", "Secrets Manager", "Docker"] },
  { group: "Observability", items: ["OpenTelemetry", "OpenSearch", "Sentry"] },
  { group: "Practice", items: ["System design", "HLD / LLD", "RCAs", "Code review", "TDD"] },
];

export const techBalls = [
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Docker", icon: docker },
  { name: "React", icon: reactjs },
  { name: "git", icon: git },
];

export const achievements = [
  { title: "International Mathematics Olympiad", detail: "Bronze medal" },
  { title: "National Talent Search Examination", detail: "90th percentile, mains" },
  { title: "IIT-JEE", detail: "Qualified Mains and Advanced" },
];
