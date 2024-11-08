import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB  
import joblib  

df = pd.read_csv("accountant_dataset.csv")

# Rename column if there is any inconsistency
#df.rename(columns={"Capability of Becoming a Engineer": "Capability of Becoming an Engineer"}, inplace=True)

# Now you can drop the column
X = df.drop("Capability of Becoming an Accountant", axis=1)
y = df["Capability of Becoming an Accountant"]


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = GaussianNB()

model.fit(X_train, y_train)

accuracy = model.score(X_test, y_test)
print("Model Accuracy:", accuracy)

joblib.dump(model, "accountant_model.pkl")


