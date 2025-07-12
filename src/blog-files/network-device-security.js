const content = `# Network Device Security

Network device security is critical for protecting network infrastructure from unauthorized access, attacks, and misconfigurations. Proper security implementation protects both the devices themselves and the data they handle.

## Security Fundamentals

### Security Triad (CIA)

**Confidentiality**: Ensuring data is accessible only to authorized users
**Integrity**: Maintaining data accuracy and preventing unauthorized modification  
**Availability**: Ensuring network services remain accessible when needed

### Defense in Depth

**Layered Security Approach**:
- Physical security
- Administrative controls
- Network segmentation
- Access controls
- Monitoring and logging
- Incident response

**Security formula**:
$$Risk = Threat \\times Vulnerability \\times Impact$$

## Physical Security

### Device Access Control

**Console Port Security**:
\`\`\`
Router(config)# line console 0
Router(config-line)# password console123
Router(config-line)# login
Router(config-line)# exec-timeout 5 0
Router(config-line)# logging synchronous
\`\`\`

**Auxiliary Port Security**:
\`\`\`
Router(config)# line aux 0
Router(config-line)# password aux123
Router(config-line)# login
Router(config-line)# transport input none
Router(config-line)# no exec
\`\`\`

### Environmental Controls

**Secure Locations**:
- Locked server rooms/cabinets
- Access logging and monitoring
- Climate control
- Power protection (UPS)
- Fire suppression systems

## Administrative Access Security

### Password Management

**Strong Password Policies**:
\`\`\`
Router(config)# enable secret Str0ng!P@ssw0rd
Router(config)# security passwords min-length 8
Router(config)# login block-for 300 attempts 3 within 60
\`\`\`

**Password Encryption**:
\`\`\`
Router(config)# service password-encryption
Router(config)# username admin secret AdminP@ss123
\`\`\`

**Password complexity requirements**:
- Minimum 8 characters
- Mix of uppercase, lowercase, numbers, symbols
- No dictionary words
- Regular password changes

### User Account Management

**Local User Accounts**:
\`\`\`
Router(config)# username netadmin privilege 15 secret NetAdmin!23
Router(config)# username support privilege 1 secret Support!23
Router(config)# aaa new-model
Router(config)# aaa authentication login default local
\`\`\`

**Privilege Levels**:
- **Level 0**: Predefined user-level access
- **Level 1**: Normal user EXEC mode
- **Level 15**: Privileged EXEC mode (full access)
- **Levels 2-14**: Custom privilege levels

### Remote Access Security

**SSH Configuration**:
\`\`\`
Router(config)# hostname R1
Router(config)# ip domain-name company.com
Router(config)# crypto key generate rsa modulus 2048
Router(config)# ip ssh version 2
Router(config)# ip ssh time-out 60
Router(config)# ip ssh authentication-retries 3
Router(config)# line vty 0 4
Router(config-line)# transport input ssh
Router(config-line)# login local
\`\`\`

**Disable Telnet**:
\`\`\`
Router(config)# line vty 0 15
Router(config-line)# transport input ssh
Router(config-line)# no transport input telnet
\`\`\`

## Network Security Features

### Access Control Lists (ACLs)

**Standard ACL Example**:
\`\`\`
Router(config)# access-list 10 permit 192.168.1.0 0.0.0.255
Router(config)# access-list 10 deny any
Router(config)# line vty 0 4
Router(config-line)# access-class 10 in
\`\`\`

**Extended ACL for Security**:
\`\`\`
Router(config)# ip access-list extended SECURITY_ACL
Router(config-ext-nacl)# deny ip any host 192.168.1.1
Router(config-ext-nacl)# permit tcp 192.168.1.0 0.0.0.255 any eq ssh
Router(config-ext-nacl)# permit tcp 192.168.1.0 0.0.0.255 any eq https
Router(config-ext-nacl)# deny ip any any log
\`\`\`

### Port Security

**Switch Port Security Configuration**:
\`\`\`
Switch(config)# interface fastethernet 0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 2
Switch(config-if)# switchport port-security mac-address sticky
Switch(config-if)# switchport port-security violation shutdown
\`\`\`

**Violation Actions**:
- **Protect**: Drops packets, no notification
- **Restrict**: Drops packets, sends SNMP trap
- **Shutdown**: Disables port, requires manual recovery

### VLAN Security

**VLAN Segmentation Benefits**:
- Broadcast domain isolation
- Security policy enforcement
- Traffic monitoring and control

**Private VLANs**:
\`\`\`
Switch(config)# vlan 100
Switch(config-vlan)# private-vlan primary
Switch(config-vlan)# exit
Switch(config)# vlan 101
Switch(config-vlan)# private-vlan isolated
Switch(config-vlan)# exit
Switch(config)# vlan 102
Switch(config-vlan)# private-vlan community
\`\`\`

## Authentication, Authorization, Accounting (AAA)

### RADIUS Authentication

**RADIUS Server Configuration**:
\`\`\`
Router(config)# aaa new-model
Router(config)# radius-server host 192.168.1.100 key RadiusKey123
Router(config)# aaa authentication login default group radius local
Router(config)# aaa authorization exec default group radius local
Router(config)# aaa accounting exec default start-stop group radius
\`\`\`

### TACACS+ Configuration

**TACACS+ Setup**:
\`\`\`
Router(config)# aaa new-model
Router(config)# tacacs-server host 192.168.1.101 key TacacsKey123
Router(config)# aaa authentication login default group tacacs+ local
Router(config)# aaa authorization exec default group tacacs+ local
Router(config)# aaa authorization commands 15 default group tacacs+ local
\`\`\`

**RADIUS vs TACACS+ Comparison**:

| Feature | RADIUS | TACACS+ |
|---------|--------|---------|
| Protocol | UDP | TCP |
| Encryption | Password only | Full packet |
| Authorization | Combined with authentication | Separate |
| Vendor | Industry standard | Cisco proprietary |

## Secure Network Protocols

### SNMP Security

**SNMPv3 Configuration**:
\`\`\`
Router(config)# snmp-server group ADMIN v3 priv
Router(config)# snmp-server user admin ADMIN v3 auth sha AuthPass123 priv aes 128 PrivPass123
Router(config)# snmp-server host 192.168.1.200 version 3 priv admin
\`\`\`

**SNMP Security Levels**:
- **noAuthNoPriv**: No authentication, no encryption
- **authNoPriv**: Authentication, no encryption  
- **authPriv**: Authentication and encryption

### NTP Security

**Secure NTP Configuration**:
\`\`\`
Router(config)# ntp authenticate
Router(config)# ntp authentication-key 1 md5 NtpKey123
Router(config)# ntp trusted-key 1
Router(config)# ntp server 192.168.1.150 key 1
\`\`\`

**Time synchronization importance**:
$$Accuracy = |Local\_Time - Reference\_Time|$$

Critical for log correlation and certificate validation.

## Logging and Monitoring

### Syslog Configuration

**Centralized Logging Setup**:
\`\`\`
Router(config)# logging host 192.168.1.250
Router(config)# logging trap informational
Router(config)# logging facility local0
Router(config)# logging source-interface loopback 0
Router(config)# service timestamps log datetime msec
\`\`\`

**Syslog Severity Levels**:

| Level | Keyword | Description |
|-------|---------|-------------|
| 0 | emergencies | System unusable |
| 1 | alerts | Immediate action needed |
| 2 | critical | Critical conditions |
| 3 | errors | Error conditions |
| 4 | warnings | Warning conditions |
| 5 | notifications | Normal but significant |
| 6 | informational | Informational messages |
| 7 | debugging | Debug messages |

### Security Monitoring

**Key Security Events to Monitor**:
- Failed login attempts
- Configuration changes
- Interface up/down events
- ACL violations
- Port security violations

**Log Analysis Formula**:
$$Threat\_Score = \\sum_{i=1}^{n} (Event\_Severity_i \\times Frequency_i)$$

## Firewall Integration

### Zone-Based Firewall

**Zone Configuration**:
\`\`\`
Router(config)# zone security INSIDE
Router(config)# zone security OUTSIDE
Router(config)# zone security DMZ

Router(config)# class-map type inspect match-all INSIDE_TO_OUTSIDE
Router(config-cmap)# match protocol tcp
Router(config-cmap)# match access-group 101

Router(config)# policy-map type inspect INSIDE_TO_OUTSIDE_POLICY
Router(config-pmap)# class type inspect INSIDE_TO_OUTSIDE
Router(config-pmap-c)# inspect
\`\`\`

### Intrusion Prevention

**IPS Configuration**:
\`\`\`
Router(config)# ip ips config location flash:ips/
Router(config)# ip ips name IPS_RULE
Router(config)# ip ips signature-category all
Router(config)# interface fastethernet 0/0
Router(config-if)# ip ips IPS_RULE in
\`\`\`

## Device Hardening Best Practices

### Disable Unnecessary Services

**Common services to disable**:
\`\`\`
Router(config)# no ip http server
Router(config)# no ip http secure-server
Router(config)# no service finger
Router(config)# no service tcp-small-servers
Router(config)# no service udp-small-servers
Router(config)# no service pad
Router(config)# no cdp run
\`\`\`

### Banner Configuration

**Warning Banners**:
\`\`\`
Router(config)# banner motd #
******************************************
* AUTHORIZED ACCESS ONLY                *
* All activity may be monitored         *
* Unauthorized access is prohibited     *
******************************************
#
\`\`\`

### Configuration Backup and Recovery

**Automated Backup**:
\`\`\`
Router(config)# archive
Router(config-archive)# path tftp://192.168.1.200/configs/router-$h-$t
Router(config-archive)# write-memory
Router(config-archive)# time-period 1440
\`\`\`

**Secure Copy Protocol (SCP)**:
\`\`\`
Router(config)# ip scp server enable
Router# copy running-config scp://user@192.168.1.200/backup/config.txt
\`\`\`

## Security Incident Response

### Incident Handling Process

1. **Identification**: Detect security incidents
2. **Containment**: Limit damage and prevent spread
3. **Eradication**: Remove threat from environment
4. **Recovery**: Restore normal operations
5. **Lessons Learned**: Document and improve

### Emergency Procedures

**Security Breach Response**:
\`\`\`
Router# show users
Router# clear line [line-number]
Router# configure terminal
Router(config)# access-list 199 deny ip any any
Router(config)# interface [compromised-interface]
Router(config-if)# ip access-group 199 in
\`\`\`

**Change Management**:
- Document all changes
- Test in lab environment
- Implement during maintenance windows
- Have rollback procedures ready

---

*Network device security requires continuous vigilance, regular updates, and proactive monitoring to protect against evolving threats!*

`;

export default content;