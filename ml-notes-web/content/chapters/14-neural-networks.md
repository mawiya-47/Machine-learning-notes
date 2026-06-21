---
title: "Neural Networks"
chapter: 14
slug: "14-neural-networks"
---

## 🧠⚡ 14. Neural Networks
---

### 🧠 Simple Explanation
A Neural Network is inspired by the human brain. It has layers of connected 'neurons' that take inputs, apply weights and activation functions, and pass signals forward to make a prediction.

### 📖 Definition
> A Neural Network is a computational model made of layers of interconnected nodes (neurons) — an input layer, one or more hidden layers, and an output layer — that learns patterns by adjusting connection weights through backpropagation.

### 🌍 Real-life Examples
- Handwritten digit recognition (MNIST)
- Voice assistants understanding speech
- Predicting customer churn with non-linear patterns

### ✅ Advantages
- Can model complex, non-linear relationships
- Scales well with large data
- Forms the foundation of Deep Learning

### ❌ Disadvantages
- Needs lots of data and compute
- 'Black box' - hard to interpret
- Prone to overfitting without regularization

### 💼 Use Cases
- Image recognition
- Speech recognition
- Natural language processing

### ❓ Important Interview Questions
1. What is a perceptron?
2. What is an activation function? Name a few (ReLU, Sigmoid, Tanh).
3. What is backpropagation?
4. What is the vanishing gradient problem?
5. What is the difference between a shallow and a deep neural network?

---

```python
# Neural Network architecture diagram (simple feed-forward illustration)
fig, ax = plt.subplots(figsize=(8, 5))
ax.axis("off")

layer_sizes = [4, 5, 5, 3]
layer_names = ["Input\nLayer", "Hidden\nLayer 1", "Hidden\nLayer 2", "Output\nLayer"]
x_positions = np.linspace(0.1, 0.9, len(layer_sizes))

positions = {}
for li, (size, xpos) in enumerate(zip(layer_sizes, x_positions)):
    y_positions = np.linspace(0.1, 0.9, size)
    for ni, ypos in enumerate(y_positions):
        positions[(li, ni)] = (xpos, ypos)
        color = "#5DADE2" if li == 0 else ("#F5B041" if li == len(layer_sizes)-1 else "#58D68D")
        ax.scatter(xpos, ypos, s=400, c=color, edgecolor="black", zorder=3)

for li in range(len(layer_sizes)-1):
    for ni in range(layer_sizes[li]):
        for nj in range(layer_sizes[li+1]):
            x1, y1 = positions[(li, ni)]
            x2, y2 = positions[(li+1, nj)]
            ax.plot([x1, x2], [y1, y2], color="gray", alpha=0.3, linewidth=0.8, zorder=1)

for name, xpos in zip(layer_names, x_positions):
    ax.text(xpos, 1.0, name, ha="center", fontsize=10, fontweight="bold")

ax.set_title("Neural Network Architecture (Feed-Forward)")
save_plot(fig, "14_neural_network_architecture.png")
plt.show()

# Train a small MLP classifier on Iris
X = iris.data
y = iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)

mlp = MLPClassifier(hidden_layer_sizes=(10, 10), max_iter=2000, random_state=42)
mlp.fit(X_train_s, y_train)
y_pred = mlp.predict(X_test_s)
print(f"Neural Network (MLP) Accuracy: {accuracy_score(y_test, y_pred):.3f}")

# Loss curve
fig, ax = plt.subplots()
ax.plot(mlp.loss_curve_, color="#8E44AD")
ax.set_xlabel("Iterations")
ax.set_ylabel("Loss")
ax.set_title("Neural Network Training Loss Curve")
save_plot(fig, "14_nn_loss_curve.png")
plt.show()
```

![chart](/graphs/img_021.png)

![chart](/graphs/img_022.png)

<details><summary>Output</summary>

```
✅ Saved: graphs/14_neural_network_architecture.png
```

</details>

<details><summary>Output</summary>

```
Neural Network (MLP) Accuracy: 0.967
✅ Saved: graphs/14_nn_loss_curve.png
```

</details>