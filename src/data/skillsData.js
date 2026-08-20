export const skillsCategories = [
  {
    id: "cloud-devops",
    title: "Cloud & Infrastructure",
    description: "Declarative infrastructure automation, container orchestration, and AWS cloud foundations.",
    color: "from-sky-500/20 to-blue-600/20",
    borderColor: "border-sky-500/30",
    skills: [
      { name: "AWS (IAM, KMS, ACM, SQS, DynamoDB)", level: "Production", highlight: true },
      { name: "Terraform (IAC)", level: "Production", highlight: true },
      { name: "AWS S3, CloudFront & ECR", level: "Production", highlight: true },
      { name: "AWS EC2 & Secrets Manager", level: "Production", highlight: false },
      { name: "Docker Containerization", level: "Proficient", highlight: true },
      { name: "Jenkins & Bitbucket CI/CD", level: "Production", highlight: true },
      { name: "Linux / Shell Scripting", level: "Proficient", highlight: false },
    ]
  },
  {
    id: "backend-arch",
    title: "Backend & Systems",
    description: "Scalable microservices, resilient API gateways, authentication security, and rate limiting.",
    color: "from-emerald-500/20 to-teal-600/20",
    borderColor: "border-emerald-500/30",
    skills: [
      { name: "Node.js & Express.js", level: "Production", highlight: true },
      { name: "OpenResty & NGINX Routing", level: "Production", highlight: true },
      { name: "RESTful API Architecture", level: "Production", highlight: true },
      { name: "JWT & Cryptographic RBAC", level: "Production", highlight: true },
      { name: "Dynamic Rate Limiting", level: "Production", highlight: true },
      { name: "Socket.IO & WebSockets", level: "Proficient", highlight: false },
      { name: "WebRTC Real-Time Media", level: "Proficient", highlight: false },
    ]
  },
  {
    id: "observability-systems",
    title: "Observability & Distributed Systems",
    description: "Distributed telemetry, centralized logging pipelines, metric federation, and stream processing.",
    color: "from-indigo-500/20 to-purple-600/20",
    borderColor: "border-indigo-500/30",
    skills: [
      { name: "OpenSearch & Dashboards", level: "Production", highlight: true },
      { name: "Logstash & Filebeat Logging", level: "Production", highlight: true },
      { name: "Prometheus Metric Collection", level: "Production", highlight: true },
      { name: "Thanos Metric Federation", level: "Production", highlight: true },
      { name: "Apache Kafka & AWS MSK", level: "Proficient", highlight: true },
      { name: "Automated Health Monitoring", level: "Production", highlight: false },
      { name: "Synthetic Probes & Alerting", level: "Production", highlight: false },
    ]
  },
  {
    id: "databases-storage",
    title: "Databases & Storage",
    description: "High-performance relational and document datastores, schema indexing, and cloud object storage.",
    color: "from-amber-500/20 to-orange-600/20",
    borderColor: "border-amber-500/30",
    skills: [
      { name: "MongoDB & Aggregations", level: "Production", highlight: true },
      { name: "MySQL & Relational Design", level: "Proficient", highlight: true },
      { name: "Amazon DynamoDB", level: "Production", highlight: true },
      { name: "Amazon S3 Object Store", level: "Production", highlight: false },
      { name: "Indexing & Query Optimization", level: "Proficient", highlight: false },
    ]
  },
  {
    id: "frontend-ui",
    title: "Frontend & Product Engineering",
    description: "Modern, responsive client architectures, state management, and accessible interfaces.",
    color: "from-violet-500/20 to-fuchsia-600/20",
    borderColor: "border-violet-500/30",
    skills: [
      { name: "React.js", level: "Proficient", highlight: true },
      { name: "JavaScript (ES6+)", level: "Proficient", highlight: true },
      { name: "Tailwind CSS", level: "Proficient", highlight: true },
      { name: "Vite Tooling", level: "Proficient", highlight: false },
      { name: "HTML5 & Semantic Markup", level: "Proficient", highlight: false },
      { name: "Framer Motion", level: "Proficient", highlight: false },
    ]
  },
  {
    id: "languages-tools",
    title: "Languages & Engineering Tools",
    description: "Algorithmic problem solving, rigorous API testing, version control, and developer tooling.",
    color: "from-rose-500/20 to-pink-600/20",
    borderColor: "border-rose-500/30",
    skills: [
      { name: "C++ (DSA & Problem Solving)", level: "Advanced", highlight: true },
      { name: "Git & GitHub Workflows", level: "Production", highlight: true },
      { name: "Postman API Automation", level: "Production", highlight: true },
      { name: "Python", level: "Intermediate", highlight: false },
      { name: "VS Code & Terminal Tooling", level: "Advanced", highlight: false },
    ]
  }
];
