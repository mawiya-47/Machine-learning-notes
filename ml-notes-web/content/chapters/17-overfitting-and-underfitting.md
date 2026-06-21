---
title: "Overfitting and Underfitting"
chapter: 17
slug: "17-overfitting-and-underfitting"
---

## ⚖️ 17. Overfitting and Underfitting
---

### 🧠 Simple Explanation
Overfitting is when a model memorizes the training data too well and fails on new data, like a student who memorizes answers but doesn't understand the concept. Underfitting is when a model is too simple to capture patterns, like not studying enough.

### 📖 Definition
> Overfitting occurs when a model learns noise in training data and performs poorly on unseen data (high variance). Underfitting occurs when a model is too simple to capture underlying patterns (high bias).

### 🌍 Real-life Examples
- A decision tree with unlimited depth memorizing every training example (overfitting)
- A straight line trying to fit a clearly curved dataset (underfitting)

### ✅ Advantages


### ❌ Disadvantages


### 💼 Use Cases
- Understanding bias-variance tradeoff is essential for every ML model

### ❓ Important Interview Questions
1. What is the bias-variance tradeoff?
2. How do you detect overfitting?
3. Name techniques to reduce overfitting (regularization, dropout, early stopping, more data, simpler model).
4. Name techniques to reduce underfitting.

---

```python
# Overfitting vs Underfitting demo using Polynomial Regression
np.random.seed(0)
X = np.sort(np.random.uniform(0, 1, 30))
y = np.sin(2 * np.pi * X) + np.random.normal(0, 0.15, 30)
X_plot = np.linspace(0, 1, 200)

from numpy.polynomial.polynomial import polyfit, polyval

fig, axes = plt.subplots(1, 3, figsize=(15, 4))
degrees = [1, 4, 15]
titles = ["Underfitting (degree=1)", "Good Fit (degree=4)", "Overfitting (degree=15)"]

for ax, deg, title in zip(axes, degrees, titles):
    coeffs = polyfit(X, y, deg)
    y_plot = polyval(X_plot, coeffs)
    ax.scatter(X, y, color="#5DADE2", label="Data")
    ax.plot(X_plot, y_plot, color="red", label=f"Degree {deg} fit")
    ax.plot(X_plot, np.sin(2 * np.pi * X_plot), color="green", linestyle="--", alpha=0.5, label="True function")
    ax.set_ylim(-2, 2)
    ax.set_title(title)
    ax.legend(fontsize=8)

plt.tight_layout()
save_plot(fig, "17_overfit_underfit.png")
plt.show()
```

![chart](/graphs/img_026.png)

<details><summary>Output</summary>

```
✅ Saved: graphs/17_overfit_underfit.png
```

</details>