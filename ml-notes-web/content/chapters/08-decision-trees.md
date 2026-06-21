---
title: "Decision Trees"
chapter: 8
slug: "08-decision-trees"
---

## 🌳 8. Decision Trees
---

### 🧠 Simple Explanation
A Decision Tree splits data into branches based on feature values, like a flowchart of yes/no questions, until it reaches a final decision (leaf).

### 📖 Definition
> A Decision Tree is a supervised learning algorithm that splits data recursively based on feature values to form a tree-like structure of decisions, used for both classification and regression.

### 🌍 Real-life Examples
- Deciding loan approval based on income, credit score, age
- Medical diagnosis flowcharts
- Deciding whether to play outside based on weather

### ✅ Advantages
- Easy to understand and visualize
- Handles both numerical and categorical data
- No need for feature scaling

### ❌ Disadvantages
- Prone to overfitting
- Unstable (small data changes can change the tree)
- Biased toward features with more levels

### 💼 Use Cases
- Credit risk assessment
- Medical diagnosis
- Customer churn prediction

### ❓ Important Interview Questions
1. What is entropy and information gain?
2. What is Gini impurity?
3. How do you prevent a decision tree from overfitting?
4. What is pruning?
5. How does a decision tree handle continuous variables?

---

```python
# Decision Tree demo on Iris
X = iris.data
y = iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

dt = DecisionTreeClassifier(max_depth=3, random_state=42)
dt.fit(X_train, y_train)
y_pred = dt.predict(X_test)
print(f"Decision Tree Accuracy: {accuracy_score(y_test, y_pred):.3f}")

fig, ax = plt.subplots(figsize=(14, 8))
plot_tree(dt, feature_names=iris.feature_names, class_names=iris.target_names,
          filled=True, rounded=True, fontsize=9, ax=ax)
ax.set_title("Decision Tree Visualization (max_depth=3)")
save_plot(fig, "08_decision_tree.png")
plt.show()

# Feature importance bar chart
fig, ax = plt.subplots()
importances = pd.Series(dt.feature_importances_, index=iris.feature_names).sort_values()
importances.plot(kind="barh", ax=ax, color="#52BE80")
ax.set_title("Decision Tree Feature Importance")
save_plot(fig, "08_dt_feature_importance.png")
plt.show()
```

![chart](/graphs/img_010.png)

![chart](/graphs/img_011.png)

<details><summary>Output</summary>

```
Decision Tree Accuracy: 0.967
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/08_decision_tree.png
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/08_dt_feature_importance.png
```

</details>