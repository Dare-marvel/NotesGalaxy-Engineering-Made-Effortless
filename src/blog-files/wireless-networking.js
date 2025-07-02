const content = `# Wireless Networking

Wireless networking has revolutionized how we connect devices and access information. Understanding wireless technologies, protocols, and security is essential for modern network administrators.

## Wireless Fundamentals

### Radio Frequency Basics

Wireless networks use **electromagnetic waves** to transmit data. Key properties include:

**Frequency**: Number of wave cycles per second, measured in Hertz (Hz)
**Wavelength**: Distance between wave peaks, calculated as:
$$\\lambda = \\frac{c}{f}$$

Where $c$ is the speed of light ($3 \\times 10^8$ m/s) and $f$ is frequency.

**Amplitude**: Wave height, determines signal strength
**Phase**: Wave position relative to reference point

### Wireless Spectrum

**ISM Bands** (Industrial, Scientific, Medical):
- **2.4 GHz**: 2.400-2.485 GHz (unlicensed)
- **5 GHz**: 5.150-5.825 GHz (unlicensed)  
- **6 GHz**: 5.925-7.125 GHz (newer band)

**Licensed vs Unlicensed Spectrum**:
- Licensed: Exclusive use, requires FCC authorization
- Unlicensed: Shared use, follows power and emission rules

## IEEE 802.11 Standards

### Evolution of Wi-Fi Standards

| Standard | Year | Frequency | Max Speed | Range |
|----------|------|-----------|-----------|-------|
| 802.11 | 1997 | 2.4 GHz | 2 Mbps | 100m |
| 802.11b | 1999 | 2.4 GHz | 11 Mbps | 150m |
| 802.11a | 1999 | 5 GHz | 54 Mbps | 75m |
| 802.11g | 2003 | 2.4 GHz | 54 Mbps | 150m |
| 802.11n | 2009 | 2.4/5 GHz | 600 Mbps | 175m |
| 802.11ac | 2013 | 5 GHz | 3.5 Gbps | 100m |
| 802.11ax (Wi-Fi 6) | 2019 | 2.4/5/6 GHz | 9.6 Gbps | 200m |

### 802.11 Frame Structure

**Management Frames**: Association, authentication, beacons
**Control Frames**: RTS, CTS, ACK
**Data Frames**: Actual user data transmission

### CSMA/CA Protocol

Unlike Ethernet's CSMA/CD, wireless uses **Carrier Sense Multiple Access with Collision Avoidance**:

1. **Listen Before Talk**: Check if medium is idle
2. **Random Backoff**: Wait random time if busy
3. **RTS/CTS**: Optional handshake for hidden node problem
4. **ACK**: Acknowledgment confirms successful transmission

**Backoff calculation**:
$$Backoff = Random(0, CW) \\times SlotTime$$

Where $CW$ (Contention Window) doubles after each collision: $CW = 2^n - 1$

## Wireless Network Topologies

### Infrastructure Mode

**Basic Service Set (BSS)**: Single access point with associated stations
- **BSSID**: MAC address of the access point
- **SSID**: Network name (up to 32 characters)

**Extended Service Set (ESS)**: Multiple APs with same SSID
- Enables roaming between access points
- Distribution System (DS) connects APs

### Ad Hoc Mode

**Independent Basic Service Set (IBSS)**:
- Direct device-to-device communication
- No access point required
- Limited range and functionality

### Mesh Networks

**802.11s Standard**: Self-forming, self-healing networks
- Each node acts as router and endpoint
- Automatic path discovery and maintenance
- High reliability and coverage

## Wireless Access Point Configuration

### Basic AP Setup

**SSID Configuration**:
\`\`\`
AP(config)# dot11 ssid "CompanyWiFi"
AP(config-ssid)# authentication open
AP(config-ssid)# exit
\`\`\`

**Radio Interface Configuration**:
\`\`\`
AP(config)# interface dot11radio 0
AP(config-if)# ssid "CompanyWiFi"
AP(config-if)# channel 6
AP(config-if)# power local maximum
AP(config-if)# no shutdown
\`\`\`

### Channel Planning

**2.4 GHz Non-Overlapping Channels**: 1, 6, 11 (North America)

**Channel spacing formula**:
For 20 MHz channels: $Channel\_Spacing = 5 \\times (Channel\_Number - 1)$ MHz

**5 GHz Advantages**:
- More available channels (23 vs 3)
- Less interference
- Higher data rates
- Better for high-density deployments

### Power Management

**Transmit Power Control**:
\`\`\`
AP(config-if)# power local 50
AP(config-if)# power client 30
\`\`\`

**Coverage calculation**:
$$RSSI = P_t + G_t - L_{path} - L_{misc} + G_r$$

Where:
- $P_t$ = Transmit power (dBm)
- $G_t$ = Transmit antenna gain (dBi)
- $L_{path}$ = Path loss (dB)
- $L_{misc}$ = Miscellaneous loss (dB)
- $G_r$ = Receive antenna gain (dBi)

## Wireless Security

### Security Evolution

**WEP (Wired Equivalent Privacy)**:
- 64-bit or 128-bit encryption
- **Fatal flaws**: Weak IV, RC4 vulnerabilities
- Easily cracked in minutes

**WPA (Wi-Fi Protected Access)**:
- TKIP (Temporal Key Integrity Protocol)
- Dynamic key generation
- Message Integrity Check (MIC)

**WPA2 (802.11i)**:
- AES encryption with CCMP
- Strong authentication methods
- Current industry standard

**WPA3**:
- Enhanced security features
- SAE (Simultaneous Authentication of Equals)
- Forward secrecy
- Protection against offline attacks

### Authentication Methods

**Personal Mode (PSK)**:
\`\`\`
AP(config)# wpa-psk ascii "SecurePassword123"
AP(config)# encryption mode ciphers aes-ccmp
\`\`\`

**Enterprise Mode (802.1X)**:
\`\`\`
AP(config)# aaa new-model
AP(config)# radius-server host 192.168.1.100 key radiuskey
AP(config)# dot1x system-auth-control
\`\`\`

### 802.1X Authentication Process

1. **Supplicant** (client) requests access
2. **Authenticator** (AP) forwards to RADIUS server
3. **Authentication Server** validates credentials
4. **Success**: Keys distributed, access granted
5. **Failure**: Access denied

**EAP Methods**:
- **EAP-TLS**: Certificate-based, most secure
- **EAP-PEAP**: Password-based with TLS tunnel
- **EAP-FAST**: Cisco proprietary, fast authentication

## Advanced Wireless Technologies

### MIMO (Multiple Input Multiple Output)

**Spatial Streams**: Independent data paths
**Antenna Configuration**: $N_t \\times N_r$ (transmit × receive)

**Capacity improvement**:
$$C = \\sum_{i=1}^{min(N_t,N_r)} \\log_2(1 + SNR_i)$$

### Beamforming

**Technique**: Focus RF energy toward specific clients
**Benefits**: Increased range, reduced interference
**Types**: Explicit vs Implicit feedback

### MU-MIMO (Multi-User MIMO)

**Downlink MU-MIMO**: AP transmits to multiple clients simultaneously
**Uplink MU-MIMO**: Multiple clients transmit to AP simultaneously
**Efficiency gain**: Up to 4x improvement in Wi-Fi 6

### OFDMA (Orthogonal Frequency Division Multiple Access)

**Wi-Fi 6 feature**: Divide channels into Resource Units (RUs)
**Benefits**: Better efficiency for small packets
**Latency reduction**: Up to 75% improvement

## Wireless Network Design

### Site Survey

**RF Survey Types**:
- **Predictive**: Computer modeling
- **Passive**: Measure existing signals
- **Active**: Test with actual equipment

**Key Measurements**:
- **RSSI**: Received Signal Strength Indicator
- **SNR**: Signal-to-Noise Ratio
- **Interference**: Co-channel and adjacent channel

**Coverage requirements**:
$$Coverage\_Area = \\pi \\times (\\frac{Range}{2})^2$$

### Capacity Planning

**User density calculation**:
$$Users\_per\_AP = \\frac{Available\_Bandwidth}{Per\_User\_Requirement}$$

**Typical requirements**:
- Voice: 100 Kbps
- Data: 1-2 Mbps
- Video: 2-5 Mbps

### Interference Mitigation

**Co-channel Interference**: Same channel, different APs
**Adjacent Channel Interference**: Overlapping channels
**Non-Wi-Fi Interference**: Microwaves, Bluetooth, cordless phones

**Mitigation strategies**:
- Proper channel planning
- Power control
- AP placement optimization
- Shielding and filtering

## Troubleshooting Wireless Networks

### Common Issues and Solutions

**Poor Signal Strength**:
- Check AP placement and power settings
- Verify antenna orientation
- Identify interference sources

**Authentication Failures**:
- Verify credentials and certificates
- Check RADIUS server connectivity
- Review security settings

**Roaming Problems**:
- Optimize AP coverage overlap (15-20%)
- Configure consistent security settings
- Implement fast roaming (802.11r)

### Wireless Analysis Tools

**Spectrum Analyzers**: Identify RF interference
**Protocol Analyzers**: Capture and analyze 802.11 frames
**Site Survey Tools**: Measure coverage and performance

**Key metrics to monitor**:
- Signal strength (RSSI > -67 dBm)
- Signal quality (SNR > 20 dB)
- Retry rates (< 10%)
- Association success rate (> 95%)

---

*Wireless networking continues to evolve with new standards and technologies, making it essential to stay current with best practices and security measures!*

`;

export default content;