const content = `# Basics of Computer Networks

Computer networks form the backbone of modern digital communication, enabling devices to share resources, data, and services across local and global distances.

## What is a Computer Network?

A **computer network** is a collection of interconnected devices that can communicate and share resources with each other. These devices include computers, servers, routers, switches, and mobile devices.

### Types of Networks by Size

Networks are classified based on their geographical coverage:

**Local Area Network (LAN)**: Covers a small area like a home, office, or building. Typical range: up to 1 km.

**Metropolitan Area Network (MAN)**: Spans a city or large campus. Range: 1-100 km.

**Wide Area Network (WAN)**: Covers large geographical areas, countries, or continents. Range: beyond 100 km.

## Network Topologies

The physical and logical arrangement of network devices defines the topology:

### Common Topologies

- **Bus Topology**: All devices connected to a single cable
- **Star Topology**: All devices connected to a central hub/switch  
- **Ring Topology**: Devices connected in a circular chain
- **Mesh Topology**: Multiple connections between devices for redundancy

## OSI Model Layers

The **Open Systems Interconnection (OSI)** model defines network communication in 7 layers:

| Layer | Name | Function |
|-------|------|----------|
| 7 | Application | User interface (HTTP, FTP, SMTP) |
| 6 | Presentation | Data formatting, encryption |
| 5 | Session | Managing connections |
| 4 | Transport | End-to-end delivery (TCP, UDP) |
| 3 | Network | Routing (IP) |
| 2 | Data Link | Frame formatting, error detection |
| 1 | Physical | Electrical signals, cables |

## Network Protocols

Protocols define rules for communication:

### Key Protocols

**TCP/IP**: Foundation of internet communication
- **TCP** (Transmission Control Protocol): Reliable, connection-oriented
- **IP** (Internet Protocol): Addressing and routing

**HTTP/HTTPS**: Web communication protocols

**FTP**: File transfer protocol

**SMTP**: Email transmission

## IP Addressing

Every device needs a unique identifier:

### IPv4 Format
An IPv4 address consists of 4 octets: $192.168.1.1$

### Subnetting
Networks can be divided into smaller subnets using subnet masks:
- Network: $192.168.1.0/24$
- Subnet mask: $255.255.255.0$
- Available hosts: $2^8 - 2 = 254$

## Network Devices

### Essential Components

**Router**: Connects different networks, forwards packets based on IP addresses

**Switch**: Connects devices within a LAN, operates at Data Link layer

**Hub**: Basic connectivity device (largely obsolete)

**Access Point**: Provides wireless connectivity

**Firewall**: Security device controlling network traffic

## Network Performance Metrics

Key measurements for network efficiency:

### Important Metrics
- **Bandwidth**: Maximum data transfer rate (measured in bps)
- **Latency**: Time delay in data transmission
- **Throughput**: Actual data transfer rate achieved
- **Packet Loss**: Percentage of lost data packets

Formula for network utilization:
$Utilization = \\frac{Actual Throughput}{Available Bandwidth} \\times 100\\%$

## Applications of Computer Networks

### Modern Use Cases
- **Resource Sharing**: Printers, files, internet connection
- **Communication**: Email, video conferencing, messaging
- **Distributed Computing**: Cloud services, load balancing
- **Entertainment**: Streaming, gaming, social media
- **E-commerce**: Online shopping, digital payments

---

*Computer networks have revolutionized how we communicate, work, and access information in the digital age!*`;

export default content;