# Project Folder Structure: `src`

This document outlines the structure of the `src` folder in the project.

---

## 📁 `src`  
The `src` folder contains the main source code for the React-based University Canteen Website. Below is the folder structure:

src/
├── components/ # Reusable React components
├── images/ # Image assets used in the project
├── pages/ # Page components for different routes
├── style/ # Custom CSS or styling files
├── App.js # Main application component
├── index.css # Global styles for the application
├── index.js # Entry point for the React application
└── README.md # Documentation for the src folder


---

### 📂 `components/`  
This folder contains reusable React components such as:
components/
├── About/ # Components related to the About section
│ ├── AboutChefs.js # Component for displaying chef information
│ └── AboutPage.js # Main About page component
├── Navbar/ # Components related to navigation
│ ├── NavBar.js # Main navigation bar component
│ ├── NavLinks.js # Component for navigation links
│ ├── Cta.js # Call-to-action component
│ ├── CustomHook.js # Custom React hook (if used for navigation logic)
│ ├── Footer.js # Footer component
│ ├── Hero.js # Hero section component (e.g., banner or intro)
│ ├── Intro.js # Introduction section component
│ ├── Mantixon.js # Custom component (specific functionality)
│ ├── ScrollToTop.js # Component for scrolling to the top of the page
│ └── TotalPriceButton.js # Component for displaying total price or checkout button

### 📂 `images/`  
This folder stores all static image assets used in the project, such as:
- Logos
- Background images
- Icons
- Food item images
- Team images

---

### 📂 `pages/`  
This folder contains page components for different routes in the application, such as:
- `Home.js` – Home page component.
- `Menu.js` – Menu page component.
- `About.js` – About page component.
- `Contact.js` – Contact page component.

---

### 📂 `style/`  
This folder contains custom CSS or styling files, such as:
- `global.css` – Global styles.
- `tailwind.css` – TailwindCSS configuration (if used).
- Any other custom stylesheets.

---

### 📄 `App.js`  
The main application component that acts as the root of the React application. It typically includes:
- Routing logic (using `react-router-dom`).
- Layout structure (e.g., header, footer, and main content).

---

### 📄 `index.css`  
The global stylesheet for the application. It includes:
- Base styles (e.g., reset, fonts, colors).
- Utility classes (if not using TailwindCSS or Bootstrap).

---

### 📄 `index.js`  
The entry point for the React application. It typically includes:
- Rendering the `App` component into the DOM.
- Wrapping the app with providers (e.g., Redux, Context API).

---

This structure ensures a clean and organized codebase, making it easier to maintain and scale the project.
