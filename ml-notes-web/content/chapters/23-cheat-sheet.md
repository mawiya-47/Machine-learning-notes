---
title: "Cheat Sheet"
chapter: 23
slug: "23-cheat-sheet"
---

## 📋 23. Cheat Sheet
---

### 🐍 Scikit-learn Quick Reference

```python
# Import & Split
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scaling
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Train any model (same pattern for all!)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

# Classification metrics
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
accuracy_score(y_test, y_pred)
classification_report(y_test, y_pred)
confusion_matrix(y_test, y_pred)

# Regression metrics
from sklearn.metrics import mean_squared_error, r2_score
r2_score(y_test, y_pred)

# Cross Validation
from sklearn.model_selection import cross_val_score
cross_val_score(model, X, y, cv=5)

# GridSearch
from sklearn.model_selection import GridSearchCV
grid = GridSearchCV(model, param_grid, cv=5)
grid.fit(X_train, y_train)
```

### ⚡ Algorithm Selection Cheat Sheet

| Problem Type | Try These First |
|---------------|------------------|
| Predicting a number | Linear Regression, Random Forest Regressor |
| Binary classification | Logistic Regression, Random Forest, SVM |
| Multi-class classification | Random Forest, KNN, Naive Bayes |
| No labels / find groups | K-Means, Hierarchical Clustering |
| Too many features | PCA |
| Complex patterns, lots of data | Neural Networks / Deep Learning |

---