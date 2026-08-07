# NetworkIQ – AI-Powered Inventory Optimization & Placement Across the Fulfillment Network

## Overview

NetworkIQ is an AI-powered inventory optimization platform developed for the hackathon challenge **Inventory Optimization & Placement Across the Fulfillment Network**.

The system analyzes historical sales data and inventory information to recommend intelligent stock transfers between locations. It uses multiple specialized AI agents to forecast demand, detect shortages and surplus inventory, evaluate transfer feasibility, estimate business impact, and generate transparent recommendations for human approval.

---

## Problem Statement

Retail organizations often maintain inventory across warehouses, fulfillment centers, and dark stores. Although sufficient stock exists across the network, products are frequently unavailable where customer demand is highest.

This results in:

- Stock shortages in high-demand locations
- Overstock in low-demand locations
- Higher transfer costs
- Reduced customer satisfaction
- Poor inventory utilization

Traditional inventory planning relies on manual reports and isolated decision-making, making it difficult to optimize inventory across the entire fulfillment network.

---

## Proposed Solution

NetworkIQ provides a network-level inventory optimization system powered by cooperating AI agents.

The workflow includes:

- Upload inventory and sales datasets
- Analyze demand patterns
- Predict future demand using Machine Learning
- Detect surplus and shortage across locations
- Recommend optimal inventory transfers
- Estimate transfer quantity and business savings
- Explain every recommendation with AI-generated reasoning
- Allow human review before execution

The solution improves inventory availability while reducing unnecessary stock movement and operational costs.

---

## AI Agent Architecture

### Demand Agent
- Analyzes historical sales
- Predicts future demand using Machine Learning
- Identifies high-demand products

### Inventory Agent
- Monitors inventory levels
- Detects shortages and surplus inventory
- Calculates reorder requirements

### Transfer Agent
- Matches surplus and shortage locations
- Calculates optimal transfer quantity
- Generates movement recommendations

### Cost Agent
- Estimates transfer savings
- Rejects uneconomical transfers
- Prioritizes cost-effective movements

### Explanation Agent
- Explains why each recommendation was generated
- Displays demand and inventory reasoning
- Supports human decision-making

---

## Features

- AI-powered demand prediction
- Inventory monitoring dashboard
- Warehouse analytics
- Regional sales visualization
- Inventory status monitoring
- Smart transfer recommendations
- CSV dataset upload
- Human-readable AI explanations
- Responsive React interface
- REST API backend

---

## Technology Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- Recharts
- React Icons

### Backend
- Python
- Flask
- Flask-CORS
- Pandas

### Machine Learning
- Scikit-learn
- Demand Prediction Model

### Database
- CSV-based datasets (MVP)

---

## Project Structure

```
NetworkIQ/
│
├── backend/
│   ├── app.py
│   ├── optimizer.py
│   ├── ml_model.py
│   ├── uploads/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   ├── services/
│   └── package.json
│
├── datasets/
│
├── README.md
│
└── LICENSE
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/NetworkIQ.git
```

### Backend

```bash
cd backend

pip install -r requirements.txt

python app.py
```

Backend runs on:

```
http://127.0.0.1:5000
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## User Workflow

1. Login
2. Upload inventory CSV
3. Backend processes dataset
4. AI predicts demand
5. Inventory analysis begins
6. Dashboard displays KPIs
7. Analytics visualize inventory and regional demand
8. AI generates transfer recommendations
9. Planner reviews recommendations
10. Inventory optimization completed

---

## Sample Recommendation

```
SKU: PROD001

Transfer From:
Warehouse A

Transfer To:
Warehouse B

Quantity:
50 Units

Reason:
Warehouse B has higher predicted demand while Warehouse A has surplus inventory.

Estimated Savings:
₹925
```

---

## Future Enhancements

- Live warehouse integration
- Transportation Management System (TMS)
- Warehouse Management System (WMS)
- Capacity-aware optimization
- Reinforcement Learning
- Real-time demand forecasting
- Human approval workflow
- Cloud deployment
- Multi-user authentication

---

## Business Benefits

- Improves product availability
- Reduces stockouts
- Optimizes inventory placement
- Minimizes transfer costs
- Supports informed decision-making
- Enhances customer satisfaction
- Provides explainable AI recommendations

---

## Authors

Developed as part of the NetworkIQ Hackathon.

Team Members:
- Ramalakshmi Devatha
- Chebolu Gayathri
- Durisetti Gayathri
- Dunna Sharmila

---

## License

This project is developed for educational and hackathon purposes.
