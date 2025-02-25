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

# Project Folder Structure: `style`

This document outlines the structure of the `style` folder in the project.

---

## 📁 `style/`  
The `style` folder contains custom CSS files for styling different components and pages of the University Canteen Website. Below is the folder structure:

---

### 📄 `about.css`  
Custom styles for the **About** page (`About.js`). This file includes styles for:
- Chef information sections
- About page layout
- Typography and spacing

---

### 📄 `blog.css`  
Custom styles for the **Blog** page (`Blog.js`). This file includes styles for:
- Blog post cards
- Blog page layout
- Typography and spacing

---

### 📄 `dish.css`  
Custom styles for dish-related components, such as **DishCard.js**. This file includes styles for:
- Dish card layout
- Image styling
- Price and description formatting

---

### 📄 `mantixon.css`  
Custom styles for the **Mantixon** component. This file includes styles for:
- Specific functionality or layout of the Mantixon component
- Unique design elements

---

### 📄 `menu.css`  
Custom styles for the **Menu** page (`Menu.js`). This file includes styles for:
- Menu layout
- Dish card arrangement
- Typography and spacing

---

### 📄 `NavBar.css`  
Custom styles for the **Navigation Bar** (`NavBar.js`). This file includes styles for:
- Navigation bar layout
- Link styling
- Responsive design for mobile and desktop

---

### 📄 `payment.css`  
Custom styles for the **Payment** page (`Payment.js`). This file includes styles for:
- Payment form layout
- Input fields and buttons
- Typography and spacing

---

### 📄 `service.css`  
Custom styles for the **Services** page (`Services.js`). This file includes styles for:
- Service card layout
- Service page layout
- Typography and spacing

---

This structure ensures a clean and organized codebase, making it easier to maintain and scale the project.

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
