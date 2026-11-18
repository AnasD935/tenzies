# 🎲 Tenzies Game

A fast-paced, interactive dice game built with **React**. Roll the dice until all ten match the same number, freezing individual dice between rolls to lock in your strategy.

## 🚀 Live Demo
[Play Tenzies Live](https://github.io) *(Replace with your GitHub Pages link)*

## ✨ Features
* **Interactive Dice Holding:** Click any die to freeze or unfreeze its current value between rolls.
* **Smart Roll Logic:** Rerolls only the unheld dice while preserving locked numbers.
* **Win Detection & Celebration:** Automatically detects when all 10 dice are held with matching values and triggers a celebratory confetti animation.
* **Accessible Keyboard Controls:** Automatically focuses the **New Game** button upon winning so players can immediately start a fresh round using the keyboard.

## 🛠️ Built With
* **React** (`useState`, `useEffect`, `useRef`)
* **nanoid** – Generates unique IDs for each die component
* **react-confetti** – Renders the celebration effect on win
* **Vite** – Fast development server and production bundler

## 🧠 Key Concepts Practiced
* **Lazy State Initialization:** Used `useState(() => generateAllNewDice())` to generate initial dice only on mount rather than on every re-render.
* **Immutable State Updates:** Used `.map()` to cleanly toggle `isHeld` status and update unheld dice values without mutating existing state.
* **DOM Focus Management:** Combined `useRef` and `useEffect` to shift focus to the reset button as soon as the win condition is met.

## 📦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
