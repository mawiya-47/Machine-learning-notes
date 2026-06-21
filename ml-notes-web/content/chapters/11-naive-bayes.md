---
title: "Naive Bayes"
chapter: 11
slug: "11-naive-bayes"
---

## 🎲 11. Naive Bayes
---

### 🧠 Simple Explanation
Naive Bayes uses probability (Bayes' Theorem) to predict the class of new data. It's called 'naive' because it assumes all features are independent of each other, which is rarely true but still works surprisingly well.

### 📖 Definition
> Naive Bayes is a probabilistic supervised learning algorithm based on Bayes' Theorem that assumes feature independence to calculate the probability of each class given the input features.

### 🌍 Real-life Examples
- Spam email filtering
- Sentiment analysis of reviews
- Disease prediction from symptoms

### ✅ Advantages
- Very fast to train and predict
- Works well with small data and text data
- Performs well even when independence assumption is violated

### ❌ Disadvantages
- Independence assumption rarely true in real life
- Can be outperformed by more complex models
- Zero-frequency problem for unseen categories

### 💼 Use Cases
- Spam detection
- Sentiment analysis
- Document classification

### ❓ Important Interview Questions
1. State Bayes' Theorem.
2. Why is Naive Bayes called 'naive'?
3. What is the zero-frequency problem and how is it solved (Laplace smoothing)?
4. What types of Naive Bayes exist (Gaussian, Multinomial, Bernoulli)?

---

```python
# Naive Bayes demo on Breast Cancer dataset
X = cancer.data
y = cancer.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

nb_model = GaussianNB()
nb_model.fit(X_train, y_train)
y_pred = nb_model.predict(X_test)
print(f"Naive Bayes Accuracy: {accuracy_score(y_test, y_pred):.3f}")

fig, ax = plt.subplots()
cm = confusion_matrix(y_test, y_pred)
sns.heatmap(cm, annot=True, fmt="d", cmap="Purples",
            xticklabels=cancer.target_names, yticklabels=cancer.target_names, ax=ax)
ax.set_xlabel("Predicted"); ax.set_ylabel("Actual")
ax.set_title("Naive Bayes Confusion Matrix")
save_plot(fig, "11_nb_confusion_matrix.png")
plt.show()
```

![chart](/graphs/img_015.png)

<details><summary>Output</summary>

```
Naive Bayes Accuracy: 0.974
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/11_nb_confusion_matrix.png
```

</details>