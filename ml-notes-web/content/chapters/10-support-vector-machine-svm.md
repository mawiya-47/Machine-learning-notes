---
title: "Support Vector Machine (SVM)"
chapter: 10
slug: "10-support-vector-machine-svm"
---

## 🛡️ 10. Support Vector Machine (SVM)
---

### 🧠 Simple Explanation
SVM tries to find the best boundary (line/plane) that separates classes with the maximum possible margin between them, so new points are classified confidently.

### 📖 Definition
> Support Vector Machine is a supervised learning algorithm that finds the optimal hyperplane which maximizes the margin between classes, using 'support vectors' (closest points) to define the boundary.

### 🌍 Real-life Examples
- Classifying handwritten digits
- Face detection
- Text/document classification

### ✅ Advantages
- Effective in high-dimensional spaces
- Works well with clear margin of separation
- Kernel trick handles non-linear data

### ❌ Disadvantages
- Slow on large datasets
- Hard to tune kernel/hyperparameters
- Less effective with overlapping classes / noisy data

### 💼 Use Cases
- Image classification
- Bioinformatics (gene classification)
- Text categorization

### ❓ Important Interview Questions
1. What is a hyperplane and support vectors?
2. What is the kernel trick? Name common kernels.
3. What is the role of the C parameter in SVM?
4. What is margin maximization?

---

```python
# SVM demo with decision boundary on Iris (2 features)
X = iris.data[["petal length (cm)", "petal width (cm)"]]
y = iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

svm_model = SVC(kernel="rbf", C=1, gamma="scale")
svm_model.fit(X_train, y_train)
y_pred = svm_model.predict(X_test)
print(f"SVM Accuracy: {accuracy_score(y_test, y_pred):.3f}")

fig, ax = plt.subplots()
x_min, x_max = X_train.iloc[:, 0].min() - 1, X_train.iloc[:, 0].max() + 1
y_min, y_max = X_train.iloc[:, 1].min() - 1, X_train.iloc[:, 1].max() + 1
xx, yy = np.meshgrid(np.linspace(x_min, x_max, 200), np.linspace(y_min, y_max, 200))
Z = svm_model.predict(np.c_[xx.ravel(), yy.ravel()]).reshape(xx.shape)
ax.contourf(xx, yy, Z, alpha=0.3, cmap="plasma")
ax.scatter(X_train.iloc[:, 0], X_train.iloc[:, 1], c=y_train, cmap="plasma", edgecolor="k")
ax.set_title("SVM (RBF Kernel) Decision Boundary")
ax.set_xlabel("Petal Length")
ax.set_ylabel("Petal Width")
save_plot(fig, "10_svm_decision_boundary.png")
plt.show()
```

![chart](/graphs/img_014.png)

<details><summary>Output</summary>

```
SVM Accuracy: 0.967
```

</details>

<details><summary>Output</summary>

```
/usr/local/lib/python3.12/dist-packages/sklearn/utils/validation.py:2691: UserWarning: X does not have valid feature names, but SVC was fitted with feature names
  warnings.warn(
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/10_svm_decision_boundary.png
```

</details>