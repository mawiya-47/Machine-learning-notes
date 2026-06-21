---
title: "Train-Test Split"
chapter: 4
slug: "04-train-test-split"
---

## ✂️ 4. Train-Test Split
---

### 🧠 Simple Explanation
Before training a model, we split our data into two (or three) parts: one part to train the model, and one part to test how well it performs on data it has never seen.

### 📖 Definition
> Train-Test Split is the technique of dividing a dataset into a training set (to fit the model) and a test set (to evaluate the model's performance on unseen data).

### 🌍 Real-life Examples
- Using 80% of student records to train a grade-predictor and 20% to test it
- Splitting 10 years of stock data into earlier years (train) and recent year (test)

### ✅ Advantages
- Helps detect overfitting
- Gives an honest estimate of real-world performance

### ❌ Disadvantages
- Reduces amount of data available for training
- A single split can be lucky/unlucky (solved by cross-validation)

### 💼 Use Cases
- Used in virtually every supervised learning project

### ❓ Important Interview Questions
1. Why do we split data into train and test sets?
2. What is a good train-test split ratio?
3. What is the difference between validation set and test set?
4. What is data leakage and how can train-test split prevent it?

---

```python
# Demonstrate train-test split using Iris dataset
iris = datasets.load_iris(as_frame=True)
X_iris, y_iris = iris.data, iris.target
X_train, X_test, y_train, y_test = train_test_split(X_iris, y_iris, test_size=0.2, random_state=42, stratify=y_iris)

print(f"Total samples: {len(X_iris)}")
print(f"Training samples: {len(X_train)} ({len(X_train)/len(X_iris):.0%})")
print(f"Testing samples:  {len(X_test)} ({len(X_test)/len(X_iris):.0%})")

fig, ax = plt.subplots()
ax.bar(["Train", "Test"], [len(X_train), len(X_test)], color=["#5DADE2", "#F5B041"])
ax.set_title("Train-Test Split Sizes (80/20)")
ax.set_ylabel("Number of Samples")
save_plot(fig, "04_train_test_split.png")
plt.show()

iris.frame.to_csv(os.path.join(DATASETS_DIR, "iris.csv"), index=False)
```

![chart](/graphs/img_004.png)

<details><summary>Output</summary>

```
Total samples: 150
Training samples: 120 (80%)
Testing samples:  30 (20%)
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/04_train_test_split.png
```

</details>