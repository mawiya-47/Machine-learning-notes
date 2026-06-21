---
title: "Principal Component Analysis (PCA)"
chapter: 13
slug: "13-principal-component-analysis-pca"
---

## 📉 13. Principal Component Analysis (PCA)
---

### 🧠 Simple Explanation
PCA reduces the number of features in a dataset while keeping as much important information as possible. It compresses data into fewer 'principal component' dimensions, making it easier to visualize and faster to process.

### 📖 Definition
> PCA is an unsupervised dimensionality reduction technique that transforms correlated features into a smaller set of uncorrelated variables called principal components, ordered by the amount of variance they explain.

### 🌍 Real-life Examples
- Compressing a 100-feature dataset into 2 features for visualization
- Reducing noise in image data
- Speeding up training of ML models with many features

### ✅ Advantages
- Reduces dimensionality and noise
- Speeds up training
- Helps visualize high-dimensional data

### ❌ Disadvantages
- Principal components are hard to interpret
- Can lose some information
- Sensitive to feature scaling

### 💼 Use Cases
- Image compression
- Visualization of high-dimensional data
- Preprocessing before clustering or classification

### ❓ Important Interview Questions
1. What is the goal of PCA?
2. What is explained variance ratio?
3. Why is feature scaling needed before PCA?
4. What is the difference between PCA and feature selection?

---

```python
# PCA demo on Breast Cancer dataset (reduce 30 features to 2)
X = cancer.data
y = cancer.target

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

print(f"Explained variance ratio: {pca.explained_variance_ratio_}")
print(f"Total variance explained by 2 components: {sum(pca.explained_variance_ratio_):.2%}")

fig, ax = plt.subplots()
scatter = ax.scatter(X_pca[:, 0], X_pca[:, 1], c=y, cmap="coolwarm", edgecolor="k", alpha=0.7)
ax.set_xlabel("Principal Component 1")
ax.set_ylabel("Principal Component 2")
ax.set_title("PCA: Breast Cancer Dataset (30 features -> 2)")
legend1 = ax.legend(*scatter.legend_elements(), title="Class")
ax.add_artist(legend1)
save_plot(fig, "13_pca_2d.png")
plt.show()

# Explained variance bar chart
pca_full = PCA().fit(X_scaled)
fig, ax = plt.subplots()
ax.bar(range(1, 11), pca_full.explained_variance_ratio_[:10], color="#5DADE2")
ax.set_xlabel("Principal Component")
ax.set_ylabel("Explained Variance Ratio")
ax.set_title("PCA: Explained Variance per Component (Top 10)")
save_plot(fig, "13_pca_variance.png")
plt.show()
```

![chart](/graphs/img_019.png)

![chart](/graphs/img_020.png)

<details><summary>Output</summary>

```
Explained variance ratio: [0.44272026 0.18971182]
Total variance explained by 2 components: 63.24%
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/13_pca_2d.png
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/13_pca_variance.png
```

</details>