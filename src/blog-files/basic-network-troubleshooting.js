const content = `# Basic Network Troubleshooting

Network troubleshooting is a systematic approach to identifying, diagnosing, and resolving network connectivity issues. Effective troubleshooting requires understanding network protocols, tools, and methodologies.

## Troubleshooting Methodology

### The OSI Model Approach

Troubleshooting follows the **OSI model** layers, typically using bottom-up or top-down approaches:

**Bottom-Up**: Start from Physical layer (Layer 1) and work upward
**Top-Down**: Start from Application layer (Layer 7) and work downward
**Divide-and-Conquer**: Start from middle layers (Network/Transport)

### Systematic Steps

1. **Define the Problem**: Clearly identify symptoms and scope
2. **Gather Information**: Collect relevant data and error messages
3. **Consider Possibilities**: List potential causes
4. **Create Action Plan**: Prioritize troubleshooting steps
5. **Implement Solution**: Apply fixes systematically
6. **Test Results**: Verify the problem is resolved
7. **Document**: Record the issue and solution

## Essential Network Commands

### Windows Commands

**PING**: Tests basic connectivity using ICMP Echo Request/Reply
\`\`\`cmd
ping 8.8.8.8
ping google.com
ping -t 192.168.1.1  # Continuous ping
\`\`\`

**TRACERT**: Traces the path packets take to destination
\`\`\`cmd
tracert google.com
tracert -h 15 8.8.8.8  # Maximum 15 hops
\`\`\`

**NSLOOKUP**: DNS troubleshooting tool
\`\`\`cmd
nslookup google.com
nslookup google.com 8.8.8.8  # Use specific DNS server
\`\`\`

**IPCONFIG**: Display and manage IP configuration
\`\`\`cmd
ipconfig /all           # Detailed configuration
ipconfig /release       # Release IP address
ipconfig /renew         # Renew IP address
ipconfig /flushdns      # Clear DNS cache
\`\`\`

**NETSTAT**: Display network connections and statistics
\`\`\`cmd
netstat -an            # All connections and ports
netstat -r             # Routing table
netstat -s             # Protocol statistics
\`\`\`

### Linux/Unix Commands

**PING**: Similar to Windows but with different options
\`\`\`bash
ping -c 4 8.8.8.8      # Send 4 packets
ping -i 0.5 google.com # 0.5 second interval
\`\`\`

**TRACEROUTE**: Path tracing utility
\`\`\`bash
traceroute google.com
traceroute -n 8.8.8.8  # Show IP addresses only
\`\`\`

**DIG**: Advanced DNS lookup tool
\`\`\`bash
dig google.com
dig @8.8.8.8 google.com MX  # Query MX records
\`\`\`

## Common Network Problems

### Layer 1 (Physical) Issues

**Cable Problems**:
- Damaged or loose cables
- Wrong cable type (crossover vs straight-through)
- Cable length exceeding standards

**Port Issues**:
- Faulty network interface cards
- Bad switch/hub ports
- Speed/duplex mismatches

### Layer 2 (Data Link) Issues

**MAC Address Problems**:
- Duplicate MAC addresses
- MAC address table overflow
- VLAN misconfigurations

**Switching Issues**:
- Spanning Tree Protocol (STP) loops
- Port security violations
- Trunk configuration errors

### Layer 3 (Network) Issues

**IP Configuration Problems**:
- Incorrect IP addresses: $192.168.1.100/24$ vs $192.168.2.100/24$
- Wrong subnet masks
- Duplicate IP addresses
- Missing default gateway

**Routing Issues**:
- Missing routes in routing table
- Incorrect next-hop addresses
- Route loops

### Layer 4-7 (Upper Layer) Issues

**DNS Problems**:
- DNS server unavailable
- Incorrect DNS configuration
- DNS cache poisoning

**Application Issues**:
- Service not running
- Firewall blocking ports
- Authentication failures

## Troubleshooting Tools and Techniques

### Network Analyzers

**Wireshark**: Packet capture and analysis
- Capture network traffic
- Analyze protocols
- Identify communication issues

**TCPdump**: Command-line packet analyzer
\`\`\`bash
tcpdump -i eth0 port 80
tcpdump -w capture.pcap
\`\`\`

### Performance Monitoring

**Bandwidth Utilization Formula**:
$Utilization\\% = \\frac{Current Traffic}{Maximum Bandwidth} \\times 100$

**Round Trip Time (RTT) Analysis**:
$RTT = T_{send} + T_{propagation} + T_{processing} + T_{return}$

### Network Scanning Tools

**NMAP**: Network discovery and security scanning
\`\`\`bash
nmap -sn 192.168.1.0/24    # Ping scan
nmap -p 1-1000 192.168.1.1 # Port scan
\`\`\`

## Specific Troubleshooting Scenarios

### Cannot Access Internet

**Step-by-step approach**:

1. **Check Physical Connection**:
   - Verify cable connections
   - Check link lights on NIC and switch

2. **Verify IP Configuration**:
   \`\`\`cmd
   ipconfig /all
   \`\`\`
   - IP address in correct subnet?
   - Subnet mask correct?
   - Default gateway configured?

3. **Test Local Connectivity**:
   \`\`\`cmd
   ping 127.0.0.1     # Loopback test
   ping [local IP]    # Self test
   ping [gateway IP]  # Gateway test
   \`\`\`

4. **Test DNS Resolution**:
   \`\`\`cmd
   nslookup google.com
   ping 8.8.8.8       # Test without DNS
   \`\`\`

### Slow Network Performance

**Performance metrics to check**:

| Metric | Normal Range | Problem Threshold |
|--------|--------------|-------------------|
| Latency | < 50ms LAN | > 100ms |
| Packet Loss | < 0.1% | > 1% |
| Bandwidth Utilization | < 70% | > 85% |
| Collision Rate | < 1% | > 5% |

### Intermittent Connectivity

**Common causes and solutions**:

**Physical Issues**:
- Loose connections
- Electromagnetic interference
- Cable degradation

**Network Congestion**:
- High broadcast traffic
- Bandwidth saturation
- Buffer overflows

**Configuration Issues**:
- DHCP lease problems
- Routing table changes
- Load balancing issues

## Advanced Troubleshooting Techniques

### Protocol Analysis

**TCP Connection States**:
- ESTABLISHED: Active connection
- TIME_WAIT: Connection closing
- SYN_SENT: Connection attempt

**Error Rate Calculations**:
$Error Rate = \\frac{Error Packets}{Total Packets} \\times 100\\%$

### Network Baseline Creation

**Key metrics to monitor**:
- Peak usage times
- Normal traffic patterns
- Application response times
- Error rates by protocol

### Documentation Best Practices

**Troubleshooting logs should include**:
- Problem description and symptoms
- Steps taken to resolve
- Commands used and outputs
- Final solution implemented
- Lessons learned

---

*Effective network troubleshooting combines systematic methodology with the right tools and thorough documentation!*`;

export default content;