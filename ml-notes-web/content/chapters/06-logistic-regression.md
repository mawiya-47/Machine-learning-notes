---
title: "Logistic Regression"
chapter: 6
slug: "06-logistic-regression"
---

## 🔵 6. Logistic Regression
---

### 🧠 Simple Explanation
Despite its name, Logistic Regression is used for classification, not regression. It predicts the probability that something belongs to a category (e.g., spam or not spam) using an S-shaped (sigmoid) curve.

### 📖 Definition
> Logistic Regression is a supervised classification algorithm that uses the sigmoid function to model the probability of a binary (or multi-class) outcome.

### 🌍 Real-life Examples
- Predicting if an email is spam or not
- Predicting if a patient has a disease (yes/no)
- Predicting if a customer will churn

### ✅ Advantages
- Simple, fast, interpretable
- Outputs probabilities
- Works well for linearly separable classes

### ❌ Disadvantages
- Struggles with complex/non-linear relationships
- Sensitive to outliers and multicollinearity

### 💼 Use Cases
- Email spam detection
- Disease diagnosis
- Credit default prediction

### ❓ Important Interview Questions
1. Why is it called 'regression' if it's used for classification?
2. What is the sigmoid function?
3. What is the difference between Linear and Logistic Regression?
4. What is the decision boundary in Logistic Regression?
5. How do you handle multi-class classification with Logistic Regression?

---

```python
# Logistic Regression demo using Breast Cancer dataset
cancer = datasets.load_breast_cancer(as_frame=True)
X = cancer.data[["mean radius", "mean texture"]]
y = cancer.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)

log_model = LogisticRegression()
log_model.fit(X_train_s, y_train)
y_pred = log_model.predict(X_test_s)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.3f}")
print(classification_report(y_test, y_pred, target_names=cancer.target_names))

# Sigmoid curve illustration
fig, ax = plt.subplots()
z = np.linspace(-10, 10, 200)
sigmoid = 1 / (1 + np.exp(-z))
ax.plot(z, sigmoid, color="purple", linewidth=2)
ax.axhline(0.5, color="gray", linestyle="--")
ax.set_title("Sigmoid Function used in Logistic Regression")
ax.set_xlabel("z")
ax.set_ylabel("Probability")
save_plot(fig, "06_sigmoid_function.png")
plt.show()

# Decision boundary plot
fig, ax = plt.subplots()
x_min, x_max = X_train_s[:, 0].min() - 1, X_train_s[:, 0].max() + 1
y_min, y_max = X_train_s[:, 1].min() - 1, X_train_s[:, 1].max() + 1
xx, yy = np.meshgrid(np.linspace(x_min, x_max, 200), np.linspace(y_min, y_max, 200))
Z = log_model.predict(np.c_[xx.ravel(), yy.ravel()]).reshape(xx.shape)
ax.contourf(xx, yy, Z, alpha=0.3, cmap="coolwarm")
ax.scatter(X_train_s[:, 0], X_train_s[:, 1], c=y_train, cmap="coolwarm", edgecolor="k")
ax.set_title("Logistic Regression Decision Boundary")
ax.set_xlabel("Mean Radius (scaled)")
ax.set_ylabel("Mean Texture (scaled)")
save_plot(fig, "06_logreg_decision_boundary.png")
plt.show()

cancer.frame.to_csv(os.path.join(DATASETS_DIR, "breast_cancer.csv"), index=False)
```

![chart](/graphs/img_006.png)

![chart](/graphs/img_007.png)

<details><summary>Output</summary>

```
Accuracy: 0.904
              precision    recall  f1-score   support

   malignant       0.90      0.84      0.87        43
      benign       0.91      0.94      0.92        71

    accuracy                           0.90       114
   macro avg       0.90      0.89      0.90       114
weighted avg       0.90      0.90      0.90       114
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/06_sigmoid_function.png
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/06_logreg_decision_boundary.png
```

</details>