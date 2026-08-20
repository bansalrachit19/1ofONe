export const projectsData = [
  {
    id: "frontend-observability-pipeline",
    title: "In-House Frontend Observability & Browser Telemetry Pipeline",
    subtitle: "Custom Browser Telemetry, Web Vitals & Runtime Error Ingestion",
    category: "Observability & Telemetry",
    tagline: "Custom in-house telemetry architecture for collecting, processing, and indexing real-time browser performance and errors.",
    description: "Architected and deployed an end-to-end in-house frontend observability pipeline designed specifically for our platform environment. Captures real-time Web Vitals (LCP, CLS, INP, FCP, TTFB), JavaScript runtime exceptions, failed API network requests, and user session telemetry via Faro SDK and OpenTelemetry, routing through Alloy and Logstash to OpenSearch for centralized querying and real-time dashboard visualization.",
    pipelineFlow: [
      { step: "1. Browser Client", desc: "User Interaction & Page Lifecycle" },
      { step: "2. Faro SDK", desc: "Telemetry Instrumentation (Vitals, Errors, Traces)" },
      { step: "3. Alloy", desc: "Telemetry Collector & Buffer Forwarder" },
      { step: "4. OTel Collector", desc: "Standardized OpenTelemetry Processing" },
      { step: "5. Logstash", desc: "Log Transformation & Schema Mapping" },
      { step: "6. OpenSearch", desc: "Indexing, Search & Real-Time Dashboards" }
    ],
    architecturePoints: [
      "Custom in-house architecture designed for our platform: Browser → Faro SDK → Alloy → OpenTelemetry Collector → Logstash → OpenSearch.",
      "Instruments Core Web Vitals (LCP, CLS, INP, FCP, TTFB) to track frontend performance and identify latency regressions.",
      "Captures frontend health signals including unhandled JavaScript exceptions, network API failures, and console error events.",
      "Centralizes browser telemetry in OpenSearch Dashboards, enabling engineers to correlate frontend issues directly with backend service logs."
    ],
    technologies: ["Faro SDK", "Alloy", "OpenTelemetry", "Logstash", "OpenSearch", "OpenSearch Dashboards", "JavaScript"],
    metrics: [
      { label: "Architecture", value: "Faro → Alloy → OTel → OpenSearch" },
      { label: "Telemetry", value: "Web Vitals + Runtime Errors" },
      { label: "Processing", value: "Real-Time Ingestion" }
    ],
    featured: true,
    github: "https://github.com/bansalrachit19",
    demo: null,
    badge: "In-House Architecture"
  },
  {
    id: "api-gateway-automation",
    title: "Automated API Gateway API Exposure & GitOps Workflow",
    subtitle: "Infrastructure-as-Code Automation & Review Pipeline",
    category: "Cloud & Automation",
    tagline: "End-to-end automation of the API exposure lifecycle via Terraform, automated PRs, and Microsoft Teams review notifications.",
    description: "Designed an automated developer-productivity and infrastructure-as-code workflow that streamlines exposing new microservice APIs through AWS API Gateway. Replaced manual configurations with an automated pipeline that parses developer requests, updates Terraform definitions, generates automated Pull Requests with plan outputs, and broadcasts notifications over Microsoft Teams for team review and deployment.",
    architecturePoints: [
      "Automated multi-stage workflow: API exposure request → Terraform config generation → Automated Pull Request → Terraform plan generation → Microsoft Teams notification.",
      "Standardizes API Gateway routing, path definitions, CORS policies, and security parameters through declarative Terraform IAC.",
      "Integrates Microsoft Teams webhooks to provide immediate visibility of Terraform plan outputs and required approval steps.",
      "Reduces manual infrastructure configuration effort and eliminates configuration drift across development, staging, and production environments."
    ],
    technologies: ["AWS API Gateway", "Terraform", "Jenkins", "Bitbucket", "Microsoft Teams Webhooks", "GitOps"],
    metrics: [
      { label: "Workflow", value: "Automated PR & Plan Generation" },
      { label: "Notifications", value: "Microsoft Teams Webhooks" },
      { label: "Infrastructure", value: "100% Terraform IAC" }
    ],
    featured: true,
    github: "https://github.com/bansalrachit19",
    demo: null,
    badge: "Production Automation"
  },
  {
    id: "rate-limiting-engine",
    title: "Configurable Endpoint-Level API Rate Limiting & Abuse Prevention",
    subtitle: "Custom Multi-Tier Traffic Control & Gateway Security",
    category: "Backend & Systems",
    tagline: "Fine-grained rate-limiting architecture with endpoint-specific minute and hourly thresholds to protect backend availability.",
    description: "Engineered a custom rate-limiting architecture that allows individual API endpoints to maintain their own configurable per-minute and per-hour traffic thresholds. Enforces request counting and HTTP 429 rejection at the gateway tier, automatically shielding backend services from abusive request bursts and malicious traffic patterns while feeding rate-limit observability into logging pipelines.",
    architecturePoints: [
      "Endpoint-specific policy configuration allowing distinct per-minute and per-hour rate thresholds tailored to each API's compute intensity.",
      "High-performance request counting and policy enforcement integrated into reverse proxy gateway routing (OpenResty / NGINX / Redis).",
      "Immediate HTTP 429 Too Many Requests enforcement to drop abusive spikes before reaching downstream microservices.",
      "Comprehensive rate-limit observability and audit logging to monitor blocked requests, track traffic patterns, and triage incidents."
    ],
    technologies: ["OpenResty", "NGINX", "Redis", "Lua", "OpenSearch", "HTTP 429", "REST APIs"],
    metrics: [
      { label: "Policies", value: "Endpoint-Specific Minute & Hourly" },
      { label: "Enforcement", value: "Gateway Tier HTTP 429" },
      { label: "Protection", value: "Abuse & Spike Mitigation" }
    ],
    featured: true,
    github: "https://github.com/bansalrachit19",
    demo: null,
    badge: "Gateway Security"
  },
  {
    id: "mindmend",
    title: "MindMend — Real-Time Telehealth & Mental Wellness Platform",
    subtitle: "Full-Stack WebRTC Telehealth & Community Architecture",
    category: "Full Stack & WebRTC",
    tagline: "Low-latency video consultations, real-time socket communications, and mood tracking platform.",
    description: "Engineered a production-ready telehealth and mental wellness web platform. Features peer-to-peer WebRTC video therapy consultations, Socket.IO live communication channels, therapist appointment scheduling, AI mood insights, and role-based access control.",
    architecturePoints: [
      "Low-latency WebRTC mesh with Socket.IO signaling server for seamless peer-to-peer video sessions.",
      "Robust role-based authorization (Patients, Therapists, Administrators) with stateless JWT tokens.",
      "Optimized MongoDB data schemas for patient logs, appointments, therapist availability, and mood analytics.",
      "Responsive, accessible UI with Tailwind CSS and smooth Framer Motion transitions."
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "WebRTC", "Socket.IO", "Tailwind CSS", "JWT"],
    metrics: [
      { label: "Real-Time Layer", value: "WebRTC + Socket.IO" },
      { label: "Security", value: "JWT Role-Based Auth" },
      { label: "Deployment", value: "Vercel / Render" }
    ],
    featured: true,
    github: "https://github.com/bansalrachit19/MINDMEND-1",
    demo: "https://mindmend-1.vercel.app/",
    badge: "Live Product"
  },
  {
    id: "energy-3",
    title: "Smart Energy 3.0 — Automated Building Load Optimizer",
    subtitle: "IoT Automation & Computer Vision Energy Conservation (Patent Filing)",
    category: "IoT & Systems",
    tagline: "Automated server room and institutional building load optimization using computer vision and IoT.",
    description: "Co-invented an automated energy conservation architecture for server rooms, research laboratories, and open facility floors. Leveraged OpenCV computer vision occupancy detection coupled with IoT microcontroller relays to calculate optimal lighting and cooling loads dynamically.",
    architecturePoints: [
      "Real-time occupancy detection algorithms utilizing OpenCV video stream processing.",
      "Dynamic cooling load calculations factoring room thermal capacity, compute density, and ambient sensors.",
      "Automated IoT relay control for granular lighting zones and HVAC setpoint adjustments.",
      "Indian Patent Filing IN202511042404 (Awaiting Examination) covering automated energy optimization methods."
    ],
    technologies: ["Node.js", "Python", "OpenCV", "IoT Systems", "MongoDB", "REST APIs"],
    metrics: [
      { label: "Intellectual Property", value: "Patent IN202511042404" },
      { label: "Sensor Fusion", value: "OpenCV + IoT Relays" },
      { label: "Optimization", value: "Dynamic Thermal Loads" }
    ],
    featured: true,
    github: "https://github.com/bansalrachit19/EnergyConsumption",
    demo: "https://drive.google.com/file/d/1huI7_mq9YMForgdSRQwTf6-SIGu7CrJL/view?usp=sharing",
    badge: "Patent Co-Inventor"
  },
  {
    id: "enterprise-auth",
    title: "Enterprise Auth & RBAC Microservice Engine",
    subtitle: "Cryptographic Role-Based Access Control Architecture",
    category: "Backend & Security",
    tagline: "Hardened microservice authentication engine with token rotation, salted bcrypt hashing, and role trees.",
    description: "Engineered a standalone authentication microservice implementing role hierarchies (Admin, Student, Visitor), tamper-proof JWT token verification, HTTP-only secure cookie storage, and centralized middleware validation.",
    architecturePoints: [
      "Modular middleware layer evaluating request identity and hierarchical permission scopes.",
      "Bcrypt salted credential hashing with configurable work factors.",
      "Strict input sanitization, error propagation, and security boundary isolation."
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "REST APIs"],
    metrics: [
      { label: "Protocol", value: "Stateless JWT + RBAC" },
      { label: "Security", value: "HTTP-Only Secure Cookies" }
    ],
    featured: false,
    github: "https://github.com/bansalrachit19/Authorization-Backend",
    demo: null,
    badge: "Security Engine"
  },
  {
    id: "media-ingestion-service",
    title: "Distributed Media Cloud Ingestion Service",
    subtitle: "Multi-Format Binary Stream Processing & Cloud Storage",
    category: "Backend & Cloud",
    tagline: "Scalable file upload service with MIME type verification, cloud transcoding, and metadata indexing.",
    description: "Built a dedicated file ingestion microservice supporting chunked multi-format video and image uploads. Integrates Cloudinary and S3 for CDN distribution with MongoDB metadata indexing.",
    architecturePoints: [
      "Streaming binary upload handlers with strict MIME-type and size validation filters.",
      "Asynchronous transcoding and thumbnail generation pipeline.",
      "Indexed MongoDB persistence for instant media query and asset discovery."
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "Cloudinary", "REST APIs"],
    metrics: [
      { label: "Formats", value: "Video & Image Pipelines" },
      { label: "Storage", value: "Cloudinary + S3" }
    ],
    featured: false,
    github: "https://github.com/bansalrachit19/media-uploader-backend",
    demo: null,
    badge: "Cloud Ingestion"
  }
];