---
title: "Cross Validation"
chapter: 18
slug: "18-cross-validation"
---

## 🔄 18. Cross Validation
---

### 🧠 Simple Explanation
Instead of a single train-test split, cross-validation splits the data into K parts (folds), trains on K-1 folds and tests on the remaining fold, repeating K times. This gives a more reliable measure of model performance.

### 📖 Definition
> Cross Validation is a resampling technique that splits data into K folds and trains/evaluates the model K times, each time using a different fold as the test set, to obtain a robust estimate of model performance.

### 🌍 Real-life Examples
- 5-fold cross-validation on a medical dataset to ensure stable accuracy estimates
- 10-fold CV used in Kaggle competitions for fair model comparison

### ✅ Advantages
- More reliable performance estimate
- Uses all data for both training and testing
- Reduces the risk of a lucky/unlucky split

### ❌ Disadvantages
- More computationally expensive (trains K models)
- Not ideal for very large datasets or time series without modification

### 💼 Use Cases
- Model selection
- Hyperparameter tuning
- Comparing algorithms fairly

### ❓ Important Interview Questions
1. What is K-Fold Cross Validation?
2. What is the difference between K-Fold and Stratified K-Fold?
3. What is Leave-One-Out Cross Validation (LOOCV)?
4. Why shouldn't you do feature scaling before splitting folds (data leakage)?

---

```python
# Cross-validation demo
X = iris.data
y = iris.target

model = RandomForestClassifier(n_estimators=100, random_state=42)
cv_scores = cross_val_score(model, X, y, cv=5)

print("Cross-validation scores for each fold:", np.round(cv_scores, 3))
print(f"Mean Accuracy: {cv_scores.mean():.3f}  | Std Dev: {cv_scores.std():.3f}")

fig, ax = plt.subplots()
ax.bar(range(1, 6), cv_scores, color="#5DADE2")
ax.axhline(cv_scores.mean(), color="red", linestyle="--", label=f"Mean = {cv_scores.mean():.3f}")
ax.set_xlabel("Fold")
ax.set_ylabel("Accuracy")
ax.set_title("5-Fold Cross Validation Accuracy")
ax.legend()
save_plot(fig, "18_cross_validation.png")
plt.show()
```

![chart](/graphs/img_027.png)

<details><summary>Output</summary>

```
Cross-validation scores for each fold: [0.967 0.967 0.933 0.967 1.   ]
Mean Accuracy: 0.967  | Std Dev: 0.021
✅ Saved: graphs/18_cross_validation.png
```

</details>