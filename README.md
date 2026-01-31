# Senior Developer Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Built with Vite, React, and TypeScript.
- **Styling**: Tailwind CSS v4 for utility-first styling.
- **Dark/Light Mode**: Fully supported theme toggle with system preference detection.
- **Responsive Design**: Mobile-first approach ensuring great experience on all devices.
- **Components**: Modular architecture with reusable components (Hero, About, Projects, Contact).

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd portfolio-website
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist` directory, ready to be deployed to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Project Structure

```
src/
├── assets/         # Static assets (images)
├── components/     # Reusable UI components
│   ├── Layout/     # Navbar, Footer, Section wrapper
│   ├── Hero/       # Hero section
│   ├── About/      # About section
│   ├── Projects/   # Projects grid and cards
│   └── Contact/    # Contact form
├── App.tsx         # Main application component
├── index.css       # Global styles and Tailwind imports
└── main.tsx        # Entry point
```

## Customization

- **Colors**: Modified in `tailwind.config.js` and `src/index.css`.
- **Content**: Update text and data in individual component files (e.g., `src/components/Projects/Projects.tsx` for project data).
