---
title: "Mini Projects"
chapter: 21
slug: "21-mini-projects"
---

## 🚀 21. Mini Projects
---

These mini-projects apply everything learned above to realistic problems. Outputs and trained-model summaries are saved into the `projects/` folder.

---

### 🏠 Project 1: House Price Prediction (Regression)

```python
# Project 1: House Price Prediction using synthetic data
np.random.seed(7)
n = 300
area = np.random.uniform(500, 4000, n)
bedrooms = np.random.randint(1, 6, n)
age = np.random.uniform(0, 40, n)
price = (area * 150) + (bedrooms * 20000) - (age * 800) + np.random.normal(0, 25000, n)

house_df = pd.DataFrame({"Area_sqft": area, "Bedrooms": bedrooms, "Age_years": age, "Price": price})
house_df.to_csv(os.path.join(DATASETS_DIR, "house_prices.csv"), index=False)

X = house_df[["Area_sqft", "Bedrooms", "Age_years"]]
y = house_df["Price"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression().fit(X_train, y_train)
y_pred = model.predict(X_test)
print(f"R2 Score: {r2_score(y_test, y_pred):.3f}")
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):,.0f}")

fig, ax = plt.subplots()
ax.scatter(y_test, y_pred, alpha=0.6, color="#5DADE2")
ax.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], "r--")
ax.set_xlabel("Actual Price")
ax.set_ylabel("Predicted Price")
ax.set_title("House Price Prediction: Actual vs Predicted")
save_plot(fig, "21_house_price_actual_vs_pred.png")
plt.show()

house_df.describe().to_csv(os.path.join(PROJECTS_DIR, "house_price_summary.csv"))
```

![chart](/graphs/img_030.png)

<details><summary>Output</summary>

```
R2 Score: 0.973
RMSE: 25,735
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/21_house_price_actual_vs_pred.png
```

</details>

### 🌸 Project 2: Iris Flower Classification

```python
# Project 2: Iris Classification with multiple models compared
X = iris.data
y = iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

models = {
    "Logistic Regression": LogisticRegression(max_iter=2000),
    "KNN": KNeighborsClassifier(),
    "Decision Tree": DecisionTreeClassifier(random_state=42),
    "Random Forest": RandomForestClassifier(random_state=42),
    "SVM": SVC(),
    "Naive Bayes": GaussianNB()
}

results = {}
for name, m in models.items():
    m.fit(X_train, y_train)
    acc = accuracy_score(y_test, m.predict(X_test))
    results[name] = acc

results_df = pd.Series(results).sort_values(ascending=False)
print(results_df)

fig, ax = plt.subplots()
results_df.plot(kind="bar", color="#58D68D", ax=ax)
ax.set_ylabel("Accuracy")
ax.set_title("Iris Classification: Model Comparison")
plt.xticks(rotation=30, ha="right")
save_plot(fig, "21_iris_model_comparison.png")
plt.show()

results_df.to_csv(os.path.join(PROJECTS_DIR, "iris_model_comparison.csv"))
```

![chart](/graphs/img_031.png)

<details><summary>Output</summary>

```
KNN                    1.000000
Logistic Regression    0.966667
Naive Bayes            0.966667
SVM                    0.966667
Decision Tree          0.933333
Random Forest          0.900000
dtype: float64
✅ Saved: graphs/21_iris_model_comparison.png
```

</details>

### 🛍️ Project 3: Customer Segmentation (Clustering)

```python
# Project 3: Customer Segmentation using K-Means
np.random.seed(3)
n = 200
annual_income = np.random.normal(60, 20, n).clip(15, 140)
spending_score = np.random.normal(50, 25, n).clip(1, 100)
cust_df = pd.DataFrame({"AnnualIncome_k": annual_income, "SpendingScore": spending_score})
cust_df.to_csv(os.path.join(DATASETS_DIR, "customer_segmentation.csv"), index=False)

scaler = StandardScaler()
X_scaled = scaler.fit_transform(cust_df)

kmeans = KMeans(n_clusters=5, random_state=42, n_init=10)
cust_df["Cluster"] = kmeans.fit_predict(X_scaled)

fig, ax = plt.subplots()
scatter = ax.scatter(cust_df["AnnualIncome_k"], cust_df["SpendingScore"],
                      c=cust_df["Cluster"], cmap="tab10", s=40)
ax.set_xlabel("Annual Income (k$)")
ax.set_ylabel("Spending Score")
ax.set_title("Customer Segmentation (K-Means, K=5)")
save_plot(fig, "21_customer_segmentation.png")
plt.show()

cust_df.to_csv(os.path.join(PROJECTS_DIR, "customer_segments.csv"), index=False)
```

![chart](/graphs/img_032.png)

<details><summary>Output</summary>

```
✅ Saved: graphs/21_customer_segmentation.png
```

</details>

### 📧 Project 4: Spam Detection (Text Classification)

