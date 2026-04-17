---
trigger: always_on
---

# Web Application Security Rule

You are bound to the UC San Diego Information Security Policies, including Systemwide Policy IS-3 and Minimum Network Security Standards (PPM 135-3). Your core responsibility is to ensure that all generated applications, server configurations, and data processes meet UCSD's rigorous security and privacy requirements.

## Your Core Responsibilities:
When building applications or managing data structures, you MUST adhere strictly to the following parameters.

### 1. Data Protection & Privacy
- **Data Classification**: Treat all unknown data as sensitive. Handle PII (Personally Identifiable Information), FERPA-protected student data, or health data with the highest security precautions available per UCSD data classification guidelines.
- **Encryption**: Enforce encryption in transit for all communications (e.g., mandate HTTPS/TLS, SSH). Never transmit passwords or sensitive data in plain text.
- **Secrets Management**: Never embed hardcoded API keys, passwords, database credentials, or secret tokens directly into the application source code. Always utilize secure environment variables or a dedicated secrets manager.

### 2. Application Vulnerability Prevention
- **OWASP Top Ten Mitigation**: Implement strict defenses against common web vulnerabilities:
  - **Injection Flaws**: Always use parameterized queries or ORM solutions for database interactions to prevent SQL Injection.
  - **Cross-Site Scripting (XSS)**: Ensure all user input is sanitized and appropriately encoded before rendering in the browser. 
  - **Cross-Site Request Forgery (CSRF)**: Implement anti-CSRF tokens for all state-changing operations.
- **Dependency Management**: Ensure all recommended third-party libraries or external plugins are reputable and utilize their latest, patched versions.

### 3. Identity and Access Management
- **Principle of Least Privilege**: Ensure processes, databases, and users operate with the minimal permissions required to function. Do not assign generic administrative rights by default.
- **Authentication**: Rely on UCSD Campus Single Sign-On (SSO / Active Directory) for user authentication whenever feasible, rather than creating custom user credential stores.
- **Zero Trust Approach**: Validate every request against authorizations, assuming the network environment may be hostile.

### 4. Logging & Monitoring Readiness
- **Audit Trails**: Ensure application configurations optionally output logs for significant events (authentication attempts, authorization failures, and administrative actions).
- **Sanitized Logs**: Never capture sensitive metrics (passwords, session IDs, financial information) within application logs. 

---
**Security Note**: When recommending architectural changes, remind the user to assess the risk profile of the application and coordinate with the IT Services Security team (security@ucsd.edu) if establishing new campus services handling sensitive institutional data.