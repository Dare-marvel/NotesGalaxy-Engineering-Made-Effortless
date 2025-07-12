const EthicalHackingEH4 = [
  {
    question: "Which security framework provides a comprehensive, structured approach to implementing and maintaining security controls across an entire organization?",
    options: ["NIST Cybersecurity Framework", "ISO 27001", "COBIT", "ITIL"],
    correct: 0,
    category: "EH"
  },
  {
    question: "What is the purpose of a 'honeytoken' in a network security infrastructure?",
    options: ["To provide a decoy for attackers", "To encrypt sensitive data", "To authenticate users", "To monitor network traffic"],
    correct: 0,
    category: "EH"
  },
  {
    question: "Which concept describes the practice of understanding and proactively mitigating an attacker's tactics, techniques, and procedures (TTPs)?",
    options: ["Threat Modeling", "Zero Trust", "Red Teaming", "Security Awareness Training"],
    correct: 2,
    category: "EH"
  },
  {
    question: "In a penetration test, which phase involves identifying specific vulnerabilities within a system?",
    options: ["Reconnaissance", "Vulnerability Analysis", "Exploitation", "Reporting"],
    correct: 1,
    category: "EH"
  },
  {
    question: "An ethical hacker is examining a web server's configuration files.  What crucial piece of information should they prioritize for immediate review?",
    options: ["Server's operating system", "Default passwords", "Web application frameworks", "Database credentials"],
    correct: 1,
    category: "EH"
  },
  {
    question: "What protocol commonly enables remote management of network devices using a graphical user interface?",
    options: ["SSH", "Telnet", "RDP", "SNMP"],
    correct: 2,
    category: "EH"
  },
  {
    question: "You detect a suspicious email attachment.  Which tool is best for quickly analyzing its contents without executing it?",
    options: ["Wireshark", "IDA Pro", "VirusTotal", "Metasploit"],
    correct: 2,
    category: "EH"
  },
  {
    question: "A vulnerability scanner identifies a vulnerability related to improper input validation.  Which attack vector is most likely associated with this type of vulnerability?",
    options: ["SQL Injection", "Cross-Site Scripting", "Denial-of-Service", "Buffer Overflow"],
    correct: 0,
    category: "EH"
  },
  {
    question: "In a penetration test, what is the role of a vulnerability database?",
    options: ["To store passwords", "To generate exploits", "To manage testing tools", "To identify known vulnerabilities"],
    correct: 3,
    category: "EH"
  },
  {
    question: "What is the critical step in post-exploitation activities after gaining initial access to a system?",
    options: ["Exfiltration of data", "Maintaining access", "Privilege escalation", "Creating a backdoor"],
    correct: 2,
    category: "EH"
  },
  {
    question: "A penetration test is conducted on a web application using simulated browser-based attacks. What testing method is primarily being employed?",
    options: ["Black Box", "White Box", "Gray Box", "Penetration testing framework"],
    correct: 0,
    category: "EH"
  },
  {
    question: "What is a key aspect of securing a wireless network besides using strong encryption?",
    options: ["Using MAC address filtering only", "Employing strong network passwords", "Disabling SSID broadcast", "Using WPA2 and WPA3 protocols"],
    correct: 2,
    category: "EH"
  },
  {
    question: "What ethical principle guides the actions of an ethical hacker when assessing a system?",
    options: ["Obtaining the highest possible score", "Exploiting vulnerabilities for fun", "Protecting the assets of the target", "Maximizing access to the system"],
    correct: 2,
    category: "EH"
  },
  {
    question: "Which type of malware can disguise itself as a legitimate program to trick users into installing it?",
    options: ["Trojan", "Worm", "Virus", "Rootkit"],
    correct: 0,
    category: "EH"
  },
  {
    question: "You're tasked with assessing the security of a network device. Which command-line tool is crucial for this task, commonly used for configuring and managing network devices?",
    options: ["Nmap", "Wireshark", "Netcat", "SSH"],
    correct: 2,
    category: "EH"
  },
  {
    question: "During a penetration test, an ethical hacker discovers a web application vulnerable to cross-site scripting (XSS).  Which technique, specifically targeting the stored XSS vulnerability, would be most effective in compromising the application's integrity and extracting sensitive information?",
    options: ["Reflective XSS attack", "DOM-based XSS attack", "Blind Stored XSS attack", "Cross-site request forgery (CSRF) attack"],
    correct: 2,
    category: "EH"
  },
  {
    question: "You're analyzing a network traffic capture.  You observe unusual patterns of connections and data transfers originating from a server suspected of botnet activity.  What advanced network analysis technique would be most appropriate to determine the botnet's command and control (C&C) infrastructure?",
    options: ["Wireshark packet capture analysis", "Network flow analysis", "Protocol-specific deep packet inspection", "Maltego analysis of IP addresses"],
    correct: 2,
    category: "EH"
  },
  {
    question: "A penetration tester identifies a misconfigured web server with a default username and password.  What principle of ethical hacking best describes the tester's action of exploiting this known vulnerability?",
    options: ["Reconnaissance", "Enumeration", "Exploitation", "Post-exploitation"],
    correct: 1,
    category: "EH"
  },
  {
    question: "Which of the following cryptographic attacks exploits the weakness of padding schemes in block ciphers, leading to the recovery of plaintext information?",
    options: ["Man-in-the-middle attack", "Birthday attack", "Padding oracle attack", "Chosen-ciphertext attack"],
    correct: 2,
    category: "EH"
  },
  {
    question: "A company needs to assess the effectiveness of its security controls against potential SQL injection attacks. Which automated tool would be most effective to perform this assessment?",
    options: ["Nmap", "Nessus", "SQLmap", "Burp Suite"],
    correct: 2,
    category: "EH"
  },
  {
    question: "An organization wants to simulate a real-world attack scenario to evaluate the resilience of their network infrastructure to sophisticated attacks. Which type of ethical hacking exercise should they conduct?",
    options: ["Vulnerability Assessment", "Penetration Test", "Security Audit", "Security Awareness Training"],
    correct: 1,
    category: "EH"
  },
  {
    question: "In a phishing campaign targeting employees, an attacker crafts a convincing email designed to trick employees into downloading a malicious file.  Which type of social engineering technique is this?",
    options: ["Baiting", "Pretexting", "Scareware", "Malicious attachment"],
    correct: 0,
    category: "EH"
  },
  {
    question: "A penetration tester needs to analyze system logs and network traffic to identify suspicious patterns and potential threats.  Which tool would be ideal for this log analysis activity?",
    options: ["Splunk", "Wireshark", "Metasploit", "Nessus"],
    correct: 0,
    category: "EH"
  },
  {
    question: "Which methodology emphasizes the use of publicly available information to identify potential vulnerabilities during the reconnaissance phase of ethical hacking?",
    options: ["OSINT", "Footprinting", "Scanning", "Vulnerability Assessment"],
    correct: 0,
    category: "EH"
  },
  {
    question: "A hacker gains access to a system by exploiting a zero-day vulnerability. Which action would likely happen next in this attack?",
    options: ["Data exfiltration", "Establishing a persistent foothold", "Reconnaissance", "Delivery of malware"],
    correct: 1,
    category: "EH"
  },
  {
    question: "A penetration test reveals a vulnerability allowing remote code execution. Which ethical hacking phase focuses on verifying the existence of such a vulnerability and demonstrating its exploitability?",
    options: ["Post-exploitation", "Scanning", "Exploitation", "Enumeration"],
    correct: 2,
    category: "EH"
  },
  {
    question: "What is a critical aspect of ethical hacking that differentiates it from malicious hacking, ensuring compliance with legal and ethical boundaries?",
    options: ["Exploit development", "Reconnaissance", "Authorization", "Post-exploitation"],
    correct: 2,
    category: "EH"
  },
  {
    question: "Which attack leverages the flaws in a system's access controls to gain unauthorized access?",
    options: ["Denial-of-service (DoS)", "Privilege escalation", "SQL injection", "Man-in-the-middle"],
    correct: 1,
    category: "EH"
  },
  {
    question: "What type of attack aims to disrupt or prevent legitimate users from accessing a service?",
    options: ["Phishing", "MITM", "DoS", "SQL Injection"],
    correct: 2,
    category: "EH"
  },
  {
    question: "What is a common goal of penetration testers in gaining access to a system to identify and exploit security weaknesses without causing harm?",
    options: ["Data breaches", "System disruption", "Compliance violations", "Vulnerability disclosure"],
    correct: 3,
    category: "EH"
  },
  {
    question: "Which is a crucial phase in ethical hacking that involves understanding the target system's architecture and identifying potential attack vectors?",
    options: ["Post-exploitation", "Reconnaissance", "Exploitation", "Enumeration"],
    correct: 1,
    category: "EH"
  },
  {
    question: "An ethical hacker discovers a server with vulnerable software. What phase focuses on determining the scope of the vulnerability, possible impacts, and related systems?",
    options: ["Exploitation", "Post-exploitation", "Reconnaissance", "Enumeration"],
    correct: 3,
    category: "EH"
  },
  {
    question: "After gaining access, an ethical hacker analyzes the compromised system to identify critical assets and data. Which phase is this?",
    options: ["Initial assessment", "System analysis", "Post-exploitation", "Exploitation"],
    correct: 2,
    category: "EH"
  },
  {
    question: "Which tool is specifically designed to scan for open ports and services on a network?",
    options: ["Burp Suite", "Nmap", "Wireshark", "Metasploit"],
    correct: 1,
    category: "EH"
  },
  {
    question: "What critical concept in ethical hacking ensures that activities are performed legally and with informed consent?",
    options: ["Authorization", "Discretion", "Ethics", "Policy"],
    correct: 0,
    category: "EH"
  },
  {
    question: "In a penetration test, a vulnerability report details the weaknesses in a system. What is the main purpose of this report?",
    options: ["Identify the exploit", "Outline mitigations", "Detect vulnerabilities", "Trace back to the source"],
    correct: 1,
    category: "EH"
  },
  {
    question: "Which method, when used in the penetration testing methodology, identifies the overall security weaknesses of a system?",
    options: ["Risk analysis", "Compliance assessment", "Vulnerability assessment", "Security audit"],
    correct: 2,
    category: "EH"
  },
  {
    question: "During a penetration test, you discover a web application vulnerable to cross-site scripting (XSS).  Which of the following techniques, used in combination with the XSS vulnerability, could potentially lead to a privilege escalation scenario?",
    options: ["Social Engineering", "Session hijacking", "Command injection", "Denial-of-service (DoS) attacks"],
    correct: 1,
    category: "EH"
  },
  {
    question: "You are analyzing a network traffic capture and notice unusual patterns of network communication. Which tool would be MOST effective to categorize and understand the interactions between various network devices and applications based on the capture data?",
    options: ["Nmap", "Wireshark", "Metasploit", "Nessus"],
    correct: 1,
    category: "EH"
  },
  {
    question: "In a social engineering attempt, which of the following tactics is MOST effective against an employee who receives a phishing email supposedly from the CEO requesting immediate financial transfer?",
    options: ["Fear of job loss", "Urgency", "Authority", "All of the above"],
    correct: 2,
    category: "EH"
  },
  {
    question: "A penetration tester discovers a vulnerability in a system that allows arbitrary code execution. To exploit this vulnerability, which of the following exploit types would be most relevant to deliver an attacker's malicious code, given there is no easily exploitable buffer overflow vulnerability?",
    options: ["Buffer Overflow", "SQL Injection", "Remote File Inclusion", "Cross-site scripting"],
    correct: 2,
    category: "EH"
  },
  {
    question: "Which ethical hacking methodology often involves reconnaissance, vulnerability analysis, exploitation, and reporting?",
    options: ["OSSTMM", "NIST SP 800-115", "OWASP methodology", "Penetration Testing Execution Standard (PTES)"],
    correct: 3,
    category: "EH"
  },
  {
    question: "A company utilizes a cloud-based infrastructure with several interconnected services. During a penetration test, which of the following would be most critical to assess the security of inter-service communication?",
    options: ["Port scanning", "Configuration review", "API security testing", "Vulnerability scanning"],
    correct: 2,
    category: "EH"
  },
  {
    question: "You suspect a network intrusion may be ongoing.  Which log file, besides the firewall logs, would be crucial to review for potential indicators of compromise (IOCs) in the first stages of an investigation?",
    options: ["DNS logs", "Application logs", "System event logs", "All of the above"],
    correct: 3,
    category: "EH"
  },
  {
    question: "Which concept in ethical hacking focuses on identifying and mitigating vulnerabilities before an attacker can exploit them?",
    options: ["Security Auditing", "Risk Management", "Vulnerability Assessment", "Threat Modeling"],
    correct: 3,
    category: "EH"
  },
  {
    question: "A penetration tester finds a system with weak default passwords. What crucial step in the exploitation phase needs to be considered before attempting further attacks?",
    options: ["Impact Assessment", "Escalation of Privileges", "Maintaining Access", "Reconnaissance"],
    correct: 0,
    category: "EH"
  },
  {
    question: "When analyzing a web application for vulnerabilities, which technique involves manually inspecting the source code for potential flaws, such as input validation issues?",
    options: ["Fuzzing", "Dynamic Analysis", "Static Analysis", "Penetration Testing"],
    correct: 2,
    category: "EH"
  },
  {
    question: "Which of the following is a key aspect of maintaining confidentiality during a penetration test, ensuring the integrity of sensitive information gathered during the process?",
    options: ["Secure storage of data", "Data anonymization", "Data encryption", "All of the above"],
    correct: 3,
    category: "EH"
  },
  {
    question: "A penetration tester identifies a misconfigured web server that reveals sensitive information. What crucial step is needed immediately after discovery?",
    options: ["Alerting security personnel", "Exploitation", "Proof of Concept", "Reporting"],
    correct: 0,
    category: "EH"
  },
  {
    question: "What is the primary role of a Security Information and Event Management (SIEM) system in an ethical hacking scenario?",
    options: ["Vulnerability scanning", "Automated penetration testing", "Log aggregation and analysis", "Firewall management"],
    correct: 2,
    category: "EH"
  }
];

export default EthicalHackingEH4;
