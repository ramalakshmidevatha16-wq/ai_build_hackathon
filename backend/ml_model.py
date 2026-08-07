import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder

class DemandPredictor:

    def __init__(self, df):
        self.df = df.copy()
        self.model = RandomForestRegressor(
            n_estimators=100,
            random_state=42
        )
        self.encoders = {}

    def preprocess(self):

        df = self.df.copy()

        categorical = ["Warehouse_ID", "Region"]

        for col in categorical:
            le = LabelEncoder()
            df[col] = le.fit_transform(df[col].astype(str))
            self.encoders[col] = le

        X = df[
            [
                "Warehouse_ID",
                "Region",
                "Inventory_Level",
                "Units_Sold",
                "Supplier_Lead_Time_Days",
                "Order_Quantity",
            ]
        ]

        y = df["Demand_Forecast"]

        return X, y

    def train(self):

        X, y = self.preprocess()

        self.model.fit(X, y)

    def predict_all(self):

        X, _ = self.preprocess()

        predictions = self.model.predict(X)

        return predictions