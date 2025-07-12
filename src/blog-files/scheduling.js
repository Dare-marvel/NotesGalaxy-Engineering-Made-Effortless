const content = `## Introduction

Process scheduling is the heart of multitasking operating systems, determining which process gets access to the CPU and for how long. Effective scheduling algorithms ensure optimal system performance, fair resource allocation, and responsive user experience. Understanding scheduling is crucial for system performance optimization and designing efficient operating systems.

### What is Process Scheduling?

Process scheduling is the method by which the operating system decides which process in the ready queue gets the CPU next. The scheduling decision can be modeled as:

$Schedule\\_{decision} = f(Process\\_{state}, Priority, Arrival\\_{time}, Burst\\_{time})$

The primary goal is to optimize system performance metrics while maintaining fairness.

### Scheduling Objectives

Key objectives include:
- Maximize CPU utilization: $CPU\\_{utilization} = \\frac{CPU\\_{busy\\_time}}{Total_{time}} \\times 100\\%$
- Minimize response time: $Response\\_{time} = First\\_{response} - Arrival\\_{time}$
- Ensure fairness: $Fairness = \\frac{min(Service\\_{time})}{max(Service\\_{time})}$
- Maximize throughput: $Throughput = \\frac{Completed\\_{processes}}{Time\\_{period}}$

## Scheduling Metrics

### Performance Measures

Turnaround time for process i:
$TAT_i = Completion\\_{time} - Arrival\\_{time}$

Waiting time calculation:
$WT_i = TAT_i - Burst\\_{time}$

Average waiting time for n processes:
$AWT = \\frac{1}{n} \\sum_{i=1}^{n} WT_i$

Response ratio for Highest Response Ratio Next:
$Response\\_{ratio} = \\frac{Waiting\\_{time} + Service\\_{time}}{Service\\_{time}}$

## Preemptive vs Non-Preemptive Scheduling

### Non-Preemptive Scheduling

In non-preemptive scheduling, once a process starts executing, it continues until completion:
$Execution\\_{time} = Burst\\_{time}$ (uninterrupted)

Context switches: $Context\\_{switches} = Process\\_{count} - 1$

### Preemptive Scheduling

Preemptive scheduling allows interruption:
$Execution\\_{segments} = \\lceil \\frac{Burst\\_{time}}{Time\\_{quantum}} \\rceil$

Context switch overhead:
$Total\\_{overhead} = Context\\_{switches} \\times Switch\\_{cost}$

## Scheduling Algorithms

### First-Come-First-Served (FCFS)

FCFS is the simplest scheduling algorithm where processes are executed in arrival order.

Average waiting time:
$AWT_{FCFS} = \\frac{\\sum_{i=1}^{n-1} \\sum_{j=1}^{i} BT_j}{n}$

### Shortest Job First (SJF)

SJF selects the process with minimum burst time:
$Next\\_{process} = \\arg\\min_{i} \\{BT_i : Process_i \\in Ready\\_{queue}\\}$

SJF provides optimal average waiting time for non-preemptive scheduling.

### Code Example

Here's a comprehensive scheduling simulator:

\`\`\`python
import heapq
from collections import deque
from dataclasses import dataclass
from typing import List, Tuple
import matplotlib.pyplot as plt

@dataclass
class Process:
   pid: int
   arrival_time: int
   burst_time: int
   priority: int = 0
   remaining_time: int = 0
   waiting_time: int = 0
   turnaround_time: int = 0
   completion_time: int = 0
   response_time: int = -1
   first_run: bool = False
   
   def __post_init__(self):
       self.remaining_time = self.burst_time

class SchedulingSimulator:
   def __init__(self):
       self.processes = []
       self.current_time = 0
       self.gantt_chart = []
   
   def add_process(self, process: Process):
       self.processes.append(process)
   
   def reset(self):
       self.current_time = 0
       self.gantt_chart = []
       for p in self.processes:
           p.remaining_time = p.burst_time
           p.waiting_time = 0
           p.turnaround_time = 0
           p.completion_time = 0
           p.response_time = -1
           p.first_run = False
   
   def fcfs_scheduling(self):
       """First-Come-First-Served Scheduling"""
       self.reset()
       ready_queue = sorted(self.processes, key=lambda p: p.arrival_time)
       
       for process in ready_queue:
           # Wait for process arrival
           if self.current_time < process.arrival_time:
               self.current_time = process.arrival_time
           
           # Set response time
           if not process.first_run:
               process.response_time = self.current_time - process.arrival_time
               process.first_run = True
           
           # Execute process
           self.gantt_chart.append((process.pid, self.current_time, 
                                  self.current_time + process.burst_time))
           self.current_time += process.burst_time
           
           # Calculate times
           process.completion_time = self.current_time
           process.turnaround_time = process.completion_time - process.arrival_time
           process.waiting_time = process.turnaround_time - process.burst_time
   
   def sjf_non_preemptive(self):
       """Shortest Job First (Non-Preemptive)"""
       self.reset()
       ready_queue = []
       remaining_processes = sorted(self.processes, key=lambda p: p.arrival_time)
       i = 0
       
       while remaining_processes or ready_queue:
           # Add arrived processes to ready queue
           while i < len(remaining_processes) and remaining_processes[i].arrival_time <= self.current_time:
               heapq.heappush(ready_queue, (remaining_processes[i].burst_time, 
                                          remaining_processes[i].arrival_time, 
                                          remaining_processes[i]))
               i += 1
           
           if ready_queue:
               _, _, process = heapq.heappop(ready_queue)
               
               # Set response time
               if not process.first_run:
                   process.response_time = self.current_time - process.arrival_time
                   process.first_run = True
               
               # Execute process
               self.gantt_chart.append((process.pid, self.current_time, 
                                      self.current_time + process.burst_time))
               self.current_time += process.burst_time
               
               # Calculate times
               process.completion_time = self.current_time
               process.turnaround_time = process.completion_time - process.arrival_time
               process.waiting_time = process.turnaround_time - process.burst_time
           else:
               # No process ready, advance time
               if i < len(remaining_processes):
                   self.current_time = remaining_processes[i].arrival_time
   
   def round_robin(self, time_quantum: int):
       """Round Robin Scheduling"""
       self.reset()
       ready_queue = deque()
       remaining_processes = sorted(self.processes, key=lambda p: p.arrival_time)
       i = 0
       
       while remaining_processes or ready_queue:
           # Add arrived processes to ready queue
           while i < len(remaining_processes) and remaining_processes[i].arrival_time <= self.current_time:
               ready_queue.append(remaining_processes[i])
               i += 1
           
           if ready_queue:
               process = ready_queue.popleft()
               
               # Set response time on first run
               if not process.first_run:
                   process.response_time = self.current_time - process.arrival_time
                   process.first_run = True
               
               # Execute for time quantum or remaining time
               execution_time = min(time_quantum, process.remaining_time)
               self.gantt_chart.append((process.pid, self.current_time, 
                                      self.current_time + execution_time))
               
               self.current_time += execution_time
               process.remaining_time -= execution_time
               
               # Check for newly arrived processes
               while i < len(remaining_processes) and remaining_processes[i].arrival_time <= self.current_time:
                   ready_queue.append(remaining_processes[i])
                   i += 1
               
               # If process not finished, add back to queue
               if process.remaining_time > 0:
                   ready_queue.append(process)
               else:
                   # Process completed
                   process.completion_time = self.current_time
                   process.turnaround_time = process.completion_time - process.arrival_time
                   process.waiting_time = process.turnaround_time - process.burst_time
           else:
               # No process ready, advance time
               if i < len(remaining_processes):
                   self.current_time = remaining_processes[i].arrival_time
   
   def priority_scheduling(self, preemptive=False):
       """Priority Scheduling (lower number = higher priority)"""
       self.reset()
       
       if not preemptive:
           ready_queue = []
           remaining_processes = sorted(self.processes, key=lambda p: p.arrival_time)
           i = 0
           
           while remaining_processes or ready_queue:
               # Add arrived processes
               while i < len(remaining_processes) and remaining_processes[i].arrival_time <= self.current_time:
                   heapq.heappush(ready_queue, (remaining_processes[i].priority, 
                                              remaining_processes[i].arrival_time, 
                                              remaining_processes[i]))
                   i += 1
               
               if ready_queue:
                   _, _, process = heapq.heappop(ready_queue)
                   
                   if not process.first_run:
                       process.response_time = self.current_time - process.arrival_time
                       process.first_run = True
                   
                   self.gantt_chart.append((process.pid, self.current_time, 
                                          self.current_time + process.burst_time))
                   self.current_time += process.burst_time
                   
                   process.completion_time = self.current_time
                   process.turnaround_time = process.completion_time - process.arrival_time
                   process.waiting_time = process.turnaround_time - process.burst_time
               else:
                   if i < len(remaining_processes):
                       self.current_time = remaining_processes[i].arrival_time
   
   def calculate_averages(self) -> dict:
       """Calculate average performance metrics"""
       n = len(self.processes)
       avg_waiting = sum(p.waiting_time for p in self.processes) / n
       avg_turnaround = sum(p.turnaround_time for p in self.processes) / n
       avg_response = sum(p.response_time for p in self.processes) / n
       
       return {
           'avg_waiting_time': avg_waiting,
           'avg_turnaround_time': avg_turnaround,
           'avg_response_time': avg_response,
           'total_completion_time': max(p.completion_time for p in self.processes)
       }
   
   def print_results(self, algorithm_name: str):
       """Print scheduling results"""
       print(f"\\n{algorithm_name} Scheduling Results:")
       print("-" * 60)
       print(f"{'PID':<5} {'AT':<5} {'BT':<5} {'CT':<5} {'TAT':<5} {'WT':<5} {'RT':<5}")
       print("-" * 60)
       
       for p in sorted(self.processes, key=lambda x: x.pid):
           print(f"{p.pid:<5} {p.arrival_time:<5} {p.burst_time:<5} "
                 f"{p.completion_time:<5} {p.turnaround_time:<5} "
                 f"{p.waiting_time:<5} {p.response_time:<5}")
       
       metrics = self.calculate_averages()
       print("-" * 60)
       print(f"Average Waiting Time: {metrics['avg_waiting_time']:.2f}")
       print(f"Average Turnaround Time: {metrics['avg_turnaround_time']:.2f}")
       print(f"Average Response Time: {metrics['avg_response_time']:.2f}")

# Example usage
if __name__ == "__main__":
   simulator = SchedulingSimulator()
   
   # Add sample processes
   processes = [
       Process(1, 0, 6, 2),
       Process(2, 1, 8, 1),
       Process(3, 2, 7, 3),
       Process(4, 3, 3, 2)
   ]
   
   for p in processes:
       simulator.add_process(p)
   
   # Test different algorithms
   simulator.fcfs_scheduling()
   simulator.print_results("FCFS")
   
   simulator.sjf_non_preemptive()
   simulator.print_results("SJF (Non-Preemptive)")
   
   simulator.round_robin(4)
   simulator.print_results("Round Robin (q=4)")
   
   simulator.priority_scheduling()
   simulator.print_results("Priority (Non-Preemptive)")
\`\`\`

## Advanced Scheduling Algorithms

### Shortest Remaining Time First (SRTF)

SRTF is the preemptive version of SJF:
$Next\\_{process} = \\arg\\min_{i} \\{Remaining\\_{time_i} : Process_i \\in Ready\\_{queue}\\}$

### Priority Scheduling

Priority scheduling selects processes based on priority values:
$Priority_{effective} = Base\\_{priority} + Age\\_{factor} \\times Wait\\_{time}$

Aging prevents starvation:
$Age(t) = Age(0) + \\alpha \\times t$

### Multilevel Queue Scheduling

Different queues for different process types:
$Queues = \\{System, Interactive, Batch, Student\\}$

Each queue has its own scheduling algorithm:
$Schedule\\_{total} = \\sum_{i=1}^{n} Priority_i \\times Schedule_i$

## Real-Time Scheduling

### Earliest Deadline First (EDF)

EDF is optimal for single processor systems:
$Utilization = \\sum_{i=1}^{n} \\frac{C_i}{T_i} \\leq 1$

Where $C_i$ is computation time and $T_i$ is period.

### Rate Monotonic Scheduling

Static priority assignment:
$Priority_i \\propto \\frac{1}{Period_i}$

Schedulability condition:
$\\sum_{i=1}^{n} \\frac{C_i}{T_i} \\leq n(2^{1/n} - 1)$

## Performance Comparison

| Algorithm | Time Complexity | Preemptive | Optimal | Starvation |
|-----------|----------------|------------|---------|------------|
| FCFS | $O(n)$ | No | No | No |
| SJF | $O(n \\log n)$ | No | Yes | Yes |
| SRTF | $O(n \\log n)$ | Yes | Yes | Yes |
| Round Robin | $O(n)$ | Yes | No | No |
| Priority | $O(n \\log n)$ | Optional | No | Yes |
| Multilevel | $O(n \\log n)$ | Yes | No | Possible |

## Scheduling in Multiprocessor Systems

### Load Balancing

Load balancing efficiency:
$Balance\\_{factor} = 1 - \\frac{\\sigma_{load}}{\\mu_{load}}$

Where $\\sigma_{load}$ is standard deviation and $\\mu_{load}$ is mean load.

### Processor Affinity

Cache affinity benefit:
$Affinity\\_{benefit} = Cache\\_{hit\\_rate} \\times Cache\\_{access\\_time\\_saved}$

### Gang Scheduling

Synchronous scheduling for parallel processes:
$Gang\\_{efficiency} = \\frac{Parallel\\_{execution\\_time}}{Sequential\\_{execution\\_time}}$

---

*Process scheduling is fundamental to operating system performance. Understanding these algorithms helps in designing efficient systems and optimizing application performance!*`;

export default content;

