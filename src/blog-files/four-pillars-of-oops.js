const content = `# Four Pillars of Object-Oriented Programming

Object-Oriented Programming (OOP) is built on four fundamental principles that provide a robust framework for designing and implementing software systems. These pillars enable developers to create maintainable, scalable, and reusable code.

## Understanding OOP Fundamentals

### The Core Philosophy

**Encapsulation**: Bundling data and methods that operate on that data within a single unit
**Inheritance**: Creating new classes based on existing classes to promote code reuse
**Polymorphism**: Using a single interface to represent different underlying forms
**Abstraction**: Hiding complex implementation details while exposing essential features

### Benefits of OOP

**Code Organization**: Better structure and modularity
**Reusability**: Write once, use multiple times
**Maintainability**: Easier to modify and extend
**Security**: Data protection through encapsulation

**OOP Design Formula**:
$$Code\\_Quality = Encapsulation + Inheritance + Polymorphism + Abstraction$$

## Pillar 1: Encapsulation

### Data Hiding and Access Control

**Java Example - Basic Encapsulation**:
\`\`\`java
public class BankAccount {
    private double balance;
    private String accountNumber;
    
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            return true;
        }
        return false;
    }
    
    public double getBalance() {
        return balance;
    }
    
    public String getAccountNumber() {
        return accountNumber;
    }
}
\`\`\`

**Python Example - Property Decorators**:
\`\`\`python
class Employee:
    def __init__(self, name, salary):
        self._name = name
        self._salary = salary
    
    @property
    def salary(self):
        return self._salary
    
    @salary.setter
    def salary(self, value):
        if value < 0:
            raise ValueError("Salary cannot be negative")
        self._salary = value
    
    @property
    def name(self):
        return self._name
    
    def display_info(self):
        return f"Employee: {self._name}, Salary: ${self._salary}"
\`\`\`

### Access Modifiers

**Java Access Levels**:

| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| private | ✓ | ✗ | ✗ | ✗ |
| default | ✓ | ✓ | ✗ | ✗ |
| protected | ✓ | ✓ | ✓ | ✗ |
| public | ✓ | ✓ | ✓ | ✓ |

**C++ Access Control**:
\`\`\`cpp
class Car {
private:
    string engine;
    double fuel;
    
protected:
    string model;
    int year;
    
public:
    Car(string m, int y) : model(m), year(y), fuel(0.0) {}
    
    void refuel(double liters) {
        fuel += liters;
    }
    
    void displayInfo() {
        cout << model << " (" << year << ")" << endl;
    }
};
\`\`\`

## Pillar 2: Inheritance

### Single Inheritance

**Java Inheritance Example**:
\`\`\`java
// Base class
class Vehicle {
    protected String brand;
    protected int year;
    
    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    public void start() {
        System.out.println("Vehicle is starting...");
    }
    
    public void displayInfo() {
        System.out.println("Brand: " + brand + ", Year: " + year);
    }
}

// Derived class
class Car extends Vehicle {
    private int doors;
    
    public Car(String brand, int year, int doors) {
        super(brand, year);
        this.doors = doors;
    }
    
    @Override
    public void start() {
        System.out.println("Car engine is starting...");
    }
    
    public void honk() {
        System.out.println("Car is honking!");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Doors: " + doors);
    }
}
\`\`\`

### Multiple Inheritance (Python)

**Python Multiple Inheritance**:
\`\`\`python
class Flyable:
    def fly(self):
        return "Flying through the air"

class Swimmable:
    def swim(self):
        return "Swimming in water"

class Duck(Flyable, Swimmable):
    def __init__(self, name):
        self.name = name
    
    def quack(self):
        return f"{self.name} says quack!"
    
    def move(self):
        return f"{self.name} can {self.fly()} and {self.swim()}"

# Usage
duck = Duck("Donald")
print(duck.quack())
print(duck.move())
\`\`\`

### Method Resolution Order (MRO)

**Diamond Problem Solution**:
\`\`\`python
class A:
    def method(self):
        print("Method from A")

class B(A):
    def method(self):
        print("Method from B")
        super().method()

class C(A):
    def method(self):
        print("Method from C")
        super().method()

class D(B, C):
    def method(self):
        print("Method from D")
        super().method()

# MRO: D -> B -> C -> A
d = D()
d.method()
print(D.__mro__)
\`\`\`

## Pillar 3: Polymorphism

### Method Overloading

**Java Method Overloading**:
\`\`\`java
class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public String add(String a, String b) {
        return a + b;
    }
}
\`\`\`

### Method Overriding

**Runtime Polymorphism Example**:
\`\`\`java
abstract class Animal {
    abstract void makeSound();
    
    public void sleep() {
        System.out.println("Animal is sleeping");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow! Meow!");
    }
}

class Cow extends Animal {
    @Override
    void makeSound() {
        System.out.println("Moo! Moo!");
    }
}

// Polymorphic behavior
public class AnimalDemo {
    public static void main(String[] args) {
        Animal[] animals = {new Dog(), new Cat(), new Cow()};
        
        for (Animal animal : animals) {
            animal.makeSound(); // Runtime polymorphism
        }
    }
}
\`\`\`

### Interface Implementation

**Java Interface Polymorphism**:
\`\`\`java
interface Drawable {
    void draw();
    default void display() {
        System.out.println("Displaying shape");
    }
}

class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

class Rectangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle");
    }
}

class Triangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a triangle");
    }
}
\`\`\`

**Polymorphism Benefits**:
$$Flexibility = \\frac{Code\_Reusability \\times Interface\_Consistency}{Implementation\_Coupling}$$

## Pillar 4: Abstraction

### Abstract Classes

**C++ Abstract Class Example**:
\`\`\`cpp
#include <iostream>
#include <string>
using namespace std;

abstract class Shape {
protected:
    string color;
    
public:
    Shape(string c) : color(c) {}
    
    // Pure virtual function
    virtual double calculateArea() = 0;
    virtual double calculatePerimeter() = 0;
    
    // Concrete method
    void setColor(string c) {
        color = c;
    }
    
    string getColor() {
        return color;
    }
    
    virtual void displayInfo() {
        cout << "Color: " << color << endl;
    }
};

class Rectangle : public Shape {
private:
    double length, width;
    
public:
    Rectangle(string c, double l, double w) : Shape(c), length(l), width(w) {}
    
    double calculateArea() override {
        return length * width;
    }
    
    double calculatePerimeter() override {
        return 2 * (length + width);
    }
    
    void displayInfo() override {
        Shape::displayInfo();
        cout << "Rectangle - Length: " << length << ", Width: " << width << endl;
        cout << "Area: " << calculateArea() << ", Perimeter: " << calculatePerimeter() << endl;
    }
};
\`\`\`

### Interface Abstraction

**Python Abstract Base Classes**:
\`\`\`python
from abc import ABC, abstractmethod
import math

class DatabaseConnection(ABC):
    @abstractmethod
    def connect(self):
        pass
    
    @abstractmethod
    def execute_query(self, query):
        pass
    
    @abstractmethod
    def close_connection(self):
        pass
    
    def log_operation(self, operation):
        print(f"Operation logged: {operation}")

class MySQLConnection(DatabaseConnection):
    def __init__(self, host, username, password):
        self.host = host
        self.username = username
        self.password = password
        self.connection = None
    
    def connect(self):
        self.connection = f"MySQL connection to {self.host}"
        print(f"Connected to MySQL: {self.host}")
        return self.connection
    
    def execute_query(self, query):
        if self.connection:
            result = f"Executing MySQL query: {query}"
            self.log_operation(f"MySQL Query: {query}")
            return result
        else:
            raise Exception("Not connected to database")
    
    def close_connection(self):
        if self.connection:
            print("MySQL connection closed")
            self.connection = None

class PostgreSQLConnection(DatabaseConnection):
    def __init__(self, host, username, password):
        self.host = host
        self.username = username
        self.password = password
        self.connection = None
    
    def connect(self):
        self.connection = f"PostgreSQL connection to {self.host}"
        print(f"Connected to PostgreSQL: {self.host}")
        return self.connection
    
    def execute_query(self, query):
        if self.connection:
            result = f"Executing PostgreSQL query: {query}"
            self.log_operation(f"PostgreSQL Query: {query}")
            return result
        else:
            raise Exception("Not connected to database")
    
    def close_connection(self):
        if self.connection:
            print("PostgreSQL connection closed")
            self.connection = None
\`\`\`

## Real-World Implementation

### Complete OOP Example - Library Management System

**Java Implementation**:
\`\`\`java
// Abstract base class
abstract class LibraryItem {
    protected String id;
    protected String title;
    protected boolean isAvailable;
    
    public LibraryItem(String id, String title) {
        this.id = id;
        this.title = title;
        this.isAvailable = true;
    }
    
    public abstract void displayDetails();
    public abstract double calculateFine(int daysOverdue);
    
    public boolean checkout() {
        if (isAvailable) {
            isAvailable = false;
            return true;
        }
        return false;
    }
    
    public void returnItem() {
        isAvailable = true;
    }
    
    // Getters
    public String getId() { return id; }
    public String getTitle() { return title; }
    public boolean isAvailable() { return isAvailable; }
}

// Concrete implementations
class Book extends LibraryItem {
    private String author;
    private String isbn;
    
    public Book(String id, String title, String author, String isbn) {
        super(id, title);
        this.author = author;
        this.isbn = isbn;
    }
    
    @Override
    public void displayDetails() {
        System.out.println("Book: " + title + " by " + author);
        System.out.println("ISBN: " + isbn + ", Available: " + isAvailable);
    }
    
    @Override
    public double calculateFine(int daysOverdue) {
        return daysOverdue * 0.50; // $0.50 per day
    }
}

class DVD extends LibraryItem {
    private String director;
    private int duration;
    
    public DVD(String id, String title, String director, int duration) {
        super(id, title);
        this.director = director;
        this.duration = duration;
    }
    
    @Override
    public void displayDetails() {
        System.out.println("DVD: " + title + " directed by " + director);
        System.out.println("Duration: " + duration + " mins, Available: " + isAvailable);
    }
    
    @Override
    public double calculateFine(int daysOverdue) {
        return daysOverdue * 1.00; // $1.00 per day
    }
}
\`\`\`

### Design Benefits Analysis

**Abstraction Level Formula**:
$$Abstraction\\_Level = \\frac{Interface\\_Simplicity}{Implementation\\_Complexity}$$

**Code Reusability Metrics**:
- **DRY Principle**: Don't Repeat Yourself
- **SOLID Principles**: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- **Coupling**: Low coupling between classes
- **Cohesion**: High cohesion within classes

## Best Practices and Design Patterns

### Composition over Inheritance

**Favor Composition Example**:
\`\`\`java
class Engine {
    private String type;
    private int horsepower;
    
    public Engine(String type, int horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    }
    
    public void start() {
        System.out.println(type + " engine started");
    }
    
    public int getHorsepower() {
        return horsepower;
    }
}

class Car {
    private Engine engine; // Composition
    private String model;
    
    public Car(String model, Engine engine) {
        this.model = model;
        this.engine = engine;
    }
    
    public void start() {
        System.out.println("Starting " + model);
        engine.start();
    }
    
    public int getPower() {
        return engine.getHorsepower();
    }
}
\`\`\`

### Common OOP Design Patterns

**Factory Pattern**:
\`\`\`java
abstract class Animal {
    abstract void makeSound();
}

class AnimalFactory {
    public static Animal createAnimal(String type) {
        switch (type.toLowerCase()) {
            case "dog":
                return new Dog();
            case "cat":
                return new Cat();
            default:
                throw new IllegalArgumentException("Unknown animal type");
        }
    }
}
\`\`\`

**Observer Pattern**:
\`\`\`java
interface Observer {
    void update(String message);
}

class Subject {
    private List<Observer> observers = new ArrayList<>();
    
    public void addObserver(Observer observer) {
        observers.add(observer);
    }
    
    public void notifyObservers(String message) {
        for (Observer observer : observers) {
            observer.update(message);
        }
    }
}
\`\`\`

---

*The Four Pillars of OOP provide a solid foundation for building robust, maintainable, and scalable software systems. Master these concepts to write better object-oriented code!*

`;

export default content;