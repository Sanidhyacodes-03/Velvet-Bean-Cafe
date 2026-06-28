# ☕ Velvet-Bean-Cafe UI

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A premium, fully responsive front-end interface tailored for a modern cafe that doubles as an event space. This project transforms a standard web layout into an immersive, dark-themed digital storefront. It is designed to bridge the gap between everyday hospitality and private event management, offering a seamless user journey from exploring the menu to booking the venue.

## 🔗 Live Demo
**[Insert Your Live Vercel/Netlify/GitHub Pages URL Here]**

---

## ✨ Key Features & Business Logic

### 1. UI/UX Design & Theming
* **Premium Dark Mode Aesthetic:** Utilizes a custom CSS color palette featuring deep backgrounds (`#161210`), subtle glassmorphism paneling, and luxurious gold text accents to communicate a high-end atmosphere.
* **Interactive 3D Hero Stage:** A dynamic, vanilla JavaScript-driven hero section that tracks mouse movement (and touch on mobile) to create a parallax tilt effect on floating elements, engaging the user immediately.
* **Scroll-Triggered Animations:** Integrates the `IntersectionObserver` API to trigger smooth, cascading reveal animations as the user scrolls down the page, enhancing the narrative flow without relying on heavy external animation libraries.

### 2. Event Management & Logistics Focus
* **Dedicated Venue Showcase:** The UI is structured not just for food, but for event logistics. It includes a dedicated section for capacity details, custom menu options, and setup handling, visually communicating the venue's capabilities for corporate meetings, birthdays, and baby showers.
* **Frictionless Booking System:** Replaced traditional static contact forms with direct WhatsApp API links integrated into primary Call-to-Action (CTA) buttons. This provides an immediate, high-conversion communication channel for table reservations and private hire inquiries.

### 3. Responsive Architecture
* **Fluid Layouts:** Built with modern CSS Grid and Flexbox, ensuring the interface adapts seamlessly across desktop monitors, tablets, and mobile devices.
* **Dynamic Typography:** Uses CSS `clamp()` functions for scalable, responsive typography that maintains readability and visual hierarchy on any screen size.
* **Mobile-First Navigation:** Features a custom JavaScript hamburger menu toggle for mobile viewports, keeping the header clean and accessible.

---

## 🛠️ Technical Stack & Implementation

* **HTML5:** Semantic HTML structure ensuring accessibility and logical document flow.
* **CSS3:** 
  * Extensively uses CSS Custom Properties (Variables) for easy theme management.
  * Implements `backdrop-filter: blur()` for modern glassmorphism effects.
  * Media queries designed for progressive enhancement.
* **Vanilla JavaScript (ES6+):**
  * DOM manipulation for mobile state management.
  * Custom mathematical mapping for 3D coordinate transformations based on cursor position.
  * Performance-optimized event listeners (`{ passive: true }`) for scroll and touch events.

---

## 📂 Project Structure

```text
📁 velvet-bean-cafe
├── 📄 index.html    # Core markup, semantic sections, and content
├── 🎨 style.css     # Design system, glassmorphism, grid layouts, and keyframes
└── ⚙️ script.js     # 3D interactive logic, observers, and mobile menu
