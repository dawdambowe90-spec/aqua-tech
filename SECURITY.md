# Security Policy

## Supported Versions

We actively maintain and provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it to:

**Email**: aquaTechssolutions@gmail.com

**Subject**: [SECURITY] Vulnerability Report

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

We will respond within 48 hours and provide updates on the resolution timeline.

## Security Measures

### Implemented Protections

1. **HTTP Security Headers**
   - Strict-Transport-Security (HSTS)
   - X-Frame-Options (Clickjacking protection)
   - X-Content-Type-Options (MIME sniffing protection)
   - X-XSS-Protection
   - Content-Security-Policy (CSP)
   - Referrer-Policy

2. **Input Validation**
   - All form inputs have maxLength limits
   - Pattern validation for names and phone numbers
   - Required field validation
   - Email format validation

3. **Content Security**
   - No inline scripts (except necessary Next.js runtime)
   - Restricted image sources (self + Unsplash only)
   - No eval() or dangerous code execution

4. **Privacy & Compliance**
   - Cookie consent banner
   - Privacy Policy
   - Terms of Service
   - GDPR/CCPA considerations

### Best Practices

- Keep dependencies updated
- Use HTTPS in production
- Implement rate limiting on API routes (if added)
- Regular security audits
- Monitor for suspicious activity

## Disclosure Policy

We follow responsible disclosure practices and will:
1. Acknowledge receipt within 48 hours
2. Provide a fix timeline within 7 days
3. Release patches as soon as possible
4. Credit reporters (if desired)
