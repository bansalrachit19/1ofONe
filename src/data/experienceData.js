export const experienceData = [
  {
    role: "Associate Software Engineer",
    company: "Birla Pivot",
    parentCompany: "Aditya Birla Group",
    location: "Bangalore, India",
    period: "2026 – Present",
    type: "Full-Time",
    current: true,
    highlight: "Promoted from Software Engineering Intern to Full-Time Associate Software Engineer",
    description: "Contributing across the production lifecycle — backend platform engineering, AWS cloud infrastructure, Kubernetes & Helm orchestration, API exposure automation, configurable rate limiting, in-house frontend observability, and operational automation.",
    keyDeliverables: [
      "Designed and implemented configurable API rate limiting with endpoint-specific minute and hourly policies, enabling fine-grained traffic control and automatically blocking abusive request bursts and malicious traffic patterns with HTTP 429 enforcement before impacting backend services.",
      "Engineered an automated API Gateway exposure workflow using Terraform IAC — automatically generating configuration changes from developer requests, opening Pull Requests, creating Terraform plans, and routing notifications over Microsoft Teams for team review and deployment.",
      "Built a custom in-house frontend observability pipeline (Browser → Faro SDK → Alloy → OpenTelemetry Collector → Logstash → OpenSearch) capturing real-time Web Vitals (LCP, CLS, INP, FCP, TTFB), JavaScript errors, API failures, and session telemetry.",
      "Managed containerized service deployments and orchestration using Docker, Kubernetes (K8s), and Helm charts with Prometheus monitoring and OpenSearch Dashboards.",
      "Automated repetitive operational workflows across CI/CD, service health checks, logging pipelines, and cloud infrastructure to standardize deployments and enhance reliability."
    ],
    technologies: [
      "AWS (API Gateway, ACM, Load Balancers, Cognito, Aurora and RDS, MSK)",
      "Terraform",
      "Kubernetes",
      "Helm",
      "OpenResty",
      "Faro SDK",
      "Alloy",
      "OpenTelemetry",
      "OpenSearch",
      "Logstash",
      "Prometheus",
      "Kafka / MSK",
      "Redis",
      "Docker"
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Birla Pivot",
    parentCompany: "Aditya Birla Group",
    location: "Bangalore, India",
    period: "2026 (6 Months)",
    type: "Internship",
    current: false,
    highlight: "6-month Bangalore engineering internship with full conversion to Associate Software Engineer",
    description: "Built cloud infrastructure automation, CI/CD pipelines, centralized logging, and environment provisioning to support production engineering workflows.",
    keyDeliverables: [
      "Provisioned and managed scalable AWS cloud resources using Terraform Infrastructure-as-Code across IAM, KMS, ACM, CloudFront, ECR, SQS, DynamoDB, and Aurora/RDS.",
      "Constructed and optimized automated CI/CD pipelines in Jenkins and Bitbucket to streamline build, test execution, and deployment promotion.",
      "Configured distributed logging pipelines with Filebeat, Logstash, and OpenSearch to index and analyze server-side application logs for troubleshooting.",
      "Assisted in configuring API routing, authentication layers, security group rules, and TLS certificates across staging and production environments."
    ],
    technologies: [
      "AWS (API Gateway, ACM, Load Balancers, Cognito, Aurora and RDS, MSK)",
      "Terraform",
      "Jenkins",
      "Bitbucket",
      "Logstash",
      "Filebeat",
      "OpenSearch",
      "Linux",
      "Docker"
    ]
  }
];