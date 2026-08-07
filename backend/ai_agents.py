class DemandAgent:

    def analyze(self, row):
        return {
            "forecast": row["Demand_Forecast"],
            "units_sold": row["Units_Sold"]
        }


class InventoryAgent:

    def analyze(self, row):

        shortage = row["Inventory_Level"] < row["Reorder_Point"]

        excess = row["Inventory_Level"] > row["Demand_Forecast"] * 1.5

        return {
            "shortage": shortage,
            "excess": excess
        }


class TransferAgent:

    def analyze(self, inventory):

        if inventory["shortage"]:
            return "Receive Stock"

        if inventory["excess"]:
            return "Transfer Stock"

        return "No Transfer"


class CostAgent:

    def analyze(self, row):

        lead = row["Supplier_Lead_Time_Days"]

        if lead > 10:
            return "High Cost Risk"

        return "Normal"


class DecisionAgent:

    def decide(self, demand, inventory, transfer, cost):

        if inventory["shortage"]:

            return "Urgent Reorder Required"

        if inventory["excess"]:

            return "Transfer Excess Inventory"

        if cost == "High Cost Risk":

            return "Review Supplier"

        return "Inventory Healthy"