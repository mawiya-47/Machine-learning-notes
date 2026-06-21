---
title: "Linear Regression"
chapter: 5
slug: "05-linear-regression"
---

## 📈 5. Linear Regression
---

### 🧠 Simple Explanation
Linear Regression draws the best straight line through data points to predict a continuous number, like predicting house price from house size.

### 📖 Definition
> Linear Regression is a supervised learning algorithm that models the relationship between a dependent variable (y) and one or more independent variables (X) using a straight line: y = mX + c.

### 🌍 Real-life Examples
- Predicting house price from area in sq. ft.
- Predicting salary from years of experience
- Predicting sales from advertising spend

### ✅ Advantages
- Simple and fast
- Easy to interpret coefficients
- Works well for linearly related data

### ❌ Disadvantages
- Assumes linear relationship
- Sensitive to outliers
- Poor performance on complex/non-linear data

### 💼 Use Cases
- Real estate price prediction
- Sales forecasting
- Risk assessment

### ❓ Important Interview Questions
1. What is the cost function used in Linear Regression?
2. What assumptions does Linear Regression make?
3. What is the difference between simple and multiple linear regression?
4. What is multicollinearity and why is it a problem?
5. What is R-squared and what does it measure?

---

```python
# Linear Regression demo: Experience vs Salary
np.random.seed(1)
experience = np.random.uniform(0, 10, 50)
salary = 30000 + 5000 * experience + np.random.normal(0, 4000, 50)
df_lr = pd.DataFrame({"YearsExperience": experience, "Salary": salary})
df_lr.to_csv(os.path.join(DATASETS_DIR, "salary_experience.csv"), index=False)

X = df_lr[["YearsExperience"]]
y = df_lr["Salary"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

lr_model = LinearRegression()
lr_model.fit(X_train, y_train)
y_pred = lr_model.predict(X_test)

print(f"Coefficient (slope): {lr_model.coef_[0]:.2f}")
print(f"Intercept: {lr_model.intercept_:.2f}")
print(f"R2 Score: {r2_score(y_test, y_pred):.3f}")
print(f"MSE: {mean_squared_error(y_test, y_pred):.2f}")
print(f"MAE: {mean_absolute_error(y_test, y_pred):.2f}")

fig, ax = plt.subplots()
ax.scatter(X_train, y_train, color="#5DADE2", label="Train data")
ax.scatter(X_test, y_test, color="#F5B041", label="Test data")
x_line = np.linspace(0, 10, 100).reshape(-1, 1)
ax.plot(x_line, lr_model.predict(x_line), color="red", linewidth=2, label="Regression line")
ax.set_xlabel("Years of Experience")
ax.set_ylabel("Salary")
ax.set_title("Linear Regression: Salary vs Experience")
ax.legend()
save_plot(fig, "05_linear_regression.png")
plt.show()
```

![chart](/graphs/img_005.png)

<details><summary>Output</summary>

```
Coefficient (slope): 5135.19
Intercept: 29832.83
R2 Score: 0.981
MSE: 4990020.74
MAE: 2059.67
```

</details>

<details><summary>Output</summary>

```
✅ Saved: graphs/05_linear_regression.png
```

</details>

<details><summary>Output</summary>

```
/usr/local/lib/python3.12/dist-packages/sklearn/utils/validation.py:2691: UserWarning: X does not have valid feature names, but LinearRegression was fitted with feature names
  warnings.warn(
```

</details>