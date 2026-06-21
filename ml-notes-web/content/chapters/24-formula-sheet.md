---
title: "Formula Sheet"
chapter: 24
slug: "24-formula-sheet"
---

## 🧮 24. Formula Sheet
---

### 📐 Important Formulas

**Linear Regression:**
$$ \hat{y} = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + ... + \beta_n x_n $$

**Sigmoid Function (Logistic Regression):**
$$ \sigma(z) = \frac{1}{1 + e^{-z}} $$

**Euclidean Distance (used in KNN, K-Means):**
$$ d(p, q) = \sqrt{\sum_{i=1}^{n}(p_i - q_i)^2} $$

**Entropy (Decision Trees):**
$$ H(S) = -\sum_{i=1}^{c} p_i \log_2(p_i) $$

**Gini Impurity (Decision Trees):**
$$ Gini = 1 - \sum_{i=1}^{c} p_i^2 $$

**Bayes' Theorem (Naive Bayes):**
$$ P(A|B) = \frac{P(B|A) \, P(A)}{P(B)} $$

**Mean Squared Error:**
$$ MSE = \frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)^2 $$

**R-squared:**
$$ R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2} $$

**Precision, Recall, F1:**
$$ Precision = \frac{TP}{TP+FP} \quad Recall = \frac{TP}{TP+FN} \quad F1 = \frac{2 \cdot P \cdot R}{P+R} $$

**PCA Variance:** Eigenvectors/eigenvalues of the covariance matrix $\Sigma = \frac{1}{n}X^TX$

---