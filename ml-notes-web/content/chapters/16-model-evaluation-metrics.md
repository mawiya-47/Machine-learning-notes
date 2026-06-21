---
title: "Model Evaluation Metrics"
chapter: 16
slug: "16-model-evaluation-metrics"
---

## 📊 16. Model Evaluation Metrics
---

### 🧠 Simple Explanation
After training a model, we need to measure how good it is. Different metrics tell us different things — accuracy alone can be misleading, especially with imbalanced data.

### 📖 Key Classification Metrics

| Metric | Formula | What it tells us |
|--------|---------|-------------------|
| Accuracy | (TP+TN)/(TP+TN+FP+FN) | Overall correctness |
| Precision | TP/(TP+FP) | Of predicted positives, how many were correct |
| Recall (Sensitivity) | TP/(TP+FN) | Of actual positives, how many were found |
| F1-Score | 2×(P×R)/(P+R) | Balance between Precision & Recall |
| ROC-AUC | Area under ROC curve | Ability to distinguish classes |

### 📖 Key Regression Metrics

| Metric | Formula | What it tells us |
|--------|---------|-------------------|
| MAE | mean(\|y - ŷ\|) | Average absolute error |
| MSE | mean((y - ŷ)²) | Penalizes large errors more |
| RMSE | sqrt(MSE) | Error in original units |
| R² Score | 1 - SS_res/SS_tot | Proportion of variance explained |

### 🌍 Real-life Examples
- In cancer detection, **Recall** matters more (don't want to miss any sick patient)
- In spam detection, **Precision** matters more (don't want to mark important mail as spam)

### ❓ Important Interview Questions
1. What is the difference between Precision and Recall?
2. When would you prioritize Recall over Precision?
3. What is a Confusion Matrix?
4. What is ROC-AUC and how do you interpret it?
5. Why is accuracy a poor metric for imbalanced datasets?

---

```python
# Confusion Matrix, ROC Curve example using Logistic Regression on Breast Cancer data
X = cancer.data
y = cancer.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)

model = LogisticRegression(max_iter=5000)
model.fit(X_train_s, y_train)
y_pred = model.predict(X_test_s)
y_proba = model.predict_proba(X_test_s)[:, 1]

print(f"Accuracy:  {accuracy_score(y_test, y_pred):.3f}")
print(f"Precision: {precision_score(y_test, y_pred):.3f}")
print(f"Recall:    {recall_score(y_test, y_pred):.3f}")
print(f"F1-score:  {f1_score(y_test, y_pred):.3f}")

# Confusion Matrix
fig, ax = plt.subplots()
cm = confusion_matrix(y_test, y_pred)
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues",
            xticklabels=cancer.target_names, yticklabels=cancer.target_names, ax=ax)
ax.set_xlabel("Predicted"); ax.set_ylabel("Actual")
ax.set_title("Confusion Matrix")
save_plot(fig, "16_confusion_matrix.png")
plt.show()

# ROC Curve
fpr, tpr, _ = roc_curve(y_test, y_proba)
roc_auc = auc(fpr, tpr)
fig, ax = plt.subplots()
ax.plot(fpr, tpr, color="darkorange", label=f"ROC curve (AUC = {roc_auc:.2f})")
ax.plot([0, 1], [0, 1], linestyle="--", color="gray")
ax.set_xlabel("False Positive Rate")
ax.set_ylabel("True Positive Rate")
ax.set_title("ROC Curve")
ax.legend()
save_plot(fig, "16_roc_curve.png")
plt.show()
```

![chart](/graphs/img_024.png)

![chart](/graphs/img_025.png)

<details><summary>Output</summary>

```
Accuracy:  0.974
Precision: 0.972
Recall:    0.986
F1-score:  0.979
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/16_confusion_matrix.png
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/16_roc_curve.png
```

</details>