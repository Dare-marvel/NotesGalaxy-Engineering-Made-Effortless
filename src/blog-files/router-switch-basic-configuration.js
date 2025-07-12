const content = `# Router and Switch Basic Configuration

Understanding router and switch configuration is fundamental for network administration. This guide covers essential commands and configurations for Cisco devices, which form the industry standard.

## Cisco Command Line Interface (CLI)

### Access Modes

**User EXEC Mode**: Limited access for basic monitoring
\`\`\`
Router>
\`\`\`

**Privileged EXEC Mode**: Full access to show commands
\`\`\`
Router> enable
Router#
\`\`\`

**Global Configuration Mode**: Modify running configuration
\`\`\`
Router# configure terminal
Router(config)#
\`\`\`

**Interface Configuration Mode**: Configure specific interfaces
\`\`\`
Router(config)# interface fastethernet 0/0
Router(config-if)#
\`\`\`

### Basic Navigation Commands

| Command | Function |
|---------|----------|
| \`?\` | Help and command options |
| \`exit\` | Return to previous mode |
| \`end\` | Return to privileged mode |
| \`show running-config\` | Display current configuration |
| \`show startup-config\` | Display saved configuration |

## Basic Router Configuration

### Initial Router Setup

**Set hostname and passwords**:
\`\`\`
Router> enable
Router# configure terminal
Router(config)# hostname R1
R1(config)# enable secret cisco123
R1(config)# enable password cisco
R1(config)# line console 0
R1(config-line)# password console123
R1(config-line)# login
R1(config-line)# exit
\`\`\`

### Interface Configuration

**Configure FastEthernet interface**:
\`\`\`
R1(config)# interface fastethernet 0/0
R1(config-if)# ip address 192.168.1.1 255.255.255.0
R1(config-if)# description "LAN Interface"
R1(config-if)# no shutdown
R1(config-if)# exit
\`\`\`

**Configure Serial interface with clock rate**:
\`\`\`
R1(config)# interface serial 0/0/0
R1(config-if)# ip address 10.1.1.1 255.255.255.252
R1(config-if)# description "WAN to R2"
R1(config-if)# clock rate 128000
R1(config-if)# no shutdown
R1(config-if)# exit
\`\`\`

### Static Routing Configuration

**Add static route**:
\`\`\`
R1(config)# ip route 192.168.2.0 255.255.255.0 10.1.1.2
R1(config)# ip route 0.0.0.0 0.0.0.0 10.1.1.2
\`\`\`

**Route format**: $destination\_network$ $subnet\_mask$ $next\_hop\_IP$

### Dynamic Routing (RIP)

**Configure RIP version 2**:
\`\`\`
R1(config)# router rip
R1(config-router)# version 2
R1(config-router)# network 192.168.1.0
R1(config-router)# network 10.1.1.0
R1(config-router)# no auto-summary
R1(config-router)# exit
\`\`\`

### OSPF Configuration

**Configure OSPF with process ID and area**:
\`\`\`
R1(config)# router ospf 1
R1(config-router)# router-id 1.1.1.1
R1(config-router)# network 192.168.1.0 0.0.0.255 area 0
R1(config-router)# network 10.1.1.0 0.0.0.3 area 0
R1(config-router)# exit
\`\`\`

**OSPF wildcard mask calculation**:
$Wildcard = 255.255.255.255 - Subnet\_Mask$

For /24 network: $255.255.255.255 - 255.255.255.0 = 0.0.0.255$

## Basic Switch Configuration

### Initial Switch Setup

**Configure hostname and management**:
\`\`\`
Switch> enable
Switch# configure terminal
Switch(config)# hostname SW1
SW1(config)# enable secret switch123
SW1(config)# line console 0
SW1(config-line)# password console123
SW1(config-line)# login
SW1(config-line)# exit
\`\`\`

### Management IP Configuration

**Configure management VLAN**:
\`\`\`
SW1(config)# interface vlan 1
SW1(config-if)# ip address 192.168.1.10 255.255.255.0
SW1(config-if)# no shutdown
SW1(config-if)# exit
SW1(config)# ip default-gateway 192.168.1.1
\`\`\`

### Port Configuration

**Configure access port**:
\`\`\`
SW1(config)# interface fastethernet 0/1
SW1(config-if)# switchport mode access
SW1(config-if)# switchport access vlan 10
SW1(config-if)# description "User PC"
SW1(config-if)# spanning-tree portfast
SW1(config-if)# exit
\`\`\`

**Configure trunk port**:
\`\`\`
SW1(config)# interface fastethernet 0/24
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk allowed vlan 1,10,20,30
SW1(config-if)# description "Trunk to SW2"
SW1(config-if)# exit
\`\`\`

## VLAN Configuration

### Creating and Managing VLANs

**Create VLANs**:
\`\`\`
SW1(config)# vlan 10
SW1(config-vlan)# name Sales
SW1(config-vlan)# exit
SW1(config)# vlan 20
SW1(config-vlan)# name Engineering
SW1(config-vlan)# exit
SW1(config)# vlan 30
SW1(config-vlan)# name Management
SW1(config-vlan)# exit
\`\`\`

### VLAN Assignment

**Assign ports to VLANs**:
\`\`\`
SW1(config)# interface range fastethernet 0/1-10
SW1(config-if-range)# switchport mode access
SW1(config-if-range)# switchport access vlan 10
SW1(config-if-range)# exit

SW1(config)# interface range fastethernet 0/11-20
SW1(config-if-range)# switchport mode access  
SW1(config-if-range)# switchport access vlan 20
SW1(config-if-range)# exit
\`\`\`

### Inter-VLAN Routing (Router-on-a-Stick)

**Configure subinterfaces on router**:
\`\`\`
R1(config)# interface fastethernet 0/0.10
R1(config-subif)# encapsulation dot1q 10
R1(config-subif)# ip address 192.168.10.1 255.255.255.0
R1(config-subif)# exit

R1(config)# interface fastethernet 0/0.20
R1(config-subif)# encapsulation dot1q 20
R1(config-subif)# ip address 192.168.20.1 255.255.255.0
R1(config-subif)# exit
\`\`\`

## Security Configuration

### Port Security

**Configure port security on switch**:
\`\`\`
SW1(config)# interface fastethernet 0/1
SW1(config-if)# switchport port-security
SW1(config-if)# switchport port-security maximum 2
SW1(config-if)# switchport port-security mac-address sticky
SW1(config-if)# switchport port-security violation shutdown
SW1(config-if)# exit
\`\`\`

### Access Control Lists (ACLs)

**Standard ACL example**:
\`\`\`
R1(config)# access-list 10 deny 192.168.10.0 0.0.0.255
R1(config)# access-list 10 permit any
R1(config)# interface fastethernet 0/1
R1(config-if)# ip access-group 10 out
R1(config-if)# exit
\`\`\`

**Extended ACL example**:
\`\`\`
R1(config)# access-list 100 deny tcp 192.168.10.0 0.0.0.255 any eq 80
R1(config)# access-list 100 permit ip any any
R1(config)# interface fastethernet 0/0
R1(config-if)# ip access-group 100 in
R1(config-if)# exit
\`\`\`

## Verification Commands

### Router Verification

| Command | Purpose |
|---------|---------|
| \`show ip interface brief\` | Interface status and IP |
| \`show ip route\` | Routing table |
| \`show running-config\` | Current configuration |
| \`show protocols\` | Routed protocol status |
| \`show ip ospf neighbor\` | OSPF neighbors |

### Switch Verification

| Command | Purpose |
|---------|---------|
| \`show vlan brief\` | VLAN information |
| \`show mac address-table\` | MAC address table |
| \`show interfaces trunk\` | Trunk port status |
| \`show spanning-tree\` | STP information |
| \`show port-security\` | Port security status |

## Configuration Management

### Save Configuration

**Save running config to startup config**:
\`\`\`
Router# copy running-config startup-config
Router# write memory
Router# wr
\`\`\`

### Backup and Restore

**Copy config to TFTP server**:
\`\`\`
Router# copy running-config tftp
Address or name of remote host []? 192.168.1.100
Destination filename [router-confg]? R1-backup
\`\`\`

**Restore from TFTP**:
\`\`\`
Router# copy tftp running-config
Address or name of remote host []? 192.168.1.100
Source filename []? R1-backup
\`\`\`

### Password Recovery

**Router password recovery process**:
1. Power cycle and press Ctrl+Break during boot
2. Change configuration register: \`confreg 0x2142\`
3. Boot and enter global config mode
4. Reset passwords and save configuration
5. Reset configuration register: \`config-register 0x2102\`

---

*Mastering basic router and switch configuration provides the foundation for building and managing enterprise networks!*

`;

export default content;