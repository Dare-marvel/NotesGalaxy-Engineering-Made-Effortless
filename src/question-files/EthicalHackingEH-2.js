const EthicalHackingEH2 = [
  {
    question: "You are conducting a social engineering exercise. You have identified a key employee who is known to be easily manipulated. Which of the following social engineering tactics would likely be MOST effective in gaining access to confidential information given the employee's personality?",
    options: ["Phishing", "Tailgating", "Pretexting", "Baiting"],
    correct: 2,
    category: "EH"
  },
  {
    question: "In a security audit, you notice a lack of proper logging and monitoring mechanisms. Which of the following security controls would be MOST effective in improving the ability to detect and respond to security incidents?",
    options: ["Intrusion Detection System", "Firewall", "Antivirus", "Security Information and Event Management (SIEM)"],
    correct: 3,
    category: "EH"
  },
  {
    question: "While analyzing a network, you encounter a compromised host with an unusual network configuration. Which of the following tools would be MOST efficient in identifying the malicious software present on the compromised host, prioritizing behavior analysis?",
    options: ["Wireshark", "Maltego", "Process Monitor", "YARA"],
    correct: 3,
    category: "EH"
  },
  {
    question: "A company's web application uses a weak hashing algorithm.  Which vulnerability assessment technique would be the MOST appropriate for identifying this vulnerability?",
    options: ["Static analysis", "Dynamic analysis", "Fuzzing", "Port scanning"],
    correct: 0,
    category: "EH"
  },
  {
    question: "You are tasked with analyzing a wireless network that is using a weak encryption protocol.  What is the most efficient method to determine if the network is vulnerable and gain access?",
    options: ["WPS attack", "ARP poisoning", "MitM attack", "DDoS attack"],
    correct: 0,
    category: "EH"
  },
  {
    question: "Which advanced technique is useful to bypass a WAF during a penetration test by leveraging the limited knowledge of WAF rules?",
    options: ["Bypass techniques through API endpoints", "WAF fingerprinting", "Custom payload creation", "Brute-forcing login pages"],
    correct: 2,
    category: "EH"
  },
  {
    question: "Which methodology focuses on identifying, assessing, and prioritizing vulnerabilities based on their likelihood of exploitation?",
    options: ["OWASP Top 10", "NIST SP 800-53", "Risk Management Framework", "Vulnerability Scanning"],
    correct: 2,
    category: "EH"
  },
  {
    question: "A penetration tester identifies a cross-site scripting (XSS) vulnerability. Which of the following demonstrates the most effective exploitation strategy?",
    options: ["Exploit a vulnerable field with a malicious JavaScript payload", "Use Burp Suite to scan the application for XSS", "Use a vulnerability scanner to report XSS", "Attempt to gain administrative access"],
    correct: 0,
    category: "EH"
  },
  {
    question: "A system administrator notices suspicious log entries showing unusual file access patterns by a specific user account. What is the appropriate next step?",
    options: ["Immediately reboot the system", "Contact the user and ask about the unusual activity", "Investigate the user's permissions and activity logs", "Ignore the log entries"],
    correct: 2,
    category: "EH"
  },
  {
    question: "Which concept encompasses the systematic process of testing for security weaknesses in a system or application?",
    options: ["Ethical Hacking", "Security Auditing", "Threat Modeling", "Vulnerability Management"],
    correct: 0,
    category: "EH"
  },
  {
    question: "In a network penetration test, you discover a system using outdated software.  Which of the following is the PRIMARY security risk associated with outdated software?",
    options: ["Reduced performance", "Vulnerabilities", "Increased maintenance", "Elevated hardware requirements"],
    correct: 1,
    category: "EH"
  },
  {
    question: "A company is concerned about unauthorized access to its cloud infrastructure. What would be the MOST crucial step in a security assessment?",
    options: ["Review access controls and permissions", "Implement strong passwords and multi-factor authentication", "Use a cloud security posture management (CSPM) tool", "Employ a security information and event management (SIEM) solution"],
    correct: 0,
    category: "EH"
  },
  {
    question: "Which tool is MOST effective for identifying misconfigurations within a cloud environment?",
    options: ["AWS Inspector", "Nessus", "Nmap", "Wireshark"],
    correct: 0,
    category: "EH"
  },
  {
    question: "A penetration tester needs to analyze traffic flowing to and from specific ports on a target server. Which tool is BEST suited for this task?",
    options: ["Metasploit", "Nmap", "Wireshark", "Nessus"],
    correct: 2,
    category: "EH"
  },
  {
    question: "A company's web application has been identified as vulnerable to cross-site request forgery (CSRF).  Which countermeasure would be MOST effective in mitigating this risk?",
    options: ["Implementing input validation", "Using HTTPS", "Enabling HTTP only cookies", "Adding a CAPTCHA"],
    correct: 2,
    category: "EH"
  },
  {
    question: "An ethical hacker discovers a system vulnerability that allows for escalating privileges.  Which approach BEST describes the process of leveraging this vulnerability to gain elevated access?",
    options: ["Exploitation", "Vulnerability analysis", "Vulnerability assessment", "Policy review"],
    correct: 0,
    category: "EH"
  },
  {
    question: "Which phase in a penetration testing engagement involves identifying potential entry points and vulnerabilities?",
    options: ["Reconnaissance", "Scanning", "Gaining Access", "Post Exploitation"],
    correct: 0,
    category: "EH"
  },
  {
    question: "Which is a key aspect of handling ethical hacking reports?",
    options: ["Maintaining confidentiality", "Providing actionable remediation steps", "Ensuring complete data loss prevention", "Focus on speed and efficiency"],
    correct: 1,
    category: "EH"
  },
  {
    question: "What is a critical element of a penetration testing report?",
    options: ["Executive Summary", "External Scanning Results", "Web Application Testing", "Conclusion and Remediation"],
    correct: 3,
    category: "EH"
  },
  {
    question: "Which tool would be best to assess the security of a wireless network by identifying its weaknesses?",
    options: ["Aircrack-ng", "Nmap", "Wireshark", "Metasploit"],
    correct: 0,
    category: "EH"
  },
  {
    question: "In a penetration test, what tool would be best to evaluate the effectiveness of a company's firewall rules?",
    options: ["Nessus", "Nmap", "Wireshark", "OpenVAS"],
    correct: 1,
    category: "EH"
  },
  {
    question: "A penetration tester is analyzing a system.  Which tool helps identify critical and sensitive data?",
    options: ["Maltego", "Nmap", "Wireshark", "Nikto"],
    correct: 0,
    category: "EH"
  },
  {
    question: "What's a key difference between penetration testing and vulnerability scanning?",
    options: ["Penetration testing attempts to exploit vulnerabilities", "Vulnerability scanning only finds open ports", "Penetration testing focuses on preventing vulnerabilities", "Vulnerability scanning is often more detailed"],
    correct: 0,
    category: "EH"
  },
  {
    question: "Which of the following techniques is NOT commonly used in social engineering attacks targeting a specific individual?",
    options: ["Pretexting", "Phishing", "Tailgating", "Dumpster Diving"],
    correct: 3,
    category: "EH"
  },
  {
    question: "A penetration tester discovers a vulnerable web application that allows arbitrary file uploads.  Which of the following is the MOST critical initial action?",
    options: ["Immediately report the vulnerability to the owner.", "Attempt to upload a malicious script.", "Test the upload functionality with various file types.", "Analyze the source code of the application."],
    correct: 0,
    category: "EH"
  },
  {
    question: "A penetration tester notices a web server is responding to different IP addresses with varying levels of information. Which reconnaissance technique is most likely being employed?",
    options: ["Port scanning", "Fingerprinting", "Banner grabbing", "Vulnerability scanning"],
    correct: 1,
    category: "EH"
  },
  {
    question: "During a vulnerability assessment, a network engineer identifies a misconfigured firewall rule allowing access to a critical database from a public IP address. What is the MOST appropriate remediation action?",
    options: ["Immediately disable the public IP address.", "Block the database from the public IP address.", "Adjust firewall rules to restrict database access.", "Add a new, separate firewall for the database."],
    correct: 2,
    category: "EH"
  },
  {
    question: "Which advanced penetration testing methodology involves using a combination of automated and manual techniques to simulate a real-world attack scenario?",
    options: ["Black box testing", "Gray box testing", "White box testing", "Red teaming"],
    correct: 3,
    category: "EH"
  },
  {
    question: "Which type of attack exploits the difference in time it takes for a system to process requests, often revealing hidden internal structures or services?",
    options: ["SQL injection", "Cross-site scripting", "Timing attack", "Denial-of-service"],
    correct: 2,
    category: "EH"
  },
  {
    question: "In a web application, what vulnerability allows an attacker to execute arbitrary code by manipulating parameters passed in a URL?",
    options: ["SQL injection", "Cross-site scripting", "Directory traversal", "Command injection"],
    correct: 0,
    category: "EH"
  },
  {
    question: "What type of attack involves manipulating the HTTP headers in a request to circumvent security measures?",
    options: ["Buffer overflow", "Cross-site request forgery (CSRF)", "Session hijacking", "HTTP request smuggling"],
    correct: 3,
    category: "EH"
  },
  {
    question: "Which cryptographic algorithm is known for its speed but may have limitations in security if not properly implemented?",
    options: ["RSA", "AES", "MD5", "DES"],
    correct: 1,
    category: "EH"
  },
  {
    question: "A penetration tester discovers a system vulnerable to privilege escalation.  What's the next logical step?",
    options: ["Report the vulnerability immediately.", "Escalate privileges to gain complete control.", "Attempt to exploit the vulnerability.", "Verify other potential vulnerabilities related to access."],
    correct: 1,
    category: "EH"
  },
  {
    question: "What is the key aspect in determining the appropriate ethical hacking engagement scope?",
    options: ["Time availability", "Hiring process", "Prioritization of findings", "Client\u2019s needs"],
    correct: 3,
    category: "EH"
  },
  {
    question: "What essential tool is used for mapping out network topology and identifying potential vulnerabilities during reconnaissance?",
    options: ["Nmap", "Wireshark", "Metasploit", "Nessus"],
    correct: 0,
    category: "EH"
  },
  {
    question: "Which principle of ethical hacking emphasizes obtaining proper authorization before conducting any testing?",
    options: ["Confidentiality", "Integrity", "Non-repudiation", "Legality"],
    correct: 3,
    category: "EH"
  },
  {
    question: "A penetration tester discovers a weak password policy. Which aspect is MOST important to consider?",
    options: ["Length and complexity", "Regular changes", "Password storage encryption", "Password reuse prevention"],
    correct: 0,
    category: "EH"
  },
  {
    question: "In a vulnerability assessment report, what is the crucial component outlining the severity and potential impact of identified vulnerabilities?",
    options: ["Introduction", "Methodology", "Conclusion", "Risk assessment"],
    correct: 3,
    category: "EH"
  },
  {
    question: "A company needs to assess the security posture of its cloud infrastructure. What approach should they take?",
    options: ["Network security assessment", "Application security assessment", "Cloud security assessment", "Social engineering test"],
    correct: 2,
    category: "EH"
  },
  {
    question: "What is a significant difference between a penetration test and a vulnerability scan?",
    options: ["Vulnerability scans are more expensive", "Penetration tests use more automation", "Penetration tests attempt exploitation", "Vulnerability scans are more comprehensive"],
    correct: 2,
    category: "EH"
  },
  {
    question: "Which technique is used to identify vulnerabilities by automatically checking for known flaws in applications or systems?",
    options: ["Fuzzing", "Port scanning", "Network sniffing", "SQL injection"],
    correct: 0,
    category: "EH"
  },
  {
    question: "A penetration tester discovers a system where the same credentials are reused across multiple services.  What kind of vulnerability is most likely present?",
    options: ["Weak password policy", "Insufficient access controls", "Broken authentication", "Cross-site request forgery"],
    correct: 2,
    category: "EH"
  },
  {
    question: "Which attack vector exploits predictable patterns in a network to gain unauthorized access?",
    options: ["Man-in-the-middle", "Session hijacking", "Brute-force", "Dictionary attack"],
    correct: 0,
    category: "EH"
  },
  {
    question: "Which type of attack is designed to overwhelm a system's resources, leading to a denial of service?",
    options: ["Distributed Denial-of-Service (DDoS)", "Cross-Site Scripting (XSS)", "Man-in-the-Middle (MitM)", "SQL Injection"],
    correct: 0,
    category: "EH"
  },
  {
    question: "In ethical hacking, what crucial document outlines the scope, objectives, and rules of engagement for a testing exercise?",
    options: ["Penetration test plan", "Vulnerability report", "Incident response plan", "Security policy"],
    correct: 0,
    category: "EH"
  },
  {
    question: "Which protocol is commonly used for remote access and management, often exploited for unauthorized access?",
    options: ["SSH", "HTTPS", "FTP", "SNMP"],
    correct: 0,
    category: "EH"
  },
  {
    question: "Which key principle in ethical hacking ensures confidentiality of data and system resources during testing?",
    options: ["Non-repudiation", "Confidentiality", "Integrity", "Availability"],
    correct: 1,
    category: "EH"
  },
  {
    question: "Which of the following techniques is MOST effective in bypassing a web application firewall (WAF) designed to prevent SQL injection vulnerabilities?",
    options: ["Using a different browser", "Employing a blind SQL injection attack", "Using a proxy server", "Performing a brute-force attack on the login page"],
    correct: 1,
    category: "EH"
  },
  {
    question: "A penetration tester discovers a vulnerability allowing unauthorized access to a database.  What is the MOST critical step immediately following this discovery?",
    options: ["Document the vulnerability in detail", "Attempt to exploit the vulnerability further", "Notify the system administrator immediately", "Report the vulnerability to a third-party bug bounty program"],
    correct: 0,
    category: "EH"
  },
  {
    question: "In a social engineering scenario, which method is typically MOST effective at gaining initial access to an organization's network, assuming no prior knowledge of the target?",
    options: ["Phishing email with a malicious attachment", "Creating a fake social media profile", "Exploiting a software vulnerability", "Tailgating past security guards"],
    correct: 0,
    category: "EH"
  }
];

export default EthicalHackingEH2;
