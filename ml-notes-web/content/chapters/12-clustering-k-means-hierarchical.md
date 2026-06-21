---
title: "Clustering (K-Means, Hierarchical)"
chapter: 12
slug: "12-clustering-k-means-hierarchical"
---

## 🔗 12. Clustering (K-Means, Hierarchical)
---

### 🧠 Simple Explanation
Clustering groups similar data points together without using labels. K-Means groups points around 'K' centers, while Hierarchical Clustering builds a tree of nested groups.

### 📖 Definition
> Clustering is an unsupervised learning technique that groups a set of data points such that points in the same group (cluster) are more similar to each other than to points in other groups.

### 🌍 Real-life Examples
- Grouping customers by shopping behavior
- Grouping news articles by topic
- Grouping genes with similar expression patterns

### ✅ Advantages
- No labeled data required
- Useful for exploratory analysis
- Scales reasonably well (K-Means)

### ❌ Disadvantages
- Must choose number of clusters K in advance (K-Means)
- Sensitive to initial centroids and outliers
- Hierarchical clustering is slow on large datasets

### 💼 Use Cases
- Customer segmentation
- Image compression
- Document/topic clustering

### ❓ Important Interview Questions
1. How does the K-Means algorithm work step by step?
2. How do you choose the optimal number of clusters (Elbow method, Silhouette score)?
3. What is the difference between K-Means and Hierarchical Clustering?
4. What are the limitations of K-Means?

---

```python
# K-Means clustering demo
from sklearn.datasets import make_blobs
X_blob, y_blob = make_blobs(n_samples=300, centers=4, cluster_std=0.8, random_state=42)

kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
clusters = kmeans.fit_predict(X_blob)

fig, ax = plt.subplots()
scatter = ax.scatter(X_blob[:, 0], X_blob[:, 1], c=clusters, cmap="tab10", s=30)
ax.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1],
           marker="X", s=200, c="red", label="Centroids")
ax.set_title("K-Means Clustering (K=4)")
ax.legend()
save_plot(fig, "12_kmeans_clusters.png")
plt.show()

# Elbow Method
inertias = []
K_range = range(1, 11)
for k in K_range:
    km = KMeans(n_clusters=k, random_state=42, n_init=10).fit(X_blob)
    inertias.append(km.inertia_)

fig, ax = plt.subplots()
ax.plot(list(K_range), inertias, marker="o", color="#E74C3C")
ax.set_xlabel("Number of Clusters (K)")
ax.set_ylabel("Inertia (WCSS)")
ax.set_title("Elbow Method for Optimal K")
save_plot(fig, "12_kmeans_elbow.png")
plt.show()

# Hierarchical Clustering Dendrogram
fig, ax = plt.subplots(figsize=(10, 5))
linked = linkage(X_blob[:60], method="ward")
dendrogram(linked, ax=ax)
ax.set_title("Hierarchical Clustering Dendrogram")
ax.set_xlabel("Sample Index")
ax.set_ylabel("Distance")
save_plot(fig, "12_dendrogram.png")
plt.show()
```

![chart](/graphs/img_016.png)

![chart](/graphs/img_017.png)

![chart](/graphs/img_018.png)

<details><summary>Output</summary>

```
✅ Saved: graphs/12_kmeans_clusters.png
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/12_kmeans_elbow.png
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/12_dendrogram.png
```

</details>