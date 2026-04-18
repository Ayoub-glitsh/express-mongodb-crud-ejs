

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="60" alt="Node.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="60" alt="Express"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="60" alt="MongoDB"/>
  <img width="60"  alt="image" src="https://github.com/user-attachments/assets/3000dbb5-f6e7-4153-b18c-393452f08a68" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=3000&pause=1000&color=00FFC6&center=true&vCenter=true&width=600&lines=Products+Management+-+CRUD+App" alt="Typing SVG" />
</p>


<div align="center">
  <h1 style="color: #ff3333; font-family: monospace;">PRODUCTS</h1>
  <p style="color: #666;">Manage your products with Express + MongoDB + EJS</p>
</div>



<p align="center">
  <img src="https://raw.githubusercontent.com/USERNAME/REPO/main/assets/demo.png" width="300"/>
</p>

---

## 🛠️ Technologies

| Technology | Icon |
| :---: | :---: |
| **Node.js** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="60" alt="Node.js"/> |
| **Express** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="60" alt="Express"/> |
| **MongoDB** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="60" alt="MongoDB"/> |
| **EJS** | <img width="60" alt="EJS" src="https://github.com/user-attachments/assets/3000dbb5-f6e7-4153-b18c-393452f08a68" /> |
---

## 📋 Features

- ➕ Add new products
- 📋 List all products  
- ✏️ Edit products
- 🗑️ Delete products

---

## 📁 Project Structure

```
tp-crud-ejs/
├── models/
│   └── Product.js       # Mongoose schema
├── views/
│   ├── index.ejs        # List products
│   ├── add.ejs          # Add product form
│   └── edit.ejs         # Edit product form
├── server.js            # Express server
├── package.json         # Dependencies
└── README.md            # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

```bash
npm install
```

### Run the server

```bash
node server.js
```

Server running at: **http://localhost:3000**

---

## 📝 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Display all products |
| GET | `/add` | Show add product form |
| POST | `/add` | Create new product |
| GET | `/edit/:id` | Show edit product form |
| PUT | `/edit/:id` | Update product |
| DELETE | `/delete/:id` | Delete product |

---

## 🗃️ Database

- **MongoDB**: `mongodb://127.0.0.1:27017/tpcrud`
- **Collection**: `products`
- **Schema**:
  - `name` (String)
  - `price` (Number)
  - `quantity` (Number)

---

## 🎨 Design

Vibe coding style - Red & Black theme with JetBrains Mono font.

---

<div align="center">
  <p>Built with using Express + MongoDB + EJS</p>
</div>
