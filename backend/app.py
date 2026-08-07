from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import pandas as pd
from optimizer import InventoryOptimizer

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Load default datasets
sales_df = pd.read_csv("../store_sales_data (2).csv")
inventory_df = pd.read_csv("../supply_chain_dataset1.csv")

optimizer = InventoryOptimizer(inventory_df)


@app.route("/")
def home():
    return {
        "message": "NetworkIQ Backend Running 🚀"
    }


@app.route("/dashboard")
def dashboard():

    warehouses = inventory_df["Warehouse_ID"].nunique()
    products = inventory_df["SKU_ID"].nunique()
    stockouts = int(inventory_df["Stockout_Flag"].sum())
    total_sales = float(sales_df["Sales"].sum())

    return jsonify({
        "warehouses": warehouses,
        "products": products,
        "stockouts": stockouts,
        "sales": round(total_sales, 2)
    })


@app.route("/recommendations")
def recommendations():

    data = optimizer.analyze_inventory()

    return jsonify(data)


@app.route("/inventory")
def inventory():

    data = []

    for _, row in inventory_df.iterrows():

        status = "Healthy"

        if row["Inventory_Level"] < row["Reorder_Point"]:
            status = "Low Stock"

        elif row["Inventory_Level"] > row["Demand_Forecast"] * 1.5:
            status = "Overstock"

        data.append({
            "sku": row["SKU_ID"],
            "warehouse": row["Warehouse_ID"],
            "inventory": int(row["Inventory_Level"]),
            "forecast": int(row["Demand_Forecast"]),
            "reorder": int(row["Reorder_Point"]),
            "status": status
        })

    return jsonify(data)


@app.route("/warehouses")
def warehouses():

    result = []

    grouped = inventory_df.groupby("Warehouse_ID")

    for warehouse, data in grouped:

        result.append({
            "warehouse": warehouse,
            "products": int(data["SKU_ID"].nunique()),
            "inventory": int(data["Inventory_Level"].sum()),
            "avg_demand": round(data["Demand_Forecast"].mean(), 2),
            "stockouts": int(
                (data["Inventory_Level"] < data["Reorder_Point"]).sum()
            )
        })

    return jsonify(result)


@app.route("/analytics")
def analytics():

    warehouse = (
        inventory_df.groupby("Warehouse_ID")["Inventory_Level"]
        .sum()
        .reset_index()
    )

    region = (
        inventory_df.groupby("Region")["Units_Sold"]
        .sum()
        .reset_index()
    )

    return jsonify({
        "warehouse": warehouse.to_dict(orient="records"),
        "region": region.to_dict(orient="records")
    })


@app.route("/upload", methods=["POST"])
def upload():

    global inventory_df
    global optimizer

    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"error": "No file selected"}), 400

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)

    file.save(filepath)

    try:

        inventory_df = pd.read_csv(filepath)

        optimizer = InventoryOptimizer(inventory_df)

        return jsonify({
            "message": "Upload Successful",
            "rows": len(inventory_df),
            "warehouses": int(inventory_df["Warehouse_ID"].nunique()),
            "products": int(inventory_df["SKU_ID"].nunique())
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)