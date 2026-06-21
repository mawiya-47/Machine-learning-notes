---
title: "Types of Machine Learning"
chapter: 2
slug: "02-types-of-machine-learning"
---

## 🧩 2. Types of Machine Learning
---

Machine Learning is broadly divided into **three types**:

| Type | Uses Labels? | Goal | Example Algorithm |
|------|--------------|------|--------------------|
| Supervised Learning | ✅ Yes | Predict output from input | Linear Regression, KNN |
| Unsupervised Learning | ❌ No | Find hidden patterns/groups | K-Means, PCA |
| Reinforcement Learning | 🎯 Reward signal | Learn by trial & error | Q-Learning, Deep Q-Network |

---

### 🟦 2.1 Supervised Learning

### 🧠 Simple Explanation
In supervised learning, we train the model using data that already has the correct answers (labels). The model learns the relationship between input and output, just like a student learning from a teacher with an answer key.

### 📖 Definition
> Supervised Learning is a type of ML where the model is trained on labeled data — each training example has an input and a known correct output.

### 🌍 Real-life Examples
- Predicting house prices from house features (price is the known label)
- Email spam classification (spam/not-spam label exists)
- Predicting exam pass/fail using study hours

### ✅ Advantages
- High accuracy with good labeled data
- Easy to evaluate using known outputs
- Well-understood algorithms

### ❌ Disadvantages
- Requires large labeled datasets (expensive)
- Doesn't generalize well outside training distribution

### 💼 Use Cases
- Credit scoring
- Medical diagnosis
- Price prediction

### ❓ Important Interview Questions
1. What is supervised learning? Give two real examples.
2. What is the difference between regression and classification?

---

### 🟩 2.2 Unsupervised Learning

### 🧠 Simple Explanation
In unsupervised learning, the data has no labels. The model tries to find structure, patterns, or groups on its own — like sorting fruits into groups by similarity without knowing their names.

### 📖 Definition
> Unsupervised Learning is a type of ML where the model finds hidden patterns or groupings in data that has no labeled output.

### 🌍 Real-life Examples
- Grouping customers by purchase behavior (customer segmentation)
- Grouping news articles by topic
- Anomaly detection in network traffic

### ✅ Advantages
- No need for labeled data
- Useful for discovering unknown patterns
- Good for exploratory data analysis

### ❌ Disadvantages
- Harder to evaluate (no ground truth)
- Results can be subjective/less accurate

### 💼 Use Cases
- Customer segmentation
- Market basket analysis
- Anomaly detection

### ❓ Important Interview Questions
1. What is unsupervised learning? How is it different from supervised learning?
2. Name two unsupervised learning algorithms.

---

### 🟨 2.3 Reinforcement Learning

### 🧠 Simple Explanation
In reinforcement learning, an 'agent' learns by interacting with an environment. It gets rewards for good actions and penalties for bad ones — similar to training a dog with treats.

### 📖 Definition
> Reinforcement Learning is a type of ML where an agent learns to make decisions by performing actions and receiving rewards or penalties from the environment.

### 🌍 Real-life Examples
- A robot learning to walk
- AlphaGo learning to play Go
- Self-driving cars learning to navigate traffic

### ✅ Advantages
- Learns optimal strategy through experience
- Works well in sequential decision-making problems

### ❌ Disadvantages
- Requires lots of trial and error (slow)
- Can be unstable / hard to train
- Needs careful reward design

### 💼 Use Cases
- Game playing AI
- Robotics
- Resource management
- Trading bots

### ❓ Important Interview Questions
1. What is reinforcement learning? Explain agent, environment, and reward.
2. How is reinforcement learning different from supervised learning?

---

```python
# Pie chart: proportion of ML types typically used in industry (illustrative)
fig, ax = plt.subplots()
labels = ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"]
sizes = [70, 23, 7]
colors = ["#5DADE2", "#58D68D", "#F5B041"]
ax.pie(sizes, labels=labels, autopct="%1.1f%%", colors=colors, startangle=90,
       wedgeprops={"edgecolor": "white", "linewidth": 1.5})
ax.set_title("Illustrative Usage Share of ML Types in Industry")
save_plot(fig, "02_ml_types_pie.png")
plt.show()
```

![chart](/graphs/img_002.png)

<details><summary>Output</summary>

```
✅ Saved: graphs/02_ml_types_pie.png
```

</details>