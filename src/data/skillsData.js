export const skillsCategories = [
  {
    id: "cloud-devops",
    title: "Cloud & Infrastructure",
    description: "Declarative AWS infrastructure automation, container orchestration with Kubernetes & Helm, and CI/CD pipelines.",
    color: "from-sky-500/20 to-blue-600/20",
    borderColor: "border-sky-500/30",
    skills: [
      { name: "AWS (API Gateway, ACM, Load Balancers, Cognito, Aurora and RDS, MSK)", level: "Production", highlight: true },
      { name: "Terraform (IAC Automation)", level: "Production", highlight: true },
      { name: "Kubernetes / K8s Orchestration", level: "Production", highlight: true },
      { name: "Helm Charts & Release Management", level: "Production", highlight: true },
      { name: "Docker Containerization", level: "Production", highlight: true },
      { name: "Jenkins & Bitbucket CI/CD", level: "Production", highlight: true },
      { name: "Linux & Shell Scripting", level: "Proficient", highlight: false },
    ]
  },
  {
    id: "backend-arch",
    title: "Microservices & Platform Architecture",
    description: "Kubernetes-orchestrated containerized microservices, custom endpoint rate limiting, and automated API Gateway exposure.",
    color: "from-emerald-500/20 to-teal-600/20",
    borderColor: "border-emerald-500/30",
    skills: [
      { name: "Kubernetes Microservice Deployment", level: "Production", highlight: true },
      { name: "Configurable Endpoint-Level Rate Limiting", level: "Production", highlight: true },
      { name: "API Gateway Exposure Automation", level: "Production", highlight: true },
      { name: "OpenResty & NGINX Routing", level: "Production", highlight: true },
      { name: "JWT & Cryptographic RBAC", level: "Production", highlight: true },
      { name: "Node.js & RESTful APIs", level: "Production", highlight: false },
      { name: "Socket.IO & WebRTC Streaming", level: "Proficient", highlight: false },
    ]
  },
  {
    id: "observability-systems",
    title: "Observability & Distributed Systems",
    description: "In-house browser telemetry pipelines, centralized logging, metric collection, and Kafka stream processing.",
    color: "from-indigo-500/20 to-purple-600/20",
    borderColor: "border-indigo-500/30",
    skills: [
      { name: "Frontend Observability (Faro SDK → Alloy → OTel)", level: "Production", highlight: true },
      { name: "OpenSearch & Dashboards", level: "Production", highlight: true },
      { name: "Logstash & Filebeat Ingestion", level: "Production", highlight: true },
      { name: "Prometheus Metric Collection", level: "Production", highlight: true },
      { name: "Apache Kafka & AWS MSK", level: "Production", highlight: true },
      { name: "Web Vitals & Frontend Health Monitoring", level: "Production", highlight: true },
      { name: "Automated Synthetic Probes & Alerting", level: "Production", highlight: false },
    ]
  },
  {
    id: "databases-storage",
    title: "Databases, Caching & Storage",
    description: "In-memory caching with Redis, high-throughput document datastores, relational schemas, and AWS cloud storage.",
    color: "from-amber-500/20 to-orange-600/20",
    borderColor: "border-amber-500/30",
    skills: [
      { name: "Redis (Caching & State)", level: "Production", highlight: true },
      { name: "MongoDB & Aggregation Pipelines", level: "Production", highlight: true },
      { name: "Amazon Aurora & RDS (MySQL)", level: "Production", highlight: true },
      { name: "Amazon DynamoDB", level: "Production", highlight: true },
      { name: "Amazon S3 Object Storage", level: "Production", highlight: false },
    ]
  },
  {
    id: "frontend-ui",
    title: "Frontend & Interface Engineering",
    description: "Modern, responsive web applications, browser telemetry instrumentation, and accessible user interfaces.",
    color: "from-violet-500/20 to-fuchsia-600/20",
    borderColor: "border-violet-500/30",
    skills: [
      { name: "React.js & State Management", level: "Proficient", highlight: true },
      { name: "JavaScript (ES6+) & Web APIs", level: "Proficient", highlight: true },
      { name: "Tailwind CSS & Design Tokens", level: "Proficient", highlight: true },
      { name: "Faro SDK Telemetry Instrumentation", level: "Production", highlight: true },
      { name: "HTML5 & Accessible Web Standards", level: "Proficient", highlight: false },
      { name: "Vite Build Tooling", level: "Proficient", highlight: false },
    ]
  },
  {
    id: "languages-tools",
    title: "Languages & Engineering Tools",
    description: "Algorithmic problem solving in C++, version control workflows, Postman API testing, and terminal automation.",
    color: "from-rose-500/20 to-pink-600/20",
    borderColor: "border-rose-500/30",
    skills: [
      { name: "C++ (DSA 450+ LeetCode Solved)", level: "Advanced", highlight: true },
      { name: "Git & GitOps CI/CD Workflows", level: "Production", highlight: true },
      { name: "Postman API Automation", level: "Production", highlight: true },
      { name: "Python", level: "Intermediate", highlight: false },
      { name: "Linux CLI & Developer Tooling", level: "Advanced", highlight: false },
    ]
  }
];