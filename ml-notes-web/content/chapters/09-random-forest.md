---
title: "Random Forest"
chapter: 9
slug: "09-random-forest"
---

## 🌲🌲🌲 9. Random Forest
---

### 🧠 Simple Explanation
A Random Forest builds many decision trees on random subsets of data and features, then combines their votes. Many trees together usually make better, more stable decisions than one tree.

### 📖 Definition
> Random Forest is an ensemble learning algorithm that builds multiple decision trees on bootstrapped samples of data and aggregates their predictions (majority vote for classification, average for regression).

### 🌍 Real-life Examples
- Predicting loan default by combining hundreds of small decision trees
- Image classification
- Predicting customer churn with high accuracy

### ✅ Advantages
- Reduces overfitting compared to a single tree
- Handles large datasets and high dimensionality well
- Provides feature importance

### ❌ Disadvantages
- Less interpretable than a single tree
- Slower to train and predict with many trees
- Larger model size

### 💼 Use Cases
- Fraud detection
- Stock market prediction
- Recommendation engines

### ❓ Important Interview Questions
1. What is bagging and how does Random Forest use it?
2. How is Random Forest different from a single Decision Tree?
3. What is out-of-bag (OOB) error?
4. How do you tune the number of trees in a Random Forest?

---

```python
# Random Forest demo on Iris
rf = RandomForestClassifier(n_estimators=100, max_depth=4, random_state=42)
rf.fit(X_train, y_train)
y_pred = rf.predict(X_test)
print(f"Random Forest Accuracy: {accuracy_score(y_test, y_pred):.3f}")

fig, ax = plt.subplots()
importances = pd.Series(rf.feature_importances_, index=iris.feature_names).sort_values()
importances.plot(kind="barh", ax=ax, color="#27AE60")
ax.set_title("Random Forest Feature Importance")
save_plot(fig, "09_rf_feature_importance.png")
plt.show()

# Confusion Matrix for Random Forest
fig, ax = plt.subplots()
cm = confusion_matrix(y_test, y_pred)
sns.heatmap(cm, annot=True, fmt="d", cmap="Greens",
            xticklabels=iris.target_names, yticklabels=iris.target_names, ax=ax)
ax.set_xlabel("Predicted")
ax.set_ylabel("Actual")
ax.set_title("Random Forest Confusion Matrix")
save_plot(fig, "09_rf_confusion_matrix.png")
plt.show()
```

![chart](/graphs/img_012.png)

![chart](/graphs/img_013.png)

<details><summary>Output</summary>

```
Random Forest Accuracy: 0.967
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/09_rf_feature_importance.png
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/09_rf_confusion_matrix.png
```

</details>