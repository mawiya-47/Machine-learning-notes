---
title: "Interview Preparation"
chapter: 25
slug: "25-interview-preparation"
---

## 💼 25. Interview Preparation
---

### 🎯 Top Conceptual Interview Questions (with short answers)

1. **What is the bias-variance tradeoff?**
   Bias = error from wrong assumptions (underfitting). Variance = error from sensitivity to training data (overfitting). Good models balance both.

2. **How do you handle imbalanced datasets?**
   Use resampling (SMOTE, undersampling/oversampling), class weights, or metrics like F1/ROC-AUC instead of accuracy.

3. **What is regularization? (L1 vs L2)**
   Regularization adds a penalty to large coefficients to prevent overfitting. L1 (Lasso) can shrink coefficients to zero (feature selection); L2 (Ridge) shrinks them smoothly.

4. **What is the difference between bagging and boosting?**
   Bagging trains models in parallel on random subsets and averages results (e.g., Random Forest). Boosting trains models sequentially, each correcting the previous one's errors (e.g., XGBoost, AdaBoost).

5. **What is feature engineering?**
   Creating new, more useful input features from raw data to improve model performance.

6. **What is the curse of dimensionality?**
   As the number of features grows, data becomes sparse and distance-based algorithms (like KNN) become less effective.

7. **What is data leakage?**
   When information from outside the training set (often from the test set) leaks into model training, causing unrealistically high performance.

8. **How would you explain a complex model to a non-technical stakeholder?**
   Use simple analogies, visualizations (feature importance, decision boundaries), and focus on business impact rather than math.

### 🗂️ Suggested Interview Prep Plan
- Week 1: Math foundations (linear algebra, probability, statistics)
- Week 2: Core algorithms (this notebook!) + hands-on coding
- Week 3: SQL + Data manipulation (Pandas)
- Week 4: System design for ML, case studies, mock interviews

---