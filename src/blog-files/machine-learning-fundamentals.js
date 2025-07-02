const content = `# Machine Learning Fundamentals: From Theory to Implementation

## Introduction

Machine learning is revolutionizing how we solve complex problems. Understanding the mathematical foundations is crucial for building effective ML models.

### Linear Regression

The simplest form of supervised learning starts with linear regression. We aim to find the best line that fits our data points.

### The Cost Function

For linear regression, we use the Mean Squared Error:

$J(\\theta) = \\frac{1}{2m} \\sum_{i=1}^{m} (h_\\theta(x^{(i)}) - y^{(i)})^2$

Where:
- $h_\\theta(x) = \\theta_0 + \\theta_1 x$ is our hypothesis function
- $m$ is the number of training examples
- $\\theta_0, \\theta_1$ are parameters we need to learn

### Gradient Descent Algorithm

To minimize our cost function, we use gradient descent:

$\\theta_j := \\theta_j - \\alpha \\frac{\\partial}{\\partial \\theta_j} J(\\theta)$

The partial derivatives are:

$\\frac{\\partial}{\\partial \\theta_0} J(\\theta) = \\frac{1}{m} \\sum_{i=1}^{m} (h_\\theta(x^{(i)}) - y^{(i)})$

$\\frac{\\partial}{\\partial \\theta_1} J(\\theta) = \\frac{1}{m} \\sum_{i=1}^{m} (h_\\theta(x^{(i)}) - y^{(i)}) \\cdot x^{(i)}$

## Python Implementation

Here's a complete implementation of linear regression from scratch:

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

class LinearRegression:
    def __init__(self, learning_rate=0.01, max_iterations=1000):
        self.learning_rate = learning_rate
        self.max_iterations = max_iterations
        self.theta = None
        self.cost_history = []
    
    def fit(self, X, y):
        # Add bias term (intercept)
        m = len(y)
        X_with_bias = np.column_stack([np.ones(m), X])
        
        # Initialize parameters
        self.theta = np.zeros(X_with_bias.shape[1])
        
        # Gradient descent
        for i in range(self.max_iterations):
            # Hypothesis
            h = X_with_bias.dot(self.theta)
            
            # Cost function
            cost = (1/(2*m)) * np.sum((h - y)**2)
            self.cost_history.append(cost)
            
            # Gradients
            gradients = (1/m) * X_with_bias.T.dot(h - y)
            
            # Update parameters
            self.theta -= self.learning_rate * gradients
    
    def predict(self, X):
        X_with_bias = np.column_stack([np.ones(len(X)), X])
        return X_with_bias.dot(self.theta)
    
    def plot_cost_history(self):
        plt.plot(self.cost_history)
        plt.title('Cost Function Over Iterations')
        plt.xlabel('Iterations')
        plt.ylabel('Cost')
        plt.show()

# Example usage
if __name__ == "__main__":
    # Generate sample data
    np.random.seed(42)
    X = 2 * np.random.rand(100, 1)
    y = 4 + 3 * X.flatten() + np.random.randn(100)
    
    # Create and train model
    model = LinearRegression(learning_rate=0.1, max_iterations=1000)
    model.fit(X, y)
    
    # Make predictions
    predictions = model.predict(X)
    
    print(f"Learned parameters: θ₀ = {model.theta[0]:.2f}, θ₁ = {model.theta[1]:.2f}")
\`\`\`

## Neural Networks: The Sigmoid Function

In neural networks, we often use the sigmoid activation function:

$\\sigma(z) = \\frac{1}{1 + e^{-z}}$

Its derivative, useful for backpropagation, is:

$\\frac{d}{dz}\\sigma(z) = \\sigma(z)(1 - \\sigma(z))$

## Performance Metrics

### Classification Metrics

| Metric | Formula | Purpose |
|--------|---------|---------|
| Accuracy | $\\frac{TP + TN}{TP + TN + FP + FN}$ | Overall correctness |
| Precision | $\\frac{TP}{TP + FP}$ | Positive prediction accuracy |
| Recall | $\\frac{TP}{TP + FN}$ | True positive detection rate |
| F1-Score | $\\frac{2 \\cdot Precision \\cdot Recall}{Precision + Recall}$ | Harmonic mean of precision and recall |

## Key Concepts to Remember

### Mathematical foundations:
- Linear algebra for matrix operations
- Calculus for optimization
- Statistics for model evaluation
- Probability theory for uncertainty quantification

### Implementation steps:
1. Data preprocessing and feature scaling
2. Model selection and hyperparameter tuning
3. Training with gradient descent: $\\theta_{new} = \\theta_{old} - \\alpha \\nabla J(\\theta)$
4. Validation and testing

---

*Machine learning is where mathematics meets practical problem-solving!*`;

export default content;