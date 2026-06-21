---
title: "Data Preprocessing"
chapter: 3
slug: "03-data-preprocessing"
---

## 🧹 3. Data Preprocessing
---

### 🧠 Simple Explanation
Real-world data is messy — it has missing values, different scales, and categorical text. Data preprocessing cleans and prepares this data so ML algorithms can understand it.

### 📖 Definition
> Data Preprocessing is the process of cleaning, transforming, and organizing raw data into a usable format before feeding it to a machine learning model.

### 🌍 Real-life Examples
- Filling missing age values in a survey with the average age
- Converting 'Male'/'Female' into 0/1 for the model
- Scaling income (in thousands) and age (in years) to the same range

### ✅ Advantages
- Improves model accuracy
- Reduces noise and bias
- Makes algorithms converge faster

### ❌ Disadvantages
- Time-consuming (up to 80% of project time)
- Wrong preprocessing can introduce bias

### 💼 Use Cases
- Every real-world ML project requires preprocessing

### ❓ Important Interview Questions
1. What is the difference between normalization and standardization?
2. How do you handle missing data?
3. What is one-hot encoding and when do you use it?
4. Why is feature scaling important for algorithms like KNN and SVM?

---

```python
# Demonstration of preprocessing on a small synthetic dataset
np.random.seed(42)
df_demo = pd.DataFrame({
    "Age": [25, 32, np.nan, 45, 28, 60, np.nan, 22],
    "Salary": [50000, 64000, 58000, np.nan, 52000, 120000, 75000, 48000],
    "Gender": ["Male", "Female", "Female", "Male", "Male", "Female", "Male", "Female"],
    "Purchased": [0, 1, 0, 1, 0, 1, 1, 0]
})
print("Raw data with missing values:")
display(df_demo)

# Handle missing values with mean imputation
df_clean = df_demo.copy()
df_clean["Age"] = df_clean["Age"].fillna(df_clean["Age"].mean())
df_clean["Salary"] = df_clean["Salary"].fillna(df_clean["Salary"].mean())

# Encode categorical variable
le = LabelEncoder()
df_clean["Gender"] = le.fit_transform(df_clean["Gender"])

# Feature scaling
scaler = StandardScaler()
df_clean[["Age", "Salary"]] = scaler.fit_transform(df_clean[["Age", "Salary"]])

print("\nCleaned & scaled data:")
display(df_clean)

df_demo.to_csv(os.path.join(DATASETS_DIR, "preprocessing_demo_raw.csv"), index=False)
df_clean.to_csv(os.path.join(DATASETS_DIR, "preprocessing_demo_clean.csv"), index=False)
```

<details><summary>Output</summary>

```
Raw data with missing values:
```

</details>

<details><summary>Output</summary>

```
Cleaned & scaled data:
```

</details>

```python
# Heatmap showing missing values before cleaning
fig, ax = plt.subplots()
sns.heatmap(df_demo.isnull(), cbar=False, cmap="Reds", ax=ax)
ax.set_title("Missing Value Heatmap (Before Cleaning)")
save_plot(fig, "03_missing_values_heatmap.png")
plt.show()
```

![chart](/graphs/img_003.png)

<details><summary>Output</summary>

```
✅ Saved: graphs/03_missing_values_heatmap.png
```

</details>