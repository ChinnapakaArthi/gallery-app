# 🖼️ Gallery App

A React application that displays images with thumbnail navigation, built using React component architecture.

![React](https://img.shields.io/badge/React-Components-blue)
![Font](https://img.shields.io/badge/Font-Roboto-green)
![CSS](https://img.shields.io/badge/Styling-CSS-orange)

---

## 📸 Demo

![Gallery App Demo](https://assets.ccbp.in/frontend/content/react-js/gallery-output.gif)

---

## 🚀 Setup Instructions

<details>
<summary>Click to view</summary>

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

</details>

---

## ✅ Functionality

<details>
<summary>Click to view</summary>

- Initially, the first image in the list is displayed
- When the user clicks on a thumbnail, the corresponding image is displayed
- The `Gallery` component receives `imagesList` with the following properties:

| Key | Data Type |
| :--------------: | :-------: |
| id | Number |
| imageUrl | String |
| thumbnailUrl | String |
| imageAltText | String |
| thumbnailAltText | String |

</details>

---

## 🧩 Component Structure

<details>
<summary>Click to view</summary>

![Component Structure](https://assets.ccbp.in/frontend/content/react-js/gallery-app-component-breakdown-structure.png)

</details>

---

## 📁 Implementation Files

<details>
<summary>Click to view</summary>
src/
└── components/
├── Gallery/
│   ├── index.js
│   └── index.css
└── ThumbnailItem/
├── index.js
└── index.css

</details>

---

## 🎨 Design Files

<details>
<summary>Click to view</summary>

- [Extra Small / Small (< 576px)](https://assets.ccbp.in/frontend/content/react-js/gallery-sm-output-v2.png)
- [Medium / Large / XL (>= 768px)](https://assets.ccbp.in/frontend/content/react-js/gallery-lg-output.png)

</details>

---

## 💡 Quick Tips

<details>
<summary>Click to view</summary>

Use CSS `opacity` to highlight the selected thumbnail:

```css
opacity: 0.5;
```

</details>

---

## 🖌️ Resources

<details>
<summary>Colors</summary>

- `#1e293b` — Background
- `#ffffff` — White
- `#64748b` — Muted

**Font Family:** Roboto

</details>

---

## 📜 License

This project is for educational purposes.
