# mkhudesports

**An e‑sports application to matches of the videogame Mortal Kombat.**

## 🧩 Overview

This project implements an HUD with chromakey for matches of Mortal Kombat.

![HUD_mk](/public/default_mkhud.png)

---

## 🚀 Main Features

- Display of **team and player results and statistics**.
- **Responsive design** for different screen sizes.
- Reusable and modular components.
- Use of **carousel** for featured content and interactive displays.

---

## 🛠️ Technologies Used

- [React](https://react.dev/)
- [React Slick](https://github.com/akiran/react-slick) for sliders and carousels
- [GoSquared Flags](https://github.com/gosquared/flags) for country flag display
- CSS/SCSS

---

## 📁 Project Structure

```
mkhudesports/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Slider/
│   │   └── Flag/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

- `components/Slider`: carousel for matches and featured content.
- `components/Flag`: displays country flags.
- `pages`: main pages (e.g., home, matches, rankings).
- `styles`: global and component-specific styles.

---

## 🔧 Running the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/eng-vitor/mkhudesports.git
   ```

2. Install dependencies:
   ```bash
   cd mkhudesports
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Access the app in your browser:
   ```
   http://localhost:3000
   ```


## ✅ Expected Features

- **Match listings** with visual highlights.
- **Updated rankings** for teams and players.
- **Country flags** for visual identification.
- **Interactive carousels** for smooth navigation.

---

## 🎨 Acknowledgements

This project was inspired by and benefited from resources made available by the following open-source repositories:

- [**GoSquared Flags**](https://github.com/gosquared/flags)  
  A set of country flag icons used to represent countries in rankings and profiles.

- [**React Slick**](https://github.com/akiran/react-slick)  
  A carousel library for React, used to create interactive and responsive sliders.

A huge thanks to the creators of these projects for providing high-quality open-source tools that helped shape this application.

---

## 📝 Contributing

Contributions are welcome!  
To suggest improvements, feel free to open an **issue** or submit a **pull request** following good practices.

Suggestion: use the [Conventional Commits](https://www.conventionalcommits.org/) standard to keep the commit history organized.