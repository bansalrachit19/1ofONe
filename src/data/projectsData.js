export const projectsData = [
  {
    id: "observability-cloud-infra",
    title: "Distributed Observability & Resilient Cloud Infrastructure",
    subtitle: "Enterprise Platform Engineering & Telemetry Architecture",
    category: "Distributed Systems & Cloud",
    tagline: "High-scale logging, metrics aggregation, rate limiting, and automated infrastructure provisioning.",
    description: "Architected and maintained distributed observability and cloud automation infrastructure. Integrated OpenSearch, Logstash, and Filebeat for unified application logging, alongside Prometheus and Thanos for distributed multi-cluster metric aggregation. Designed OpenResty/NGINX API gateway reverse proxying with dynamic rate limiting and automated health telemetry.",
    architecturePoints: [
      "Terraform-driven AWS infrastructure across IAM, KMS, ACM, CloudFront, ECR, SQS, DynamoDB, Secrets Manager, and EC2.",
      "Multi-node OpenSearch logging pipeline ingesting Filebeat/Logstash log streams with structured parsing and query indexing.",
      "Prometheus & Thanos metrics federation providing long-term storage and sub-second dashboard visualization.",
      "OpenResty reverse proxy gateway enforcing token validation, request routing, and client-tier rate limiting."
    ],
    technologies: ["AWS", "Terraform", "OpenSearch", "Prometheus", "Thanos", "Kafka", "OpenResty", "Docker", "Node.js"],
    metrics: [
      { label: "Architecture", value: "Multi-Tier Cloud" },
      { label: "Telemetry", value: "Distributed Logs & Metrics" },
      { label: "Infrastructure", value: "100% Terraform IAC" }
    ],
    featured: true,
    github: "https://github.com/bansalrachit19",
    demo: null,
    badge: "Production Architecture"
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
    id: "studynotion",
    title: "StudyNotion — EdTech Platform & Media Streaming Architecture",
    subtitle: "High-Performance Course Marketplace & Payment Processing",
    category: "Full Stack & Payments",
    tagline: "Full-stack learning platform with Razorpay checkout webhooks, media pipeline, and analytics.",
    description: "Designed and built an end-to-end educational marketplace enabling instructors to publish multimedia courses and students to enroll seamlessly. Integrated Razorpay payment webhooks, OTP-based email verification, and Cloudinary media processing pipelines.",
    architecturePoints: [
      "Secure webhook-verified Razorpay payment gateway handling course purchases with transactional consistency.",
      "Cloudinary media ingestion pipeline for automated video/image optimization and asset delivery.",
      "Multi-level authorization hierarchy with bcrypt password encryption and one-time password (OTP) verification.",
      "Interactive course completion statistics and revenue charts with ChartJS."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay API", "Cloudinary", "Tailwind CSS"],
    metrics: [
      { label: "Payments", value: "Razorpay Webhooks" },
      { label: "Media Pipeline", value: "Cloudinary CDN" },
      { label: "Auth Flow", value: "OTP + JWT + Bcrypt" }
    ],
    featured: true,
    github: "https://github.com/bansalrachit19/Learn_With_StudyNotion",
    demo: "https://learn-with-study-notion-frontend.vercel.app/",
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
