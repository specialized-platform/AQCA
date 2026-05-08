# Specialized Platform Development

Course materials for **Specialized Platform Development** — Bina Nusantara University.

Teaching Assistant: Andi Ahmad Yusup

---

## Modules

| # | Folder | Stack | Description |
|---|--------|-------|-------------|
| 01 | `01-react` | React 18, Vite, React Router, Axios | Frontend online shop |
| 02 | `02-express` | Express, MongoDB, Mongoose, JWT | REST API backend |
| 03 | `03-react-native` | React Native, Expo, Expo Router | Mobile app |

---

## 01 — React Frontend

A simple online shop frontend built with React 18 and Vite.

**Pages:** Home, Products, Product Detail, Cart, Login, Register, Me (profile)

```bash
cd 01-react
npm install
npm run dev
```

---

## 02 — Express REST API

Backend server with MongoDB, JWT authentication, and product management.

**Endpoints:**

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Health check |
| POST | `/api/register` | Register user |
| POST | `/api/login` | Login, returns JWT |
| GET | `/api/me` | Get current user (auth required) |
| GET | `/api/products` | List all products |

A Postman collection is available at `02-express/collections/AQCA.postman_collection.json`.

**Setup:**

Create a `.env` file in `02-express/`:

```env
MONGO_URI=mongodb://localhost:27017/aqca
JWT_SECRET=your_secret_key
JWT_EXPIRES=7d
PORT=5000
```

```bash
cd 02-express
npm install
npm run dev
```

---

## 03 — React Native (Expo)

Mobile app built with React Native and Expo Router.

```bash
cd 03-react-native
npm install
npx expo start
```

Scan the QR code with the Expo Go app, or press `a` for Android emulator / `i` for iOS simulator.

---

## Tech Stack

- **Frontend:** React 18, Vite, React Router v6, Axios
- **Backend:** Node.js, Express 4, MongoDB, Mongoose, JWT, bcryptjs
- **Mobile:** React Native 0.83, Expo SDK 55, Expo Router