```python
# Project 4: Spam Detection using Naive Bayes on simple bag-of-words features
from sklearn.feature_extraction.text import CountVectorizer

spam_texts = [
    "win money now click here", "free lottery prize claim now", "limited offer buy now discount",
    "congratulations you won a free gift", "urgent your account needs verification",
    "meeting scheduled for tomorrow at 10am", "please review the attached report",
    "let us catch up over lunch this week", "your invoice for last month is attached",
    "can you send me the project file", "free cash prize claim immediately",
    "win a free vacation click link now", "team sync moved to thursday",
    "please find the quarterly summary attached", "exclusive deal just for you act now",
    "reminder your appointment is tomorrow", "earn money fast working from home",
    "your package has been shipped", "important update regarding your account security",
    "lowest price guaranteed buy now"
]
spam_labels = [1,1,1,1,1, 0,0,0,0,0, 1,1,0,0,1, 0,1,0,0,1]

spam_df = pd.DataFrame({"text": spam_texts, "label": spam_labels})
spam_df.to_csv(os.path.join(DATASETS_DIR, "spam_detection.csv"), index=False)

vectorizer = CountVectorizer()
X_text = vectorizer.fit_transform(spam_df["text"])
y_text = spam_df["label"]

X_train, X_test, y_train, y_test = train_test_split(X_text, y_text, test_size=0.3, random_state=42)
nb = GaussianNB()
nb.fit(X_train.toarray(), y_train)
y_pred = nb.predict(X_test.toarray())
print(f"Spam Detection Accuracy: {accuracy_score(y_test, y_pred):.3f}")

fig, ax = plt.subplots()
sns.countplot(x=spam_df["label"].map({0: "Not Spam", 1: "Spam"}), ax=ax, palette=["#58D68D", "#E74C3C"])
ax.set_title("Spam Detection Dataset: Class Distribution")
save_plot(fig, "21_spam_distribution.png")
plt.show()
```

![chart](/graphs/img_033.png)

<details><summary>Output</summary>

```
Spam Detection Accuracy: 0.833
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/21_spam_distribution.png
```

</details>

<details><summary>Output</summary>

```
/tmp/ipykernel_635/2565470721.py:32: FutureWarning: 

Passing `palette` without assigning `hue` is deprecated and will be removed in v0.14.0. Assign the `x` variable to `hue` and set `legend=False` for the same effect.

  sns.countplot(x=spam_df["label"].map({0: "Not Spam", 1: "Spam"}), ax=ax, palette=["#58D68D", "#E74C3C"])
```

</details>

### 🚢 Project 5: Titanic Survival Prediction

```python
# Project 5: Titanic Survival Prediction using synthetic Titanic-like data
np.random.seed(11)
n = 400
pclass = np.random.choice([1, 2, 3], n, p=[0.25, 0.25, 0.5])
sex = np.random.choice(["male", "female"], n, p=[0.55, 0.45])
age = np.random.normal(30, 12, n).clip(1, 75)
fare = np.where(pclass == 1, np.random.normal(80, 20, n),
        np.where(pclass == 2, np.random.normal(25, 8, n), np.random.normal(12, 5, n))).clip(5, 250)

# survival probability logic (loosely based on real Titanic patterns)
survive_prob = 0.5 + (sex == "female") * 0.35 - (pclass - 1) * 0.12 - (age > 50) * 0.1
survive_prob = np.clip(survive_prob, 0.05, 0.95)
survived = np.random.binomial(1, survive_prob)

titanic_df = pd.DataFrame({"Pclass": pclass, "Sex": sex, "Age": age, "Fare": fare, "Survived": survived})
titanic_df.to_csv(os.path.join(DATASETS_DIR, "titanic.csv"), index=False)

titanic_enc = titanic_df.copy()
titanic_enc["Sex"] = LabelEncoder().fit_transform(titanic_enc["Sex"])

X = titanic_enc[["Pclass", "Sex", "Age", "Fare"]]
y = titanic_enc["Survived"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

rf = RandomForestClassifier(n_estimators=200, random_state=42)
rf.fit(X_train, y_train)
y_pred = rf.predict(X_test)
print(f"Titanic Survival Prediction Accuracy: {accuracy_score(y_test, y_pred):.3f}")

fig, ax = plt.subplots(1, 2, figsize=(12, 4))
sns.barplot(x="Pclass", y="Survived", data=titanic_df, ax=ax[0], palette="Blues")
ax[0].set_title("Survival Rate by Passenger Class")
sns.barplot(x="Sex", y="Survived", data=titanic_df, ax=ax[1], palette="Oranges")
ax[1].set_title("Survival Rate by Sex")
plt.tight_layout()
save_plot(fig, "21_titanic_survival_analysis.png")
plt.show()

# Correlation heatmap
fig, ax = plt.subplots()
sns.heatmap(titanic_enc.corr(), annot=True, cmap="coolwarm", ax=ax)
ax.set_title("Titanic Dataset Correlation Heatmap")
save_plot(fig, "21_titanic_correlation_heatmap.png")
plt.show()
```

![chart](/graphs/img_034.png)

![chart](/graphs/img_035.png)

<details><summary>Output</summary>

```
Titanic Survival Prediction Accuracy: 0.625
```

</details>

<details><summary>Output</summary>

```
/tmp/ipykernel_635/1081787875.py:31: FutureWarning: 

Passing `palette` without assigning `hue` is deprecated and will be removed in v0.14.0. Assign the `x` variable to `hue` and set `legend=False` for the same effect.

  sns.barplot(x="Pclass", y="Survived", data=titanic_df, ax=ax[0], palette="Blues")
/tmp/ipykernel_635/1081787875.py:33: FutureWarning: 

Passing `palette` without assigning `hue` is deprecated and will be removed in v0.14.0. Assign the `x` variable to `hue` and set `legend=False` for the same effect.

  sns.barplot(x="Sex", y="Survived", data=titanic_df, ax=ax[1], palette="Ora
... (truncated)
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/21_titanic_survival_analysis.png
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/21_titanic_correlation_heatmap.png
```

</details>