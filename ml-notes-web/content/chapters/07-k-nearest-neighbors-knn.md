---
title: "K-Nearest Neighbors (KNN)"
chapter: 7
slug: "07-k-nearest-neighbors-knn"
---

## 📍 7. K-Nearest Neighbors (KNN)
---

### 🧠 Simple Explanation
KNN classifies a new data point by looking at its 'K' closest neighbors and taking a majority vote. It's like asking your K nearest friends for an opinion and going with the majority.

### 📖 Definition
> K-Nearest Neighbors is a non-parametric, instance-based supervised learning algorithm that classifies a data point based on the majority class among its K nearest neighbors in feature space.

### 🌍 Real-life Examples
- Recommending products similar to what a user bought
- Classifying a flower species based on similar flowers
- Detecting handwriting digits

### ✅ Advantages
- Simple, intuitive, no training phase
- Works well with small datasets
- Naturally handles multi-class problems

### ❌ Disadvantages
- Slow prediction on large datasets
- Sensitive to irrelevant features and feature scale
- Choosing right K is tricky

### 💼 Use Cases
- Recommendation systems
- Pattern recognition
- Anomaly detection

### ❓ Important Interview Questions
1. How do you choose the right value of K?
2. Why is feature scaling important for KNN?
3. What is the time complexity of KNN at prediction time?
4. What distance metrics can be used in KNN?

---

```python
# KNN demo on Iris dataset (2 features for visualization)
X = iris.data[["petal length (cm)", "petal width (cm)"]]
y = iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)
y_pred = knn.predict(X_test)
print(f"KNN Accuracy: {accuracy_score(y_test, y_pred):.3f}")

# Accuracy vs K plot
ks = range(1, 21)
accs = []
for k in ks:
    m = KNeighborsClassifier(n_neighbors=k).fit(X_train, y_train)
    accs.append(accuracy_score(y_test, m.predict(X_test)))

fig, ax = plt.subplots()
ax.plot(list(ks), accs, marker="o", color="#5DADE2")
ax.set_xlabel("K (Number of Neighbors)")
ax.set_ylabel("Test Accuracy")
ax.set_title("KNN: Accuracy vs K value")
save_plot(fig, "07_knn_accuracy_vs_k.png")
plt.show()

# Decision boundary
fig, ax = plt.subplots()
x_min, x_max = X_train.iloc[:, 0].min() - 1, X_train.iloc[:, 0].max() + 1
y_min, y_max = X_train.iloc[:, 1].min() - 1, X_train.iloc[:, 1].max() + 1
xx, yy = np.meshgrid(np.linspace(x_min, x_max, 200), np.linspace(y_min, y_max, 200))
Z = knn.predict(np.c_[xx.ravel(), yy.ravel()]).reshape(xx.shape)
ax.contourf(xx, yy, Z, alpha=0.3, cmap="viridis")
ax.scatter(X_train.iloc[:, 0], X_train.iloc[:, 1], c=y_train, cmap="viridis", edgecolor="k")
ax.set_title("KNN Decision Boundary (K=5)")
ax.set_xlabel("Petal Length")
ax.set_ylabel("Petal Width")
save_plot(fig, "07_knn_decision_boundary.png")
plt.show()
```

![chart](/graphs/img_008.png)

![chart](/graphs/img_009.png)

<details><summary>Output</summary>

```
KNN Accuracy: 0.967
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/07_knn_accuracy_vs_k.png
```

</details>

<details><summary>Output</summary>

```
/usr/local/lib/python3.12/dist-packages/sklearn/utils/validation.py:2691: UserWarning: X does not have valid feature names, but KNeighborsClassifier was fitted with feature names
  warnings.warn(
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/07_knn_decision_boundary.png
```

</details>