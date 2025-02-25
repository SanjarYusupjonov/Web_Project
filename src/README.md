# Project Folder Structure: `src`

This document outlines the structure of the `src` folder in the project.

---

## 📁 `src/`  
The `src` folder contains the main source code for the React-based University Canteen Website. Below is the folder structure:


### 📂 `components/`  
This folder contains reusable React components for the University Canteen Website. It is divided into subfolders for better organization:
- **`About/`** – Components related to the About section.
- **`Navbar/`** – Components related to navigation and layout.

---

### 📂 `pages/`  
This folder contains the main page components for the website, such as:
- **`About.js`** – About page component.
- **`Blog.js`** – Blog page component.
- **`Contact.js`** – Contact page component.
- **`DemoProduct.js`** – Demo product page component.
- **`DishCard.js`** – Reusable dish card component.
- **`Home.js`** – Home page component.
- **`Menu.js`** – Menu page component.
- **`Payment.js`** – Payment page component.
- **`Services.js`** – Services page component.

---

### 📂 `style/`  
This folder contains custom CSS files for styling different components and pages:
- **`about.css`** – Styles for the About page.
- **`blog.css`** – Styles for the Blog page.
- **`dish.css`** – Styles for dish-related components.
- **`mantixon.css`** – Styles for the Mantixon component.
- **`menu.css`** – Styles for the Menu page.
- **`NavBar.css`** – Styles for the navigation bar.
- **`payment.css`** – Styles for the Payment page.
- **`service.css`** – Styles for the Services page.

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

### 📂 `images/`  
This folder stores all static image assets used in the project, such as:
- Logos
- Background images
- Icons
- Food item images
- Team images

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
