---
title: "Hyperparameter Tuning"
chapter: 19
slug: "19-hyperparameter-tuning"
---

## 🎛️ 19. Hyperparameter Tuning
---

### 🧠 Simple Explanation
Hyperparameters are settings you choose before training (like the number of trees or K value) — they aren't learned from data. Hyperparameter tuning means searching for the best combination of these settings to maximize performance.

### 📖 Definition
> Hyperparameter Tuning is the process of systematically searching for the optimal configuration of a model's hyperparameters using techniques like Grid Search, Random Search, or Bayesian Optimization.

### 🌍 Real-life Examples
- Finding the best 'K' for KNN
- Finding the best max_depth and n_estimators for Random Forest
- Tuning learning rate for a neural network

### ✅ Advantages
- Significantly improves model performance
- Helps avoid overfitting/underfitting via regularization parameters

### ❌ Disadvantages
- Computationally expensive, especially Grid Search
- Risk of overfitting to validation set if not careful

### 💼 Use Cases
- Used in nearly every serious ML project before deployment

### ❓ Important Interview Questions
1. What is the difference between a parameter and a hyperparameter?
2. What is the difference between Grid Search and Random Search?
3. What is Bayesian Optimization for hyperparameter tuning?
4. How do you avoid overfitting during hyperparameter tuning?

---

```python
# GridSearchCV demo
X = iris.data
y = iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

param_grid = {
    "n_estimators": [50, 100, 150],
    "max_depth": [2, 4, 6, None]
}
grid = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5, scoring="accuracy")
grid.fit(X_train, y_train)

print("Best Parameters:", grid.best_params_)
print(f"Best CV Accuracy: {grid.best_score_:.3f}")
print(f"Test Accuracy with best model: {accuracy_score(y_test, grid.best_estimator_.predict(X_test)):.3f}")

results = pd.DataFrame(grid.cv_results_)
pivot = results.pivot_table(values="mean_test_score", index="param_max_depth", columns="param_n_estimators")

fig, ax = plt.subplots()
sns.heatmap(pivot.astype(float), annot=True, fmt=".3f", cmap="YlGnBu", ax=ax)
ax.set_title("Grid Search: Mean CV Accuracy Heatmap")
save_plot(fig, "19_gridsearch_heatmap.png")
plt.show()
```

![chart](/graphs/img_028.png)

<details><summary>Output</summary>

```
Best Parameters: {'max_depth': 2, 'n_estimators': 100}
Best CV Accuracy: 0.950
Test Accuracy with best model: 0.900
✅ Saved: graphs/19_gridsearch_heatmap.png
```

</details>